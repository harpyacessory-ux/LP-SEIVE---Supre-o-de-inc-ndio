/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * No mockup da Safe Mine (30/10/2026): texto à esquerda, foto do acionador em card com o
 * técnico sobreposto à direita e os 5 diferenciais numa barra navy abaixo. São 5 exatos:
 * a barra é `lg:grid-cols-5`.
 *
 * `cenario.jpg` é a foto do acionador SEIVE publicada pela Safe Mine; `pessoa.png` é o
 * recorte do técnico enviado pelo cliente (capacete ao quadril, fundo transparente).
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
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras. */
  titleLines: ['Proteção de ativos', 'com tecnologia SEIVE.'],
  text: `A ${site.brandShort} fornece o sistema SEIVE com atendimento consultivo. A solução é indicada conforme a máquina, a aplicação e o ambiente de cada operação.`,
  /** Selo sob o botão. */
  trust: { icon: 'chat', label: 'Conte qual equipamento você precisa proteger.' },
  scene: {
    src: cenario,
    alt: 'Acionador SEIVE instalado em máquina',
  },
  person: {
    src: pessoa,
    alt: `Especialista da ${site.brandShort} de capacete, com os braços cruzados`,
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
      icon: 'gear',
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
  titleLines: readonly [string, string]
  text: string
  trust: { icon: IconName; label: string }
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
