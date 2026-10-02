# Portfólio — Ericke Castro

Portfólio pessoal desenvolvido com C#, .NET 10 e Blazor WebAssembly. Apresenta DroidKo e Transsend, com páginas internas, e utiliza Montserrat hospedada localmente.

## Rodar localmente

Com o SDK .NET 10 instalado, execute na raiz:

```sh
dotnet watch --project Portfolio.csproj run --urls http://127.0.0.1:5080
```

Abra http://127.0.0.1:5080. Encerre com Ctrl+C. O build gera automaticamente o HTML inicial das três páginas; não é necessário editar esses arquivos manualmente.

## Estrutura

- `Content/PortfolioContent.cs`: textos, links, projetos e tecnologias compartilhados.
- `Content/site-template.html`: documento HTML e marcadores para metadados e conteúdo inicial.
- `Pages/`: páginas e rotas; `Layout/`: estrutura comum; `Shared/`: componentes reutilizáveis.
- `wwwroot/`: recursos públicos, incluindo `Ericke-Castro-Curriculo.pdf`, fontes, CSS e scripts.
- `tools/GeneratePages/`: ferramenta C# que renderiza os componentes Razor e gera `wwwroot/index.html` e `wwwroot/projetos/*/index.html` durante o build. Esses HTMLs são versionados, mas a fonte das alterações está nos componentes, dados e template.
- `scripts/`: publicação local, testes e ferramentas de desenvolvimento; não integra a aplicação publicada.
- `docs/`: registros da revisão.

Os metadados também são sincronizados durante a navegação pelo Blazor. O HTML inicial permite ler o conteúdo mesmo sem JavaScript; a aplicação interativa continua usando WebAssembly.

## Conferir a versão Release

Para reproduzir a publicação local, instale o workload uma vez:

```sh
dotnet workload install wasm-tools
./scripts/publish.sh
```

O script limpa somente a pasta gerada `output/` antes de publicar. Para servir o resultado e executar as verificações, use Node.js 22.19 ou superior:

```sh
npm ci --prefix scripts
cd scripts
npx playwright install chromium
npm run preview
```

Abra http://127.0.0.1:8788. Em outro terminal, na raiz:

```sh
npm --prefix scripts test
npm --prefix scripts run performance
npm --prefix scripts run format:check
```

Os relatórios Lighthouse ficam em `scripts/reports/`, ignorados pelo Git. A URL dos testes pode ser alterada com `PORTFOLIO_TEST_URL`.

O build do Cloudflare usa `./build.sh` e o diretório `output/wwwroot`. Gerar o Release ou executar o preview local não faz deploy.

## Antes de publicar

Veja [a revisão técnica](docs/REVISAO-TECNICA.md) para resultados de performance, validação e arquivos que devem permanecer fora do Git. O currículo público está na pasta correta; a cópia original na raiz é ignorada. O PDF recebido ainda contém o LinkedIn antigo, enquanto os links do site usam `https://www.linkedin.com/in/ericke-castro/`.

O [registro da atualização visual](docs/ATUALIZACAO-PORTFOLIO.md) documenta os ajustes anteriores.
