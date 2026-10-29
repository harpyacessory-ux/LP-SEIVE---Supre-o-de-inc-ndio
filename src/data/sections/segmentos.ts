/**
 * Dados da seção "Segmentos atendidos" (biblioteca B2, fase: prova).
 *
 * 8 abas exatas: 7 segmentos reais + o 8º obrigatoriamente "outras", que é a rota
 * de fuga de quem não se vê na lista. Cada aba tem 3 bullets.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import seg1 from '@assets/segmentos/segmento-1.png'
import seg2 from '@assets/segmentos/segmento-2.png'
import seg3 from '@assets/segmentos/segmento-3.png'
import seg4 from '@assets/segmentos/segmento-4.png'
import seg5 from '@assets/segmentos/segmento-5.png'
import seg6 from '@assets/segmentos/segmento-6.png'
import seg7 from '@assets/segmentos/segmento-7.png'
import seg8 from '@assets/segmentos/segmento-8.png'

export interface Segment {
  id: string
  icon: IconName
  label: string
  description: string
  bullets: readonly [string, string, string]
  photo?: Photo
}

export const segments = {
  eyebrow: 'Principais aplicações',
  title: 'Proteção para cada setor da operação',
  text: 'O sistema é dimensionado conforme o equipamento e a aplicação, em máquinas autopropelidas, móveis ou estacionárias.',
  items: [
    {
      id: 'mineracao',
      icon: 'mountain',
      label: 'Mineração',
      description:
        'Operação abrasiva, com ar carregado e descargas elétricas constantes, onde uma máquina parada pesa no custo da produção.',
      bullets: ['Caminhões fora de estrada', 'Escavadeiras e carregadeiras', 'Perfuratrizes'],
      photo: { src: seg1, alt: 'Caminhão fora de estrada em mina' },
    },
    {
      id: 'agronegocio',
      icon: 'grid',
      label: 'Agronegócio',
      description:
        'Máquinas que plantam e colhem em jornadas longas, com palha e poeira junto ao motor, onde uma parada custa a safra.',
      bullets: ['Colheitadeiras de grãos', 'Tratores', 'Pulverizadores autopropelidos'],
      photo: { src: seg2, alt: 'Colheitadeira em lavoura de grãos' },
    },
    {
      id: 'florestal',
      icon: 'leaf',
      label: 'Florestal',
      description:
        'Colheita e baldeio de madeira, uma das operações de maior risco, com galhos e resíduos secos em volta do equipamento.',
      bullets: ['Harvesters', 'Forwarders', 'Escavadeiras florestais'],
      photo: { src: seg3, alt: 'Máquina florestal carregando toras' },
    },
    {
      id: 'portuario',
      icon: 'box',
      label: 'Portuário',
      description:
        'Movimentação de contêineres e cargas em turnos contínuos, onde um incêndio para o pátio e atrasa a operação.',
      bullets: ['Reach stackers', 'Empilhadeiras de contêineres', 'Guindastes móveis'],
      photo: { src: seg4, alt: 'Reach stacker movimentando contêiner' },
    },
    {
      id: 'industria',
      icon: 'factory',
      label: 'Indústria',
      description:
        'Equipamentos industriais e de pátio em operação contínua, onde um princípio de incêndio interrompe a produção.',
      bullets: ['Equipamentos de pátio', 'Instalações industriais', 'Áreas técnicas'],
      photo: { src: seg5, alt: 'Equipamento de pátio em operação' },
    },
    {
      id: 'energia',
      icon: 'bolt',
      label: 'Geradores e energia',
      description:
        'Geradores, usinas e salas elétricas que sustentam a operação pedem detecção rápida e proteção sob medida.',
      bullets: ['Grupos geradores', 'Usinas de energia', 'Salas elétricas'],
      photo: { src: seg6, alt: 'Gerador de energia em subestação' },
    },
    {
      id: 'moveis',
      icon: 'truck',
      label: 'Equipamentos móveis',
      description:
        'Escavadeiras, carregadeiras e outros autopropelidos de obras e infraestrutura, com projeto conforme os pontos de risco.',
      bullets: ['Escavadeiras', 'Pás carregadeiras', 'Máquinas de obras'],
      photo: { src: seg7, alt: 'Escavadeira com sistema supressor SEIVE' },
    },
    {
      id: 'outras',
      icon: 'dots',
      label: 'Outras aplicações',
      description:
        'Avaliamos outras máquinas com risco de incêndio, como colhedoras de cana e algodão e frotas de locação.',
      bullets: ['Colhedoras de cana', 'Colhedoras de algodão', 'Frotas de locação'],
      photo: { src: seg8, alt: 'Colhedora de algodão em lavoura' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Segment, Segment, Segment, Segment, Segment, Segment, Segment, Segment]
}
