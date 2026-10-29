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
import { site } from './site'

import heroBg from '@assets/heroBg.png'

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

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu equipamento',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Proteção de máquinas',
  title: 'Sistemas de supressão de incêndio SEIVE para máquinas pesadas',
  text: 'Proteção automatizada para equipamentos móveis, máquinas industriais e operações de mineração, com atendimento consultivo da Safe Mine.',
  banner: {
    src: heroBg,
    alt: 'Equipamento pesado com o kit de incêndio SEIVE instalado',
  },
  points: [
    { icon: 'shield', line1: 'Sistemas SEIVE', line2: 'para máquinas pesadas' },
    { icon: 'zap', line1: 'Proteção automatizada', line2: 'para equipamentos móveis' },
    { icon: 'mountain', line1: 'Solução para', line2: 'mineração' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  banner: Photo
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
