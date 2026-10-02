# Atualização do portfólio — 01/10/2026

> A [revisão técnica posterior](REVISAO-TECNICA.md) atualiza as informações de estrutura, geração de HTML, build e performance deste registro.

## Ajustes após a revisão do usuário

Esta seção registra o estado atual e substitui as descrições correspondentes do relatório inicial abaixo:

- Apenas DroidKo e Transsend aparecem nos projetos; Vaguei, AssetFlow e FinTrack e a apresentação de projetos complementares foram removidos a pedido do usuário. Os dados e estilos sem uso foram eliminados.
- Os títulos dos dois projetos usam o tamanho anteriormente aplicado aos projetos complementares: `clamp(1.6rem, 3vw, 2.6rem)`.
- Removidos a transição, o deslocamento dos projetos e a mudança visual de seus links por hover. O destaque por foco de teclado permanece.
- A seção Stack inteira usa o mesmo fundo preto e texto/bordas claros da seção Projetos.
- O bloco Formação foi removido da home, junto com seus cursos e idiomas; essas informações continuam no PDF atualizado.
- O Hero mostra apenas “Desenvolvedor de Software” como título e não apresenta mais o parágrafo de introdução. O complemento Kotlin/Android permanece.
- O resumo Sobre é um único parágrafo com o texto completo solicitado.
- Montserrat é utilizada em todo o site, inclusive páginas internas, com arquivos WOFF2 locais e licença SIL Open Font License em `wwwroot/fonts/`. A fonte principal é pré-carregada; não há consulta a Google Fonts durante a navegação.
- O texto central do rodapé foi substituído por `=)`, centralizado por colunas de largura simétrica no desktop e também no mobile.
- A imagem Open Graph foi recapturada do Hero atualizado com Montserrat.

A Stack também passou a apresentar as tecnologias em caixas com bordas, usando os mesmos tamanhos e espaçamentos das páginas de projetos. Os botões “Ver projeto” voltaram a inverter as cores por hover, com transição de cor; os artigos de projeto continuam sem deslocamento ou animação.

A validação de navegador foi ajustada para os dois projetos, ausência de Formação, resumo único, novo título, fonte carregada, Stack preta, ausência de movimento por hover e novo rodapé. As alterações continuam locais, sem commits, push ou deploy.


As alterações estão locais para revisão. Esta atualização não criou commits, não executou push, merge ou deploy e não alterou a branch principal remotamente.

## Estado encontrado após a interrupção

Já estavam salvos o Hero Android/Kotlin, o resumo, o histórico profissional, a formação, os cursos, os idiomas, a stack, os dados compartilhados de projetos e a cópia pública do currículo atualizado. As páginas dos dois projetos também estavam iniciadas.

Ainda faltavam o HTML inicial com SEO atualizado, o carregamento do script de metadados, a imagem de compartilhamento, os HTMLs de entrada das rotas, sitemap/robots e a validação de produção e de navegador. Essas partes foram concluídas na retomada. Os testes também permitiram corrigir a navegação de um projeto para o outro sem recarregar e o foco do link de salto por teclado.

## Auditoria do projeto

- Framework e linguagem: Blazor WebAssembly, C#, .NET 10. Dependências existentes: `Microsoft.AspNetCore.Components.WebAssembly` e `Microsoft.AspNetCore.Components.WebAssembly.DevServer`, ambas 10.0.9. O arquivo do projeto e suas dependências foram preservados.
- Rotas: `Router` nativo em `App.razor`, com `@page` nas páginas. Não foi adicionada biblioteca de roteamento.
- Estrutura: `Pages/`, `Layout/`, `Shared/` e assets públicos em `wwwroot/`. `Content/` passa a concentrar os dados compartilhados entre a home e os projetos.
- Design: CSS próprio, visual monocromático, fundo quadriculado, terminal e fontes de sistema. Não havia sistema de alternância de temas nem fontes remotas. Os ícones de contato são SVGs locais; os favicons foram mantidos.
- Responsividade: media queries existentes preservadas e ajustadas para os novos textos, menu e páginas internas. O título principal continua sem underscore. A animação já existente no terminal respeita redução de movimento.
- Build: `build.sh` instala o SDK .NET 10 e publica em `output/wwwroot`. O script e a configuração de build foram preservados. Não havia configuração local de Functions, workflow de CI, manifest, sitemap, robots ou dados estruturados.
- SEO anterior: title, description e imagem Open Graph apresentavam o foco antigo em .NET. Os metadados estáticos e a imagem foram substituídos.
- Validação anterior: não havia lint configurado nem projeto de testes .NET. A compilação C#/Razor faz a verificação de tipos; foi acrescentado um script de validação de navegador separado das dependências do site.

## Conteúdo

O posicionamento principal passou de **Fullstack .NET / Desenvolvedor .NET** para **Desenvolvedor de Software Android**.

