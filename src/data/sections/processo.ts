/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Alternativa ao painel de identificação para quando o atrito do visitante não é
 * "não sei o que pedir" e sim "não sei como isso acontece" — típico de serviço,
 * instalação, adequação a norma e contrato de manutenção.
 *
 * 4 a 6 etapas. Com 3 a promessa parece rasa; com 7 ninguém lê.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

/**
 * Sem prazos confirmados pelo cliente, nenhuma etapa leva `when` (regra da seção).
 * A lista é anotada como `ProcessStep[]` porque, com `as const`, o tipo literal
 * não teria a propriedade opcional e o componente não compilaria.
 */
const steps: readonly ProcessStep[] = [
  {
    id: 'analise',
    icon: 'search',
    title: 'Análise',
    description: 'Avaliamos a máquina, a aplicação e o ambiente para entender os pontos de risco.',
  },
  {
    id: 'especificacao',
    icon: 'ruler',
    title: 'Especificação',
    description: 'Indicamos a solução SEIVE e o dimensionamento adequados a cada equipamento.',
  },
  {
    id: 'fabricacao',
    icon: 'factory',
    title: 'Fabricação',
    description: 'Sistema produzido pela SEIVE em Contagem-MG, sob gestão da qualidade ISO 9001.',
  },
  {
    id: 'instalacao',
    icon: 'wrench',
    title: 'Instalação',
    description: 'Montagem no equipamento, com painel de monitoramento e acionador na cabine.',
  },
  {
    id: 'suporte',
    icon: 'shield',
    title: 'Suporte',
    description:
      'Suporte técnico especializado e garantia de 12 meses contra defeitos de fabricação.',
  },
]

export const process = {
  eyebrow: 'Como funciona',
  title: 'Da análise da máquina ao pós-venda',
  text: 'Atendimento consultivo da Safe Mine do primeiro contato ao pós-venda, com sistema fabricado e certificado pela SEIVE.',
  microcopy: 'Atendimento consultivo em todo o Brasil',
  steps,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  steps: readonly ProcessStep[]
}
