# Revisão técnica — 01/10/2026

## Resultado

A estrutura está adequada para um portfólio Blazor WebAssembly. Foram corrigidos pontos de manutenção, publicação e carregamento inicial, sem alterar os ajustes visuais aprovados. As alterações permanecem locais: nenhum commit, push ou deploy foi realizado nesta revisão.

## Organização e manutenção

`Pages/` contém as rotas, `Layout/` a estrutura comum e `Shared/` os componentes reutilizáveis. `Content/PortfolioContent.cs` concentra os dados usados pela home, páginas de projetos e metadados. Recursos públicos pertencem a `wwwroot/`.

O currículo canônico é `wwwroot/Ericke-Castro-Curriculo.pdf`. A cópia original `Curriculo Ericke Manaus.pdf` na raiz foi preservada e ignorada pelo Git. A URL antiga do PDF redireciona para a atual. Os bytes do arquivo original, público e publicado foram comparados e são iguais.

A ferramenta `tools/GeneratePages/` reutiliza os próprios componentes Razor com `HtmlRenderer` para gerar conteúdo inicial e metadados das três páginas durante o build. Isso elimina a necessidade de sincronizar textos manualmente entre C# e HTML. Os HTMLs gerados permanecem versionados; devem ser atualizados pelo build, não editados diretamente. `Content/site-template.html` é o template do documento. A aplicação continua sendo publicada em hospedagem estática.

`global.json` seleciona SDK .NET 10 estável compatível. O projeto principal exclui o código da ferramenta de geração da compilação do cliente. As dependências de teste são privadas, ficam em `scripts/` e têm versões e lockfile fixados. O CSS foi formatado sem alteração visual.

`scripts/publish.sh` limpa apenas `output/` antes do Release para evitar recursos antigos acumulados. O build instala `wasm-tools`, permitindo otimização do runtime nativo. `InvariantGlobalization` reduz os recursos de internacionalização: os textos portugueses continuam iguais, mas futuras operações dependentes de cultura, como formatação localizada de datas e moedas, exigem revisar essa opção.

A renderização estática e a otimização seguem as APIs oficiais: [HtmlRenderer em ferramentas externas](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-components-outside-of-aspnetcore?view=aspnetcore-10.0) e [performance do runtime WebAssembly](https://learn.microsoft.com/en-us/aspnet/core/blazor/performance/webassembly-runtime-performance?view=aspnetcore-10.0).

## O que versionar

Inclua código, componentes, conteúdo, template, HTMLs gerados, recursos públicos, licença da Montserrat, currículo público, configurações, scripts, lockfile e documentação.

O `.gitignore` exclui `bin/`, `obj/`, `output/`, SDK local `.dotnet/`, instalador, `node_modules/`, `.wrangler/`, arquivos pessoais da IDE, `.env` e relatórios locais. Não envie credenciais, tokens ou dados privados; tudo em `wwwroot/` é público. `.env.example` pode ser versionado quando contiver apenas exemplos.

A varredura de padrões comuns de credenciais não encontrou correspondências nos arquivos candidatos ao Git. O Release não contém arquivos C#, projetos, `.env`, mapas de código ou PDB. Isso é uma verificação limitada por padrões, não uma garantia absoluta contra segredos. A consulta NuGet não encontrou vulnerabilidades conhecidas nas dependências diretas e transitivas; `npm audit` também retornou zero vulnerabilidades nas ferramentas.

## Performance medida

Lighthouse executado contra o Release local em `127.0.0.1:8788`, sem avisos. Mobile usa simulação de rede e CPU reduzidas. Desktop usa configuração própria de desktop. Os valores são medições de laboratório, não dados de usuários do site publicado.

| Medida | Antes | Depois, última execução |
| --- | --- | --- |
| Performance mobile | 37 | 69 |
| LCP mobile | 22,2 s | 1,3 s |
| Bloqueio total mobile (TBT) | 3.360 ms | 2.360 ms |
| Performance desktop | 51 | 84 |
| LCP desktop | 4,2 s | 0,9 s |
| Bloqueio total desktop (TBT) | 510 ms | 330 ms |
| Transferência inicial | ~3.560 KiB | ~2.403 KiB |
| Deslocamento visual (CLS) | 0 | 0 |

Nas duas execuções posteriores, a performance ficou entre 68–69 no mobile e 79–84 no desktop. Acessibilidade, boas práticas e SEO receberam 100 nas medições, sem substituir revisão humana ou validação de campo.

O conteúdo aparece rapidamente porque o HTML já contém as páginas completas. O runtime nativo comprimido caiu de aproximadamente 977 KB para 468 KB. A inicialização do Blazor ainda consome CPU, sobretudo em dispositivos lentos: a performance mobile não é excelente nem deve ser anunciada como perfeita. A mudança melhora bastante a leitura inicial; não garante interatividade imediata em todo aparelho. A performance da versão remota após deploy ainda precisa ser medida.

## Verificações concluídas

- Build sem erros ou avisos em uma cópia limpa dos arquivos candidatos ao Git, sem PDF da raiz, dependências locais ou HTMLs gerados previamente. As três páginas foram regeneradas.
- Publicação Release com otimização do runtime e recursos comprimidos.
- Testes de navegador em três páginas e sete larguras, de 320 a 1920 pixels: sem overflow, erros JavaScript ou títulos duplicados.
- Seis auditorias automáticas de acessibilidade, navegação por teclado e preferência de movimento reduzido.
- Rotas diretas, recarregamento, navegação SPA entre projetos, metadados, links, downloads e redirecionamento do currículo.
- Leitura das três páginas com JavaScript desativado.
- Ajustes visuais aprovados, Montserrat local, Stack preta com caixas e hover somente nos botões.
- Formatação do CSS, integridade do PDF e ausência de erros de whitespace no diff.

Os comandos reproduzíveis estão no README. Os testes são ferramentas de desenvolvimento e não são enviados no diretório publicado.

## Pendência de conteúdo

O PDF original ainda informa o LinkedIn sem hífen. O endereço confirmado mais recentemente é `https://www.linkedin.com/in/ericke-castro/`, já aplicado aos links e metadados do site. O currículo foi preservado sem edição silenciosa: atualize o documento original antes da publicação se desejar consistência também dentro do PDF.