O resumo comunica experiência profissional com sistemas corporativos, APIs REST e aplicações multiplataforma, com foco atual em Android nativo e Kotlin. MVVM, Clean Architecture, SOLID, integração de APIs, bancos relacionais, Git e testes aparecem conforme o currículo, sem atribuição de senioridade ou métricas.

- **SSP-AM:** Estagiário em Desenvolvimento de Sistemas e Suporte Técnico N2, Jan/2026 — Atual. Conteúdo inclui Node.js/Express, React/Vite/Tailwind CSS, gestão de ativos de TI, ASP.NET Core, .NET MAUI para Android e Windows, Entity Framework Core/PostgreSQL, JWT, Swagger/OpenAPI, Git/GitHub e colaboração. O suporte N2 permanece com Windows/Linux, TCP/IP, DNS, Active Directory, Kerberos, hardware e infraestrutura.
- **3D Alarmes Monitoramento & Rastreamento LTDA:** Analista de Monitoramento de Sistemas Críticos, Abr/2022 — Jan/2026. Mantidas telemetria, rastreamento, ferramentas documentadas, pronta-resposta, relatórios e atendimento. A função não foi apresentada como desenvolvimento de software.
- **Formação:** Bacharelado em Ciência da Computação, em andamento, sem data de conclusão inventada. A situação foi informada expressamente no pedido; o PDF não especifica a conclusão.
- **Cursos:** Formação Android com Kotlin — DIO; Android Development — Google; Kotlin Fundamentals — JetBrains Hyperskill; Fundamentos Android — Samsung Ocean Manaus. Sem horas, datas ou certificados não documentados.
- **Idiomas:** Português nativo; Inglês intermediário / B2 EF SET.
- **Contato:** e-mail e GitHub preservados. LinkedIn corrigido para `https://www.linkedin.com/in/ericke-castro/`, conforme a correção mais recente do usuário. O endereço sem hífen informado no PDF foi identificado pelo usuário como inválido; o PDF original foi preservado. O telefone não foi adicionado à interface do site.

## Projetos

**DroidKo** aparece primeiro. A página `/projetos/droidko` apresenta aprendizagem de Kotlin, trilhas, exercícios com explicações, progresso, revisão baseada nos erros e uso offline. A apresentação técnica inclui Kotlin, Compose, Navigation, Coroutines/Flow, Room/SQLite, DataStore, Hilt, MVVM, SOLID, JUnit, MockK e testes de interface com Compose.

**Transsend** aparece em seguida. A página `/projetos/transsend` apresenta transferência multiplataforma pela rede local, QR Code, TLS, autorização de recebimento, progresso e cancelamento. A apresentação técnica inclui Kotlin Multiplatform, Compose Multiplatform, Ktor, Coroutines/Flow, kotlinx.serialization, Room/SQLite, MVVM, injeção de dependências, JUnit e testes de integração.

Os CTAs **Ver projeto** abrem as páginas internas na mesma aba. Cada página apresenta objetivo, funcionalidades, engenharia, tecnologias, navegação de retorno e acesso ao outro projeto. Ambas usam o componente compartilhado `Shared/ProjectDetails.razor`.

Os projetos indicam **Código-fonte privado — projeto atualmente em desenvolvimento**. Não foram criados, pesquisados ou publicados links de seus repositórios privados. `RepositoryUrl` permanece nulo; a estrutura permite adicionar um endereço público futuramente.

Não foram encontrados screenshots reais dos dois aplicativos no workspace pesquisado. Não foram geradas interfaces fictícias. O modelo aceita imagens com texto alternativo; a galeria só aparece quando imagens reais são cadastradas, com proporções preservadas, responsividade e carregamento lazy.

**Vaguei, AssetFlow e FinTrack foram mantidos**, abaixo dos projetos principais, como experiência complementar. Seus links públicos foram verificados. FinTrack descreve .NET MAUI e Gemini como parte da proposta do projeto, evitando afirmar que o roadmap inteiro está implementado. Nenhum projeto antigo foi excluído. Recomenda-se revisar futuramente status e funcionalidades desses três projetos conforme seus repositórios evoluírem.

## Tecnologias

Foram criadas seis categorias: **Android**, **Multiplataforma**, **Arquitetura e testes**, **Integração e dados**, **Linguagens** e **Ferramentas**. Android aparece primeiro, com destaque visual. A stack usa listas organizadas, sem porcentagens ou níveis subjetivos.

Kotlin, Android SDK, Jetpack Compose, ViewModel, Navigation, Coroutines/Flow, Room, Hilt e DataStore têm prioridade. Kotlin Multiplatform e Compose Multiplatform também aparecem. C#, JavaScript, SQL, .NET MAUI, PostgreSQL e as ferramentas do currículo permanecem visíveis. ASP.NET Core, Entity Framework Core, Node.js/Express, React, Vite, Tailwind CSS, JWT e Swagger/OpenAPI permanecem no contexto profissional e nos projetos complementares.

