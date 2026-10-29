# PROMPT PADRÃO — Landing Page B2 Marketing Industrial (execução)

> Como usar: copie tudo abaixo da linha e cole como primeira mensagem para o agente (Claude Code, Codex, etc.) no repositório da nova LP. **Antes disso, a ficha de execução já tem de existir**: ela é gerada no chat web pelo `PROMPT-FICHA-LP.md` e salva em `docs/FICHA-LP.md`.
> **Este prompt não entrevista.** A entrevista toda acontece no chat; aqui é execução. O agente lê a ficha, valida, deriva a composição por regra fixa, preenche os arquivos e entrega a primeira versão. Se faltar algo, ele recusa com a lista do que resolver no chat — ele não pergunta.
> Derivado da LP Pioneira Rolamentos (Astro 7 + Tailwind 4). Vale para Astro, Next (static export) ou HTML puro.
> **Versão do padrão: 2.8.0** (changelog em `PROJETOS/LP-STARTER-B2/template/CHANGELOG.md`).

**O que mudou na v2.8.** A entrevista saiu do editor. Antes, este prompt propunha a composição, pedia aprovação e perguntava as 15 entradas do núcleo mais o conteúdo de cada seção, uma pergunta por vez — dentro do editor, longe do cliente e do material. Agora tudo isso acontece de uma vez no chat web, com o `PROMPT-FICHA-LP.md`, e desemboca numa **ficha de execução**. O editor recebe a ficha e só executa. A composição deixou de ser escolhida e passou a ser **derivada** dos veredictos de viabilidade da ficha, por uma regra fixa congelada em teste (`scripts/ficha.test.mjs`, no starter).

**O que a v2 trouxe e continua valendo.** A página não tem miolo fixo. Header, Hero, Cotação e Footer são iguais em toda LP; entre eles, as seções vêm de uma **biblioteca** (`PROJETOS/LP-STARTER-B2/sections/`). Cada seção declara num manifesto o que exige do conteúdo, em que fase da página entra, que fundos suporta e que respiro vertical aceita. O compositor (`npm run compose`) resolve fundo e respiro de toda a página e gera `src/pages/index.astro`; `npm run check:lp` confere o resultado contra o manifesto. **O catálogo está em `docs/BIBLIOTECA.md`, dentro da LP.**

A LP nasce de `node scripts/new-lp.mjs <Cliente> <Produto>`, só com a estrutura fixa. Seu trabalho é: validar a ficha, aplicar a composição derivada, preencher `src/data/site.ts`, `src/data/content.ts`, `src/data/sections/*.ts` e `src/assets/`, e entregar a primeira versão. Nunca reescreva componente da biblioteca dentro de uma LP — se o layout precisa mudar, a mudança é na biblioteca (seção 4.3), no starter.

---

Você é o desenvolvedor front-end responsável por construir uma landing page B2B industrial de **uma única página**, seguindo rigorosamente o padrão de processo, estrutura e design abaixo. O objetivo da página é gerar cotações/leads via atendimento (chat, formulário e WhatsApp) integrados por plugin WordPress. Não invente seções, tokens ou padrões novos: use a biblioteca. Não invente conteúdo: use a ficha.

## 0. Execução a partir da ficha — você não pergunta nada

Toda a entrevista já aconteceu, num chat separado, com o `PROMPT-FICHA-LP.md`. O resultado está em `docs/FICHA-LP.md`: uma **ficha de execução** com as 15 entradas do núcleo, a copy da estrutura fixa, o conteúdo de cada bloco na forma final, o veredicto de viabilidade de cada bloco e a lista de assets pendentes.

Seu trabalho é executá-la. Em nenhum momento desta execução você faz uma pergunta ao usuário.

**A regra, sem exceção:** se algo necessário falta, está ambíguo ou contraria o padrão, você **para e recusa**, entregando a lista do que resolver na ficha. Você não pergunta, não escolhe por conta e não preenche com o exemplo da biblioteca. A recusa é útil porque o usuário leva a lista de volta ao chat, que tem o cliente e o material à mão; uma pergunta aqui, no editor, está no lugar errado da conversa.

Isso também significa: **não use ferramenta de pergunta** (`AskUserQuestion` ou equivalente) em nenhum passo. Nem para confirmar, nem para aprovar, nem para escolher entre duas opções boas.

Três coisas que antes eram perguntas e agora não são:

| Antes | Agora |
|---|---|
| "Posso seguir com esse mapa?" | a ficha é o mapa, já aprovado no chat |
| "Posso aplicar essa composição?" | a composição é **derivada** da ficha por regra fixa (`npm run ficha`), congelada por teste |
| "Posso começar com esses valores?" | os valores são os da ficha |

### 0.1 Ordem de execução

Siga nesta ordem. Cada passo só faz sentido se o anterior passou.

```bash
npm run ficha                      # 1. valida a ficha e deriva a composição
npm run compose -- <slugs>         # 2. aplica a composição que o passo 1 imprimiu
# 3. preencher os arquivos de dados a partir da ficha
npm run check:lp:rascunho          # 4. verificação da primeira versão
npm run check                      # 5. tipos
npm run build                      # 6. build
npm run screens                    # 7. screenshots
```

1. **Valide a ficha.** `npm run ficha` lê `docs/FICHA-LP.md`, confere campo por campo, valida o conteúdo de cada bloco contra o contrato do manifesto da seção, confirma a palavra-chave no H1 e escreve `ficha.json`. **Se ele falhar, pare aqui.** Cole a saída dele na sua resposta e diga ao usuário que a correção é no chat. Não contorne, não edite a ficha por conta própria para fazê-la passar.

2. **Aplique a composição que ele imprimiu**, sem alterar a lista de slugs. Você não escolhe as seções: a regra está em `template/scripts/lib/plan.mjs` e é congelada por `scripts/ficha.test.mjs` no starter. Se a composição derivada parecer errada para o material, isso é um defeito da regra ou um veredicto errado na ficha — relate no fim, não corrija à mão.

3. **Preencha os arquivos de dados**, transcrevendo de `ficha.json`:
   - `src/data/site.ts` ← `site`, `campanha`
   - `src/data/content.ts` ← `conteudo` (hero, cotação, description)
   - `src/data/sections/<slug>.ts` ← `secoes.<slug>.conteudo`
   - `src/data/brands.ts` ← `marcas`, se houver logos

   **Transcrição é transcrição.** O texto da ficha vai para o arquivo como está. Você não reescreve copy, não corta frase, não troca sinônimo, não "melhora" título. As únicas liberdades são as do item 0.2.

   **Imagens são posicionais.** Os campos `photo`, `logo`, `scene` e `person` da ficha trazem **o que a imagem mostra**, não nome de arquivo: o valor vira o `alt`. O arquivo é o que o `compose` já copiou da biblioteca, na ordem — o primeiro item usa `linha-1.png`, o segundo `linha-2.png`, e assim por diante. **Não renomeie** esses arquivos: a verificação de proporção e de fundo recortado casa pelo nome que o padrão dá, e renomear a desliga em silêncio. Quando a foto real chegar, ela substitui o arquivo mantendo o nome.

4. **Verifique a primeira versão** com `npm run check:lp:rascunho`. Ele tolera as imagens que a ficha declarou pendentes e **só** elas. Qualquer outro erro é seu para resolver — e se não for resolvível sem informação nova, é recusa.

5. `npm run check`, `npm run build`, `npm run screens`. Erro de tipo quase sempre é tupla com contagem errada: confira contra o contrato do manifesto.

6. **Registre** em `docs/BRIEFING.md`: a origem (a ficha e sua data), a composição derivada com os veredictos, as entradas do núcleo, os assets pendentes e os conflitos que a ficha trouxe.

7. **Entregue** no formato do item 14, deixando claro, na primeira linha, que esta é a primeira versão e o que falta para ela poder ir ao ar.

`npm run verify` é o portão de publicação e **continua rigoroso**: ele roda o `check:lp` sem tolerância a imagem pendente. Enquanto houver asset pendente, ele falha — de propósito. Não passe `--pending-assets` para ele, não edite o script e não diga que a LP está pronta para publicar antes de ele passar.

