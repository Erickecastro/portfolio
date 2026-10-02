namespace Portfolio.Content;

public static class PortfolioContent
{
    public const string SiteUrl = "https://ericke-castro.pages.dev";
    public const string Title = "Ericke Castro | Desenvolvedor de Software Android";
    public const string Description = "Desenvolvedor de Software Android em Manaus, Amazonas. Projetos com Kotlin, arquitetura e testes, com experiência em sistemas corporativos e APIs REST.";
    public const string ResumePath = "/Ericke-Castro-Curriculo.pdf";
    public const string GitHubUrl = "https://github.com/Erickecastro";
    public const string LinkedInUrl = "https://www.linkedin.com/in/ericke-castro/";
    public const string Email = "erickevh@hotmail.com";

    public static readonly SkillGroup[] Skills =
    [
        new("Android", ["Kotlin", "Android SDK", "Jetpack Compose", "ViewModel", "Navigation", "Coroutines / Flow", "Room", "Hilt", "DataStore"]),
        new("Multiplataforma", ["Kotlin Multiplatform", "Compose Multiplatform", ".NET MAUI"]),
        new("Arquitetura e testes", ["MVVM", "Clean Architecture", "SOLID", "JUnit", "MockK", "Testes de interface com Compose"]),
        new("Integração e dados", ["APIs REST", "Ktor", "kotlinx.serialization", "PostgreSQL", "SQLite"]),
        new("Linguagens", ["Kotlin", "C#", "JavaScript", "SQL"]),
        new("Ferramentas", ["Android Studio", "IntelliJ IDEA", "Gradle", "Git", "GitHub", "GitLab", "GitHub Actions", "Docker", "Linux"])
    ];

    public static readonly Project[] FeaturedProjects =
    [
        new("droidko", "DroidKo", "Android · Aprendizagem", "Aplicativo Android para aprendizagem de Kotlin.",
            "Trilhas, exercícios interativos e revisão baseada nos erros, com funcionamento offline.",
            ["Kotlin", "Jetpack Compose", "Room", "Hilt", "MVVM"],
            "Reunir a aprendizagem de Kotlin em um aplicativo Android com trilhas, prática e acompanhamento de progresso, inclusive offline.",
            ["Trilhas de aprendizagem de Kotlin.", "Exercícios interativos com explicações.", "Acompanhamento de progresso.", "Revisão baseada nos erros.", "Funcionamento offline."],
            [
                new("Interface e navegação", "Jetpack Compose e Navigation para a interface e a navegação do aplicativo."),
                new("Arquitetura", "MVVM, princípios SOLID e injeção de dependências com Hilt."),
                new("Fluxos assíncronos", "Coroutines e Flow na stack do aplicativo."),
                new("Persistência", "Room e SQLite para dados locais, com DataStore também presente na stack."),
                new("Testes", "JUnit, MockK e testes de interface com Compose.")
            ],
            ["Kotlin", "Jetpack Compose", "Navigation", "Coroutines", "Flow", "Room", "SQLite", "DataStore", "Hilt", "MVVM", "SOLID", "JUnit", "MockK", "Testes de interface com Compose"]),
        new("transsend", "Transsend", "Multiplataforma · Transferência de arquivos", "Aplicativo multiplataforma para transferência segura de arquivos.",
            "Transferências pela rede local com pareamento por QR Code, comunicação TLS e autorização de recebimento.",
            ["Kotlin", "Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "MVVM"],
            "Compartilhar arquivos entre plataformas pela rede local, com pareamento, autorização de recebimento e controle das transferências.",
            ["Compartilhamento multiplataforma pela rede local.", "Pareamento por QR Code.", "Comunicação TLS.", "Autorização de recebimento.", "Acompanhamento do progresso das transferências.", "Cancelamento de transferências."],
            [
                new("Multiplataforma", "Kotlin Multiplatform e Compose Multiplatform na base do aplicativo."),
                new("Arquitetura", "MVVM e injeção de dependências."),
                new("Comunicação e integração", "Ktor, Coroutines, Flow e kotlinx.serialization na stack. As transferências utilizam a rede local e comunicação TLS."),
                new("Persistência", "Room e SQLite para persistência local."),
                new("Testes", "JUnit e testes de integração.")
            ],
            ["Kotlin", "Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "Coroutines", "Flow", "kotlinx.serialization", "Room", "SQLite", "MVVM", "Injeção de dependências", "JUnit", "Testes de integração"])
    ];


}

public sealed record SkillGroup(string Category, string[] Items);
public sealed record TechnicalSection(string Title, string Description);
public sealed record ProjectImage(string Source, string Alt);

public sealed record Project(
    string Slug, string Name, string Category, string Description, string Detail, string[] Highlights,
    string Objective, string[] Features, TechnicalSection[] TechnicalSections, string[] Stack)
{
    public string Path => $"/projetos/{Slug}";
    public string Status => "em desenvolvimento";
    public string? RepositoryUrl { get; init; }
    public ProjectImage[] Screenshots { get; init; } = [];
}

