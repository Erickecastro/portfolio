import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ericke Castro | Fullstack .NET Software Developer",
  description: "Portfólio de Ericke Castro, desenvolvedor Fullstack .NET especializado em aplicações Web, APIs REST e soluções multiplataforma.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
