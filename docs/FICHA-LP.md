```yaml
ficha: 1
padrao: 2.8.0
cliente: Safe Mine Soluções
produto: Sistemas de supressão de incêndio SEIVE
data: 2026-10-29

site:
  brand: Safe Mine Soluções
  brandShort: Safe Mine
  product: Sistemas de supressão de incêndio
  context: máquinas e equipamentos
  url: https://lp-seive-supressao-de-incendio.vercel.app/
  address: Belo Horizonte/MG
  privacyUrl: ''
  whatsapp: '5531995538843'
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: sistema de supressão de incêndio
  negatives: [cozinha, coifa, sprinkler, hidrante]
  forbidden:
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
    - nome: sistema-supressao
      termos:
        - sistema de supressão de incêndio
        - supressão de incêndio
        - supressor de incêndio
        - sistema supressor de incêndio
      responde: linhas
    - nome: maquinas
      termos:
        - supressão de incêndio em máquinas
        - sistema de combate a incêndio em máquinas
        - supressão de incêndio veicular
        - sistema de supressão de incêndio para máquinas pesadas
      responde: linhas
    - nome: alarme-deteccao
      termos:
        - sistema de alarme e detecção de incêndio
        - detecção de incêndio para sala elétrica
      responde: linhas
    - nome: setores
      termos:
        - sistema de supressão de incêndio para mineração
        - supressor de incêndio colheitadeira
        - combate a incêndio em máquinas agrícolas
      responde: segmentos
    - nome: instalacao-manutencao
      termos:
        - instalação de sistema de supressão de incêndio
        - manutenção de sistema de supressão de incêndio
      responde: processo

publico: [Manutenção de frota, Segurança do trabalho, Engenharia, Compras]

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
  title: Sistema de supressão de incêndio para máquinas | Safe Mine
  description: Sistema de supressão de incêndio SEIVE para máquinas e equipamentos, com atendimento consultivo da Safe Mine e suporte técnico em todo o Brasil.
  hero:
    eyebrow: Proteção contra incêndio
    title: Sistema de supressão de incêndio para máquinas e equipamentos
    text: Sistemas SEIVE com detecção e atuação automáticas para máquinas de mineração, agrícolas, florestais, portuárias e geradores, com atendimento consultivo.
    points:
      - icon: shield
        line1: Sistema SEIVE
        line2: certificado ABNT
      - icon: zap
        line1: Atuação automática
        line2: em até 15 s
      - icon: users
        line1: Atendimento
        line2: consultivo
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de supressão de incêndio.
    text: Nossa equipe indica a solução SEIVE adequada para a sua máquina e a sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: shield
        label: Garantia de 12 meses
      - icon: wrench
        label: Suporte técnico especializado
      - icon: pin
        label: Atendimento em todo o Brasil
    lgpd: Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.

blocos:
  linhas:
    veredicto: completo
    responde: [sistema-supressao, maquinas, alarme-deteccao]
    papeis: [Engenharia, Compras]
    eyebrow: Soluções de proteção
    title: Supressão de incêndio para cada operação
    text: Sistemas SEIVE e soluções de detecção fornecidos pela Safe Mine para máquinas, ambientes críticos e equipamentos estacionários.
    items:
      - id: maquinas
        tag: Máquinas
        title: Supressão para máquinas
        description: Sistema SEIVE com detecção e atuação automáticas para máquinas pesadas e autopropelidas.
        features:
          - Atuação em até 15 s
          - Botoeiras manuais
          - Painel de monitoramento
        photo: Reservatório de pó químico SEIVE
        dark: false
      - id: alarme
        tag: Ambientes
        title: Alarme e detecção fixos
        description: Monitoramento permanente de salas elétricas, usinas e áreas técnicas, com alerta rápido.
        features:
          - Detecção e alarme
          - Monitoramento contínuo
          - Aplicação sob medida
        photo: Central de alarme e detecção de incêndio
        dark: false
      - id: estacionarios
        tag: Estacionários
        title: Geradores e estacionários
        description: Projeto dimensionado para geradores e equipamentos fixos que sustentam a operação.
        features:
          - Projeto dimensionado
          - Grupos geradores
          - Equipamentos estacionários
        photo: Reservatório supressor SEIVE vermelho
        dark: false
      - id: pecas
        tag: Pós-venda
        title: Peças genuínas e suporte
        description: Peças genuínas SEIVE e suporte técnico especializado para manter o sistema ativo.
        features:
          - Peças genuínas
          - Suporte especializado
          - Garantia de 12 meses
        photo: Família de reservatórios supressores SEIVE
        dark: true

  processo:
    veredicto: completo
    responde: [instalacao-manutencao]
    papeis: [Manutenção de frota, Engenharia]
    eyebrow: Como funciona
    title: Da análise da máquina ao pós-venda
    microcopy: Atendimento consultivo em todo o Brasil
    text: Atendimento consultivo da Safe Mine do primeiro contato ao pós-venda, com sistema fabricado e certificado pela SEIVE.
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
        description: Sistema produzido pela SEIVE em Contagem-MG, sob gestão da qualidade ISO 9001.
      - id: instalacao
        icon: wrench
        title: Instalação
        description: Montagem no equipamento, com painel de monitoramento e acionador na cabine.
      - id: suporte
        icon: shield
        title: Suporte
        description: Suporte técnico especializado e garantia de 12 meses contra defeitos de fabricação.

  segmentos:
    veredicto: completo
    responde: [setores]
    papeis: [Segurança do trabalho, Manutenção de frota]
    eyebrow: Principais aplicações
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
      - id: agronegocio
        icon: grid
        label: Agronegócio
        description: Máquinas que plantam e colhem em jornadas longas, com palha e poeira junto ao motor, onde uma parada custa a safra.
        bullets:
          - Colheitadeiras de grãos
          - Tratores
          - Pulverizadores autopropelidos
        photo: Colheitadeira em lavoura de grãos
      - id: florestal
        icon: leaf
        label: Florestal
        description: Colheita e baldeio de madeira, uma das operações de maior risco, com galhos e resíduos secos em volta do equipamento.
        bullets:
          - Harvesters
          - Forwarders
          - Escavadeiras florestais
        photo: Máquina florestal carregando toras
      - id: portuario
        icon: box
        label: Portuário
        description: Movimentação de contêineres e cargas em turnos contínuos, onde um incêndio para o pátio e atrasa a operação.
        bullets:
          - Reach stackers
          - Empilhadeiras de contêineres
          - Guindastes móveis
        photo: Reach stacker movimentando contêiner
      - id: industria
        icon: factory
        label: Indústria
        description: Equipamentos industriais e de pátio em operação contínua, onde um princípio de incêndio interrompe a produção.
        bullets:
          - Equipamentos de pátio
          - Instalações industriais
          - Áreas técnicas
        photo: Equipamento de pátio em operação
      - id: energia
        icon: bolt
        label: Geradores e energia
        description: Geradores, usinas e salas elétricas que sustentam a operação pedem detecção rápida e proteção sob medida.
        bullets:
          - Grupos geradores
          - Usinas de energia
          - Salas elétricas
        photo: Gerador de energia em subestação
      - id: moveis
        icon: truck
        label: Equipamentos móveis
        description: Escavadeiras, carregadeiras e outros autopropelidos de obras e infraestrutura, com projeto conforme os pontos de risco.
        bullets:
          - Escavadeiras
          - Pás carregadeiras
          - Máquinas de obras
        photo: Escavadeira com sistema supressor SEIVE
      - id: outras
        icon: dots
        label: Outras aplicações
        description: Avaliamos outras máquinas com risco de incêndio, como colhedoras de cana e algodão e frotas de locação.
        bullets:
          - Colhedoras de cana
          - Colhedoras de algodão
          - Frotas de locação
        photo: Colhedora de algodão em lavoura

  perguntas:
    veredicto: completo
    responde: []
    papeis: [Compras, Segurança do trabalho, Manutenção de frota]
    eyebrow: Perguntas frequentes
    title: O que perguntam antes de contratar
    text: As dúvidas mais comuns sobre o sistema e o atendimento. Não encontrou a sua? Fale com a nossa equipe.
    items:
      - id: abrangencia
        question: A Safe Mine atende empresas de outras regiões?
        answer: Sim. A atuação abrange todo o território nacional, considerando as características e as necessidades de cada projeto.
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
    responde: []
    papeis: [Compras, Segurança do trabalho]
    eyebrow: Por que a Safe Mine
    titleLines: [Tecnologia SEIVE, atendimento Safe Mine.]
    text: A Safe Mine conecta a sua operação ao sistema SEIVE, primeiro supressor certificado pela ABNT no Brasil e com mais de 6.000 instalações segundo a fabricante, do diagnóstico ao suporte técnico.
    scene: Acionador SEIVE instalado em máquina
    person: Especialista da Safe Mine
    reasons:
      - icon: users
        title: Atendimento consultivo
        description: Análise de cada operação para indicar a solução compatível.
      - icon: shield
        title: Tecnologia certificada
        description: Sistema SEIVE patenteado e certificado pela ABNT desde 2012.
      - icon: check
        title: Normas internacionais
        description: Atende a requisitos da NFPA 17, NFPA 122 e UL 1254.
      - icon: clock
        title: Garantia estendida
        description: Painel 24 meses, ampolas 10 anos e reservatórios 5 anos.
      - icon: pin
        title: Atuação nacional
        description: Atendimento a operações em todo o território nacional.

  clientes:
    veredicto: insuficiente
    falta: as logos e os números da apresentação são clientes e resultados da SEIVE, não da Safe Mine; faltam 4 logos autorizadas e 3 números da própria Safe Mine

  identificar:
    veredicto: insuficiente
    falta: o comercial não informou os 6 dados que pede para dimensionar um sistema

  situacoes:
    veredicto: insuficiente
    falta: a compra é preventiva e o comercial não listou os gatilhos de contato mais comuns

  especificacoes:
    veredicto: insuficiente
    falta: há especificação de um único kit (reservatório de 15 kg); faltam 4 modelos com atributos comparáveis

  vitrine:
    veredicto: insuficiente
    falta: são 2 sistemas de supressão no portfólio; a vitrine pede de 6 a 24 produtos

  aplicacoes:
    veredicto: insuficiente
    falta: não há 4 aplicações distintas dos setores — as fotos disponíveis são as mesmas dos segmentos, que cobrem o reconhecimento com mais profundidade

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta é um sistema de proteção, não consolidação de compras de itens diferentes

assets:
  pendentes: [heroBg, linhas, diferenciais]

conflitos:
  - pede: material técnico do fabricante (apresentação e site da SEIVE) numa LP do revendedor
    regra: não inventar fato; claim de fabricação é do fabricante
    entrou: a Safe Mine aparece como quem fornece, especifica e dá suporte; fabricação, certificação, normas e números são atribuídos à SEIVE
  - pede: números divergentes entre site e apresentação da SEIVE (6.000 × 7.000 sistemas; R$ 6 bi × R$ 8 bi; 20 × 25 × 26 anos)
    regra: número sem fonte identificável não entra
    entrou: só "mais de 6.000 sistemas", que a apresentação 2026 e a página da Safe Mine trazem, atribuído à fabricante
  - pede: certificação ABNT PE-223 no texto da apresentação, e PE-289 no selo da imagem
    regra: não inventar fato
    entrou: 'a página diz "certificado pela ABNT", sem o número do programa'
  - pede: logos de clientes da SEIVE (Vale, Raízen, Suzano, Gerdau e outras)
    regra: logo de cliente exige autorização, e os clientes têm de ser do anunciante
    entrou: nada; o bloco de clientes ficou fora
  - pede: superlativos do site da SEIVE ("a única do Brasil", "líder", "único líquido patenteado no mundo")
    regra: claim sem comprovação não vai ao ar
    entrou: nenhum superlativo; os termos foram registrados em campanha.forbidden
  - pede: verde da marca Safe Mine (#7ba249) nos botões
    regra: botão do padrão tem texto branco e exige contraste de 4,5:1
    entrou: o mesmo verde escurecido (#4d7f22) como cor de ação; o azul da marca no papel do navy

naoAplicado:
  - supressor náutico LSI e SEIVE LUB — linhas da SEIVE que a Safe Mine não lista na página de supressão
  - demais produtos da Safe Mine (geradores, BESS, torres de iluminação, bombas, compressores) — outra oferta, outra LP
  - telefones e WhatsApp secundário (31) 99710-0350; dados de contato da SEIVE
  - depoimentos do site da SEIVE (sem cargo nem empresa, e são clientes da fabricante)
  - texto institucional da Safe Mine (missão, visão, valores) e a trajetória desde 2017
```

