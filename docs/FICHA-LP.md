```yaml
ficha: 1
padrao: 2.8.0
cliente: Safe Mine Soluções
produto: Kit de Incêndio SEIVE
data: 2026-10-29

site:
  brand: Safe Mine Soluções
  brandShort: Safe Mine
  product: Sistemas de supressão de incêndio SEIVE
  context: máquinas pesadas
  url: https://lp-seive-supressao-de-incendio.vercel.app/
  address: Belo Horizonte/MG
  privacyUrl: ''
  whatsapp: '5531995538843'
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: supressão de incêndio SEIVE
  negatives:
    - extintor doméstico
    - extintor automotivo avulso
    - mangueira de incêndio
    - alarme residencial
    - detector de fumaça casa
    - central de alarme
    - detecção para data center
    - sistema de lubrificação
  forbidden:
    - risco zero
    - elimina o risco
    - elimina riscos
    - evita perdas
    - evita prejuízos
    - 100% seguro
    - autorizado
    - autorizada
    - distribuidor oficial
    - representante oficial
    - exclusivo
    - exclusiva
    - líder
    - a única do Brasil
    - único no mundo
  areaAtendida: null
  onde: null
  familias:
    - nome: produto-categoria
      termos:
        - sistema de supressão de incêndio
        - supressão de incêndio SEIVE
      responde: linhas
    - nome: equipamento-aplicacao
      termos:
        - supressão para máquinas pesadas
        - supressão para equipamentos móveis
        - proteção contra incêndio máquinas industriais
        - sistema automático combate incêndio máquinas
      responde: aplicacoes
    - nome: setor
      termos:
        - sistema de supressão de incêndio mineração
      responde: aplicacoes
    - nome: transacional
      termos:
        - cotação sistema supressão incêndio
      responde: identificar

publico: [Gestores de manutenção, Gestores de segurança, Gestores de frotas]

marcas:
  usarLogos: false
  nomes: [SEIVE]
  autorizacao: a Safe Mine cita a SEIVE por extenso no próprio site; uso da logo da SEIVE não autorizado por escrito

tokens:
  padrao: false
  cores:
    primaria: '#102c73'
    marca: '#163b99'
    acao: '#4d7f22'
    verde-marca: '#7ba249'

conteudo:
  title: Supressão de incêndio SEIVE para máquinas pesadas | Safe Mine
  description: Supressão de incêndio SEIVE para máquinas pesadas e equipamentos móveis, com detecção e atuação automáticas e atendimento consultivo da Safe Mine.
  hero:
    # Copy do mockup claro de abertura (29/10/2026, desvio registrado no BRIEFING.md). O H1 do
    # mockup ("Proteção contra incêndio para máquinas pesadas.") não tem a palavra-chave da
    # campanha; ficou o visual do mockup com o termo "supressão de incêndio SEIVE".
    eyebrow: Sistemas de supressão SEIVE
    title: Supressão de incêndio SEIVE para máquinas pesadas.
    text: Proteção automatizada para equipamentos móveis e operações de mineração. A Safe Mine ajuda a dimensionar a solução para a sua aplicação.
    points:
      - icon: gear
        line1: Detecção e atuação automática
        line2: Resposta integrada ao sistema.
      - icon: excavator
        line1: Proteção para equipamentos móveis
        line2: Solução para máquinas pesadas.
      - icon: mountain
        line1: Aplicação em mineração e indústria
        line2: Seleção conforme a operação.
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de supressão de incêndio.
    text: Solicite uma avaliação comercial para proteção contra incêndio em sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: zap
        label: Detecção e atuação automáticas
      - icon: power
        label: Acionamento manual disponível
      - icon: shield
        label: Garantia de 12 meses
    lgpd: Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.

blocos:
  linhas:
    veredicto: completo
    responde: [produto-categoria]
    papeis: [Gestores de manutenção, Gestores de frotas]
    eyebrow: Kit de Incêndio SEIVE
    title: O que compõe o sistema
    # Copy do mockup da seção do kit (29/10/2026, desvio registrado no BRIEFING.md)
    text: Reservatório, monitoramento e acionadores integrados para proteger máquinas pesadas e equipamentos móveis.
    items:
      - id: reservatorio
        tag: Supressão
        title: Reservatório de pó químico
        description: Pó químico ABC 90%, com pressurização por nitrogênio.
        features:
          - Reservatório de 15 kg
          - Pó químico ABC 90%
          - Cilindro de nitrogênio de 320 g
        photo: Reservatório de pó químico SEIVE
        dark: false
      - id: monitoramento
        tag: Monitoramento
        title: Painel de monitoramento
        description: Sinalização visual de status e registro dos eventos do sistema.
        features:
          - Bivolt 12/24 VCC
          - LEDs de status
          - Registro dos últimos 2.000 eventos
        photo: Painel de monitoramento SEIVE
        dark: false
      - id: acionadores
        tag: Acionamento
        title: Acionadores automático e manual
        description: Acionamento na cabine e acionador manual externo de alumínio.
        features:
          - Acionamento automático
          - Acionador manual externo
          - Cilindro de ativação N₂
        photo: Acionador manual SEIVE
        dark: false
      - id: pecas
        tag: Peças e suporte
        title: Suporte para manter seu sistema ativo.
        description: Peças genuínas SEIVE e atendimento técnico especializado.
        features:
          - Peças genuínas
          - Suporte especializado
          - Garantia de 12 meses
        photo: Família de reservatórios supressores SEIVE
        dark: true

  identificar:
    veredicto: completo
    responde: [transacional]
    papeis: [Gestores de manutenção, Gestores de frotas]
    eyebrow: Dados para cotação
    title: Quer cotar a proteção da sua máquina?
    microcopy: Avaliação comercial da sua operação
    text: Não precisa ter tudo em mãos. Envie o que tiver e a equipe indica a solução SEIVE adequada para a sua operação.
    items:
      - icon: truck
        label: Tipo de máquina
        hint: equipamento a proteger
      - icon: tag
        label: Marca e modelo
        hint: identificação do ativo
      - icon: hash
        label: Quantidade
        hint: equipamentos a proteger
      - icon: factory
        label: Segmento
        hint: setor da operação
      - icon: pin
        label: Cidade/UF
        hint: local da operação
      - icon: file
        label: Descrição
        hint: condições de aplicação

  processo:
    veredicto: quase
    falta: confirmar a sequência real, o responsável por cada etapa e os marcos públicos
    responde: [transacional]
    papeis: [Gestores de manutenção]
    eyebrow: Como funciona
    title: Da análise da máquina ao pós-venda
    microcopy: Atendimento consultivo da Safe Mine
    text: Atendimento consultivo da Safe Mine do primeiro contato ao pós-venda, com sistema fabricado pela SEIVE.
    steps:
      - id: analise
        icon: search
        title: Análise
        description: Avaliamos a máquina, a aplicação e o ambiente para entender os pontos de risco.
      - id: especificacao
        icon: ruler
        title: Especificação
        description: Indicamos a solução SEIVE e o dimensionamento adequados a cada equipamento.
      - id: fabricacao
        icon: factory
        title: Fabricação
        description: Sistema produzido pela SEIVE em Contagem-MG, a partir do dimensionamento definido.
      - id: instalacao
        icon: wrench
        title: Instalação
        description: Montagem no equipamento, com painel de monitoramento e acionador na cabine.
      - id: suporte
        icon: shield
        title: Suporte
        description: Suporte técnico especializado e garantia de 12 meses contra defeitos de fabricação.

  aplicacoes:
    veredicto: completo
    responde: [equipamento-aplicacao, setor]
    papeis: [Gestores de frotas, Gestores de segurança]
    eyebrow: Aplicações
    title: Proteção para máquinas pesadas e equipamentos móveis
    text: Sistema dimensionado para cada tipo de máquina, em operações de mineração, construção, florestais e agrícolas.
    items:
      - id: mineracao
        label: Máquinas de mineração
        description: Caminhões fora de estrada e escavadeiras em ambiente abrasivo e de alto custo de parada.
        photo: Caminhão fora de estrada em mina
      - id: construcao
        label: Máquinas de construção
        description: Escavadeiras, carregadeiras e equipamentos móveis de obras e infraestrutura.
        photo: Escavadeira com sistema supressor SEIVE
      - id: florestal
        label: Máquinas florestais
        description: Harvesters e forwarders cercados de galhos e resíduos secos na colheita de madeira.
        photo: Máquina florestal carregando toras
      - id: agricola
        label: Máquinas agrícolas
        description: Colheitadeiras e tratores em jornadas longas, com palha e poeira junto ao motor.
        photo: Colheitadeira em lavoura de grãos

  segmentos:
    veredicto: completo
    responde: [setor]
    papeis: [Gestores de segurança]
    eyebrow: Segmentos atendidos
    title: Proteção para cada setor da operação
    text: O sistema é dimensionado conforme o equipamento e a aplicação, em máquinas autopropelidas, móveis ou estacionárias.
    items:
      - id: mineracao
        icon: mountain
        label: Mineração
        description: Operação abrasiva, com ar carregado e descargas elétricas constantes, onde uma máquina parada pesa no custo da produção.
        bullets:
          - Caminhões fora de estrada
          - Escavadeiras e carregadeiras
          - Perfuratrizes
        photo: Caminhão fora de estrada em mina
      - id: construcao
        icon: truck
        label: Construção
        description: Escavadeiras, carregadeiras e outros autopropelidos de obras e infraestrutura, com projeto conforme os pontos de risco.
        bullets:
          - Escavadeiras
          - Pás carregadeiras
          - Máquinas de obras
        photo: Escavadeira com sistema supressor SEIVE
      - id: florestal
        icon: leaf
        label: Florestal
        description: Colheita e baldeio de madeira, uma das operações de maior risco, com galhos e resíduos secos em volta do equipamento.
        bullets:
          - Harvesters
          - Forwarders
          - Escavadeiras florestais
        photo: Máquina florestal carregando toras
      - id: agronegocio
        icon: grid
        label: Agronegócio
        description: Máquinas que plantam e colhem em jornadas longas, com palha e poeira junto ao motor, onde uma parada custa a safra.
        bullets:
          - Colheitadeiras de grãos
          - Tratores
          - Pulverizadores autopropelidos
        photo: Colheitadeira em lavoura de grãos
      - id: industria
        icon: factory
        label: Indústria
        description: Equipamentos industriais e de pátio em operação contínua, onde um princípio de incêndio interrompe a produção.
        bullets:
          - Equipamentos de pátio
          - Instalações industriais
          - Áreas técnicas
        photo: Equipamento de pátio em operação
      - id: sucroenergetico
        icon: droplet
        label: Sucroenergético
        description: Colheita mecanizada de cana em operação contínua, com palha e bagaço secos perto das partes quentes da máquina.
        bullets:
          - Colhedoras de cana
          - Tratores e transbordos
          - Caminhões canavieiros
        photo: Colhedora de cana no canavial
      - id: portuario
        icon: box
        label: Portuário
        description: Movimentação de contêineres e cargas em turnos contínuos, onde um incêndio para o pátio e atrasa a operação.
        bullets:
          - Reach stackers
          - Empilhadeiras de contêineres
          - Guindastes móveis
        photo: Reach stacker movimentando contêiner
      - id: outras
        icon: dots
        label: Outras aplicações
        description: Avaliamos outras máquinas com risco de incêndio, como colhedoras de algodão, equipamentos estacionários e frotas de locação.
        bullets:
          - Colhedoras de algodão
          - Equipamentos estacionários
          - Frotas de locação
        photo: Colhedora de algodão em lavoura

  perguntas:
    veredicto: completo
    responde: []
    papeis: [Gestores de manutenção, Gestores de segurança]
    eyebrow: Perguntas frequentes
    title: O que perguntam antes de contratar
    text: As dúvidas mais comuns sobre o sistema e o atendimento. Não encontrou a sua? Fale com a nossa equipe.
    items:
      - id: informacoes
        question: Quais informações devo enviar para solicitar um atendimento?
        answer: Conte sobre a operação, o equipamento e a aplicação. Segmento, localização, características da máquina e requisitos técnicos ajudam a equipe a indicar a solução adequada.
      - id: venda-direta
        question: A Safe Mine vende o sistema diretamente?
        answer: Sim. A Safe Mine fornece o sistema de supressão SEIVE e peças genuínas, com apoio na escolha dos itens adequados à aplicação e ao modelo da máquina.
      - id: operador
        question: O sistema depende do operador para funcionar?
        answer: Não. A detecção e a atuação são automáticas, e o sistema também conta com acionamentos manuais por botoeiras posicionadas à vista.
      - id: garantia
        question: Qual é a garantia do sistema SEIVE?
        answer: São 12 meses contra defeitos de fabricação. Segundo a SEIVE, alguns componentes têm garantia maior — painel 24 meses, ampolas 10 anos e reservatórios de pó 5 anos.

  diferenciais:
    veredicto: completo
    responde: [produto-categoria, equipamento-aplicacao]
    papeis: [Gestores de segurança, Gestores de manutenção]
    eyebrow: Diferenciais SEIVE
    titleLines: [Proteção de ativos, com tecnologia SEIVE.]
    text: A Safe Mine fornece o sistema SEIVE com atendimento consultivo — a solução é indicada conforme a máquina, a aplicação e o ambiente de cada operação.
    scene: Acionador SEIVE instalado em máquina
    person: Especialista da Safe Mine
    reasons:
      - icon: zap
        title: Detecção e atuação
        description: Atuação automática conforme a configuração do sistema.
      - icon: power
        title: Acionamento manual
        description: Possibilidade de intervenção manual por botoeiras.
      - icon: cpu
        title: Painel de monitoramento
        description: Status do sistema e registro dos últimos 2.000 eventos.
      - icon: shield
        title: Garantia de fábrica
        description: 12 meses contra defeito de fabricação.
      - icon: wrench
        title: Suporte técnico
        description: Canal técnico direto durante o período de garantia.

  clientes:
    veredicto: insuficiente
    falta: as logos e os números da apresentação são clientes e resultados da SEIVE, não da Safe Mine, e não há autorização expressa das logos

  situacoes:
    veredicto: insuficiente
    falta: a compra é preventiva e o comercial não listou os gatilhos de contato mais comuns

  especificacoes:
    veredicto: insuficiente
    falta: há especificação de um único kit; faltam 4 a 10 modelos ou configurações comparáveis

  vitrine:
    veredicto: insuficiente
    falta: há um único kit; a vitrine pede de 6 a 24 produtos

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta é um sistema de proteção, não consolidação de compras de itens diferentes

assets:
  pendentes: [diferenciais]

conflitos:
  - pede: núcleo do briefing de campanha com a SEIVE como marca (endereço em Contagem/MG e WhatsApp da SEIVE)
    regra: a LP é do anunciante; o cliente informado é a Safe Mine, revendedora do sistema SEIVE
    entrou: Safe Mine na marca, no rodapé e no WhatsApp; SEIVE como fabricante, citada por extenso
  - pede: certificação ABNT PE-223, normas NFPA e UL, ISO 9001 e patente
    regra: o briefing de campanha pede confirmar certificados, vigência e escopo antes de publicar
    entrou: nada disso na página até a confirmação; os itens ficam em "itens excedentes"
  - pede: área atendida "Brasil e América do Sul" do material institucional
    regra: o briefing de campanha pede confirmar a cobertura antes de usá-la em hero, selo ou cotação
    entrou: nenhuma área declarada na página
  - pede: linha "Sistema fixo de alarme e detecção" do site da Safe Mine
    regra: o que a campanha negativa ("central de alarme", "detecção para data center") não é assunto da página
    entrou: a oferta fica só no Kit de Incêndio SEIVE
  - pede: logos de clientes da SEIVE (Vale, Raízen, Suzano, Gerdau e outras)
    regra: logo de cliente exige autorização, e os clientes têm de ser do anunciante
    entrou: nada; o bloco de clientes ficou fora
  - pede: verde da marca Safe Mine (#7ba249) nos botões
    regra: botão do padrão tem texto branco e exige contraste de 4,5:1
    entrou: o mesmo verde escurecido (#4d7f22) como cor de ação; o azul da marca no papel do navy
  - pede: CTA e formulário próprios no briefing
    regra: vocabulário de CTA da agência; formulário e chat só pelo shortcode do plugin
    entrou: 'CTA "Solicite sua cotação" e shortcodes padrão; os 6 campos do formulário viraram o painel de dados para cotação'

naoAplicado:
  - LSI Náutico, embarcações e SEIVE LUB — fora da campanha
  - WhatsApp secundário (31) 99710-0350 e contatos da SEIVE (telefones, e-mails, CNPJ, endereço em Contagem/MG)
  - números da SEIVE (6.000 sistemas, 5.000 equipamentos salvos, R$ 6 bi preservados) — só entram com o bloco de clientes
  - depoimentos do site da SEIVE (sem cargo nem empresa)
  - demais produtos da Safe Mine (geradores, BESS, torres de iluminação, bombas, compressores)
```

