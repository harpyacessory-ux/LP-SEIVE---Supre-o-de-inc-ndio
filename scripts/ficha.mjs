#!/usr/bin/env node
/**
 * ficha — lê a ficha de execução, valida e deriva a composição.
 *
 *   npm run ficha                 valida, deriva e escreve ficha.json
 *   npm run ficha -- --check      igual, sem escrever (é o que o `verify` roda)
 *   npm run ficha -- --plan       imprime só os slugs da composição, para o shell
 *   npm run ficha -- --file <p>   outra ficha (padrão: docs/FICHA-LP.md)
 *
 * A ficha é produzida no chat web pelo PROMPT-FICHA-LP.md e salva pelo usuário em
 * `docs/FICHA-LP.md`. Ela é a **única** entrada do agente de código: a partir da v2.8
 * não há entrevista dentro do editor. Toda pergunta foi feita no chat, e o que chega
 * aqui ou está completo ou é recusado com a lista do que falta — nunca perguntado.
 *
 * Três trabalhos, nesta ordem, porque cada um só faz sentido se o anterior passou:
 *
 *   1. VALIDAR   — a ficha tem os campos obrigatórios? O conteúdo de cada bloco passa
 *                  no `contract` do manifesto da seção? Os ícones existem? A
 *                  palavra-chave está no H1? Isso roda **antes** de qualquer arquivo
 *                  ser escrito: errar na ficha custa uma correção no documento.
 *   2. DERIVAR   — quais seções entram. Determinístico, sem julgamento: a regra está
 *                  em `derivarComposicao` e `scripts/ficha.test.mjs` (no starter) a
 *                  congela. É o que substitui a aprovação de composição que antes
 *                  acontecia no editor.
 *   3. NORMALIZAR— escreve `ficha.json`: a composição derivada, o conteúdo por seção
 *                  já na forma dos arquivos de dados, e a lista de assets pendentes
 *                  que o `check:lp --pending-assets` vai tolerar.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { parse as parseYaml } from 'yaml'

import { checkContract, checkIcons } from './lib/contract.mjs'
import { missingWords } from './lib/keyword.mjs'
import { derivarComposicao } from './lib/plan.mjs'

const ROOT = process.cwd()
const args = process.argv.slice(2)
const CHECK_ONLY = args.includes('--check')
const PLAN_ONLY = args.includes('--plan')
const fileFlag = args.indexOf('--file')
const FICHA = resolve(fileFlag >= 0 ? args[fileFlag + 1] : join(ROOT, 'docs', 'FICHA-LP.md'))

/** Versão do formato da ficha que este script entende. */
const FORMATO = 1

const errors = []
const warnings = []
const fail = (onde, msg) => errors.push(`${onde}: ${msg}`)
const warn = (onde, msg) => warnings.push(`${onde}: ${msg}`)

/* ------------------------------------------------------------------ leitura */

if (!existsSync(FICHA)) {
  console.log(`✖  ficha não encontrada: ${relative(ROOT, FICHA)}

A ficha é o documento que o chat web devolve (PROMPT-FICHA-LP.md). Salve-a como
docs/FICHA-LP.md nesta pasta e rode de novo. Sem ela não há o que executar: a
partir do padrão v2.8 o editor não entrevista, só executa.`)
  process.exit(1)
}

const bruto = readFileSync(FICHA, 'utf8')

/**
 * O bloco de máquina é o primeiro ```yaml do documento. O resto da ficha é prosa
 * para o usuário revisar e aprovar com o cliente — este script não a lê, de
 * propósito: o que decide a página tem de estar no bloco, onde dá para validar.
 */
const bloco = bruto.match(/^```ya?ml\s*\n([\s\S]*?)\n```/m)
if (!bloco) {
  console.log(`✖  ${relative(ROOT, FICHA)}: nenhum bloco \`\`\`yaml encontrado.

A ficha tem duas partes: um bloco \`\`\`yaml com os campos que a máquina lê e o
documento em Markdown abaixo, para você revisar. Falta o bloco.`)
  process.exit(1)
}

let ficha
try {
  ficha = parseYaml(bloco[1])
} catch (e) {
  console.log(`✖  ${relative(ROOT, FICHA)}: o bloco yaml não é válido.\n\n${e.message}`)
  process.exit(1)
}

if (!ficha || typeof ficha !== 'object') {
  console.log(`✖  ${relative(ROOT, FICHA)}: o bloco yaml está vazio.`)
  process.exit(1)
}

