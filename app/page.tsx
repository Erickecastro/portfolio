const skills = [
  ["plataforma .net", ["C#", ".NET 10", "ASP.NET Core", "Entity Framework Core", "ASP.NET MVC", ".NET MAUI"]],
  ["dados", ["PostgreSQL", "SQLite", "LINQ"]],
  ["architecture", ["Clean Architecture", "SOLID", "MVVM", "APIs REST", "Repository Pattern", "Dependency Injection"]],
  ["quality + tools", ["xUnit", "Moq", "FluentValidation", "Serilog", "Docker", "Git", "GitHub", "Swagger / OpenAPI", "JWT"]],
];

function ContactIcon({ type }: { type: "email" | "github" | "linkedin" | "resume" }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.92-1.3 2.76-1.02 2.76-1.02.54 1.37.2 2.39.1 2.64.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7 10v7M7 7v.01M11 17v-7M11 13a4 4 0 0 1 7 2.6V17" /></>,
    resume: <><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v5h5M9 13h6M9 17h6M9 9h2" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

const projects = [
  { index: "01", name: "Vaguei", status: "em desenvolvimento", description: "Plataforma que interpreta currículos, estrutura o perfil profissional e prepara a busca e classificação de vagas por compatibilidade.", detail: "Parser para ODT, DOCX, PDF e TXT, análise de competências e arquitetura modular preparada para múltiplas fontes de vagas.", stack: ["C#", ".NET 10", "LINQ", "xUnit", "Regex", "XML"], href: "https://github.com/Erickecastro/Vaguei" },
  { index: "02", name: "AssetFlow", status: "em desenvolvimento", description: "Sistema corporativo multiplataforma para centralizar inventário e acompanhar o ciclo de vida de ativos de TI.", detail: "Gestão patrimonial, histórico de movimentações, API REST e aplicativo móvel sob Clean Architecture e MVVM.", stack: ["ASP.NET Core", ".NET MAUI", "EF Core", "PostgreSQL", "JWT", "Docker"], href: "https://github.com/Erickecastro/AssetFlow" },
  { index: "03", name: "FinTrack", status: "em desenvolvimento", description: "Sistema de finanças pessoais para organizar receitas, despesas e categorias, com insights financeiros assistidos por IA.", detail: "Backend Web API, cliente .NET MAUI e integração planejada com Gemini, com validação, observabilidade e testes.", stack: ["ASP.NET Core", ".NET MAUI", "PostgreSQL", "Gemini API", "xUnit", "Moq"], href: "https://github.com/Erickecastro/FinTrack" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início"><span>~/</span> ericke</a>
      <nav aria-label="Navegação principal"><a href="#sobre">sobre</a><a href="#stack">stack</a><a href="#projetos">projetos</a><a href="#contato">contato</a></nav>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">ERICKE CASTRO / AMAZONAS, BRASIL</p>
        <h1>Fullstack .NET<br />Software Developer<span className="cursor" aria-hidden="true">_</span></h1>
        <div className="hero-actions"><a className="button solid" href="#projetos">./ver-projetos</a><a className="button" href="/Curriculo-Ericke-Castro.pdf" download>download --curriculo</a></div>
      </div>
      <div className="terminal" aria-label="Resumo profissional em formato de terminal">
        <div className="terminal-bar"><span>ericke@portfolio:~</span><span>[—][□][×]</span></div>
        <div className="terminal-body">
          <p><span>ericke:$~</span> whoami</p><p className="output">Ericke Castro</p>
          <p><span>ericke:$~</span> cat focus.txt</p><p className="output">.NET · Web APIs · Mobile · Software Architecture</p>
          <p><span>ericke:$~</span> systemctl status career</p><p className="output">● active — building reliable software</p>
          <p className="prompt"><span>ericke:$~</span> <i aria-hidden="true" /></p>
        </div>
      </div>
    </section>

    <section className="section about" id="sobre">
      <div className="section-label"><span>01</span><p>sobre</p></div>
      <div className="about-content">
        <p className="lead">Desenvolvedor .NET e estudante de Ciência da Computação.</p>
        <div className="about-grid">
          <p>Atualmente atuo com desenvolvimento de sistemas e suporte técnico N2 na Secretaria de Segurança Pública do Estado do Amazonas. Participo da criação e evolução de aplicações corporativas Web, Mobile e backend, da modelagem de dados à integração entre interfaces e APIs.</p>
          <p>Minha experiência é concentrada no ecossistema .NET, com ASP.NET Core, Entity Framework Core e .NET MAUI, apoiada por PostgreSQL e Docker. Busco aplicar Clean Architecture, testes e boas práticas para criar soluções confiáveis, organizadas e preparadas para evoluir.</p>
        </div>
        <div className="facts" aria-label="Informações rápidas"><div><span>formação</span><strong>Ciência da Computação</strong></div><div><span>idiomas</span><strong>Português · Inglês</strong></div><div><span>atuação</span><strong>Web · Backend · Mobile</strong></div></div>
      </div>
    </section>

    <section className="section" id="stack">
      <div className="section-label"><span>02</span><p>stack</p></div>
      <div className="skill-list">{skills.map(([category, items]) => <div className="skill-row" key={category as string}><h3>{category}</h3><div>{(items as string[]).map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
    </section>

    <section className="section projects-section" id="projetos">
      <div className="section-label"><span>03</span><p>projetos</p></div>
      <div className="projects">{projects.map(project => <article className="project" key={project.name}>
        <div className="project-index">{project.index}</div>
        <div className="project-main"><div className="project-heading"><h2>{project.name}</h2><span>{project.status}</span></div><p className="project-description">{project.description}</p><p className="project-detail">{project.detail}</p><div className="tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div></div>
        <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} no GitHub`}>↗</a>
      </article>)}</div>
    </section>

    <section className="contact" id="contato">
      <div className="contact-heading"><p className="eyebrow">CONTATO / NOVAS CONEXÕES</p></div>
      <div className="contact-grid">
        <a href="mailto:erickevh@hotmail.com"><ContactIcon type="email" /><span><small>e-mail</small><strong>erickevh@hotmail.com</strong></span><b>↗</b></a>
        <a href="https://github.com/Erickecastro" target="_blank" rel="noreferrer"><ContactIcon type="github" /><span><small>github</small><strong>@Erickecastro</strong></span><b>↗</b></a>
        <a href="https://www.linkedin.com/in/ericke-castro/" target="_blank" rel="noreferrer"><ContactIcon type="linkedin" /><span><small>linkedin</small><strong>Ericke Castro</strong></span><b>↗</b></a>
        <a href="/Curriculo-Ericke-Castro.pdf" download><ContactIcon type="resume" /><span><small>currículo</small><strong>Baixar PDF</strong></span><b>↓</b></a>
      </div>
    </section>
    <footer><p>© 2026 Ericke Castro</p><p>Fim :)</p><a href="#inicio">voltar ao topo ↑</a></footer>
  </main>;
}