# Ficha de execução — Safe Mine Soluções / Kit de Incêndio SEIVE

> Ficha montada no editor a partir do briefing de campanha `SEIVE_PESQ_SUPRESSAO_B2B` (briefing organizado de 28/10/2026), do site da Safe Mine (cliente), da apresentação e do site da SEIVE (fabricante) e do POP de estruturação de LPs da B2, no formato do padrão B2 LP Starter v2.8.0 — a versão publicada do starter; o briefing cita v2.9.0, que não existe no repositório.

## O que foi decidido

LP de produto da **Safe Mine Soluções** para a campanha `SEIVE_PESQ_SUPRESSAO_B2B`, grupos "Supressão em máquinas" e "Supressão em equipamentos móveis". A palavra-chave principal é a do briefing, **supressão de incêndio SEIVE**, no H1 e no título da aba; o H1 vem do título do anúncio.

O briefing de campanha foi organizado só com o material da SEIVE e trazia a SEIVE no núcleo. O cliente informado é a Safe Mine, que revende o sistema SEIVE: a marca, o rodapé e o WhatsApp são da Safe Mine, e a SEIVE aparece como fabricante.

A oferta é o Kit de Incêndio SEIVE, componente por componente (reservatório, painel, acionadores) mais o pós-venda. O apoio é o painel com os seis dados que o formulário da campanha pede. A prova são as quatro aplicações que a campanha prioriza (mineração, construção, florestal e agrícola) e a autoridade são os cinco diferenciais do briefing, sobre a frase "Proteção de ativos".

