# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

> **Desvio de processo desta LP:** não houve conversa de chat com o `PROMPT-FICHA-LP.md`. A ficha foi montada no editor, em 29/10/2026, a partir do material do cliente e do fabricante e do POP de estruturação de LPs da B2. Tudo o que dependia de confirmação do cliente virou pendência declarada abaixo, e não valor inventado.

## Origem

| Campo                     | Valor                                                                                                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                                                                                                              |
| Data da ficha             | 2026-10-29                                                                                                                                                                                      |
| Versão do padrão na ficha | 2.8.0                                                                                                                                                                                           |
| Validada em               | 29/10/2026 por `npm run ficha`                                                                                                                                                                  |
| Material bruto do cliente | `docs/briefing-cliente/` (fora do git): apresentação "Seive Supressor 2026" (fabricante) e POP de estruturação de LPs (B2); sites safeminesolucoes.com.br (cliente) e seive.com.br (fabricante) |
| Briefing de campanha      | não — a conta Google Ads da Safe Mine (446-892-6092) existe no MCC da B2, mas sem campanhas                                                                                                     |
| Fora desta execução       | demais produtos da Safe Mine (geradores, BESS, torres de iluminação, lubrificação, bombas, compressores) — cada um é outra LP                                                                   |

**Cliente e fabricante.** A Safe Mine Soluções (Belo Horizonte/MG, desde 2017) é quem anuncia: revende e especifica, de forma consultiva, o sistema de supressão de incêndio fabricado pela SEIVE (Contagem/MG). Fabricação, certificação, normas, garantia por componente e número de instalações são fatos da SEIVE e aparecem atribuídos a ela.

## Campanha

| Campo                      | Valor                                                                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `sistema de supressão de incêndio` — no H1 e no title                                                                                                |
| Origem                     | Planejador de Palavras-chave, Brasil, out/2025–set/2026: 140 buscas/mês, concorrência média (`supressão de incêndio` 50; `supressor de incêndio` 30) |
| Área atendida              | nacional; o selo "Atendimento em todo o Brasil" fica na cotação                                                                                      |
| Negativas de oferta        | cozinha, coifa, sprinkler, hidrante                                                                                                                  |
| Claims proibidos           | autorizado/autorizada, distribuidor oficial, representante oficial, exclusivo/exclusiva, líder, a única do Brasil, único no mundo                    |
| Divergência de vocabulário | a SEIVE diz "supressor de incêndio" e "kit incêndio"; a busca de maior volume é "sistema de supressão de incêndio", que abriu a página               |

### Famílias de palavra-chave

| Família               | Termos                                                                                            | Bloco que responde | Status  |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| sistema-supressao     | sistema de supressão de incêndio, supressão de incêndio, supressor de incêndio                    | `linhas`           | coberta |
| maquinas              | supressão de incêndio em máquinas, combate a incêndio em máquinas, supressão de incêndio veicular | `linhas`           | coberta |
| alarme-deteccao       | sistema de alarme e detecção de incêndio, detecção de incêndio para sala elétrica                 | `linhas`           | coberta |
| setores               | supressão de incêndio para mineração, supressor de incêndio colheitadeira                         | `segmentos`        | coberta |
| instalacao-manutencao | instalação de sistema de supressão de incêndio, manutenção de sistema de supressão de incêndio    | `processo`         | coberta |

As famílias além da principal não têm volume medido no Planejador: são proposta para a estrutura da campanha.

### Comitê de compra

| Papel                 | Argumento de compra                                    | Bloco que responde                       | Status  |
| --------------------- | ------------------------------------------------------ | ---------------------------------------- | ------- |
| Manutenção de frota   | atuação automática, menos máquina parada               | `processo`, `segmentos`, `perguntas`     | coberto |
| Segurança do trabalho | proteção de operador e patrimônio, normas              | `segmentos`, `perguntas`, `diferenciais` | coberto |
| Engenharia            | dimensionamento por equipamento, especificação técnica | `linhas`, `processo`                     | coberto |
| Compras               | garantia, venda direta, atendimento nacional           | `linhas`, `perguntas`, `diferenciais`    | coberto |

