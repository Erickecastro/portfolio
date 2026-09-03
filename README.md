# Portfólio — Ericke Castro

Portfólio pessoal desenvolvido com C#, .NET 10 e Blazor WebAssembly.

## Executar localmente

```powershell
dotnet restore
dotnet run
```

Para gerar a versão de produção, use `dotnet publish -c Release`.

## Deploy no Cloudflare Pages

O arquivo `build.sh` instala o SDK .NET 10 e gera o site estático em `output/wwwroot`. No Cloudflare Pages, use `./build.sh` como comando de build e `output/wwwroot` como diretório de saída.