### 0.2 O que a ficha não cobre — resolva por regra, nunca por pergunta

O que não está na ficha tem resposta determinada. Use estas, sem consultar:

| Assunto | Regra |
|---|---|
| Stack e publicação | o que o template já traz: Astro, `main` → `wp-build`. Não mexa |
| `standardVersion` | já vem do template; não edite à mão |
| `title` da aba | `conteudo.title: null` → use `{product} para {context} \| {brand}` |
| Alt text de imagem | descreva o que a foto mostra a partir do campo que a nomeia (`label`, `title`, `name`), em uma frase curta e sem repetir a marca em todas |
| `id` de item | vem da ficha; nunca invente nem renumere |
| `data-cta` | o formato está em `ctas` no manifesto da seção |
| Asset pendente | **mantenha o placeholder da biblioteca**, com o mesmo `aspect-ratio`. Nunca gere, baixe ou substitua por outra imagem |
| `tokens.padrao: true` | não toque no tema |
| `site.whatsapp: ''` | sem botão flutuante |
| `site.privacyUrl: ''` | sem link de privacidade; a nota de LGPD fica |
| `marcas.usarLogos: false` | esvazie `src/data/brands.ts` e apague `src/assets/brands/` — ver o bloco abaixo. **Não apague o componente nem o arquivo**: as seções que declaram o primitivo `BrandCarousel` no manifesto (hoje `linhas`) o importam, e o build quebra. O carrossel já não renderiza com menos de 4 logos. Quem remove os três é o `compose`, e só quando nenhuma seção da composição usa o carrossel |
| `marcas.nomes` com `usarLogos: false` | os nomes vão na copy por extenso, respeitando os claims proibidos |
| `campanha.mainKeyword: null` | LP sem campanha; registre no `BRIEFING.md` e siga |

Com `marcas.usarLogos: false`, `src/data/brands.ts` fica assim — **com o tipo anotado**, não `[] as const`, que infere tupla vazia e faz o `.map` do carrossel virar `never` no `npm run check`:

```ts
import type { ImageMetadata } from 'astro'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = []
```

### 0.3 Quando recusar

Pare e recuse, com a lista do que resolver no chat, quando:

- `npm run ficha` falhar por qualquer motivo;
- a ficha não existir, ou vier em formato de outra versão do padrão;
- uma fase ficar sem bloco viável, ou uma fase navy ficar sem portador navy (`identificar`/`processo` no apoio, `diferenciais`/`escopo` na autoridade);
- o conteúdo da ficha exigir uma seção que não existe na biblioteca. **Não crie seção nova durante a execução**: a seção nova é uma mudança de biblioteca, no starter, pelo item 4.3, com o `library.mjs` rodando — nunca dentro de uma LP e nunca sem o usuário saber;
- a copy da ficha usar um claim proibido pela própria ficha;
- o `check:lp:rascunho` falhar por algo que só informação nova resolve.

A recusa tem três partes, nesta ordem: o que impediu, a saída da ferramenta que acusou, e a lista do que pedir no chat — cada item como uma frase que o usuário possa colar na conversa.

**O que não é recusa:** asset pendente declarado, veredicto `insuficiente` ou `nao-se-aplica` num bloco que ficou fora, e aviso do `check:lp`. Isso é o estado normal de uma primeira versão: siga, entregue e relate.

## 1. Regras invioláveis

1. **Uma rota, uma página.** Sem navegação interna por menu; o Header tem logo, tagline e um CTA.
2. **Página é composição, seções são autocontidas.** `src/pages/index.astro` é **gerado** por `npm run compose` e não se edita à mão: ele só importa e empilha. Cada seção contém dados tipados no arquivo dela, markup, estilo escopado e script próprio.
3. **Todo CTA é um `<button type="button">` com a classe `btn-slave-whats`.** Nunca `href`, nunca `onClick` próprio. O plugin de atendimento do WordPress captura o clique.
4. **Dois slots de shortcode**: um no Hero (coluna de 300px, chat) e um na seção final (formulário). Os valores vêm de `site.shortcodes`. Cada slot tem placeholder tracejado como fallback quando vazio.
5. **Nenhuma dobra sem CTA.** Cada seção termina em botão ou em cards clicáveis.
6. **Uma família tipográfica.** Hierarquia por peso (extrabold / semibold / medium / regular) e tracking, nunca por trocar fonte.
7. **Toda animação tem guarda `prefers-reduced-motion`.**
8. **Imagens só via pipeline otimizado** (astro:assets): WebP/AVIF, `width` explícito, `loading="lazy"` exceto o LCP.
9. **Sem biblioteca de ícones.** Sprite SVG inline próprio (24×24, stroke 1.6, `currentColor`). Ícone novo = entrada nova no mapa.
10. **Sem framework JS no cliente** para interação. Vanilla TS em `<script>` de componente, raiz por `data-*`, `querySelectorAll().forEach` para múltiplas instâncias.
11. **Prettier + ESLint** obrigatórios: `semi: false`, `singleQuote`, `printWidth: 100`, `trailingComma: all`, plugin tailwind ordenando classes. `npm run verify` tem de passar antes de entregar.
12. **Nunca deixar componente morto.** Seção que saiu da composição sai do repositório — `compose` faz isso sozinho, e `check:lp` falha se sobrar componente, arquivo de dados ou pasta de assets sem seção correspondente. Utility CSS sem uso, idem.
13. **Header, Hero, Cotação e Footer são estrutura base fixa** (item 4.1). Copie grid, medidas, camadas e ordem sem alterar. A coluna 2 do Hero fica vazia de propósito: é a janela do banner. O banner é produzido para esse grid (brief em 4.1.3); se a imagem não encaixar, ajusta-se a imagem, nunca o grid.
14. **Seção não decide o próprio fundo nem o próprio padding.** Os dois vêm da composição, por `tone` e `rhythm` (item 4.2). Seção que traz `bg-` ou `py-` na tag raiz está errada.
15. **Componente da biblioteca não se edita dentro de uma LP.** O arquivo em `src/components/sections/` é cópia: `compose` o sobrescreve. Ajuste de layout é evolução do padrão e acontece na biblioteca (item 4.3).
16. **Nada de exemplo vai ao ar, texto nem imagem.** Seção que entra na composição tem de ser preenchida com o conteúdo do cliente. `check:lp` falha se o arquivo de dados continuar idêntico ao exemplo da biblioteca, se sobrar rastro dele, ou se **qualquer imagem em `src/assets/` ainda for a de exemplo**. Ele também avisa quando a imagem entregue não cumpre a especificação da seção (proporção, resolução, recorte). Seção sem material não é preenchida com invenção: sai da composição.
17. **A palavra-chave principal da campanha está no H1 e no título da aba.** Quem clicou no anúncio precisa reconhecer na primeira dobra o que digitou; se não reconhece, volta para o Google. `check:lp` falha se faltar (entrada 15). Só uma LP sem campanha definida dispensa a regra, e isso fica registrado (`mainKeyword: null`), nunca implícito.
18. **Claim proibido não vai ao ar.** Termo que o briefing proíbe ("autorizado", "distribuidor", um percentual sem comprovação) não aparece em texto nenhum da página, nem em `alt`. `check:lp` falha (entrada 15). O termo só sai de `campaign.forbidden` com a autorização registrada no `BRIEFING.md`.

## 2. Design tokens (default; substituir apenas se `TOKENS_DE_COR` foi informado)

Declare no `@theme` do CSS global (Tailwind 4):

```css
--color-primary-dark: #002147;      /* navy base */
--color-primary-dark-800: #003669;  /* navy claro: gradientes e hover */
--color-primary-dark-900: #001830;  /* navy profundo: header, hero, véus */
--color-accent-orange: #ff6b00;     /* CTA, marcadores, barras, foco */
--color-accent-orange-dark: #e55f00;
--color-neutral-light: #ffffff;
--color-neutral-gray-100: #f5f7fa;  /* fundo alternado e chips */
--color-neutral-gray-200: #a0a0a0;  /* bordas, sempre com /60–/70 */
--color-ink: #1b2733;               /* texto principal */
--color-ink-soft: #44546a;          /* texto secundário */
--container-page: 1320px;           /* max-w-page */
--font-display: 'Manrope', ui-sans-serif, system-ui, sans-serif;
--font-sans: 'Manrope', ui-sans-serif, system-ui, sans-serif;
```