# Ficha de execução — Safe Mine Soluções / Sistemas de supressão de incêndio SEIVE

> Ficha montada no editor a partir do material do cliente (site safeminesolucoes.com.br) e do fabricante representado (apresentação "Seive Supressor 2026" e site seive.com.br), no formato do padrão B2 LP Starter v2.8.0, seguindo o POP de estruturação de LPs. Não houve entrevista no chat nem briefing de Google Ads: o que depende do cliente está nas pendências.

## O que foi decidido

LP da **Safe Mine Soluções**, revendedora que fornece os sistemas de supressão de incêndio **SEIVE**. A página se posiciona como a própria Safe Mine se posiciona no site: atendimento consultivo que conecta a operação à tecnologia SEIVE. Fabricação, certificação, normas, garantia por componente e número de instalações são da SEIVE e aparecem atribuídos a ela.

A conta Google Ads da Safe Mine no MCC da B2 existe, mas não tem campanhas. A palavra-chave principal veio do Planejador de Palavras-chave (Brasil, últimos 12 meses): "sistema de supressão de incêndio" tem 140 buscas/mês e concorrência média, contra 50 de "supressão de incêndio" e 30 de "supressor de incêndio". As variações de cauda longa não têm volume medido e ficam como famílias propostas.

Campanha nacional: a Safe Mine afirma atender todo o território. A página abre com as quatro linhas da oferta, explica o caminho da análise ao pós-venda no painel escuro, prova com os setores que a própria página de supressão da Safe Mine lista, responde cinco dúvidas tiradas do FAQ do site e fecha com cinco diferenciais.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto     | Responde                                     | Papéis                                     | O que falta                             |
| ---------- | ---------------- | ------------- | -------------------------------------------- | ------------------------------------------ | --------------------------------------- |
| Oferta     | `linhas`         | completo      | sistema-supressao, maquinas, alarme-deteccao | Engenharia, Compras                        | — (foto do sistema de alarme pendente)  |
| Oferta     | `especificacoes` | insuficiente  | —                                            | —                                          | um único kit especificado               |
| Oferta     | `vitrine`        | insuficiente  | —                                            | —                                          | 2 sistemas; o mínimo é 6                |
| Apoio      | `processo`       | completo      | instalacao-manutencao                        | Manutenção de frota, Engenharia            | —                                       |
| Apoio      | `identificar`    | insuficiente  | —                                            | —                                          | os 6 dados que o comercial pede         |
| Apoio      | `situacoes`      | insuficiente  | —                                            | —                                          | gatilhos de contato reais               |
| Prova      | `segmentos`      | completo      | setores                                      | Segurança do trabalho, Manutenção de frota | —                                       |
| Prova      | `clientes`       | insuficiente  | —                                            | —                                          | clientes e números da própria Safe Mine |
| Prova      | `aplicacoes`     | insuficiente  | —                                            | —                                          | as fotos são as mesmas dos segmentos    |
| Autoridade | `perguntas`      | completo      | —                                            | Compras, Segurança do trabalho, Manutenção | —                                       |
| Autoridade | `diferenciais`   | completo      | —                                            | Compras, Segurança do trabalho             | — (pessoa recortada pendente)           |
| Autoridade | `escopo`         | não se aplica | —                                            | —                                          | não é consolidação de compras           |