if (ficha.ficha !== FORMATO)
  fail(
    'ficha',
    `formato ${ficha.ficha ?? '(ausente)'}; este template entende ${FORMATO} — ` +
      'gere a ficha com a versão do PROMPT-FICHA-LP.md que acompanha este padrão',
  )

/* ----------------------------------------------------------- biblioteca */

/**
 * Manifestos das seções. A biblioteca mora no starter, não na LP — mesma resolução
 * do compositor: `--library`, depois `lp.manifest.json`, depois `../LP-STARTER-B2/sections`.
 * A ficha precisa deles para validar o conteúdo de cada bloco contra o mesmo contrato
 * do `check:lp` e para derivar a composição.
 */
const DEFAULT_LIBRARY = '../LP-STARTER-B2/sections'
const libFlag = args.indexOf('--library')
const manifestoAnterior = existsSync(join(ROOT, 'lp.manifest.json'))
  ? JSON.parse(readFileSync(join(ROOT, 'lp.manifest.json'), 'utf8'))
  : null
const LIBRARY = resolve(
  ROOT,
  (libFlag >= 0 ? args[libFlag + 1] : undefined) ?? manifestoAnterior?.library ?? DEFAULT_LIBRARY,
)

/**
 * Biblioteca ausente é problema de ambiente, não da ficha: a LP foi clonada sem o
 * starter ao lado, ou está numa pasta que não é irmã dele. Por isso sai aqui, com a
 * instrução de como apontar o caminho — e não na lista de erros da ficha, que manda
 * o usuário de volta ao chat corrigir algo que o chat não tem como corrigir.
 */
if (!existsSync(join(LIBRARY, 'linhas', 'section.mjs'))) {
  console.log(`✖  biblioteca de seções não encontrada em ${relative(ROOT, LIBRARY) || LIBRARY}

A biblioteca mora no starter, não na LP. Ou coloque esta LP ao lado da pasta
LP-STARTER-B2, ou diga o caminho:

  npm run ficha -- --library ../caminho/para/LP-STARTER-B2/sections

Isto não é problema da ficha: não leve nada ao chat por causa deste erro.`)
  process.exit(1)
}

const biblioteca = new Map()
for (const slug of readdirSync(LIBRARY)) {
  const m = join(LIBRARY, slug, 'section.mjs')
  if (!existsSync(m)) continue
  const { meta } = await import(pathToFileURL(m).href)
  biblioteca.set(meta.slug, meta)
}

/** Nomes de ícone válidos, lidos de `src/data/icons.ts`. */
const iconNames = (() => {
  const f = join(ROOT, 'src', 'data', 'icons.ts')
  if (!existsSync(f)) return null
  const src = readFileSync(f, 'utf8')
  const nomes = [...src.matchAll(/^ {2}([a-zA-Z][\w-]*):/gm)].map((m) => m[1])
  return nomes.length ? new Set(nomes) : null
})()

/* ------------------------------------------------------- campos do núcleo */

/**
 * Campos obrigatórios do núcleo, com o número da entrada da entrevista a que cada um
 * corresponde. O número entra na mensagem de erro porque é como a ficha e o
 * PROMPT-FICHA-LP.md os identificam: "falta a entrada 9" é acionável no chat.
 */
const NUCLEO = [
  ['site.brand', 1, 'nome da empresa'],
  ['site.brandShort', 2, 'nome curto'],
  ['site.product', 3, 'produto principal, no plural'],
  ['site.context', 4, 'contexto de uso'],
  ['publico', 5, 'cargos que pedem cotação'],
  ['conteudo.hero.points', 6, 'as três provas rápidas do topo'],
  ['marcas', 7, 'marcas atendidas e decisão sobre as logos'],
  ['conteudo.quote.trust', 8, 'as três garantias ao lado do formulário'],
  ['site.address', 9, 'endereço do rodapé'],
  ['site.url', 10, 'link final da página'],
  ['site.shortcodes', 11, 'shortcodes do plugin de atendimento'],
  ['campanha', 15, 'palavra-chave da campanha'],
]

const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj)

const vazio = (v) =>
  v === undefined ||
  v === null ||
  (typeof v === 'string' && !v.trim()) ||
  (Array.isArray(v) && !v.length)