Base obrigatória: `scroll-behavior: smooth`; `::selection` laranja com texto branco; `*:focus-visible { outline: 2px solid accent; offset 2px }`; `body` com `bg-neutral-light font-sans text-ink antialiased`.

Utilities obrigatórias: `navy-premium` (bg navy + `radial-gradient` de brilho + `linear-gradient 165deg` 800→base→900) e uma malha blueprint (`linear-gradient` 1px a cada 34–44px, `rgb(255 255 255 / .05)`, com `mask-image: radial-gradient` esmaecendo nas bordas).

Semântica de cor: **laranja = ação e marcação** (botão, quadrado do eyebrow, traço sob título, barra de hover, check dos bullets, cantos técnicos). **Navy = respiro e autoridade** (hero, um painel no meio, um bloco antes do form, footer). **Cinza-100 = alternância** de fundo. Nunca usar laranja como fundo de seção.

## 3. Arquitetura de arquivos

Com o template (`PROJETOS/LP-STARTER-B2/template`) esta arquitetura já existe. Numa LP, os únicos arquivos que você altera são `src/data/site.ts`, `src/data/sections/*.ts`, `src/assets/**` e, se a entrada 14 trouxer cores/fonte, o bloco `@theme` de `src/styles/global.css`. Tudo o mais é gerado (`index.astro`, `lp.manifest.json`) ou copiado da biblioteca.

| Papel | Caminho | Quem escreve |
|---|---|---|
| Página (composição) | `src/pages/index.astro` | **gerado** por `npm run compose` |
| Ficha de execução | `docs/FICHA-LP.md` | **entrada** — gerada no chat (PROMPT-FICHA-LP) |
| Ficha normalizada | `ficha.json` | **gerado** por `npm run ficha` |
| Manifesto da composição | `lp.manifest.json` | **gerado** por `npm run compose` |
| Head / SEO / preload | `src/layouts/Layout.astro` | estrutura fixa |
| Estrutura fixa | `src/components/{Header,Hero,QuoteForm,Footer}.astro` | estrutura fixa |
| Primitivos | `src/components/{Button,Eyebrow,Icon,Section,SectionHeader,BrandCarousel,WhatsAppFloat}.astro` | estrutura fixa |
| Seções da biblioteca | `src/components/sections/<Nome>.astro` | **copiado** da biblioteca |
| Dados globais | `src/data/site.ts` | ficha (`site`, `campanha`) |
| Copy da estrutura fixa | `src/data/content.ts` | ficha (`conteudo`) |
| Copy por seção | `src/data/sections/<slug>.ts` | ficha (`secoes.<slug>`) |
| Logos de marcas (opcional) | `src/data/brands.ts` | ficha (`marcas`) |
| Contrato de fase, tom e ritmo | `src/lib/rhythm.mjs` + `src/lib/layout.ts` | padrão |
| Tokens | `src/styles/global.css` (`@theme`) | padrão |
| Assets da estrutura fixa | `src/assets/{LOGO.png,heroBg.png,brands/}` | entregues pelo cliente, ou pendentes na ficha |
| Assets por seção | `src/assets/<slug>/` | **copiado** da biblioteca, substituído pelo real |
| Publicação | `.github/workflows/build-wp.yml` → branch `wp-build` | padrão |

Componentes em PascalCase e em inglês. `id`s HTML em português sem acento, iguais ao `id` do manifesto da seção (`linhas`, `especificacoes`, `identificar`, `processo`, `aplicacoes`, `segmentos`, `clientes`, `perguntas`, `diferenciais`, `cotacao`).

Os componentes importam por alias, não por caminho relativo — é o que permite ao mesmo arquivo funcionar na biblioteca e dentro da LP: `@components/*`, `@data/*`, `@lib/*`, `@assets/*`.

Para stack diferente de Astro (Next static export, HTML puro), a biblioteca não se aplica: monte a página a partir da composição aprovada e do `GUIA-LAYOUT.md`, mantendo os mesmos `id`s, `data-cta`, fases e a alternância de fundos.

## 3.1 Biblioteca de seções

O acervo vive em `PROJETOS/LP-STARTER-B2/sections/`, uma pasta por seção:

```
sections/<slug>/
  section.mjs      manifesto: fase, tons, ritmos, bloco navy, needs, match, contract
  <Nome>.astro     componente, recebendo `tone` e `rhythm` da composição
  <slug>.ts        dados de exemplo, tipados
  assets/          imagens placeholder, se a seção usar
```

Dentro da LP você lê o catálogo já pronto em `docs/BIBLIOTECA.md` (ou `npm run compose -- --list`). O manifesto tem três blocos com públicos diferentes:

- **`needs`** — o que o conteúdo precisa ter, incluindo o cabeçalho da seção (`needs.copy`). É a matéria-prima das perguntas que o `PROMPT-FICHA-LP.md` faz no chat: o `scripts/catalog.mjs` leva isso para lá, gerado.
- **`match`** — `use` e `skip`, as regras de casamento. É a matéria-prima do veredicto de viabilidade que a ficha traz.
- **`contract`** — quantidades, campos obrigatórios e limites. É o que `npm run check:lp` verifica automaticamente.

O compositor é o único que escreve em `src/components/sections/` e `src/pages/index.astro`. Se você precisar mudar a página, mude a composição e rode de novo.

## 4. Fases da página (ordem fixa)

A ordem das fases nunca muda. Quem ocupa as fases 2 a 5 é a composição derivada da ficha (item 0.1).

| # | Fase | Peça | Fundo | Padding | CTA |
|---|---|---|---|---|---|
| 0 | Abertura | **Header** — ESTRUTURA FIXA, ver 4.1.1 | `primary-dark-900` sticky `z-50` | `py-3` | "Solicite sua cotação" (mobile: "Cotação") |
| 1 | Abertura | **Hero** — ESTRUTURA FIXA, ver 4.1.2 e banner em 4.1.3 | navy-900 + banner ancorado à direita do container + véus | `py-20 lg:py-24` | primary + outline-light; coluna 3 = shortcode do chat |
| 2 | **Oferta** | 1–2 seções da biblioteca | resolvido | resolvido | por seção |
| 3 | **Apoio à decisão** | 1–2 seções, exatamente 1 com bloco navy | resolvido | resolvido | por seção |
| 4 | **Prova** | 1–3 seções da biblioteca | resolvido | resolvido | por seção |
| 5 | **Autoridade** | 1–2 seções, exatamente 1 com bloco navy | resolvido | resolvido | por seção |
| 6 | Conversão | **Cotação** — ESTRUTURA FIXA, ver 4.1.4 | `neutral-gray-100` | `pt-8 pb-20` | shortcode do formulário + "Chamar no WhatsApp" |
| 7 | Conversão | **Footer** — ESTRUTURA FIXA, ver 4.1.5 | `navy-premium border-t border-white/15` | `py-6` | — |

"Resolvido" = decidido pelo compositor contra o contrato do item 4.2. Nenhuma seção da biblioteca traz fundo ou padding próprio.

Regras de ritmo que continuam valendo e agora são verificadas por máquina:

- Alternância de fundo: navy (hero) → branco → cinza → cinza (cotação) → navy (footer). Uma única troca de branco para cinza, no meio.
- Dois blocos navy no miolo, um em cada metade, nunca vizinhos.
- Padding assimétrico: o `pt` da seção seguinte compensa o `pb` da anterior; o respiro somado fica entre 80 e 128px no mesmo fundo, e entre 96 e 160px quando o fundo muda.
- Container único em todas as seções: `mx-auto max-w-page px-6 lg:px-10`, aplicado pelo primitivo `Section.astro`.
- Alinhamento à esquerda por padrão; centralizado somente em galerias simétricas.

## 4.1 Estrutura base fixa (Header, Hero, Cotação e Footer)