## Currículo

- Fonte lida integralmente: `Curriculo Ericke Manaus.pdf`, na raiz, fornecido pelo usuário e preservado.
- Cópia pública: `wwwroot/Ericke-Castro-Curriculo.pdf`.
- Artefato publicado localmente: `output/wwwroot/Ericke-Castro-Curriculo.pdf`.
- Os dois links de download, no Hero e no contato, usam `/Ericke-Castro-Curriculo.pdf`.
- O PDF público anterior, `wwwroot/Curriculo-Ericke-Castro.pdf`, foi removido. `_redirects` mantém redirecionamento 301 do endereço antigo para o novo, para não quebrar links já compartilhados.
- Os arquivos da raiz, público e build possuem os mesmos bytes. SHA-256: `7a773a559499442dfa01e4a50795c851a3e0bf3473c4ad344f15a3f6a7f6381f`.

## SEO

- **Title principal:** Ericke Castro | Desenvolvedor de Software Android.
- **Description:** Desenvolvedor de Software Android em Manaus, Amazonas. Projetos com Kotlin, arquitetura e testes, com experiência em sistemas corporativos e APIs REST.
- **Projetos:** títulos DroidKo | Ericke Castro e Transsend | Ericke Castro, com descrições e canonical próprios.
- **Open Graph e Twitter/X:** títulos, descrições, URLs e textos alternativos atualizados. A imagem comum foi substituída por uma captura real do Hero atualizado, em 1200 × 630, sem mockups de aplicativos.
- **Dados estruturados:** JSON-LD com Person e WebPage, nome, título profissional e perfis públicos. O nó WebPage acompanha a navegação da SPA.
- **Sitemap e robots:** adicionados para a home e os dois projetos, sem datas artificiais.
- **Entradas estáticas:** `wwwroot/projetos/droidko/index.html` e `wwwroot/projetos/transsend/index.html` carregam a mesma aplicação Blazor com metadados próprios já no HTML, para leitores que não executam JavaScript.
- **SPA:** `PageMetadata.razor` sincroniza title, description, Open Graph, Twitter, canonical, robots e dados estruturados durante a navegação. Não existem tags de description duplicadas no DOM testado.
- **Página não encontrada:** mantém retorno ao início e `noindex` após o carregamento da SPA. Como no fallback padrão de SPA do Pages, rotas desconhecidas recebem o HTML inicial com HTTP 200; isso não representa um 404 de servidor.
- **Favicon e manifest:** favicon preservado; não havia manifest e não foi introduzida funcionalidade de PWA.

Os metadados e assets locais foram verificados. A aparência efetiva nos caches de LinkedIn, WhatsApp e Discord deverá ser conferida após uma publicação autorizada; o site público não recebeu esta atualização.

## Código

Arquivos principais criados:

- `Content/PortfolioContent.cs`: dados tipados, projetos, cursos, stack, contatos e referência ao PDF.
- `Pages/DroidKo.razor` e `Pages/Transsend.razor`: rotas internas.
- `Shared/ProjectDetails.razor`: apresentação reutilizável dos projetos.
- `Shared/PageMetadata.razor` e `wwwroot/js/metadata.js`: sincronização de metadados e apoio ao foco do link de salto.
- `wwwroot/projetos/droidko/index.html` e `wwwroot/projetos/transsend/index.html`: HTMLs de entrada com SEO estático.
- `wwwroot/Ericke-Castro-Curriculo.pdf`, `wwwroot/robots.txt`, `wwwroot/sitemap.xml` e `wwwroot/_redirects`.
- `scripts/validate-browser.cjs`: verificação automatizada de navegação, acessibilidade e responsividade.
- `docs/ATUALIZACAO-PORTFOLIO.md`: este relatório.

Arquivos principais modificados:

- `Pages/Home.razor`: conteúdo, hierarquia, experiências e projetos.
- `Layout/MainLayout.razor`: navegação comum, rodapé e link de salto com foco.
- `App.razor`: foco ao navegar e tratamento de página não encontrada.
- `_Imports.razor`: importação do conteúdo compartilhado.
- `wwwroot/index.html`: SEO atualizado e scripts necessários.
- `wwwroot/css/app.css`: adaptação incremental do visual e responsividade.
- `wwwroot/portfolio-preview.png`: captura do Hero atualizado.
- `README.md`: estrutura, conteúdo e manutenção de metadados.

Arquivo removido: `wwwroot/Curriculo-Ericke-Castro.pdf`, substituído pelo novo PDF. O currículo de entrada da raiz continua preservado como arquivo fornecido pelo usuário.

## Validação

