# Portfólio — Ericke Castro

Portfólio pessoal desenvolvido com C#, .NET 10 e Blazor WebAssembly.

## Deploy no Cloudflare Pages

O arquivo `build.sh` instala o SDK .NET 10 e gera o site estático em `output/wwwroot`. No Cloudflare Pages, use `./build.sh` como comando de build e `output/wwwroot` como diretório de saída.
