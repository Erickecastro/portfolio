import type { Metadata } from "next";

import "./globals.css";

const description =
  "Portfólio de Ericke Castro, desenvolvedor Fullstack .NET especializado em aplicações Web, APIs REST e soluções multiplataforma.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericke-castro.pages.dev"),

  title: "Ericke Castro | Desenvolvedor .NET",

  description,

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Ericke Castro | Desenvolvedor .NET",
    description,
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
    description,
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