| Verificação | Resultado |
| --- | --- |
| Lint | Não havia linter configurado; `git diff --check`, sintaxe dos scripts JS e `sh -n build.sh` passaram. |
| Typecheck | C#/Razor compilados no build e publish; sem erros de tipos. |
| Testes .NET | Não havia projeto de testes .NET. |
| Build de produção | `dotnet publish Portfolio.csproj -c Release -o output --no-restore` concluído. |
| Ambiente Pages | Artefato servido localmente por `wrangler pages dev`, sem publicação. |
| Responsividade | Home, DroidKo e Transsend em 320, 375, 640, 768, 1024, 1440 e 1920 px: 21 combinações, sem overflow horizontal. |
| Acessibilidade | Seis auditorias axe, em 375 e 1440 px nas três páginas, sem violações nos critérios WCAG A/AA selecionados. Inspeção visual de capturas desktop/mobile. |
| Rotas | Acesso direto, refresh, navegação home → DroidKo → Transsend, histórico, retorno às âncoras e rota com barra final verificados. |
| Teclado | Link de salto alcançável por Tab e ativável por Enter, com foco no conteúdo; foco de navegação e estados visíveis dos links preservados. |
| Metadados | Title, OG, canonical e JSON-LD consistentes, inclusive após navegação sem reload; HTMLs estáticos dos projetos verificados. |
| Privacidade dos projetos | Sem links ou requisições para repositórios privados de DroidKo e Transsend. |
| Currículo | Dois CTAs, HTTP 200, assinatura PDF e bytes iguais ao currículo original; PDF presente no build. Endereço antigo com 301 para o novo. |
| Links públicos | GitHub do perfil, Vaguei, AssetFlow e FinTrack: HTTP 200. LinkedIn: consulta automatizada bloqueada com HTTP 999; endereço confirmado pelo usuário. |
| Links internos | Âncoras válidas, sem links vazios ou `href="#"`; links externos com `noopener noreferrer`. |
| Referências antigas | Sem posicionamento principal antigo em páginas, componentes, conteúdo ou HTML público. .NET preservado como experiência complementar. |
| Animação | Sem underscore no título; redução de movimento desativa a animação do terminal. |
| Runtime | Testes no Chromium sobre o artefato de produção, sem erros de página. |

O SDK emite a mensagem informativa de que o workload opcional `wasm-tools` não está instalado, publicando sem essas otimizações adicionais. O publish funciona com a configuração existente. Não foram adicionadas dependências de runtime, fontes remotas ou bibliotecas de roteamento. Não foram medidas métricas Lighthouse ou Core Web Vitals; as verificações de acessibilidade automatizadas não substituem avaliação manual completa com leitores de tela.

### Repetir a validação local

Na raiz do repositório:

```sh
dotnet publish Portfolio.csproj -c Release -o output
npm install --prefix /tmp/portfolio-validation playwright @axe-core/playwright wrangler --no-audit --no-fund
/tmp/portfolio-validation/node_modules/.bin/playwright install chromium
```

Em outro terminal, iniciar somente o servidor local do Pages:

```sh
WRANGLER_SEND_METRICS=false /tmp/portfolio-validation/node_modules/.bin/wrangler pages dev output/wwwroot --ip 127.0.0.1 --port 8788 --compatibility-date 2026-10-01 --persist-to /tmp/portfolio-validation/wrangler-state --show-interactive-dev-session=false
```

Executar as verificações:

```sh
NODE_PATH=/tmp/portfolio-validation/node_modules node scripts/validate-browser.cjs
```

As dependências de teste ficam fora do projeto, sem alterar as dependências do site. O script salva capturas e `results.json` em `/tmp/portfolio-validation`. `PORTFOLIO_TEST_URL` e `PORTFOLIO_TEST_OUTPUT` permitem ajustar servidor e diretório de resultados. Reinicie o servidor local caso altere regras em `_redirects`.

## Pendências e revisão

- Revisar o conteúdo e o visual localmente antes de qualquer commit ou publicação.
- Adicionar screenshots reais de DroidKo e Transsend quando disponíveis; a ausência delas não impede navegar pelas páginas.
- Conferir a abertura do LinkedIn em uma sessão de navegador humana: o endereço foi confirmado, mas a plataforma bloqueou o teste automatizado.
- Revalidar cards de compartilhamento nas plataformas após um deploy autorizado, considerando seus caches.
- Revisar futuramente o status dos projetos complementares e manter seus textos alinhados com a implementação pública. A bio e o README do perfil público do GitHub ainda apresentam foco em .NET; eles estão fora do escopo deste repositório e não foram alterados.

Não foram copiadas credenciais, configurações privadas ou informações internas da SSP-AM para o site. O conteúdo profissional foi baseado no currículo atualizado, nas instruções do usuário e no conteúdo já verificável do portfólio.