Papéis propostos na ficha; confirmar com a Safe Mine.

### Conteúdo futuro

| Grupo                 | O que oferece                | Por que está fora                              |
| --------------------- | ---------------------------- | ---------------------------------------------- |
| Supressor náutico LSI | linha SEIVE para embarcações | não consta na página de supressão da Safe Mine |

## Composição

Derivada em: 29/10/2026 · comando aplicado: `npm run compose -- linhas processo segmentos perguntas diferenciais`

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro     | Veredicto na ficha | Famílias que responde                        |
| ---------- | -------------- | --------- | ----------- | ------------------ | -------------------------------------------- |
| oferta     | `linhas`       | branco    | pt-20 pb-10 | completo           | sistema-supressao, maquinas, alarme-deteccao |
| apoio      | `processo`     | branco    | pt-6 pb-16  | completo · navy    | instalacao-manutencao                        |
| prova      | `segmentos`    | branco    | pt-6 pb-10  | completo           | setores                                      |
| autoridade | `perguntas`    | cinza-100 | py-16       | completo           | —                                            |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | completo · navy    | —                                            |

`perguntas` entrou por desempate de papéis (3 contra 2 de `diferenciais`), e `diferenciais` veio junto como portador navy da fase.

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                                                           |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------- |
| `clientes`       | insuficiente  | logos e números da apresentação são da SEIVE; faltam 4 logos autorizadas e 3 números da Safe Mine |
| `identificar`    | insuficiente  | os 6 dados que o comercial pede para dimensionar um sistema                                       |
| `situacoes`      | insuficiente  | gatilhos de contato reais do comercial (a compra é preventiva)                                    |
| `especificacoes` | insuficiente  | 4 modelos com atributos comparáveis; só há o kit de 15 kg                                         |
| `vitrine`        | insuficiente  | 6 a 24 produtos; há 2 sistemas                                                                    |
| `aplicacoes`     | insuficiente  | 4 aplicações com fotos distintas dos segmentos                                                    |
| `escopo`         | não se aplica | não é consolidação de compras                                                                     |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                                    | Origem                                               |
| --- | ----------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1   | MARCA                   | Safe Mine Soluções                                                                       | site do cliente                                      |
| 2   | MARCA_CURTA             | Safe Mine                                                                                | site do cliente                                      |
| 3   | PRODUTO_PRINCIPAL       | Sistemas de supressão de incêndio                                                        | ajustado à palavra-chave                             |
| 4   | CONTEXTO_DE_USO         | máquinas e equipamentos                                                                  | página de supressão do cliente                       |
| 5   | PUBLICO                 | Manutenção de frota, Segurança do trabalho, Engenharia, Compras                          | proposto — confirmar                                 |
| 6   | HERO                    | Sistema SEIVE certificado ABNT · Atuação automática em até 15 s · Atendimento consultivo | páginas do cliente e do fabricante                   |
| 7   | MARCAS_ATENDIDAS        | SEIVE, só por extenso                                                                    | logo da SEIVE sem autorização registrada             |
| 8   | SELOS_DE_CONFIANCA      | Garantia de 12 meses · Suporte técnico especializado · Atendimento em todo o Brasil      | páginas do cliente                                   |
| 9   | ENDERECO                | Belo Horizonte/MG                                                                        | "Quem somos" do cliente — endereço completo pendente |
| 10  | URL_FINAL + PRIVACIDADE | `https://lp-seive-supressao-de-incendio.vercel.app/` (provisória); sem política          | pendência                                            |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`               | default do padrão                                    |
| 12  | WHATSAPP                | 5531995538843 (botão "Orçamento por WhatsApp" do site)                                   | site do cliente                                      |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`                                                               | default do padrão                                    |
| 14  | TOKENS_DE_COR + FONTE   | azul #163b99 (navy #102c73), verde #7ba249 escurecido para #4d7f22; Manrope              | CSS do site do cliente                               |
| 15  | CAMPANHA                | `sistema de supressão de incêndio`                                                       | Planejador de Palavras-chave                         |

## Assets

