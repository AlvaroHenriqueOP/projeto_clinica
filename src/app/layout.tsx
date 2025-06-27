import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/layouts/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentalBlanc - Clínica Odontológica Especializada",
  description: "Tratamentos odontológicos de excelência com tecnologia avançada e profissionais qualificados em um ambiente acolhedor e moderno.",
  keywords: "odontologia, implantes dentários, clareamento dental, ortodontia, clínica odontológica, dentista, saúde bucal",
  authors: [{ name: "DentalBlanc", url: "https://dentalblanc.com.br" }],
  creator: "DentalBlanc",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased optimize-animation prevent-cls`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