## Núcleo

| #   | Entrada            | Valor                                                             | Origem                                             |
| --- | ------------------ | ----------------------------------------------------------------- | -------------------------------------------------- |
| 1   | MARCA              | Safe Mine Soluções                                                | site da Safe Mine                                  |
| 2   | MARCA_CURTA        | Safe Mine                                                         | site da Safe Mine                                  |
| 15  | CAMPANHA           | `sistema de supressão de incêndio`                                | Planejador de Palavras-chave (conta sem campanhas) |
| 3   | PRODUTO_PRINCIPAL  | Sistemas de supressão de incêndio                                 | ajustado à palavra-chave                           |
| 4   | CONTEXTO_DE_USO    | máquinas e equipamentos                                           | página de supressão da Safe Mine                   |
| 5   | PUBLICO            | Manutenção de frota, Segurança do trabalho, Engenharia, Compras   | proposto — confirmar com a Safe Mine               |
| 6   | HERO               | Sistema SEIVE certificado ABNT · Atuação em até 15 s · Consultivo | páginas da Safe Mine e da SEIVE                    |
| 7   | MARCAS_ATENDIDAS   | SEIVE, só por extenso                                             | site da Safe Mine                                  |
| 8   | SELOS_DE_CONFIANCA | Garantia de 12 meses · Suporte especializado · Todo o Brasil      | páginas da Safe Mine                               |
| 9   | ENDERECO           | Belo Horizonte/MG                                                 | "Quem somos" — endereço completo pendente          |
| 10  | URL + PRIVACIDADE  | URL provisória na Vercel; sem política de privacidade             | pendência                                          |
| 11  | SHORTCODES         | padrão do plugin                                                  | padrão                                             |
| 12  | WHATSAPP           | 55 31 99553-8843 ("Orçamento por WhatsApp" do site)               | site da Safe Mine                                  |
| 13  | STACK + PUBLICACAO | padrão da agência (Astro, `main` → `wp-build`)                    | padrão                                             |
| 14  | TOKENS + FONTE     | azul e verde Safe Mine; Manrope (a mesma do site)                 | cores lidas do CSS do site                         |

