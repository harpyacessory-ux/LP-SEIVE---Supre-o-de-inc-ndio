/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * Os 6 dados são os campos de cotação do briefing da campanha.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para cotação',
  title: 'Quer cotar a proteção da sua máquina?',
  text: 'Não precisa ter tudo em mãos. Envie o que tiver e a equipe indica a solução SEIVE adequada para a sua operação.',
  microcopy: 'Avaliação comercial da sua operação',
  items: [
    { icon: 'truck', label: 'Tipo de máquina', hint: 'equipamento a proteger' },
    { icon: 'tag', label: 'Marca e modelo', hint: 'identificação do ativo' },
    { icon: 'hash', label: 'Quantidade', hint: 'equipamentos a proteger' },
    { icon: 'factory', label: 'Segmento', hint: 'setor da operação' },
    { icon: 'pin', label: 'Cidade/UF', hint: 'local da operação' },
    { icon: 'file', label: 'Descrição', hint: 'condições de aplicação' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