for (const [path, entrada, rotulo] of NUCLEO)
  if (vazio(get(ficha, path)))
    fail(`entrada ${entrada}`, `falta \`${path}\` no bloco yaml — ${rotulo}`)

// `whatsapp` e `privacyUrl` podem ser vazios de propósito (entradas 12 e 10): vazio
// desliga o botão e esconde o link. Mas ausentes são esquecimento, não decisão.
for (const [path, entrada] of [
  ['site.whatsapp', 12],
  ['site.privacyUrl', 10],
])
  if (get(ficha, path) === undefined)
    fail(
      `entrada ${entrada}`,
      `falta \`${path}\` — use string vazia ('') para registrar a decisão de não ter`,
    )

/* --------------------------------------------------------------- campanha */

const campanha = ficha.campanha ?? {}
const keyword = campanha.mainKeyword

if (campanha.mainKeyword === undefined)
  fail('entrada 15', 'falta `campanha.mainKeyword` — use null se a LP não tem campanha')
else if (typeof keyword === 'string' && !keyword.trim())
  fail(
    'entrada 15',
    '`campanha.mainKeyword` vazia — preencha com a palavra-chave, ou use null ' +
      'para registrar que a LP não tem campanha',
  )

for (const campo of ['negatives', 'forbidden'])
  if (campanha[campo] !== undefined && !Array.isArray(campanha[campo]))
    fail('entrada 15', `\`campanha.${campo}\` deveria ser uma lista (use [] se não há)`)

/**
 * A palavra-chave no H1, conferida aqui e não só no `check:lp`.
 *
 * É a regra que mais custa quando falha tarde: o H1 vem da ficha, e descobrir no fim
 * que ele não contém o termo da campanha significa reescrever título, title e
 * provavelmente produto e contexto. Barato de pegar antes de escrever o primeiro
 * arquivo. Usa a mesma comparação do `check:lp`.
 */
if (keyword && typeof keyword === 'string') {
  const h1 =
    get(ficha, 'conteudo.hero.title') ??
    `${get(ficha, 'site.product') ?? ''} para ${get(ficha, 'site.context') ?? ''}`
  const falta = missingWords(h1, keyword)
  if (falta.length)
    fail(
      'entrada 15',
      `o H1 "${h1}" não contém a palavra-chave "${keyword}" — falta: ${falta.join(', ')}. ` +
        'Ajuste `conteudo.hero.title` (ou produto e contexto) na ficha; o formato do H1 fica',
    )
}

/** Claim proibido que a própria ficha usa na copy da estrutura fixa. */
if (Array.isArray(campanha.forbidden) && campanha.forbidden.length) {
  const alvo = JSON.stringify(ficha.conteudo ?? {}).toLowerCase()
  for (const termo of campanha.forbidden) {
    if (typeof termo !== 'string' || !termo.trim()) continue
    if (alvo.includes(termo.toLowerCase()))
      fail(
        'campanha',
        `a copy da ficha usa o claim proibido "${termo}" — reescreva no chat antes de executar`,
      )
  }
}

/* -------------------------------------------------- estrutura fixa: forma */

/**
 * Chaves inesperadas num item de forma fixa.
 *
 * Existe por um modo de falha silencioso do YAML: num mapa em linha, vírgula dentro
 * de um valor sem aspas vira **chave nova**. `{ icon: gear, line1: SKF, FAG, NSK }`
 * é lido como `{icon: 'gear', line1: 'SKF', FAG: null, NSK: null}` — o valor é
 * truncado e ninguém percebe, porque o YAML é válido e os campos obrigatórios estão
 * todos lá. Chave sobrando com valor nulo é a impressão digital disso.
 */
function chavesEstranhas(onde, item, permitidas, i) {
  if (!item || typeof item !== 'object') return
  const sobrando = Object.keys(item).filter((k) => !permitidas.includes(k))
  if (!sobrando.length) return

  const nulas = sobrando.filter((k) => item[k] === null)
  fail(
    onde,
    `item ${i + 1} tem campo que não existe: ${sobrando.map((k) => `\`${k}\``).join(', ')}. ` +
      (nulas.length
        ? 'Isso costuma ser vírgula dentro de um valor sem aspas num mapa em linha — ' +
          'o YAML quebra o valor em chaves novas e trunca o texto. Escreva o item em ' +
          'bloco (um campo por linha), ou ponha o valor entre aspas'
        : `use só: ${permitidas.map((k) => `\`${k}\``).join(', ')}`),
  )
}

const pontos = get(ficha, 'conteudo.hero.points')
if (Array.isArray(pontos)) {
  if (pontos.length !== 3) fail('entrada 6', `${pontos.length} prova(s) no hero; são exatamente 3`)
  pontos.forEach((p, i) => {
    chavesEstranhas('entrada 6', p, ['icon', 'line1', 'line2'], i)
    for (const campo of ['icon', 'line1', 'line2'])
      if (vazio(p?.[campo])) fail('entrada 6', `prova ${i + 1} do hero sem \`${campo}\``)
  })
}

