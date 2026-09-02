import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericke-castro.pages.dev"),

  title: "Ericke Castro | Desenvolvedor .NET",

  description:
    "Portfólio de Ericke Castro, desenvolvedor Fullstack .NET especializado em aplicações Web, APIs REST e soluções multiplataforma.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Ericke Castro | Desenvolvedor .NET",
    description:
      "Projetos, experiências e competências no ecossistema .NET.",
    url: "/",
    siteName: "Portfólio | Ericke Castro",
    locale: "pt_BR",
    type: "website",

    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Portfólio profissional de Ericke Castro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ericke Castro | Desenvolvedor .NET",
    description:
      "Projetos, experiências e competências no ecossistema .NET.",
    images: ["/portfolio-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
