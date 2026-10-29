/**
 * Dados da seção "Perguntas frequentes" (biblioteca B2, fase: autoridade).
 *
 * 4 a 8 perguntas. Servem para derrubar a última objeção antes do formulário, não
 * para explicar o produto — isso é trabalho das seções de oferta. Se a resposta
 * passar de 3 linhas, a objeção é grande demais para um acordeão e merece seção.
 *
 * As perguntas são as que o comercial realmente ouve, na palavra do cliente. Aqui
 * vêm do FAQ publicado no site da Safe Mine e da garantia da apresentação SEIVE.
 */
export interface Question {
  id: string
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que perguntam antes de contratar',
  text: 'As dúvidas mais comuns sobre o sistema e o atendimento. Não encontrou a sua? Fale com a nossa equipe.',
  items: [
    {
      id: 'abrangencia',
      question: 'A Safe Mine atende empresas de outras regiões?',
      answer:
        'Sim. A atuação abrange todo o território nacional, considerando as características e as necessidades de cada projeto.',
    },
    {
      id: 'informacoes',
      question: 'Quais informações devo enviar para solicitar um atendimento?',
      answer:
        'Conte sobre a operação, o equipamento e a aplicação. Segmento, localização, características da máquina e requisitos técnicos ajudam a equipe a indicar a solução adequada.',
    },
    {
      id: 'venda-direta',
      question: 'A Safe Mine vende o sistema diretamente?',
      answer:
        'Sim. A Safe Mine fornece o sistema de supressão SEIVE e peças genuínas, com apoio na escolha dos itens adequados à aplicação e ao modelo da máquina.',
    },
    {
      id: 'operador',
      question: 'O sistema depende do operador para funcionar?',
      answer:
        'Não. A detecção e a atuação são automáticas, e o sistema também conta com acionamentos manuais por botoeiras posicionadas à vista.',
    },
    {
      id: 'garantia',
      question: 'Qual é a garantia do sistema SEIVE?',
      answer:
        'São 12 meses contra defeitos de fabricação. Segundo a SEIVE, alguns componentes têm garantia maior — painel 24 meses, ampolas 10 anos e reservatórios de pó 5 anos.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly Question[]
}
