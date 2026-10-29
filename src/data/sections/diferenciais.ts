/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * `cenario.jpg` é a foto do acionador SEIVE publicada pela Safe Mine; `pessoa.png`
 * segue como placeholder — a ficha declara o slot `diferenciais` em `assets.pendentes`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: 'Diferenciais SEIVE',
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Proteção de ativos', 'com tecnologia SEIVE.'],
  text: `A ${site.brandShort} fornece o sistema SEIVE com atendimento consultivo — a solução é indicada conforme a máquina, a aplicação e o ambiente de cada operação.`,
  scene: {
    src: cenario,
    alt: 'Acionador SEIVE instalado em máquina',
  },
  person: {
    src: pessoa,
    alt: `Especialista da ${site.brandShort}`,
  },
  reasons: [
    {
      icon: 'zap',
      title: 'Detecção e atuação',
      description: 'Atuação automática conforme a configuração do sistema.',
    },
    {
      icon: 'power',
      title: 'Acionamento manual',
      description: 'Possibilidade de intervenção manual por botoeiras.',
    },
    {
      icon: 'cpu',
      title: 'Painel de monitoramento',
      description: 'Status do sistema e registro dos últimos 2.000 eventos.',
    },
    {
      icon: 'shield',
      title: 'Garantia de fábrica',
      description: '12 meses contra defeito de fabricação.',
    },
    {
      icon: 'wrench',
      title: 'Suporte técnico',
      description: 'Canal técnico direto durante o período de garantia.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