const selos = get(ficha, 'conteudo.quote.trust')
if (Array.isArray(selos)) {
  if (selos.length !== 3)
    fail('entrada 8', `${selos.length} garantia(s) na cotação; são exatamente 3`)
  selos.forEach((t, i) => {
    chavesEstranhas('entrada 8', t, ['icon', 'label'], i)
    for (const campo of ['icon', 'label'])
      if (vazio(t?.[campo])) fail('entrada 8', `garantia ${i + 1} sem \`${campo}\``)
  })
}

const descricao = get(ficha, 'conteudo.description')
if (typeof descricao === 'string' && descricao.length > 160)
  warn('conteudo.description', `${descricao.length} caracteres (máximo 160 no resultado de busca)`)

if (iconNames) checkIcons('conteudo', ficha.conteudo, iconNames, { fail })

/* ------------------------------------------------------- blocos de seção */

const BLOCO_CAMPOS = { veredicto: true, falta: true, responde: true, papeis: true }
const VEREDICTOS = ['completo', 'quase', 'insuficiente', 'nao-se-aplica']

const blocos = ficha.blocos ?? {}
if (!Object.keys(blocos).length)
  fail('blocos', 'nenhum bloco de conteúdo na ficha — sem eles não há miolo para compor')

/** Conteúdo de cada bloco, já na forma do arquivo de dados da seção. */
const conteudoPorSlug = new Map()

for (const [slug, bloco] of Object.entries(blocos)) {
  const meta = biblioteca.get(slug)
  if (!meta) {
    fail(`blocos.${slug}`, `não existe seção com esse slug na biblioteca`)
    continue
  }

  if (!VEREDICTOS.includes(bloco?.veredicto))
    fail(
      `blocos.${slug}`,
      `veredicto "${bloco?.veredicto ?? '(ausente)'}" — use um de: ${VEREDICTOS.join(', ')}`,
    )

  // Só bloco que pode entrar na página tem o conteúdo validado. `insuficiente` e
  // `nao-se-aplica` existem na ficha como registro da decisão, sem itens.
  if (bloco?.veredicto !== 'completo' && bloco?.veredicto !== 'quase') continue

  const contrato = meta.contract ?? {}
  const itemsPath = contrato.itemsPath
  const conteudo = {}
  for (const [k, v] of Object.entries(bloco)) if (!BLOCO_CAMPOS[k]) conteudo[k] = v

  if (itemsPath && !Array.isArray(conteudo[itemsPath])) {
    fail(
      `blocos.${slug}`,
      `veredicto "${bloco.veredicto}" mas falta a lista \`${itemsPath}\` com os itens. ` +
        'Um bloco que pode entrar na página tem de vir com o conteúdo que o padrão ' +
        'exige: se os itens não existem, o veredicto é `insuficiente`, não `quase`',
    )
    continue
  }

  // O cabeçalho da seção (eyebrow, título, texto) é conteúdo como qualquer outro:
  // sem ele na ficha, alguém teria de inventá-lo na execução.
  for (const campo of Object.keys(meta.needs?.copy ?? {}))
    if (vazio(conteudo[campo]))
      fail(`blocos.${slug}`, `falta \`${campo}\` — ${meta.needs.copy[campo]}`)

  // Mesma rede do hero e dos selos, com os campos permitidos tirados do manifesto:
  // os de `needs.fields` (só o nível do item), os que o contrato exige, e `id`.
  if (itemsPath && Array.isArray(conteudo[itemsPath])) {
    const permitidas = [
      ...new Set([
        'id',
        ...Object.keys(meta.needs?.fields ?? {}).filter((f) => !f.includes('.') && f !== itemsPath),
        ...(contrato.requiredItemFields ?? []),
        ...Object.keys(contrato.itemArrays ?? {}),
        ...(contrato.exactlyOneTrue ?? []),
        ...(contrato.atMostOneTrue ?? []),
        ...(contrato.cellsMatchColumns ? ['cells'] : []),
      ]),
    ]
    conteudo[itemsPath].forEach((item, i) => chavesEstranhas(`blocos.${slug}`, item, permitidas, i))
  }

  checkContract(`blocos.${slug}`, meta, conteudo, { fail, warn })
  if (iconNames) checkIcons(`blocos.${slug}`, conteudo, iconNames, { fail })

  conteudoPorSlug.set(slug, conteudo)
}