Estas quatro peças são **idênticas em todas as LPs**. Copie a estrutura, o grid, as medidas e a ordem exatamente como descrito. O que muda é só conteúdo (textos, logo, foto, shortcodes). Se achar que precisa alterar algo estrutural aqui, pare e pergunte.

### 4.1.1 Header

```
<header class="sticky top-0 z-50 bg-primary-dark-900">
  <div class="mx-auto flex max-w-page items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 lg:px-10">

    <!-- 1. Logo em placa branca "pendurada" abaixo da barra -->
    <a href="/" class="flex shrink-0 items-center self-start">
      <span class="-mt-3 -mb-10 flex items-center rounded-b-xl bg-neutral-light px-3 pt-1.5 pb-1
                   shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)] sm:px-6 sm:pt-2 sm:pb-1.5">
        <Image src={logo} alt="{{MARCA}}" width={240} height={200} format="webp"
               loading="eager" fetchpriority="low" decoding="async"
               class="-mt-1 -mb-0.5 h-14 w-auto sm:-mt-2 sm:-mb-1 sm:h-24" />
      </span>
    </a>

    <!-- 2. Tagline central (some no mobile) -->
    <span class="hidden flex-1 text-center font-display text-[15px] font-extrabold tracking-[0.14em]
                 text-neutral-light uppercase sm:block lg:text-[17px]">
      {{PRODUTO_PRINCIPAL}}
    </span>

    <!-- 3. CTA laranja, uppercase, rótulo curto no mobile -->
    <button type="button"
      class="btn-slave-whats inline-flex shrink-0 items-center bg-accent-orange px-4 py-2 font-sans
             text-[11px] font-bold uppercase tracking-[0.04em] text-neutral-light transition-colors
             duration-200 hover:bg-accent-orange-dark sm:px-6 sm:py-2.5 sm:text-[13px] sm:tracking-[0.06em]">
      <span class="sm:hidden">Cotação</span>
      <span class="hidden sm:inline">Solicite sua cotação</span>
    </button>
  </div>
</header>
```

Regras: sem menu, sem links de âncora, sem telefone no header. A placa branca do logo **invade a seção seguinte** (`-mb-10`); o Hero já conta com isso no `py-20`. Logo com fundo transparente ou branco, altura útil 56px mobile / 96px desktop.

### 4.1.2 Hero de três colunas

Grid desktop (`lg`, container 1320px, `px-10`):

```
| coluna 1: texto (1fr ≈ 622px) | gap 24 | coluna 2: VAZIA (270px) | gap 24 | coluna 3: shortcode (300px) |
```

- **Coluna 1** recebe, nesta ordem: `<Eyebrow tone="light">` · `h1` · parágrafo · caixa de 3 pontos com ícone · 2 botões (primary "Solicite sua cotação" + outline-light "Identifique seu {{produto}}" com ícone `search` à esquerda). Largura máxima do texto `max-w-xl` no mobile e `lg:max-w-none`.
- **Coluna 2 é intencionalmente vazia** (`<div class="hidden lg:block" aria-hidden="true">`). É a "janela" por onde o banner de fundo mostra o produto/serviço. Nunca coloque conteúdo nela.
- **Coluna 3** é `w-full lg:w-[300px]` e renderiza `SHORTCODE_CHAT` via `<slot name="shortcode">`. Fallback: caixa tracejada `min-h-[430px] border border-dashed border-neutral-light/35 bg-primary-dark-900/80 backdrop-blur-sm` com o rótulo "Espaço reservado · Shortcode — 300px".
- No mobile o grid vira uma coluna: texto, depois shortcode. A coluna 2 some.

Camadas de fundo, de trás para frente (todas `absolute`, `pointer-events-none` exceto a foto):

| z | Camada | Regra |
|---|---|---|
| 1 | `.hero-photo` com `<Picture>` do banner | mobile: `inset-0` full-width `object-cover`. Desktop: `left:auto; right: var(--page-edge); width: 1700px` — ancorada na **borda direita do container**, não do viewport |
| 2 | `.hero-navy` (véu esquerdo) | mobile: full-width, gradiente navy → transparente a 96%. Desktop: `width: calc(50% - 20px)`, gradiente `to left`: transparente 0 → `rgb(0 24 48 / .45)` 70px → navy-800 150px → navy sólido |
| 2 | `.hero-navy-right` (véu direito) | só desktop: `width: calc(50% - 261px)`, gradiente `to right`: transparente 0 → `rgb(0 24 48 / .55)` 200px → navy-900 364px |
| 3 | `.hero-dots` | malha de pontos `radial-gradient(circle, white/.5 1px, transparent 1px)` 28px, `opacity .35`, desktop `width: calc(50% - 60px)` com máscara que esmaece à direita |
| 4 | mira técnica | svg `size-4 text-white/50` em `left-6 top-6` |
| 5 | conteúdo | `relative z-[5] mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24` |

Variáveis que amarram tudo ao container (declarar nas classes `.hero-photo, .hero-navy, .hero-navy-right, .hero-dots, .hero-grid`):

```css
--page-half: calc(var(--container-page) / 2);
--page-edge: max(0px, calc(50% - var(--page-half)));
```

Foto do hero: `Picture` com `widths={[640,1024,1536,1981]}`, `sizes="(min-width: 1024px) 1700px, 100vw"`, `formats={['avif','webp']}`, `loading="eager"`, `fetchpriority="high"`, mais `<link rel="preload" imagesrcset>` no head. Seção com `border-b border-white/15` e `bg-primary-dark-900` como cor de segurança.

Caixa de 3 pontos: `inline-flex flex-wrap gap-x-5 gap-y-3 rounded-xl border border-white/10 bg-primary-dark-900/55 px-3.5 py-2.5 backdrop-blur-md`, cada ponto = badge `size-10 rounded-lg border border-white/25 bg-white/10` + texto em **duas linhas fixas** (`line1`/`line2`, `whitespace-nowrap`) `text-[13.5px] font-semibold` com `text-shadow`. Divisória `border-left white/18` entre pontos a partir de `sm`.

### 4.1.3 Brief do banner de fundo (obrigatório para quem cria a imagem)

O banner é desenhado **para o grid acima**, não o contrário. Entregue este brief ao designer ou à ferramenta de geração antes de pedir a imagem:

| Item | Especificação |
|---|---|
| Arquivo | `src/assets/heroBg.png` (ou `.jpg`), **1981 × 900 px** (proporção ≈ 2,2:1), sRGB, até 2,5 MB. O build gera AVIF/WebP em 640/1024/1536/1981 |
| Paleta | fundo em tons navy entre `#001830` e `#003669`, para se fundir aos véus. Sem texto, sem logo, sem marca d'água |
| **Zona A — 0 a 55% da largura** | fundo escuro quase uniforme (cenário desfocado, textura técnica). Fica **totalmente coberta** pelo véu navy, pelos pontos e pelo texto. Nada importante aqui |
| **Zona B — 62 a 79% da largura, centro em ~70%** | o **assunto principal** (produto, peça, equipamento ou cena do serviço): nítido, iluminado, com contraste contra o fundo. É a coluna 2 do grid. Única área que aparece sem véu no desktop |
| **Zona C — 79 a 100% da largura** | escurece progressivamente; recebe o véu direito e a coluna do shortcode. Pode continuar o cenário, sem ponto de foco |
| Vertical | assunto centrado, ocupando 60–80% da altura, e contido nos **65% centrais** da altura (o `object-cover` corta topo e base em telas muito largas ou muito baixas) |
| Direção de luz | vinda da esquerda/cima, para o assunto "sair" do navy e o lado direito cair em sombra |
| Mobile | a imagem vira full-width sob véu navy quase sólido; o assunto aparece atrás do texto, à direita, de forma sutil. Por isso ele **não pode ser a única forma** de entender o produto: o H1 faz esse papel |
| Validação | rodar `npm run dev`, abrir em 1440 px e 1920 px e confirmar: o assunto está entre o fim do texto e o início do shortcode, sem invadir nenhum dos dois. Se invadir, ajustar a imagem, **não o grid** |

