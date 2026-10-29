/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3 e cabeçalho centrado. O card inteiro é o CTA.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Proteção para máquinas pesadas e equipamentos móveis',
  text: 'Sistema dimensionado para cada tipo de máquina, em operações de mineração, construção, florestais e agrícolas.',
  items: [
    {
      id: 'mineracao',
      label: 'Máquinas de mineração',
      description:
        'Caminhões fora de estrada e escavadeiras em ambiente abrasivo e de alto custo de parada.',
      photo: { src: app1, alt: 'Caminhão fora de estrada em mina' },
    },
    {
      id: 'construcao',
      label: 'Máquinas de construção',
      description: 'Escavadeiras, carregadeiras e equipamentos móveis de obras e infraestrutura.',
      photo: { src: app2, alt: 'Escavadeira com sistema supressor SEIVE' },
    },
    {
      id: 'florestal',
      label: 'Máquinas florestais',
      description:
        'Harvesters e forwarders cercados de galhos e resíduos secos na colheita de madeira.',
      photo: { src: app3, alt: 'Máquina florestal carregando toras' },
    },
    {
      id: 'agricola',
      label: 'Máquinas agrícolas',
      description:
        'Colheitadeiras e tratores em jornadas longas, com palha e poeira junto ao motor.',
      photo: { src: app4, alt: 'Colheitadeira em lavoura de grãos' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
