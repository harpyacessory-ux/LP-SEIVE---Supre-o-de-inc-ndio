/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Nesta LP os cards são os componentes do Kit de Incêndio SEIVE, e o item escuro é o
 * pós-venda — no mockup da Safe Mine ele vira a faixa azul abaixo dos três cards.
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
  eyebrow: 'Kit de Incêndio SEIVE',
  title: 'O que compõe o sistema',
  text: 'Reservatório, monitoramento e acionadores integrados para proteger máquinas pesadas e equipamentos móveis.',
  items: [
    {
      id: 'reservatorio',
      tag: 'Supressão',
      title: 'Reservatório de pó químico',
      description: 'Pó químico ABC 90%, com pressurização por nitrogênio.',
      photo: { src: linha1, alt: 'Reservatório de pó químico SEIVE' },
      features: ['Reservatório de 15 kg', 'Pó químico ABC 90%', 'Cilindro de nitrogênio de 320 g'],
      dark: false,
    },
    {
      id: 'monitoramento',
      tag: 'Monitoramento',
      title: 'Painel de monitoramento',
      description: 'Sinalização visual de status e registro dos eventos do sistema.',
      photo: { src: linha2, alt: 'Painel de monitoramento SEIVE' },
      features: ['Bivolt 12/24 VCC', 'LEDs de status', 'Registro dos últimos 2.000 eventos'],
      dark: false,
    },
    {
      id: 'acionadores',
      tag: 'Acionamento',
      title: 'Acionadores automático e manual',
      description: 'Acionamento na cabine e acionador manual externo de alumínio.',
      photo: { src: linha3, alt: 'Acionador manual SEIVE' },
      features: ['Acionamento automático', 'Acionador manual externo', 'Cilindro de ativação N₂'],
      dark: false,
    },
    {
      id: 'pecas',
      tag: 'Peças e suporte',
      title: 'Suporte para manter seu sistema ativo.',
      description: 'Peças genuínas SEIVE e atendimento técnico especializado.',
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