| Asset          | Arquivo esperado        | Especificação               | Status                               |
| -------------- | ----------------------- | --------------------------- | ------------------------------------ |
| Logo           | `src/assets/LOGO.png`   | 240×200, fundo transparente | entregue — logo do site da Safe Mine |
| Banner do hero | `src/assets/heroBg.png` | 1981×900, brief 4.1.3       | **pendente**                         |

| Asset                        | Arquivo esperado                           | Especificação                 | Status                                                                                                               |
| ---------------------------- | ------------------------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Supressão para máquinas      | `src/assets/linhas/linha-1.png`            | PNG 800×600 recortado         | entregue — reservatório da apresentação SEIVE                                                                        |
| Alarme e detecção fixos      | `src/assets/linhas/linha-2.png`            | PNG 800×600 recortado         | **pendente**                                                                                                         |
| Geradores e estacionários    | `src/assets/linhas/linha-3.png`            | PNG 800×600 recortado         | entregue — reservatório do site da SEIVE                                                                             |
| Peças genuínas (card escuro) | `src/assets/linhas/marcas.png`             | 1280×800                      | entregue — família de reservatórios da apresentação                                                                  |
| Segmentos 1–8                | `src/assets/segmentos/segmento-{1..8}.png` | 1200×900 (4:3)                | entregues — 6 da apresentação SEIVE, gerador do site da Safe Mine, escavadeira do site da SEIVE; 4 abaixo de 1200 px |
| Cenário dos diferenciais     | `src/assets/diferenciais/cenario.jpg`      | 1600×900                      | entregue — foto do acionador do site da Safe Mine (1280×720)                                                         |
| Pessoa dos diferenciais      | `src/assets/diferenciais/pessoa.png`       | 1220×1000, fundo transparente | **pendente**                                                                                                         |

Direito de uso das fotos de setor (máquinas de fabricantes na apresentação da SEIVE) a confirmar com o cliente.

## Conflitos com o padrão

| O que o material pedia                               | Regra do padrão                     | O que entrou no lugar                                                                    |
| ---------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| Material técnico do fabricante numa LP do revendedor | não inventar fato                   | Safe Mine como fornecedora; fatos técnicos atribuídos à SEIVE                            |
| Números divergentes nas fontes da SEIVE              | número sem fonte não entra          | só "mais de 6.000 sistemas", segundo a fabricante                                        |
| ABNT PE-223 no texto × PE-289 no selo                | não inventar fato                   | "certificado pela ABNT", sem número do programa                                          |
| Logos de clientes da SEIVE                           | clientes têm de ser do anunciante   | bloco de clientes fora                                                                   |
| Superlativos do site da SEIVE                        | claim sem comprovação não vai ao ar | nenhum; termos em `campaign.forbidden`                                                   |
| Verde da Safe Mine nos botões                        | botão com texto branco exige 4,5:1  | verde escurecido (#4d7f22) como cor de ação                                              |
| Title no formato padrão com 83 caracteres            | title ≤ 70 caracteres               | `conteudo.title` da ficha: "Sistema de supressão de incêndio para máquinas \| Safe Mine" |

## Dados não aplicados

WhatsApp secundário (31) 99710-0350; dados de contato da SEIVE (telefones, e-mails, CNPJ, endereço em Contagem/MG); linhas SEIVE fora do portfólio da Safe Mine (náutico LSI, SEIVE LUB); demais produtos da Safe Mine; depoimentos do site da SEIVE; texto institucional da Safe Mine (missão, visão, valores).

## Desvios técnicos da execução

- `src/data/sections/processo.ts`: a lista de etapas é anotada como `ProcessStep[]` fora do `as const`. Sem prazo em nenhuma etapa (regra da seção), o exemplo da biblioteca não compila — o tipo literal perde a propriedade opcional `when`. Correção a levar para a biblioteca.
- `npm run screens` falha nesta pasta: o script monta o comando com `shell: true` e o caminho tem espaços. As capturas foram feitas com os mesmos parâmetros (porta 4873, Playwright 1.58.2, `?screens=1` e `?grid=1`), com caminho relativo.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 29/10/2026
- [ ] Todos os assets reais entregues
- [ ] `npm run verify` passa inteiro em: `____/____/______`
- [x] Padrão B2 versão: `2.8.0`