Como conferir a posição sem chute: com o container em 1320px, a coluna 2 fica entre **634px e 364px contados da borda direita do container**. Como a foto tem 1700px e é alinhada nessa mesma borda, o assunto deve estar entre **1066px e 1336px** contados da esquerda da foto renderizada (62–79%).

### 4.1.4 Seção final de Cotação

```
<section id="cotacao" class="bg-neutral-gray-100 pt-8 pb-20">
  <div class="mx-auto max-w-page px-6 lg:px-10">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16">

      <!-- Coluna 1 (desktop) / segunda no mobile: formulário -->
      <div class="order-2 w-full lg:order-1">
        <slot name="shortcode">
          <!-- fallback: caixa tracejada min-h-[520px] rounded-2xl border-dashed border-primary-dark/25 bg-neutral-light
               com "Espaço reservado · Shortcode — formulário de cotação" -->
        </slot>
      </div>

      <!-- Coluna 2 (desktop) / primeira no mobile: texto -->
      <div class="order-1 lg:order-2">
        <Eyebrow>Solicite sua cotação</Eyebrow>
        <h2 class="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
          Fale com quem entende de {{PRODUTO_PRINCIPAL em minúsculas}}.
        </h2>
        <span aria-hidden="true" class="mt-5 block h-[3px] w-16 bg-accent-orange"></span>
        <p class="mt-5 font-sans text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {{1 frase: equipe pronta para identificar, especificar e cotar + "Preencha o formulário ou fale direto conosco pelo WhatsApp."}}
        </p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="button"
            class="btn-slave-whats inline-flex items-center justify-center gap-2.5 bg-primary-dark px-6 py-3.5
                   font-sans text-[15px] font-semibold text-neutral-light transition-colors duration-200 hover:bg-primary-dark-800">
            <Icon name="whatsapp" class="size-4 shrink-0" /> Chamar no WhatsApp
          </button>
        </div>
        <ul class="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
          <!-- SELOS_DE_CONFIANCA: 3 × <li class="flex items-center gap-2 text-[13px] font-medium text-ink"><Icon class="size-4 text-accent-orange"/> texto</li> -->
        </ul>
      </div>
    </div>
  </div>
</section>
```

Regras: o formulário é sempre o `SHORTCODE_FORM`, nunca um `<form>` próprio. O botão de WhatsApp é navy (não laranja) para não competir com o botão de envio do formulário. No mobile o texto vem **antes** do formulário. A seção anterior (Diferenciais) termina em `pb-8` e esta começa em `pt-8`, então os cards sobrepostos de Diferenciais encostam visualmente nesta seção sem espaço duplo.

### 4.1.5 Footer

```
---
import Icon from './Icon.astro'
import { site } from '../data/site'
const year = new Date().getFullYear()
---

<footer class="navy-premium border-t border-white/15">
  <div class="mx-auto flex max-w-page flex-col items-center gap-3 px-6 py-6 text-center
              lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:text-left">

    <!-- 1. Copyright (ano automático) -->
    <p class="shrink-0 font-sans text-xs text-neutral-light/55">
      © {year} {site.brand}. Todos os direitos reservados.
    </p>

    <!-- 2. Endereço com pin laranja -->
    <address class="flex items-center gap-2 font-sans text-xs not-italic text-neutral-light/70 lg:whitespace-nowrap">
      <Icon name="map-pin" class="size-3.5 shrink-0 text-accent-orange" />
      <span>{site.address}</span>
    </address>

    <!-- 3. Crédito da agência (único link externo da página) -->
    <p class="shrink-0 font-sans text-xs text-neutral-light/55">
      Desenvolvido por{' '}
      <a href="https://b2marketingindustrial.com.br" target="_blank" rel="noopener noreferrer"
         class="font-semibold text-neutral-light/80 transition-colors hover:text-accent-orange">
        B2 Marketing Industrial
      </a>
    </p>
  </div>
</footer>
```

Regras do footer:

- **Uma linha só, três itens, nesta ordem**: copyright · endereço · crédito da B2. Desktop em linha (`justify-between`), mobile empilhado e centralizado.
- Fundo `navy-premium` com `border-t border-white/15` para separar da seção de Cotação (cinza). Padding `py-6`, nunca maior: o footer é um fechamento, não uma seção.
- Tipografia única `text-xs`; opacidades `55` para texto neutro, `70` para o endereço, `80` para o link. Único acento de cor é o pin laranja e o hover do link.
- Sem menu, sem redes sociais, sem telefone, sem e-mail, sem logo repetido, sem formulário. Contato é papel dos CTAs e do shortcode, não do footer.
- Ano gerado em build (`new Date().getFullYear()`); marca e endereço vêm de `site.ts` (`MARCA`, `ENDERECO`), nunca digitados no componente.
- O link da B2 é o **único** `<a>` externo da página e leva `rel="noopener noreferrer"`. Se o cliente exigir CNPJ ou política de privacidade, entram como quarto item `text-xs text-neutral-light/55` depois do endereço, sem mudar o layout.

## 4.2 Contrato de tom e ritmo

Vive em `src/lib/rhythm.mjs` — um arquivo, três leitores: o primitivo `Section.astro` (aplica as classes), o compositor (resolve) e o `check:lp` (confere). Mexer nele muda o padrão inteiro.

**Tons** disponíveis para seção de miolo. Navy é reservado à estrutura fixa e aos blocos internos.

| Tom | Classe |
|---|---|
| `light` | `bg-neutral-light` |
| `gray` | `bg-neutral-gray-100` |

**Ritmos** — pares de padding aprovados pelo `docs/GUIA-LAYOUT.md`.

| Ritmo | Classe | Para |
|---|---|---|
| `open` | `pt-20 pb-10` | primeira seção depois do hero, terminando em grid de cards |
| `even` | `py-16` | seção padrão |
| `tight` | `pt-6 pb-10` | seção depois de outra que já respirou |
| `flow` | `pt-6 pb-16` | seção plana logo depois de um painel navy: abre curto e devolve bastante ar |
| `panel-lead` | `pt-6 pb-16` | seção que abre com painel navy (o painel já traz `p-6 sm:p-8 lg:py-9`) |
| `panel-tight` | `pt-6 pb-10` | seção de painel navy que fecha o miolo, colada à Cotação |
| `centered-lead` | `pt-4 pb-20` | seção de cabeçalho centrado |
| `overlap` | `pt-6 pb-8` | cards sobrepostos à base de um bloco navy — **só imediatamente antes da Cotação** |
| `close` | `pt-8 pb-20` | a Cotação, estrutura fixa |

`panel-lead`, `panel-tight` e `overlap` declaram compensação de padding interno: o painel navy acrescenta ~36px de cada lado e os cards sobrepostos avançam ~40px abaixo do bloco. Sem essa compensação a conta de respiro daria falso negativo justamente nas duas seções que mais respiram.

**Como o compositor resolve.** Ele testa as combinações na ordem de preferência declarada por cada seção e devolve a primeira que satisfaz tudo:

- o tom e o ritmo estão entre os que a seção declara suportar;
- a sequência de fundos é uma corrida de `light` seguida de uma de `gray`, as duas não vazias;
- cada corrida tem exatamente um bloco navy, e dois blocos navy nunca são vizinhos;
- o respiro entre vizinhas cabe na faixa, inclusive o respiro até a Cotação;
- a primeira seção abre com ao menos 64px;
- ritmo marcado `mustBeLast` fica na última posição.

Entre as soluções válidas ele prefere a que põe a troca de fundo mais perto do meio da página, para que nenhuma das duas metades fique com uma seção só.

Se não houver solução, a mensagem de erro aponta o par de seções em que o respiro travou e o número que faltou. Não contorne editando classe: troque a seção, mude a ordem dentro da fase (`order` no manifesto) ou declare outro ritmo suportado.

## 4.3 Criar uma seção nova na biblioteca

Quando o briefing traz conteúdo relevante para conversão que **nenhuma seção existente comporta**, a saída é uma seção nova **na biblioteca**, não um componente solto dentro da LP. Assim ela nasce validada, entra no catálogo e fica disponível para as próximas LPs.

Antes de criar, descarte estas saídas mais baratas, nesta ordem:

