/**
 * Dados globais da LP. Tudo que aparece em mais de um lugar (head, header, footer,
 * JSON-LD) vem daqui. Transcrito da ficha de execução (`docs/FICHA-LP.md`): campos `site` e `campanha`.
 */
export const site = {
  /** Nome completo da empresa (entrada 1). */
  brand: 'Safe Mine Soluções',
  /** Nome curto usado em frases como "Por que a …" (entrada 2). */
  brandShort: 'Safe Mine',
  /** Produto principal, no plural (entrada 3). Vai na tagline do header e no H1. */
  product: 'Sistemas de supressão de incêndio',
  /** Contexto de uso (entrada 4). Completa o H1 e o title. */
  context: 'máquinas e equipamentos',
  /** URL absoluta da página no ar (entrada 10). Usada em canonical e og:url. */
  url: 'https://lp-seive-supressao-de-incendio.vercel.app/',
  /** Endereço completo com CEP (entrada 9). Footer e JSON-LD. */
  address: 'Belo Horizonte/MG',
  /** Link da política de privacidade do cliente (entrada 10). Vazio esconde o link, mas a nota de LGPD continua. */
  privacyUrl: '',
  /** Versão do padrão B2 que esta LP segue. Não editar manualmente; vem do template. */
  standardVersion: '2.8.0',
} as const

/**
 * Shortcodes do plugin de atendimento do WordPress (entrada 11 da entrevista).
 *
 * Ficam aqui, e não na página, porque `src/pages/index.astro` é gerado por
 * `npm run compose` e seria sobrescrito a cada recomposição.
 */
export const shortcodes = {
  /** Chat na coluna de 300px do hero. */
  chat: '[atendimento_chat id="default"]',
  /** Formulário da seção de cotação. */
  form: '[atendimento_form id="default-form"]',
} as const

/**
 * Título da aba. A ficha define `conteudo.title`: o formato padrão
 * ("{Produto} para {contexto} | {Marca}") daria 83 caracteres com "Safe Mine Soluções".
 */
export const title = 'Sistema de supressão de incêndio para máquinas | Safe Mine'

/** Meta description (≤ 160 caracteres). Ajuste o texto, mantendo marcas e o apoio técnico. */
export const description =
  'Sistema de supressão de incêndio SEIVE para máquinas e equipamentos, com atendimento consultivo da Safe Mine e suporte técnico em todo o Brasil.'

/**
 * Campanha que leva tráfego para esta LP (entrada 15). Quem clica digitou a
 * palavra-chave antes: se o H1 não a repete, a pessoa volta para o Google.
 */
export const campaign = {
  /**
   * Palavra-chave principal, como está na campanha. O `check:lp` falha se ela não
   * estiver no H1 e no title — aceita maiúscula, acento, plural e outra ordem.
   * `null` quando a LP não tem campanha definida; vazio é entrada não preenchida.
   */
  mainKeyword: 'sistema de supressão de incêndio',
  /**
   * Negativas **de oferta** da campanha — o que a empresa não vende. O `check:lp`
   * avisa quando o texto da página usa uma delas. As de intenção (emprego, curso)
   * ficam só no BRIEFING.md.
   */
  negatives: ['cozinha', 'coifa', 'sprinkler', 'hidrante'],
  /**
   * Claims que o briefing proíbe ("autorizado", "distribuidor", "até 42%"), em todas
   * as formas em que podem aparecer. O `check:lp` falha se a página usar qualquer um.
   */
  forbidden: [
    'autorizado',
    'autorizada',
    'distribuidor oficial',
    'representante oficial',
    'exclusivo',
    'exclusiva',
    'líder',
    'a única do Brasil',
    'único no mundo',
  ],
} as const satisfies {
  mainKeyword: string | null
  negatives: readonly string[]
  forbidden: readonly string[]
}

/** WhatsApp comercial (entrada 12). Número no formato internacional, só dígitos (ex.: 5511999999999). Vazio desativa o botão flutuante. */
export const whatsapp = '5531995538843'
