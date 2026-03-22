import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D’Outro Lado",
  description: "Curadoria brasileira premium para exportação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}