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
  <div className="py-20 bg-gradient-to-b from-slate-50/50 to-white">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <div className="h-6 w-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full mx-auto mb-6 animate-pulse"></div>
        <div className="h-12 w-96 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mx-auto mb-6 animate-pulse"></div>
        <div className="h-4 w-80 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mx-auto animate-pulse"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50">
            <div className="w-12 h-12 bg-gradient-to-r from-gold-200 to-gold-300 rounded-xl mb-4 animate-pulse"></div>
            <div className="h-6 w-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-3 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
              <div className="h-3 w-4/5 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SectionPlaceholder = () => (
  <div className="py-20 bg-gradient-to-b from-white to-slate-50/30">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <div className="h-6 w-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full mx-auto mb-6 animate-pulse"></div>
        <div className="h-12 w-80 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mx-auto mb-6 animate-pulse"></div>
        <div className="h-4 w-96 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mx-auto animate-pulse"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="h-6 w-3/4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
          <div className="h-4 w-full bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-gradient-to-r from-gold-200 to-gold-300 rounded-lg animate-pulse"></div>
        </div>
        <div className="aspect-video bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Importação dinâmica do PartnershipsSection para evitar problemas de SSR
const PartnershipsSection = dynamic(() => import('./components/home/PartnershipsSection'), {
  ssr: false,
  loading: () => (
    <div className="py-12 bg-gradient-to-br from-[#f9f5ec] to-[#f3eddf] h-[250px] flex items-center justify-center">
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
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Modern background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Gradient orbs */}
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-gradient-to-br from-gold-100/40 via-gold-200/30 to-gold-300/20 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-gradient-to-tl from-gold-200/30 via-gold-100/20 to-gold-50/10 blur-2xl"></div>
        <div className="absolute bottom-32 -left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-gold-300/30 via-gold-200/20 to-gold-100/10 blur-2xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-gold-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-gold-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gold-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 left-40 w-2 h-2 bg-gold-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      </div>
      
      {/* Content sections */}
      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="services" className="relative py-12 bg-gradient-to-b from-slate-50/50 to-white">
          <Suspense fallback={<ServicesPlaceholder />}>
            <ServicesHighlight />
          </Suspense>
        </section>
        
        <section id="about" className="relative py-12 bg-gradient-to-b from-white to-slate-50/30">
          <Suspense fallback={<SectionPlaceholder />}>
            <AboutPreview />
          </Suspense>
        </section>
        
        {/* Modern Gallery section */}
        <section id="gallery" className="relative py-12 bg-gradient-to-b from-slate-50/30 to-gold-50/20">
          <div className="container mx-auto max-w-7xl px-4">
            <m.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <m.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-50 to-gold-100 border border-gold-200/50 rounded-full text-gold-700 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                Conheça nosso espaço
              </m.div>
              
              <m.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                  Nossa Clínica em
                </span>
                <br />
                <span className="bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 bg-clip-text text-transparent">
                  Imagens
                </span>
              </m.h2>
              
              <m.p 
                className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Conheça nosso ambiente moderno e acolhedor, projetado para proporcionar o máximo conforto durante seu atendimento
              </m.p>
            </m.div>
            
            <div className="space-y-8">
              <RollingGallery 
                images={galleryImages1}
                className=""
              />
              
              <RollingGallery 
                images={galleryImages2}
                direction="right"
              />
            </div>
          </div>
        </section>
        
        {/* Modern partnerships section */}
        <section id="partnerships" className="relative py-12 bg-gradient-to-b from-gold-50/20 to-gold-100/30">
          <PartnershipsSection />
        </section>
        
        <section id="testimonials" className="relative py-12 bg-gradient-to-b from-gold-100/30 to-gold-50/20">
          <Suspense fallback={<SectionPlaceholder />}>
            <Testimonials />
          </Suspense>
        </section>
        
        <section id="contact" className="relative bg-gradient-to-b from-gold-50/20 to-slate-50">
          <Suspense fallback={<SectionPlaceholder />}>
            <ContactSection />
          </Suspense>
        </section>
      </div>
    </main>
  );
}