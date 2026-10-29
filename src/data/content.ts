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
  eyebrow: 'Proteção contra incêndio',
  title: 'Sistema de supressão de incêndio para máquinas e equipamentos',
  text: 'Sistemas SEIVE com detecção e atuação automáticas para máquinas de mineração, agrícolas, florestais, portuárias e geradores, com atendimento consultivo.',
  banner: {
    src: heroBg,
    alt: 'Máquina pesada com sistema supressor SEIVE instalado',
  },
  points: [
    { icon: 'shield', line1: 'Sistema SEIVE', line2: 'certificado ABNT' },
    { icon: 'zap', line1: 'Atuação automática', line2: 'em até 15 s' },
    { icon: 'users', line1: 'Atendimento', line2: 'consultivo' },
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
  text: 'Nossa equipe indica a solução SEIVE adequada para a sua máquina e a sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'shield', label: 'Garantia de 12 meses' },
    { icon: 'wrench', label: 'Suporte técnico especializado' },
    { icon: 'pin', label: 'Atendimento em todo o Brasil' },
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