1. o conteúdo **cabe** numa seção existente (vira bullet, feature, item da faixa, selo, linha de tabela ou pergunta do FAQ);
2. existe uma seção da biblioteca que **equivale** ao que o briefing pede com outro nome;
3. o conteúdo **não ajuda a converter** — menu, blog, "sobre nós" longo, vídeo institucional no hero, depoimento sem nome e empresa. Descarte com motivo registrado.

Se ainda assim a seção se justifica, no starter:

```
sections/<slug>/
  section.mjs      manifesto completo (copie o de uma seção da mesma fase)
  <Nome>.astro     componente: recebe `tone` e `rhythm`, embrulha tudo em <Section>
  <slug>.ts        dados de exemplo, tipados, com `as const satisfies`
  <slug>.<forma>.ts  variante de verificação, se o componente tiver outra forma (opcional)
  assets/          placeholders, se precisar
```

Requisitos do componente:

- raiz `<Section id="<slug>" tone={tone} rhythm={rhythm}>`; nada de `bg-` ou `py-` na raiz;
- cabeçalho por `<SectionHeader>` sempre que o layout permitir, para não repetir a escala tipográfica;
- pelo menos um CTA, declarado em `meta.ctas` e escrito como `<Button cta="<slug>-cta">` ou `data-cta="<slug>-{id}"`;
- todo o resto segue `docs/GUIA-LAYOUT.md` — espaçamentos, grids, raios, bordas, sombras, ícones, tipografia e movimento;
- `@media (prefers-reduced-motion: reduce)` em qualquer `transition` ou `animation`.

Requisitos do manifesto: `phase` e `order`; `tones` e `rhythms` na ordem de preferência; `carriesNavy` só se a seção tiver painel navy interno; `purpose`, `needs` e `match` escritos para quem vai decidir (frases inteiras, não rótulos); `contract` com as quantidades que `check:lp` deve verificar.

**Variantes.** Se o componente muda de forma conforme o conteúdo (com ou sem grupos, com ou sem descrição, com ou sem foto), o exemplo só exercita uma delas, e a outra chega à LP sem nunca ter sido montada. Declare cada forma que o exemplo não cobre em `variants` (`{ nome: 'o que muda' }`) e crie `<slug>.<nome>.ts` com os dados dela, exportando os mesmos nomes. A variante não vai para a LP: só a verificação a usa.

Depois, ainda no starter:

```bash
node scripts/library.mjs        # prettier + manifestos + compõe tudo no template e verifica
```

O script compõe **todas** as seções no template e roda `npm run check` e `npm run verify` lá, uma vez com o exemplo e outra com cada variante declarada — é assim que a seção nova prova que tipa, linta, formata e builda em todas as formas. Ele regenera `BIBLIOTECA.md` e restaura a composição de referência no fim.

Registre a seção nova no `CHANGELOG.md` do template e suba a versão menor do padrão.

## 5. Anatomia de seção (copiar literalmente)

Esqueleto de toda seção da biblioteca. O fundo e o padding **não** aparecem aqui: quem os aplica é o `<Section>`, a partir do `tone` e do `rhythm` que a composição passa (item 4.2). O contêiner também vem dele.

```astro
---
import Section from '@components/Section.astro'
import SectionHeader from '@components/SectionHeader.astro'
import Button from '@components/Button.astro'
import type { SectionProps } from '@lib/layout'
import { cta } from '@data/content'
import { dados } from '@data/sections/{{slug}}'

type Props = SectionProps

const { tone, rhythm } = Astro.props
---

<Section id="{{slug}}" tone={tone} rhythm={rhythm} data-{{nome}}>
  <SectionHeader eyebrow={dados.eyebrow} title={dados.title} text={dados.text} width="2xl" />

  <ul class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">…</ul>

  <Button cta="{{slug}}-cta" variant="primary" class="mt-8">{cta.primary}</Button>
</Section>
```

Seção que precisa de um bloco em largura total (bloco navy sangrando nas bordas) passa `container={false}` e monta os próprios contêineres.

Variante sobre navy: `<SectionHeader tone="light" rule />`, ou à mão `<Eyebrow tone="light">`, H2 `text-neutral-light`, traço `<span aria-hidden="true" class="mt-5 block h-[3px] w-16 bg-accent-orange">`, parágrafo `mt-5 text-neutral-light/75`, botão `mt-7`.

## 6. Escala tipográfica

| Papel | Classes |
|---|---|
| H1 | `font-display text-[2.75rem] sm:text-[3rem] xl:text-[3.1rem] font-extrabold leading-[1.1]` |
| H2 | `font-display text-3xl sm:text-4xl font-extrabold leading-tight` (`xl:text-[44px]` no bloco de diferenciais) |
| H3 card | `font-display text-lg font-extrabold leading-snug` |
| H3 painel | `font-display text-2xl lg:text-[28px] font-extrabold leading-tight` |
| Corpo seção | `font-sans text-[15px] leading-relaxed text-ink-soft` |
| Corpo card | `text-[13px] leading-relaxed text-ink-soft`; features `text-[13px] font-medium text-ink` |
| Eyebrow | `text-[12px] font-semibold uppercase tracking-[0.16em]` + quadrado 6px laranja |
| Índice | `text-[11px] font-extrabold tracking-[0.2em]`, sempre `"01"…"0N"` |
| Chip/tag | `text-[10px] font-bold uppercase tracking-[0.16em]` em pílula branca |
| Botão | `text-[15px] font-semibold`; link de card `text-[13px] font-bold`; header `text-[11–13px] font-bold uppercase` |

## 7. Receitas de componente

- **Card claro**: `rounded-2xl border border-neutral-gray-200/70 bg-neutral-light shadow-[0_1px_2px_rgba(13,29,48,0.05)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent-orange/50 hover:shadow-[0_28px_56px_-28px_rgba(0,33,71,0.35)]` + barra `absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent-orange group-hover:scale-x-100`.
- **Card escuro** (1 por grid, para destaque): `navy-premium border-white/10`, textos `neutral-light/65–90`.
- **Painel navy**: `navy-premium rounded-2xl border border-white/12` + malha blueprint mascarada + brilho `absolute -top-24 -right-20 size-72 rounded-full bg-accent-orange/15 blur-3xl` + cantos laranja 18px via `::before/::after`.
- **Badge de vidro**: `rounded-full`, gradiente `white/16 → white/4`, `border white/16`, `inset 0 1px 0 white/22`, brilho interno laranja; anel laranja no hover.
- **Bullet check**: `span.size-5 rounded-full bg-accent-orange/10 text-accent-orange` + ícone `check size-3`. Sobre navy: `bg-accent-orange/20`.
- **Chip de seta**: `size-8 rounded-full bg-neutral-gray-100 text-primary-dark group-hover:translate-x-0.5 group-hover:bg-accent-orange group-hover:text-neutral-light`.
- **Button**: `inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-sans text-[15px] font-semibold transition-colors duration-200`, **cantos retos**, ícone `arrow-right` à direita por padrão. Variantes: `primary` (laranja), `outline-light` (borda `white/35`), `outline-dark` (borda `ink/25`). Sempre inclui `btn-slave-whats`.
- **Eyebrow**: `inline-flex items-center gap-2.5` + `span.h-[6px] w-[6px] bg-accent-orange` + slot; `tone="light"` → `text-neutral-light/70`, default `text-ink-soft`.
- **Carrossel de logos**: lista duplicada, `translateX(-50%)` em 26s linear infinito, pausa no hover, `container-type: inline-size` e `width: calc(100cqw / 5)` por item, máscara lateral de 48px.
- **Tabs acessíveis**: `role="tablist"` vertical, `role="tab"` com `aria-selected`/`aria-controls`/roving `tabindex`, setas + Home/End, painéis alternados por `hidden`, entrada `320ms` opacity+translateY(6px).
- **Trilho mobile**: `-mx-6 px-6 flex snap-x snap-mandatory gap-4 overflow-x-auto` + scrollbar oculta + setas prev/next `lg:hidden` que rolam `card.offsetWidth + 16`.

## 7.1 Catálogo de ícones (`src/data/icons.ts`)

