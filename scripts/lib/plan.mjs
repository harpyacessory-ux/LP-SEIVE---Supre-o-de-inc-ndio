/**
 * DERIVAÇÃO DA COMPOSIÇÃO — a decisão que antes era aprovada no editor.
 *
 * A partir do padrão v2.8 ninguém escolhe as seções durante a execução: toda pergunta
 * foi feita no chat, e o que chega ao editor é uma ficha. A regra abaixo é fixa e
 * `scripts/ficha.test.mjs` (no starter) a congela composição por composição — mudá-la
 * alteraria em silêncio o layout de toda LP futura, que é exatamente o que os testes
 * do resolvedor já existem para impedir.
 *
 * Módulo separado do `ficha.mjs` justamente para o teste poder importar a regra sem
 * executar o script (que lê arquivo, valida e escreve ficha.json).
 */
import { MID_PHASES, phaseById } from '../../src/lib/rhythm.mjs'

/**
 * Em cada fase, entre os blocos que o material sustenta:
 *
 *   1. `completo` ganha de `quase`. Material não é gosto: a seção entra quando tem o
 *      que ela exige, e `insuficiente`/`nao-se-aplica` nunca entram.
 *   2. Empate decide por **cobertura**: quantas famílias de palavra-chave aquele bloco
 *      responde, depois quantos papéis do comitê de compra. É a leitura que mais muda
 *      o resultado da página — bloco bem preenchido que não responde ao que a campanha
 *      compra perde para o que responde.
 *   3. Persistindo, vale o `order` do manifesto: a ordem de preferência que a própria
 *      biblioteca declara para a fase.
 *
 * Depois da escolha por fase, duas correções estruturais, nesta ordem:
 *
 *   4. A fase com `needsNavyCarrier` (apoio e autoridade) precisa de exatamente um
 *      bloco navy. Se a melhor da fase não carrega navy, o portador navy melhor
 *      colocado entra **junto** com ela quando a fase comporta duas, e **no lugar**
 *      dela quando não comporta. É o que garante os dois respiros escuros do padrão
 *      sem ninguém escolher fundo à mão.
 *   5. "Uma função por página": acima do máximo da fase, sai a de menor cobertura.
 *
 * O que esta função **não** faz: inventar seção para preencher fase vazia. Fase sem
 * nenhum bloco viável volta em `lacunas`, e isso é recusa com a lista do que falta —
 * nunca uma pergunta.
 *
 * @param {Record<string, { veredicto?: string, responde?: string[], papeis?: string[] }>} blocos
 * @param {Map<string, { slug: string, phase: string, order?: number, carriesNavy?: boolean }>} biblioteca
 * @returns {{ composicao: string[], lacunas: Array<{fase: string, label: string, navy?: boolean}>, escolhidas: object[] }}
 */
export function derivarComposicao(blocos, biblioteca) {
  const nota = (slug) => {
    const b = blocos[slug] ?? {}
    const m = biblioteca.get(slug)
    return {
      slug,
      veredicto: b.veredicto,
      cobertura: (b.responde ?? []).length,
      papeis: (b.papeis ?? []).length,
      order: m?.order ?? 99,
      navy: m?.carriesNavy === true,
      phase: m?.phase,
    }
  }

  const melhor = (a, b) =>
    (a.veredicto === 'completo' ? 0 : 1) - (b.veredicto === 'completo' ? 0 : 1) ||
    b.cobertura - a.cobertura ||
    b.papeis - a.papeis ||
    a.order - b.order ||
    a.slug.localeCompare(b.slug)

  const escolhidas = []
  const lacunas = []

  for (const faseId of MID_PHASES) {
    const fase = phaseById(faseId)
    const candidatos = [...biblioteca.values()]
      .filter((m) => m.phase === faseId)
      .map((m) => nota(m.slug))
      .filter((n) => n.veredicto === 'completo' || n.veredicto === 'quase')
      .sort(melhor)

    if (!candidatos.length) {
      lacunas.push({ fase: faseId, label: fase.label })
      continue
    }

    const daFase = [candidatos[0]]

    if (fase.needsNavyCarrier && !daFase.some((n) => n.navy)) {
      const portador = candidatos.find((n) => n.navy)
      if (!portador) {
        lacunas.push({ fase: faseId, label: fase.label, navy: true })
        continue
      }
      if ((fase.max ?? 1) > daFase.length) daFase.push(portador)
      else daFase.splice(0, daFase.length, portador)
    }

    while (daFase.length > (fase.max ?? 1)) {
      const pior = [...daFase].sort(melhor).at(-1)
      daFase.splice(daFase.indexOf(pior), 1)
    }

    // Dentro da fase, a ordem é a que a biblioteca declara.
    daFase.sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug))
    escolhidas.push(...daFase)
  }

  return { composicao: escolhidas.map((n) => n.slug), lacunas, escolhidas }
}
