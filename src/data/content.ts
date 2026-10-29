/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'

import heroBg from '@assets/heroBg.png'
import heroProduto from '@assets/hero-produto.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/**
 * Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar.
 * Desvio aprovado: o primário segue o mockup de abertura da Safe Mine ("Solicitar cotação").
 */
export const cta = {
  primary: 'Solicitar cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu equipamento',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Tagline do mockup de abertura; o produto completo continua no H1 e no title. */
  tagline: 'Supressão de incêndio SEIVE',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Proteção para operações exigentes',
  title: 'Sistemas de supressão de incêndio SEIVE para máquinas pesadas',
  text: 'Proteção automatizada para equipamentos móveis e operações de mineração, com atendimento consultivo da Safe Mine.',
  banner: {
    src: heroBg,
    alt: 'Escavadeira com reservatório supressor SEIVE instalado, em operação numa mina',
  },
  /** Link secundário do mockup: rola até a seção do kit, não abre atendimento. */
  secondary: { label: 'Conheça o sistema', href: '#linhas' },
  /** Selo sob os botões. */
  trust: { icon: 'shield', label: 'Solução dimensionada para o seu equipamento' },
  /** Card do produto à direita (fora do WordPress, ou enquanto o chat não carrega). */
  product: {
    eyebrow: 'Sistema SEIVE',
    text: 'Proteção embarcada para máquinas pesadas.',
    photo: { src: heroProduto, alt: 'Reservatório supressor SEIVE com cilindro de nitrogênio' },
  },
  /** Faixa de três pontos na base do hero. */
  points: [
    { icon: 'gear', line1: 'Detecção e', line2: 'atuação automática' },
    { icon: 'excavator', line1: 'Proteção para', line2: 'equipamentos móveis' },
    { icon: 'mountain', line1: 'Aplicação em', line2: 'mineração e indústria' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  banner: Photo
  secondary: { label: string; href: string }
  trust: TrustItem
  product: { eyebrow: string; text: string; photo: Photo }
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de supressão de incêndio.',
  text: 'Solicite uma avaliação comercial para proteção contra incêndio em sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'zap', label: 'Detecção e atuação automáticas' },
    { icon: 'power', label: 'Acionamento manual disponível' },
    { icon: 'shield', label: 'Garantia de 12 meses' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