Só estes nomes existem, e a ficha já vem com um deles em cada campo `icon` — o prompt do chat recebe esta lista gerada. Se a ficha trouxer um nome que não está aqui, o `npm run ficha` recusa: é correção no chat, não ícone novo inventado na execução.

| Grupo | Nomes |
|---|---|
| Ação / navegação | `search` `arrow-right` `arrow-down` `chevron-down` `chevron-right` `menu` `close` `upload` `check` |
| Confiança / atendimento | `shield` `badge-check` `users` `clock` `map-pin` `pin` `phone` `mail` `chat` `whatsapp` `truck` |
| Produto / técnico | `gear` `sliders` `layers` `box` `cylinder` `circle` `disc` `target` `crosshair` `ruler` `barcode` `hash` `tag` `camera` `wrench` `bolt` `zap` `droplet` `move` `grid` `chip` `cpu` `settings-2` `file` `file-text` |
| Segmentos | `factory` `building` `mountain` `flame` `utensils` `leaf` `trend-up` `more-horizontal` `dots` |
| Redes (só se o cliente exigir) | `linkedin` `instagram` `youtube` |

Sugestões por uso: dados enviáveis → `barcode` `tag` `camera` `ruler` `factory` `target`; diferenciais → `search` `sliders` `layers` `users` `wrench`; selos → `clock` `shield` `map-pin`; hero → `shield` `gear` `truck`.

## 8. Regras de copy

- PT-BR, sentence case, sem ponto final em títulos, features e bullets.
- Eyebrow: 1–3 palavras (substantivo). H2: 3–8 palavras, benefício ou pergunta. Parágrafo de seção: 1 frase, 90–160 caracteres. Descrição de card: 1 frase, 50–90 caracteres. Feature/bullet: 2–4 palavras.
- Quantidades: da estrutura fixa, 3 pontos no hero e 3 selos de confiança. Das seções, quem manda é o `contract` do manifesto de cada uma (tabela em `docs/BIBLIOTECA.md`); `npm run check:lp` falha fora da faixa.
- Vocabulário de CTA (não variar): primário **"Solicite sua cotação"** · secundário **"Identifique seu {{produto}}"** · card **"Falar com especialista"** · contato **"Chamar no WhatsApp"** · header mobile **"Cotação"**. Numa mesma página, não repita o mesmo rótulo em três seções seguidas: alterne primário e secundário conforme o que a seção pede.
- Marcas atendidas aparecem por extenso no H1, na descrição e na meta. Logo no carrossel só com a decisão do cliente registrada (entrada 7). Nenhum texto usa claim proibido (regra 18).
- Microcopy de confiança: ícone laranja `size-4` + frase de 3–5 palavras.
- `alt` descritivo em PT-BR, sem "imagem de".
- Cada lista vive num `const x = [...] as const` (ou `readonly Tipo[]` com `interface`) no topo da seção; o markup só faz `.map`.

## 9. Imagens

- **LCP (hero)**: `Picture` com `widths=[640,1024,1536,1981]`, `formats=['avif','webp']`, `loading="eager"`, `fetchpriority="high"`, e `<link rel="preload" as="image" imagesrcset imagesizes fetchpriority="high">` no head.
- **Demais**: `format="webp"`, `width` explícito (360 produto · 640 card · 900 painel · 1220 pessoa), `loading="lazy"`, `decoding="async"`.
- Card com foto: `aspect-[4/3] object-cover` + véu `h-14 bg-gradient-to-t from-primary-dark-900/55`.
- Produto recortado: `object-contain mix-blend-multiply max-h-[7.75rem]` sobre palco `#f5f7fa→#fff` com pontos radiais mascarados + sombra elíptica.
- Logo do header: eager, `fetchpriority="low"`, altura `h-14 sm:h-24`.
- Fonte das imagens em `src/assets/<seção>/`, nunca em `public/` (exceto favicon). OG image = logo 512px.

## 10. Conversão e integração WordPress

- `site.url` = `URL_FINAL` absoluta (og:url).
- Todo botão: `<button type="button" class="btn-slave-whats …">`. Cards de aplicação: o `<button>` envolve o card inteiro.
- Slot do Hero renderiza `SHORTCODE_CHAT` numa coluna `lg:w-[300px]`; slot da Cotação renderiza `SHORTCODE_FORM` com `min-h-[520px]`. Placeholder tracejado quando vazio: rótulo "Espaço reservado" laranja + "Shortcode — …".
- `WHATSAPP` vazio desliga o botão flutuante; preenchido, renderiza botão fixo inferior-direito com ícone `whatsapp`.
- Publicação `wp-build`: workflow em `BRANCH_PRINCIPAL` → `npm ci` → `npm run build` → `test -f dist/index.html` → `git init -b wp-build` dentro de `dist/` → force-push. `concurrency: wp-build` com `cancel-in-progress: true`. Para Next, trocar `dist/` por `out/`.

### 10.1 Rastreamento de CTAs

Todo CTA leva `data-cta="{secao}-{elemento}"`, único na página (itens gerados em `.map` usam o `id` do item).

Da estrutura fixa, sempre presentes: `header-cta` · `hero-primary` · `hero-secondary` · `cotacao-whatsapp` · `float-whatsapp`.

Das seções, os nomes vêm do campo `ctas` do manifesto de cada uma e dependem da composição: `linhas-{id}` · `especificacoes-cta` · `situacoes-cta` e `situacoes-{id}` · `identificar-cta` · `processo-cta` · `aplicacoes-{id}` · `segmentos-{id}` · `clientes-cta` · `perguntas-cta` · `diferenciais-cta` · `escopo-cta`.

O `Button.astro` exige a prop `cta`, que vira `data-cta`; botões escritos à mão precisam do atributo explícito. `npm run check:lp` falha se faltar, repetir, sair do formato, ou se um CTA declarado no manifesto não aparecer no componente. A lista real desta LP sai de `lp.manifest.json` — entregue-a ao cliente para configurar os eventos no GTM/GA4.

### 10.2 LGPD

Abaixo do slot do formulário há uma nota fixa (`quote.lgpd` em `content.ts`) e, quando `site.privacyUrl` estiver preenchido, o link "Política de privacidade". Pergunte o link na entrada 10 do núcleo; se o cliente não tiver política, mantenha só a nota e registre como pendência no briefing.

## 11. SEO e acessibilidade

- `<title>`: "{{PRODUTO_PRINCIPAL}} para {{CONTEXTO_DE_USO}} | {{MARCA}}". `description` ≤ 160 chars citando marcas + apoio técnico.
- H1 e `<title>` contêm a palavra-chave principal da campanha (entrada 15, regra 17).
- `lang="pt-BR"`; OG: `type, locale, site_name, title, description, url, image`.
- Skip link "Pular para o conteúdo" → `<main id="main">`. Um `h1`, um `h2` por seção, `h3` em cards.
- Decorativos: `aria-hidden="true"` + `pointer-events-none`. Listas com `aria-label`. SVG informativo com `role="img"` + `aria-label`.
- Tabs e trilhos navegáveis por teclado.

## 12. Tooling e entrega

- `package.json` scripts: `dev`, `build`, `preview`, `check`, `lint`, `format`, `format:check`.
- Prettier `.prettierrc.json`: `semi false · singleQuote · printWidth 100 · trailingComma all · plugins [astro|tailwindcss] · tailwindStylesheet ./src/styles/global.css`.
- ESLint flat: `js.recommended`, `tseslint.recommended`, `astro.recommended` (ou `next/core-web-vitals`), `eslint-config-prettier`.
- `.gitignore`: `dist/ out/ .astro/ node_modules/ .env*`.
- Commits em português, prefixo convencional: `feat:`, `fix:`, `style:`, `ci:`, `chore:`.

### 12.1 Scripts do template e ordem de execução

