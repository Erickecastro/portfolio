using System.Net;
using System.Text.Json;
using Portfolio.Content;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using Portfolio;

if (args.Length != 1)
{
    throw new ArgumentException("Informe o diretório raiz do portfólio.");
}

var root = Path.GetFullPath(args[0]);
var template = File.ReadAllText(Path.Combine(root, "Content", "site-template.html"));
using var services = new ServiceCollection()
    .AddLogging()
    .AddSingleton<IJSRuntime, StaticJsRuntime>()
    .BuildServiceProvider();
await using var renderer = new HtmlRenderer(services, services.GetRequiredService<ILoggerFactory>());
var pages = new List<(string Path, string Title, string Description)>
{
    ("/", PortfolioContent.Title, PortfolioContent.Description)
};
pages.AddRange(PortfolioContent.FeaturedProjects.Select(project =>
    (project.Path, $"{project.Name} | Ericke Castro", project.Detail)));

foreach (var page in pages)
{
    var url = PortfolioContent.SiteUrl + page.Path;
    var structuredData = new Dictionary<string, object>
    {
        ["@context"] = "https://schema.org",
        ["@graph"] = new object[]
        {
            new Dictionary<string, object>
            {
                ["@type"] = "Person",
                ["@id"] = PortfolioContent.SiteUrl + "/#ericke-castro",
                ["name"] = "Ericke Castro",
                ["url"] = PortfolioContent.SiteUrl + "/",
                ["jobTitle"] = "Desenvolvedor de Software Android",
                ["sameAs"] = new[] { PortfolioContent.GitHubUrl, PortfolioContent.LinkedInUrl }
            },
            new Dictionary<string, object>
            {
                ["@type"] = "WebPage",
                ["@id"] = url,
                ["url"] = url,
                ["name"] = page.Title,
                ["description"] = page.Description,
                ["inLanguage"] = "pt-BR",
                ["about"] = new Dictionary<string, string> { ["@id"] = PortfolioContent.SiteUrl + "/#ericke-castro" }
            }
        }
    };
    var content = await renderer.Dispatcher.InvokeAsync(async () =>
    {
        var rendered = await renderer.RenderComponentAsync<StaticPage>(ParameterView.FromDictionary(
            new Dictionary<string, object?> { ["Route"] = page.Path }));
        return rendered.ToHtmlString();
    });
    var html = template
        .Replace("{{TITLE}}", WebUtility.HtmlEncode(page.Title))
        .Replace("{{DESCRIPTION}}", WebUtility.HtmlEncode(page.Description))
        .Replace("{{URL}}", WebUtility.HtmlEncode(url))
        .Replace("{{SITE_URL}}", PortfolioContent.SiteUrl)
        .Replace("{{RESUME_PATH}}", PortfolioContent.ResumePath)
        .Replace("{{EMAIL}}", WebUtility.HtmlEncode(PortfolioContent.Email))
        .Replace("{{PAGE_CONTENT}}", content)
        .Replace("{{STRUCTURED_DATA}}", JsonSerializer.Serialize(structuredData));
    var output = Path.Combine(root, "wwwroot", page.Path.Trim('/'), "index.html");
    Directory.CreateDirectory(Path.GetDirectoryName(output)!);
    if (!File.Exists(output) || File.ReadAllText(output) != html)
    {
        File.WriteAllText(output, html);
    }
}

// JS lifecycle callbacks do not run during static rendering.
sealed class StaticJsRuntime : IJSRuntime
{
    public ValueTask<TValue> InvokeAsync<TValue>(string identifier, object?[]? args) =>
        throw new InvalidOperationException("JavaScript não está disponível na geração estática.");

    public ValueTask<TValue> InvokeAsync<TValue>(string identifier, CancellationToken cancellationToken, object?[]? args) =>
        InvokeAsync<TValue>(identifier, args);
}
