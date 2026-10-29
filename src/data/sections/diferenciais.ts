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
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Tecnologia SEIVE,', 'atendimento Safe Mine.'],
  text: `A ${site.brandShort} conecta a sua operação ao sistema SEIVE, primeiro supressor certificado pela ABNT no Brasil e com mais de 6.000 instalações segundo a fabricante, do diagnóstico ao suporte técnico.`,
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
      icon: 'users',
      title: 'Atendimento consultivo',
      description: 'Análise de cada operação para indicar a solução compatível.',
    },
    {
      icon: 'shield',
      title: 'Tecnologia certificada',
      description: 'Sistema SEIVE patenteado e certificado pela ABNT desde 2012.',
    },
    {
      icon: 'check',
      title: 'Normas internacionais',
      description: 'Atende a requisitos da NFPA 17, NFPA 122 e UL 1254.',
    },
    {
      icon: 'clock',
      title: 'Garantia estendida',
      description: 'Painel 24 meses, ampolas 10 anos e reservatórios 5 anos.',
    },
    {
      icon: 'pin',
      title: 'Atuação nacional',
      description: 'Atendimento a operações em todo o território nacional.',
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