Certificações, normas e área atendida ficam fora até a confirmação que o briefing pede.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto     | Responde                                 | Papéis                | O que falta                                  |
| ---------- | ---------------- | ------------- | ---------------------------------------- | --------------------- | -------------------------------------------- |
| Oferta     | `linhas`         | completo      | produto-categoria                        | manutenção, frotas    | —                                            |
| Oferta     | `especificacoes` | insuficiente  | —                                        | —                     | um único kit                                 |
| Oferta     | `vitrine`        | insuficiente  | —                                        | —                     | um único kit                                 |
| Apoio      | `identificar`    | completo      | transacional                             | manutenção, frotas    | —                                            |
| Apoio      | `processo`       | quase         | transacional                             | manutenção            | sequência, responsáveis e marcos             |
| Apoio      | `situacoes`      | insuficiente  | —                                        | —                     | gatilhos de contato reais                    |
| Prova      | `aplicacoes`     | completo      | equipamento-aplicacao, setor             | frotas, segurança     | —                                            |
| Prova      | `segmentos`      | completo      | setor                                    | segurança             | —                                            |
| Prova      | `clientes`       | insuficiente  | —                                        | —                     | clientes e números da Safe Mine, autorizados |
| Autoridade | `diferenciais`   | completo      | produto-categoria, equipamento-aplicacao | segurança, manutenção | — (pessoa recortada pendente)                |
| Autoridade | `perguntas`      | completo      | —                                        | manutenção, segurança | —                                            |
| Autoridade | `escopo`         | não se aplica | —                                        | —                     | não é consolidação de compras                |

