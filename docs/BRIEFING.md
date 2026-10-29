# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

> **Desvio de processo desta LP:** não houve conversa de chat com o `PROMPT-FICHA-LP.md`. A ficha foi montada no editor, em 29/10/2026, a partir do briefing de campanha organizado, do material do cliente e do fabricante e do POP de estruturação de LPs da B2. O que dependia de confirmação virou pendência declarada abaixo, não valor inventado.

## Origem

| Campo                     | Valor                                                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                                                                                                                                    |
| Data da ficha             | 2026-10-29                                                                                                                                                                                                            |
| Versão do padrão na ficha | 2.8.0 — o briefing cita v2.9.0, que não existe no repositório do starter                                                                                                                                              |
| Validada em               | 29/10/2026 por `npm run ficha`                                                                                                                                                                                        |
| Material bruto do cliente | `docs/briefing-cliente/` (fora do git): apresentação "Seive Supressor 2026" e POP de LPs; "briefing-organizado-seive-kit-incendio.md" (28/10/2026, enviado na conversa); sites safeminesolucoes.com.br e seive.com.br |
| Briefing de campanha      | sim, campanha `SEIVE_PESQ_SUPRESSAO_B2B`, grupos "Supressão em máquinas" e "Supressão em equipamentos móveis"                                                                                                         |
| Fora desta execução       | grupo "Supressão náutica" (LSI Náutico) e lubrificação automática                                                                                                                                                     |

**Cliente e fabricante.** O briefing de campanha foi organizado só com o material da SEIVE e traz a SEIVE no núcleo (marca, endereço em Contagem/MG, WhatsApp). O cliente informado na conversa é a **Safe Mine Soluções** (Belo Horizonte/MG), que revende e especifica o sistema SEIVE. A LP é da Safe Mine; a SEIVE aparece como fabricante, por extenso. **Confirmar com a B2 antes de ativar a campanha.**

## Campanha

| Campo                      | Valor                                                                                                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `supressão de incêndio SEIVE` — no H1 e no title                                                                                                                                                    |
| Origem                     | briefing de campanha                                                                                                                                                                                |
| Área atendida              | não declarada na página — o briefing pede confirmar a cobertura antes de usá-la em hero, selo ou cotação                                                                                            |
| Negativas de oferta        | extintor doméstico, extintor automotivo avulso, mangueira de incêndio, alarme residencial, detector de fumaça casa, central de alarme, detecção para data center, sistema de lubrificação           |
| Negativas de intenção      | curso de bombeiro, corpo de bombeiros concurso, como apagar fogo, projeto escolar incêndio (só registro)                                                                                            |
| Claims proibidos           | promessas absolutas de risco eliminado ou de perdas evitadas (em `campaign.forbidden` como "risco zero", "elimina o risco", "evita perdas"…), mais autorizado/oficial/exclusivo e superlativos      |
| Divergência de vocabulário | o cliente diz "Sistema Supressor" e "Kit de Incêndio SEIVE"; a campanha compra "sistema de supressão de incêndio" e "supressão para máquinas pesadas/equipamentos móveis" — H1 no termo da campanha |

### Famílias de palavra-chave

| Família               | Termos                                                                                                                                                           | Bloco que responde | Status  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| produto-categoria     | sistema de supressão de incêndio; supressão de incêndio SEIVE                                                                                                    | `linhas`           | coberta |
| equipamento-aplicacao | supressão para máquinas pesadas; supressão para equipamentos móveis; proteção contra incêndio máquinas industriais; sistema automático combate incêndio máquinas | `aplicacoes`       | coberta |
| setor                 | sistema de supressão de incêndio mineração                                                                                                                       | `aplicacoes`       | coberta |
| transacional          | cotação sistema supressão incêndio                                                                                                                               | `identificar`      | coberta |

### Comitê de compra

| Papel                | Argumento de compra | Bloco que responde                      | Status                                       |
| -------------------- | ------------------- | --------------------------------------- | -------------------------------------------- |
| Gestor de manutenção | ausente no briefing | `linhas`, `identificar`, `diferenciais` | coberto pelo conteúdo; argumento a confirmar |
| Gestor de segurança  | ausente no briefing | `aplicacoes`, `diferenciais`            | coberto pelo conteúdo; argumento a confirmar |
| Gestor de frotas     | ausente no briefing | `linhas`, `identificar`, `aplicacoes`   | coberto pelo conteúdo; argumento a confirmar |