## Pendências

| O que falta                       | Quem resolve      | Especificação                                                                     |
| --------------------------------- | ----------------- | --------------------------------------------------------------------------------- |
| Banner do hero                    | designer          | 1981×900, fundo azul-escuro, máquina com sistema SEIVE entre 62% e 79% da largura |
| Foto do sistema fixo de alarme    | Safe Mine         | PNG 800×600 com fundo transparente (central ou detector)                          |
| Pessoa recortada dos diferenciais | Safe Mine         | 1220×1000, PNG com fundo transparente, especialista de corpo inteiro              |
| Endereço completo e CNPJ          | Safe Mine         | para o rodapé                                                                     |
| URL final e hospedagem            | B2 + Safe Mine    | o site atual não é WordPress; o plugin de atendimento roda em WordPress           |
| Política de privacidade           | Safe Mine         | link, se existir                                                                  |
| Público e comitê de compra        | Safe Mine         | confirmar os 4 papéis                                                             |
| Direito de uso das fotos de setor | Safe Mine / SEIVE | 6 fotos vêm da apresentação da SEIVE                                              |

## Conflitos com o padrão

| O que o material pedia                       | Regra do padrão                     | O que entrou no lugar                                         |
| -------------------------------------------- | ----------------------------------- | ------------------------------------------------------------- |
| Material do fabricante numa LP do revendedor | não inventar fato                   | fatos técnicos atribuídos à SEIVE; Safe Mine como fornecedora |
| Números divergentes nas fontes da SEIVE      | número sem fonte não entra          | só "mais de 6.000 sistemas", segundo a fabricante             |
| ABNT PE-223 no texto × PE-289 no selo        | não inventar fato                   | "certificado pela ABNT", sem número do programa               |
| Logos de clientes da SEIVE                   | clientes têm de ser do anunciante   | bloco de clientes fora                                        |
| Superlativos do site da SEIVE                | claim sem comprovação não vai ao ar | nenhum; termos em `campanha.forbidden`                        |
| Verde Safe Mine nos botões                   | botão com texto branco exige 4,5:1  | verde escurecido como cor de ação                             |

## Itens excedentes

| Bloco       | Itens que entraram                                                | Itens guardados                                                                   |
| ----------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `segmentos` | Mineração, Agro, Florestal, Portuário, Indústria, Energia, Móveis | Cana, algodão e locação → "Outras aplicações"                                     |
| `perguntas` | 5 perguntas sobre abrangência, envio, venda, operação e garantia  | "Quais soluções a Safe Mine oferece?" e "Atende só mineração?" (repetem a página) |

## Dados não usados pelo padrão

WhatsApp secundário (31) 99710-0350, dados de contato da SEIVE, demais produtos da Safe Mine, linhas SEIVE fora do portfólio da Safe Mine (náutico LSI, SEIVE LUB), depoimentos do site da SEIVE e o texto institucional da Safe Mine.