O briefing marcava `linhas`, `aplicacoes`, `segmentos` e `perguntas` como insuficientes. Com o material reunido nesta execução eles fecham a contagem: as linhas viram os componentes do kit, com fotos da apresentação; aplicações e segmentos usam as fotos de setor da apresentação, a escavadeira do site da SEIVE e o vocabulário de setor do site da SEIVE; as perguntas vêm do FAQ publicado pela Safe Mine. Pela regra fixa, `aplicacoes` ganha de `segmentos` (responde a mais famílias) e `diferenciais` ganha de `perguntas`.

## Núcleo

| #   | Entrada            | Valor                                                                                                          | Origem                                       |
| --- | ------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 1   | MARCA              | Safe Mine Soluções                                                                                             | cliente informado; o briefing dizia SEIVE    |
| 2   | MARCA_CURTA        | Safe Mine                                                                                                      | site do cliente                              |
| 15  | CAMPANHA           | `supressão de incêndio SEIVE`                                                                                  | briefing de campanha                         |
| 3   | PRODUTO_PRINCIPAL  | Sistemas de supressão de incêndio SEIVE                                                                        | briefing (título do anúncio)                 |
| 4   | CONTEXTO_DE_USO    | máquinas pesadas                                                                                               | briefing (título do anúncio)                 |
| 5   | PUBLICO            | Gestores de manutenção, de segurança e de frotas                                                               | briefing                                     |
| 6   | HERO               | Sistemas SEIVE para máquinas pesadas · Proteção automatizada para equipamentos móveis · Solução para mineração | briefing                                     |
| 7   | MARCAS_ATENDIDAS   | SEIVE, só por extenso                                                                                          | site do cliente                              |
| 8   | SELOS_DE_CONFIANCA | Detecção e atuação automáticas · Acionamento manual disponível · Garantia de 12 meses                          | briefing                                     |
| 9   | ENDERECO           | Belo Horizonte/MG                                                                                              | site do cliente — endereço completo pendente |
| 10  | URL + PRIVACIDADE  | URL na Vercel; sem política de privacidade                                                                     | pendência                                    |
| 11  | SHORTCODES         | padrão do plugin                                                                                               | padrão                                       |
| 12  | WHATSAPP           | 55 31 99553-8843 ("Orçamento por WhatsApp" da Safe Mine)                                                       | site do cliente                              |
| 13  | STACK + PUBLICACAO | padrão da agência (Astro, `main` → `wp-build`)                                                                 | padrão                                       |
| 14  | TOKENS + FONTE     | azul e verde Safe Mine; Manrope                                                                                | CSS do site do cliente                       |