| Comando | Quando |
|---|---|
| `npm run ficha` | **primeiro de todos.** Valida `docs/FICHA-LP.md`, confere cada bloco contra o contrato do manifesto, confirma a palavra-chave no H1, deriva a composição e escreve `ficha.json`. Falhou: pare e recuse |
| `npm run ficha -- --check` | igual, sem escrever. É o que o `verify` roda |
| `npm run ficha -- --plan` | só os slugs da composição derivada, para encadear num comando |
| `npm run compose -- <slugs>` | aplica a composição que o `ficha` imprimiu. Não altere a lista |
| `npm run compose -- --list` | o acervo por fase. Para consulta; a escolha não é sua |
| `npm run check:lp:rascunho` | **gate da primeira versão.** `check:lp` tolerando as imagens que a ficha declarou pendentes, e só elas. Texto de exemplo continua erro, e imagem placeholder não declarada também |
| `npm run check:lp` | **gate de publicação.** Rigoroso: nenhuma imagem de exemplo passa. Duas famílias: **estrutura fixa** (CTAs sem `data-cta`, `href="#"`, `transition` sem `prefers-reduced-motion`, número de `h1`, imagens sem `alt`/`loading`, slots de shortcode, assinaturas do Header/Hero/Cotação/Footer, `site.url` absoluta, palavra-chave no H1 e no title, claims proibidos, negativas no texto como aviso) e **composição** (ordem das fases, mínimo e máximo por fase, dois blocos navy, alternância de fundos, respiro entre vizinhas, página batendo com `lp.manifest.json`, arquivo órfão, contrato de conteúdo e ícones de cada seção) |
| `npm run check` | tipos do Astro; acusa tupla errada nos arquivos de dados |
| `npm run verify` | `ficha --check` + `check:lp` + lint + prettier + build, na mesma ordem do CI. **Obrigatório antes de dizer que a LP pode ir ao ar** — e ele continua vermelho enquanto houver asset pendente, de propósito |
| `npm run screens` | após o build: screenshots em 360/768/1440/1920 e `?grid=1` em `docs/screens/`. Exige `npx -y playwright@1.58.2 install chromium` uma vez. Serve `dist/` numa porta própria (4873) e recusa capturar se a porta estiver servindo outra LP |
| `npm run lh` | Lighthouse CI sobre `dist/` com limites em `lighthouserc.json` (performance ≥ 0,9, acessibilidade ≥ 0,95, LCP ≤ 2,5 s, CLS ≤ 0,1) |

Branch principal é **`main`** em toda LP nova. O workflow `build-wp.yml` só dispara nela. Exploração de layout é branch + PR, nunca pasta `staging/` com script de patch.

## 13. Checklist de entrega (Definition of Done)

Dois níveis, e eles não são a mesma coisa. **Primeira versão** é o que você entrega agora. **Pronta para publicar** é o que depende de material que talvez ainda não exista.

### Primeira versão

**Ficha e composição**

- [ ] `npm run ficha` passou; `ficha.json` existe.
- [ ] A composição aplicada é **exatamente** a que o `ficha` derivou; `lp.manifest.json` a registra.
- [ ] Nenhuma pergunta foi feita ao usuário durante a execução.
- [ ] `src/pages/index.astro` foi gerado por `compose`, não editado à mão.
- [ ] Nenhum componente, arquivo de dados ou pasta de assets de seção fora da composição.

**Conteúdo**

- [ ] `site.ts`, `content.ts` e os `src/data/sections/*.ts` transcritos da ficha, sem copy reescrita e sem valor de exemplo em texto.
- [ ] Palavra-chave principal no H1 e no title, ou `mainKeyword: null` registrado como "sem campanha" no `BRIEFING.md`.
- [ ] Nenhum claim proibido em texto da página. Área atendida dita na página, quando a campanha tem geografia restrita.
- [ ] Avisos de negativa lidos um a um: reescrito o que tinha o sentido que a campanha exclui.
- [ ] Nada inventado — número, prazo, certificação, logo de cliente, depoimento e alt text de foto que não existe.
- [ ] Imagem pendente ficou com o placeholder da biblioteca, no mesmo `aspect-ratio`.

**Estrutura fixa**

- [ ] Header idêntico ao 4.1.1: placa branca do logo, tagline central, CTA laranja com rótulo curto no mobile.
- [ ] Hero idêntico ao 4.1.2: grid `1fr 270px 300px`, coluna 2 vazia, foto ancorada em `right: var(--page-edge)` com 1700px, véus e pontos nas larguras especificadas, slot do chat em 300px.
- [ ] Cotação idêntica ao 4.1.4: grid `1.05fr · 1fr`, formulário via shortcode à esquerda, texto à direita, WhatsApp navy, 3 selos; no mobile o texto vem antes.
- [ ] Footer idêntico ao 4.1.5: uma linha com copyright, endereço com pin e crédito da B2; ano automático; nenhum outro link, menu ou contato.
- [ ] Dois slots de shortcode presentes com placeholder de fallback, lidos de `site.shortcodes`.

**Qualidade**

- [ ] `npm run check:lp:rascunho` passa, e a saída está colada na resposta.
- [ ] `npm run check` sem erro de tipo.
- [ ] `npm run build` passa.
- [ ] Todo CTA tem `data-cta` único no formato `secao-elemento`; lista entregue para o GTM.
- [ ] Nota de LGPD visível abaixo do formulário; link de privacidade presente ou ausente por decisão da ficha.
- [ ] Todos os CTAs são `button.btn-slave-whats`; nenhum `href="#"` ou `onClick`.
- [ ] Um `h1`; `h2` em cada seção; `id`s em português iguais aos do manifesto.
- [ ] Hero com `Picture` eager + preload; todas as outras imagens lazy com `width`.
- [ ] Toda transição/animação tem `prefers-reduced-motion`.
- [ ] Tabs, acordeões e trilhos funcionam por teclado; foco visível laranja.
- [ ] `og:url` absoluta; `title` e `description` no formato do item 11.
- [ ] Mobile 360px: sem scroll horizontal; trilhos com setas; header com CTA curto.
- [ ] `docs/screens/` com 360, 768, 1440, 1920 e `1440-grid` gerados a partir do build final.

**Registro**

- [ ] `docs/BRIEFING.md` com a origem (ficha e data), a composição derivada com veredicto por bloco, as entradas do núcleo, os assets pendentes e os conflitos.

### Pronta para publicar

- [ ] Todo asset real entregue; `assets.pendentes` da ficha vazio.
- [ ] `npm run verify` passa inteiro (`ficha --check` + `check:lp` estrito + lint + prettier + build), com a saída colada.
- [ ] Banner validado em 1440 e 1920 px: assunto dentro da coluna 2, sem invadir texto nem shortcode (item 4.1.3).
- [ ] Imagem recortada chegando recortada: nenhum aviso de fundo sólido sobre bloco navy.
- [ ] Workflow de publicação aponta para a branch correta.

Enquanto a segunda lista não fechar, **não diga que a LP está pronta**. Diga que a primeira versão está de pé e o que falta.

## 14. Formato da sua resposta

Comece pela frase que diz o estado real: "Primeira versão de pé, com N pendências" ou "Execução recusada: a ficha precisa de N correções".

1. **Ficha**: saída de `npm run ficha` — composição derivada, blocos que ficaram fora com o motivo, assets pendentes.
2. **Composição**: tabela com seção · fase · fundo · respiro · veredicto do bloco na ficha. Abaixo, os blocos que ficaram fora e por quê. Fundo e respiro saem de `lp.manifest.json`; você não os escolheu.
3. Árvore de arquivos criada/alterada.
4. Saída de `npm run compose`, `npm run check:lp:rascunho`, `npm run check` e `build`.
5. Checklist do item 13, os dois níveis, com o que ficou pendente e por quê.
6. **O que falta para publicar**: uma linha por asset pendente, com a especificação, pronta para o usuário encaminhar ao designer ou ao cliente.
7. Caminhos dos screenshots em `docs/screens/` e a lista de `data-cta` da página.
8. Versão do padrão seguida (meta `b2-lp-standard`) e qualquer desvio, com justificativa.
9. **Se algo na ficha atrapalhou a execução** — veredicto que parecia errado, campo ambíguo, conteúdo que não caberia —, diga aqui, em uma linha cada. É o que melhora a próxima ficha, e é a única forma de isso voltar para o chat.

Na recusa, substitua tudo por: o que impediu, a saída da ferramenta que acusou, e a lista do que pedir no chat — cada item como uma frase que o usuário possa colar na conversa.

