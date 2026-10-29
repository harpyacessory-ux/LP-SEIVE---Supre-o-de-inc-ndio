/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * `linha-2.png` (sistema fixo de alarme) segue como placeholder: a ficha declara o
 * slot `linhas` em `assets.pendentes`.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Soluções de proteção',
  title: 'Supressão de incêndio para cada operação',
  text: 'Sistemas SEIVE e soluções de detecção fornecidos pela Safe Mine para máquinas, ambientes críticos e equipamentos estacionários.',
  items: [
    {
      id: 'maquinas',
      tag: 'Máquinas',
      title: 'Supressão para máquinas',
      description:
        'Sistema SEIVE com detecção e atuação automáticas para máquinas pesadas e autopropelidas.',
      photo: { src: linha1, alt: 'Reservatório de pó químico SEIVE' },
      features: ['Atuação em até 15 s', 'Botoeiras manuais', 'Painel de monitoramento'],
      dark: false,
    },
    {
      id: 'alarme',
      tag: 'Ambientes',
      title: 'Alarme e detecção fixos',
      description:
        'Monitoramento permanente de salas elétricas, usinas e áreas técnicas, com alerta rápido.',
      photo: { src: linha2, alt: 'Central de alarme e detecção de incêndio' },
      features: ['Detecção e alarme', 'Monitoramento contínuo', 'Aplicação sob medida'],
      dark: false,
    },
    {
      id: 'estacionarios',
      tag: 'Estacionários',
      title: 'Geradores e estacionários',
      description:
        'Projeto dimensionado para geradores e equipamentos fixos que sustentam a operação.',
      photo: { src: linha3, alt: 'Reservatório supressor SEIVE vermelho' },
      features: ['Projeto dimensionado', 'Grupos geradores', 'Equipamentos estacionários'],
      dark: false,
    },
    {
      id: 'pecas',
      tag: 'Pós-venda',
      title: 'Peças genuínas e suporte',
      description:
        'Peças genuínas SEIVE e suporte técnico especializado para manter o sistema ativo.',
      photo: { src: marcasPhoto, alt: 'Família de reservatórios supressores SEIVE' },
      features: ['Peças genuínas', 'Suporte especializado', 'Garantia de 12 meses'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