### Conteúdo futuro

| Grupo             | O que oferece            | Por que está fora           |
| ----------------- | ------------------------ | --------------------------- |
| Supressão náutica | LSI Náutico, embarcações | fora do recorte da campanha |

## Composição

Derivada em: 29/10/2026 · comando aplicado: `npm run compose -- linhas identificar aplicacoes diferenciais`

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro     | Veredicto na ficha | Famílias que responde                    |
| ---------- | -------------- | --------- | ----------- | ------------------ | ---------------------------------------- |
| oferta     | `linhas`       | branco    | pt-20 pb-10 | completo           | produto-categoria                        |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | completo · navy    | transacional                             |
| prova      | `aplicacoes`   | cinza-100 | pt-4 pb-20  | completo           | equipamento-aplicacao, setor             |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | completo · navy    | produto-categoria, equipamento-aplicacao |

Diferenças em relação aos veredictos do briefing organizado: `linhas` (componentes do kit, com fotos da apresentação) e `aplicacoes` (fotos da apresentação e do site da SEIVE) passaram a completos com o material reunido nesta execução; `segmentos` e `perguntas` também fecham a contagem, mas perderam pela regra fixa.

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                                |
| ---------------- | ------------- | ---------------------------------------------------------------------- |
| `processo`       | quase         | sequência real, responsável por etapa e marcos públicos                |
| `segmentos`      | completo      | perdeu para `aplicacoes` (responde a menos famílias)                   |
| `perguntas`      | completo      | perdeu para `diferenciais`, que já é o portador navy da fase           |
| `clientes`       | insuficiente  | logos e números da apresentação são da SEIVE, sem autorização expressa |
| `situacoes`      | insuficiente  | gatilhos de contato reais do comercial                                 |
| `especificacoes` | insuficiente  | 4 a 10 modelos ou configurações comparáveis                            |
| `vitrine`        | insuficiente  | 6 a 24 produtos                                                        |
| `escopo`         | não se aplica | não é consolidação de compras                                          |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                                                          | Origem                                                 |
| --- | ----------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 1   | MARCA                   | Safe Mine Soluções                                                                                             | cliente informado; o briefing dizia SEIVE              |
| 2   | MARCA_CURTA             | Safe Mine                                                                                                      | site do cliente                                        |
| 3   | PRODUTO_PRINCIPAL       | Sistemas de supressão de incêndio SEIVE                                                                        | briefing (título do anúncio)                           |
| 4   | CONTEXTO_DE_USO         | máquinas pesadas                                                                                               | briefing (título do anúncio)                           |
| 5   | PUBLICO                 | Gestores de manutenção, de segurança e de frotas                                                               | briefing                                               |
| 6   | HERO                    | Sistemas SEIVE para máquinas pesadas · Proteção automatizada para equipamentos móveis · Solução para mineração | briefing                                               |
| 7   | MARCAS_ATENDIDAS        | SEIVE, só por extenso                                                                                          | logo da SEIVE sem autorização registrada               |
| 8   | SELOS_DE_CONFIANCA      | Detecção e atuação automáticas · Acionamento manual disponível · Garantia de 12 meses                          | briefing                                               |
| 9   | ENDERECO                | Belo Horizonte/MG                                                                                              | site do cliente — endereço completo pendente           |
| 10  | URL_FINAL + PRIVACIDADE | `https://lp-seive-supressao-de-incendio.vercel.app/`; sem política de privacidade                              | Vercel                                                 |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                                     | default do padrão                                      |
| 12  | WHATSAPP                | 5531995538843 ("Orçamento por WhatsApp" do site da Safe Mine)                                                  | site do cliente; o briefing trazia os números da SEIVE |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`; preview na Vercel                                                                  | default do padrão                                      |
| 14  | TOKENS_DE_COR + FONTE   | azul #163b99 (navy #102c73), verde #7ba249 escurecido para #4d7f22; Manrope                                    | CSS do site do cliente                                 |
| 15  | CAMPANHA                | `supressão de incêndio SEIVE`                                                                                  | briefing de campanha                                   |

## Assets

| Asset          | Arquivo esperado        | Especificação               | Status                               |
| -------------- | ----------------------- | --------------------------- | ------------------------------------ |
| Logo           | `src/assets/LOGO.png`   | 240×200, fundo transparente | entregue — logo do site da Safe Mine |
| Banner do hero | `src/assets/heroBg.png` | 1981×900, brief 4.1.3       | **pendente**                         |

| Asset                        | Arquivo esperado                             | Especificação                 | Status                                                                 |
| ---------------------------- | -------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------- |
| Reservatório                 | `src/assets/linhas/linha-1.png`              | PNG 800×600 recortado         | entregue — apresentação SEIVE                                          |
| Painel de monitoramento      | `src/assets/linhas/linha-2.png`              | PNG 800×600 recortado         | entregue — apresentação SEIVE (original 328×219)                       |
| Acionador                    | `src/assets/linhas/linha-3.png`              | PNG 800×600 recortado         | entregue — apresentação SEIVE                                          |
| Peças genuínas (card escuro) | `src/assets/linhas/marcas.png`               | 1280×800                      | entregue — família de reservatórios da apresentação                    |
| Aplicações 1–4               | `src/assets/aplicacoes/aplicacao-{1..4}.png` | 1200×900 (4:3)                | entregues — apresentação SEIVE e site da SEIVE; a florestal tem 899 px |
| Cenário dos diferenciais     | `src/assets/diferenciais/cenario.jpg`        | 1600×900                      | entregue — foto do acionador do site da Safe Mine (1280×720)           |
| Pessoa dos diferenciais      | `src/assets/diferenciais/pessoa.png`         | 1220×1000, fundo transparente | **pendente**                                                           |

Direito de uso das fotos de máquinas da apresentação da SEIVE a confirmar.

## Conflitos com o padrão

| O que o material pedia                                 | Regra do padrão                                          | O que entrou no lugar                                                              |
| ------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| SEIVE como marca no núcleo do briefing                 | a LP é do anunciante                                     | Safe Mine na marca, rodapé e WhatsApp; SEIVE como fabricante                       |
| Certificação ABNT, NFPA, UL, ISO 9001 e patente        | o briefing pede confirmar certificados antes de publicar | fora da página até a confirmação                                                   |
| Área "Brasil e América do Sul"                         | o briefing pede confirmar a cobertura                    | nenhuma área declarada                                                             |
| Linha "Sistema fixo de alarme e detecção" da Safe Mine | o que a campanha negativa não é assunto da página        | oferta só no Kit de Incêndio SEIVE                                                 |
| Logos de clientes da SEIVE                             | clientes têm de ser do anunciante, com autorização       | bloco de clientes fora                                                             |
| Verde da Safe Mine nos botões                          | botão com texto branco exige 4,5:1                       | verde escurecido (#4d7f22)                                                         |
| CTA e formulário próprios                              | vocabulário de CTA e shortcode do plugin                 | CTAs do padrão; os 6 campos viraram o painel de dados para cotação                 |
| Title no formato padrão com mais de 80 caracteres      | title ≤ 70 caracteres                                    | `conteudo.title`: "Supressão de incêndio SEIVE para máquinas pesadas \| Safe Mine" |

## Dados não aplicados

LSI Náutico e SEIVE LUB; WhatsApp secundário (31) 99710-0350; contatos da SEIVE (telefones, e-mails, CNPJ, endereço); números da SEIVE (6.000 sistemas, 5.000 equipamentos salvos, R$ 6 bi preservados), que só entram com o bloco de clientes; depoimentos do site da SEIVE; demais produtos da Safe Mine; texto institucional.

## Desvios técnicos da execução

- `npm run screens` falha nesta pasta: o script monta o comando com `shell: true` e o caminho tem espaços. As capturas foram feitas com os mesmos parâmetros (porta 4873, Playwright 1.58.2, `?screens=1` e `?grid=1`), com caminho relativo e 5 s de espera.
- Correção a levar para a biblioteca: em `processo`, quando nenhuma etapa tem prazo (a regra da seção manda omitir), o `as const` do exemplo faz o componente não compilar.
- Véus do hero e brilho dos botões têm navy/laranja fixos em rgba no código da estrutura e da biblioteca, fora dos tokens.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 29/10/2026
- [ ] Todos os assets reais entregues
- [ ] `npm run verify` passa inteiro em: `____/____/______`
- [x] Padrão B2 versão: `2.8.0`