## Pendências

| O que falta                       | Quem resolve      | Especificação                                                                              |
| --------------------------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| Banner do hero                    | designer          | 1981×900, fundo azul-escuro, equipamento pesado com o kit SEIVE entre 62% e 79% da largura |
| Pessoa recortada dos diferenciais | Safe Mine         | 1220×1000, PNG com fundo transparente, especialista de corpo inteiro                       |
| Confirmar que a LP é da Safe Mine | B2                | o briefing de campanha trazia a SEIVE no núcleo                                            |
| Certificados, normas e escopo     | SEIVE / Safe Mine | ABNT, NFPA, UL, ISO 9001 e patente — liberam selos e diferenciais                          |
| Área atendida da campanha         | B2                | libera selo de área na cotação                                                             |
| Endereço completo e CNPJ          | Safe Mine         | rodapé                                                                                     |
| Hospedagem final                  | B2 + Safe Mine    | o plugin de atendimento roda em WordPress                                                  |
| Etapas reais do atendimento       | Safe Mine         | libera `processo` como alternativa no apoio                                                |
| Direito de uso das fotos de setor | Safe Mine / SEIVE | fotos da apresentação da SEIVE                                                             |

## Itens excedentes

| Bloco          | Itens que entraram                           | Itens guardados                                              |
| -------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `aplicacoes`   | Mineração, Construção, Florestal, Agrícola   | Indústria, Sucroenergético, Portuário (em `segmentos`, fora) |
| `diferenciais` | os cinco do briefing                         | Certificação ABNT, ISO 9001, patente, normas NFPA e UL       |
| `linhas`       | reservatório, painel, acionadores, pós-venda | sistema fixo de alarme e detecção (negativado pela campanha) |