/* ----------------------------------------------------- derivar composição */

const plano = derivarComposicao(blocos, biblioteca)

for (const l of plano.lacunas)
  fail(
    `fase ${l.label}`,
    l.navy
      ? `nenhum bloco navy viável (${[...biblioteca.values()]
          .filter((m) => m.phase === l.fase && m.carriesNavy)
          .map((m) => m.slug)
          .join(' ou ')}) — esta fase precisa de um, e o material não sustenta nenhum`
      : `nenhum bloco com veredicto completo ou quase — a página não pode ter esta fase ` +
          `vazia. Obtenha o conteúdo de um destes e refaça a ficha: ${[...biblioteca.values()]
            .filter((m) => m.phase === l.fase)
            .map((m) => m.slug)
            .join(', ')}`,
  )

// Dois blocos navy no miolo é invariante do padrão; aqui é só confirmação de que a
// derivação não se perdeu — se falhar, o bug é na regra, não na ficha.
const navy = plano.escolhidas.filter((n) => n.navy).length
if (!plano.lacunas.length && navy !== 2)
  fail('composição', `a derivação produziu ${navy} bloco(s) navy; o padrão exige exatamente 2`)

/* -------------------------------------------------------------- assets */

/**
 * `assets.pendentes` lista **slots**, não arquivos: o slug de uma seção da composição,
 * ou um dos nomes da estrutura fixa (`LOGO`, `heroBg`, `brands`).
 *
 * Slot, e não caminho, porque quem escreve a ficha é o chat, e ele não tem como saber
 * o nome que o `compose` dá a cada placeholder da biblioteca (`aplicacao-1.png`,
 * `cenario.jpg`). Pedir caminho exato ali daria lista errada em toda LP, e lista
 * errada aqui significa imagem de exemplo tolerada no lugar errado.
 *
 * Validar antes do compose é o ponto: slot inventado ou de seção que ficou fora da
 * página vira erro agora, não um placeholder tolerado em silêncio depois.
 */
const SLOTS_FIXOS = ['LOGO', 'heroBg', 'brands']
const pendentesBruto = ficha.assets?.pendentes ?? []

if (!Array.isArray(pendentesBruto)) fail('assets.pendentes', 'deveria ser uma lista de slots')

const pendentes = []
for (const p of Array.isArray(pendentesBruto) ? pendentesBruto : []) {
  if (typeof p !== 'string' || !p.trim()) {
    fail('assets.pendentes', 'tem um item que não é um nome de slot')
    continue
  }
  const slot = p.trim()

  if (slot.includes('/') || slot.includes('.')) {
    fail(
      'assets.pendentes',
      `"${slot}" parece um caminho de arquivo. A lista é de slots: o slug de uma seção ` +
        `(ex.: "linhas") ou um de ${SLOTS_FIXOS.join(', ')}`,
    )
    continue
  }

  if (!SLOTS_FIXOS.includes(slot) && !plano.composicao.includes(slot)) {
    const naBiblioteca = biblioteca.has(slot)
    fail(
      'assets.pendentes',
      naBiblioteca
        ? `"${slot}" é uma seção que não entrou na composição — tire-a da lista`
        : `"${slot}" não é uma seção da biblioteca nem um slot da estrutura fixa ` +
            `(${SLOTS_FIXOS.join(', ')})`,
    )
    continue
  }

  // Seção sem asset nenhum no manifesto não tem o que ficar pendente.
  if (!SLOTS_FIXOS.includes(slot) && !(biblioteca.get(slot)?.assets ?? []).length) {
    fail('assets.pendentes', `a seção "${slot}" não usa imagem — tire-a da lista`)
    continue
  }

  pendentes.push(slot)
}

if (pendentes.includes('brands') && ficha.marcas?.usarLogos !== true)
  fail(
    'assets.pendentes',
    '"brands" só faz sentido com `marcas.usarLogos: true` — sem logos o carrossel é removido',
  )

