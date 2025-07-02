import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/layouts/MainLayout";
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental Corp | Clínica Odontológica",
  description: "Clínica odontológica especializada em tratamentos com tecnologia avançada e profissionais altamente qualificados.",
  keywords: "odontologia, implantes dentários, clareamento dental, ortodontia, clínica odontológica, dentista, saúde bucal",
  authors: [{ name: "Dental Corp", url: "https://dentalcorp.com.br" }],
  creator: "Dental Corp",
  publisher: "Dental Corp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dentalcorp.com.br"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Dental Corp - Clínica Odontológica Especializada",
    description: "Tratamentos odontológicos de excelência com tecnologia avançada e profissionais qualificados em um ambiente acolhedor e moderno.",
    siteName: "Dental Corp",
    url: "https://dentalcorp.com.br",
    images: [{
      url: "/images/clinica_hero.jpg",
      width: 1200,
      height: 630,
      alt: "Dental Corp - Clínica Odontológica",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Corp - Clínica Odontológica Especializada",
    description: "Tratamentos odontológicos de excelência com tecnologia avançada e profissionais qualificados.",
    images: ["/images/clinica_hero.jpg"],
    creator: "@dentalcorp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "verificação-google-aqui",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/images/clinica_hero.jpg" 
          as="image"
          fetchPriority="high"
        />
        
        {/* Preconnect to required origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased optimize-animation prevent-cls`}
      >
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse">Carregando...</div>
          </div>
        }>
          <MainLayout>{children}</MainLayout>
        </Suspense>
        
        {/* Scripts de analytics e outras ferramentas que não bloqueiam renderização */}
        <script 
          defer 
          data-strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              console.log("Site carregado com sucesso!");
              // Aqui poderiam ficar scripts de analytics etc.
            `
          }}
        />
      </body>
    </html>
  );
}
