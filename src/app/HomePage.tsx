'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from './components/home/HeroSection';
import { preloadComponent } from '@/lib/navigation';
import { motion as m } from 'framer-motion';

// Importações lazy para componentes secundários
const ServicesHighlight = lazy(() => import('./components/home/ServicesHighlight'));
const AboutPreview = lazy(() => import('./components/home/AboutPreview'));
const Testimonials = lazy(() => import('./components/home/Testimonials'));
const ContactSection = lazy(() => import('./components/home/ContactSection'));

// Importação dinâmica do RollingGallery para evitar problemas de SSR
const RollingGallery = dynamic(() => import('./components/home/RollingGallery'), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Carregando galeria...</div>
    </div>
  )
});

// Componentes de placeholder para Suspense
const ServicesPlaceholder = () => (
  <div className="py-16 bg-[oklch(98%_0.01_80deg)] h-[600px] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Carregando serviços...</div>
  </div>
);

const SectionPlaceholder = () => (
  <div className="py-16 bg-white h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Carregando conteúdo...</div>
  </div>
);

// Importação dinâmica do PartnershipsSection para evitar problemas de SSR
const PartnershipsSection = dynamic(() => import('./components/home/PartnershipsSection'), {
  ssr: false,
  loading: () => (
    <div className="py-16 bg-gradient-to-br from-[#f9f5ec] to-[#f3eddf] h-[300px] flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Carregando convênios...</div>
    </div>
  )
});

// Dados para a galeria de imagens
const galleryImages1 = [
  { 
    src: '/images/nossa_clinica/galeria1.jpg', 
    alt: 'Nossa clínica - Vista interior', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria2.jpg', 
    alt: 'Nossa clínica - Consultório', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria3.jpg', 
    alt: 'Nossa clínica - Sala de atendimento', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria4.jpg', 
    alt: 'Nossa clínica - Equipamentos', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria9.jpg', 
    alt: 'Nossa clínica - Ambiente de espera', 
    width: 300, 
    height: 200 
  }
];

const galleryImages2 = [
  { 
    src: '/images/nossa_clinica/galeria5.jpg', 
    alt: 'Nossa clínica - Recepção', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria6.jpg', 
    alt: 'Nossa clínica - Sala de procedimentos', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria7.jpg', 
    alt: 'Nossa clínica - Espaço moderno', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria8.jpg', 
    alt: 'Nossa clínica - Detalhes do ambiente', 
    width: 300, 
    height: 200 
  },
  { 
    src: '/images/nossa_clinica/galeria10.jpg', 
    alt: 'Nossa clínica - Equipamentos modernos', 
    width: 300, 
    height: 200 
  }
];

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  // Verificar se o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Pré-carregar componentes para melhorar a navegação
  useEffect(() => {
    // Não executar no servidor ou antes da montagem no cliente
    if (!isMounted) return;
    
    // Pré-carrega os componentes mais pesados em segundo plano
    const timer = setTimeout(() => {
      preloadComponent(() => import('./components/home/ServicesHighlight'));
      preloadComponent(() => import('./components/home/AboutPreview'));
      preloadComponent(() => import('./components/home/Testimonials'));
      preloadComponent(() => import('./components/home/ContactSection'));
    }, 1000); // Aguarda 1 segundo após o carregamento inicial

    return () => clearTimeout(timer);
  }, [isMounted]);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Círculo decorativo superior esquerdo */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[oklch(97%_0.03_80deg)] to-[oklch(95%_0.06_80deg)] opacity-70 blur-xl"></div>
        
        {/* Retângulo decorativo direito */}
        <div className="absolute top-1/4 -right-20 w-80 h-96 rounded-3xl bg-gradient-to-tl from-[oklch(98%_0.01_80deg)] to-white rotate-12 opacity-80"></div>
        
        {/* Padrão de grade sutil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAwdjQwSDBWMGg0MHpNMjAgMjBhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6IiBmaWxsPSIjRjdGMUUxIiBmaWxsLW9wYWNpdHk9Ii4yIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-40"></div>
        
        {/* Bloco decorativo inferior */}
        <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-3xl bg-gradient-to-tr from-white to-[oklch(97%_0.03_80deg)] -rotate-12 opacity-70"></div>
        
        {/* Círculo decorativo inferior direito */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-[oklch(95%_0.06_80deg)] to-[oklch(97%_0.03_80deg)] opacity-60 blur-lg"></div>
      </div>
      
      {/* Seções de conteúdo */}
      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="services" className="bg-[oklch(98%_0.01_80deg)] relative">
          <Suspense fallback={<ServicesPlaceholder />}>
            <ServicesHighlight />
          </Suspense>
        </section>
        
        <section id="about">
          <Suspense fallback={<SectionPlaceholder />}>
            <AboutPreview />
          </Suspense>
        </section>
        
        {/* Galeria de imagens com carregamento lazy */}
        <section id="gallery" className="py-16 bg-[oklch(98%_0.01_80deg)]">
          <div className="container mx-auto max-w-7xl px-4">
            <m.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <m.span 
                className="text-[#866D36] font-medium text-sm uppercase tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Conheça nosso espaço
              </m.span>
              <m.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Nossa Clínica em Imagens
              </m.h2>
              <m.div 
                className="w-24 h-1 bg-[#866D36] mx-auto mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></m.div>
              <m.p 
                className="text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Conheça nosso ambiente moderno e acolhedor, projetado para proporcionar o máximo conforto durante seu atendimento
              </m.p>
            </m.div>
            
            <RollingGallery 
              images={galleryImages1}
              className="mb-8"
            />
            
            <RollingGallery 
              images={galleryImages2}
              direction="right"
            />
          </div>
        </section>
        
        {/* Seção de convênios */}
        <section id="partnerships">
          <PartnershipsSection />
        </section>
        
        <section id="testimonials" className="bg-[oklch(97%_0.03_80deg)] relative">
          <Suspense fallback={<SectionPlaceholder />}>
            <Testimonials />
          </Suspense>
        </section>
        
        <section id="contact">
          <Suspense fallback={<SectionPlaceholder />}>
            <ContactSection />
          </Suspense>
        </section>
      </div>
    </main>
  );
} 