/* ------------------------------------------------------------- resultado */

if (PLAN_ONLY && !errors.length) {
  console.log(plano.composicao.join(' '))
  process.exit(0)
}

for (const w of warnings) console.log(`⚠  ${w}`)
for (const e of errors) console.log(`✖  ${e}`)

if (errors.length) {
  console.log(`
ficha — ${errors.length} erro(s), ${warnings.length} aviso(s)

A ficha não está executável. Nada foi escrito. Cada erro acima corresponde a algo
que **tem de ser resolvido no chat**, não aqui: leve a lista para a conversa que
gerou a ficha, peça a correção e salve o documento novo em ${relative(ROOT, FICHA)}.`)
  process.exit(1)
}

console.log(`✔ ficha válida — ${relative(ROOT, FICHA)}`)
console.log(`  ${warnings.length} aviso(s)`)
console.log(`
Composição derivada (regra fixa, congelada por teste — ninguém escolheu à mão):

${plano.escolhidas
  .map(
    (n) =>
      `  ${String(biblioteca.get(n.slug).phase).padEnd(11)} ${n.slug.padEnd(15)} ` +
      `${n.veredicto}${n.navy ? ' · navy' : ''}` +
      `${n.cobertura ? ` · responde ${n.cobertura} família(s)` : ''}`,
  )
  .join('\n')}

  npm run compose -- ${plano.composicao.join(' ')}`)

const foraDaPagina = Object.entries(blocos)
  .filter(([slug]) => !plano.composicao.includes(slug))
  .map(
    ([slug, b]) => `  ${slug.padEnd(15)} ${b?.veredicto ?? '?'}${b?.falta ? ` — ${b.falta}` : ''}`,
  )

if (foraDaPagina.length) console.log(`\nFora da página:\n\n${foraDaPagina.join('\n')}`)

if (pendentes.length) {
  /** Especificação de cada slot pendente, para o relatório final pedir o arquivo certo. */
  const spec = (slot) => {
    if (slot === 'LOGO') return 'src/assets/LOGO.png — 240×200, fundo transparente'
    if (slot === 'heroBg') return 'src/assets/heroBg.png — 1981×900, brief do item 4.1.3'
    if (slot === 'brands') return 'src/assets/brands/*.webp — 400×160, fundo branco, 4 a 8'
    return (biblioteca.get(slot)?.assets ?? [])
      .map((a) => `src/assets/${a.dir}/ — ${a.files} (${a.spec})`)
      .join('\n' + ' '.repeat(2))
  }

  console.log(
    `\n${pendentes.length} slot(s) de imagem pendente(s) — a primeira versão sobe com ` +
      `placeholder neles:\n\n` +
      pendentes.map((p) => `  ${spec(p)}`).join('\n'),
  )
}

/* --------------------------------------------------------- ficha.json */

if (!CHECK_ONLY) {
  const saida = {
    ficha: FORMATO,
    gerado: new Date().toISOString(),
    origem: relative(ROOT, FICHA).split(/[\\/]/).join('/'),
    padrao: ficha.padrao ?? null,
    cliente: ficha.cliente ?? null,
    produto: ficha.produto ?? null,
    composicao: plano.composicao,
    site: ficha.site ?? {},
    campanha: { negatives: [], forbidden: [], ...campanha },
    publico: ficha.publico ?? [],
    marcas: ficha.marcas ?? {},
    tokens: ficha.tokens ?? { padrao: true },
    conteudo: ficha.conteudo ?? {},
    secoes: Object.fromEntries(
      plano.composicao.map((slug) => [
        slug,
        {
          dataExport: biblioteca.get(slug).dataExport,
          data: biblioteca.get(slug).data,
          conteudo: conteudoPorSlug.get(slug) ?? {},
        },
      ]),
    ),
    assets: { pendentes },
    fora: Object.fromEntries(
      Object.entries(blocos)
        .filter(([slug]) => !plano.composicao.includes(slug))
        .map(([slug, b]) => [slug, { veredicto: b?.veredicto ?? null, falta: b?.falta ?? null }]),
    ),
  }
  writeFileSync(join(ROOT, 'ficha.json'), `${JSON.stringify(saida, null, 2)}\n`)
  console.log('\n✔ ficha.json escrito — é o que o check:lp e o relatório final leem')
}

process.exit(0)
