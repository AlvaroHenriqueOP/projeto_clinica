"use client";

import React, { useState, useEffect } from 'react';
import { m } from '../shared/motion';
import Image from 'next/image';
import { scrollToSection } from '@/lib/navigation';

const HeroSection: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Verificar se o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
    setIsImageLoaded(true);
  }, []);

  // Função segura para navegação
  const handleScrollToSection = (sectionId: string) => {
    if (isMounted) {
      console.log(`HeroSection: Tentando rolar para seção ${sectionId}`);
      // Adicionar um pequeno delay para garantir que o DOM esteja estabilizado
      setTimeout(() => {
        scrollToSection(sectionId, 80);
      }, 10);
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] xl:min-h-[900px] 2xl:min-h-[1000px] w-full overflow-hidden bg-gradient-to-br from-gold-50 via-white to-gold-100/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-200/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-300/20 via-transparent to-transparent"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Large decorative circles */}
        <m.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-gold-200/30 to-gold-300/20 blur-xl"
        />
        <m.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-gold-300/30 to-gold-400/20 blur-xl"
        />
        
        {/* Floating geometric shapes */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-500/20 rounded-2xl rotate-12"
        />
        <m.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-br from-gold-400/20 to-gold-500/20 rounded-full"
        />
        <m.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 left-20 w-8 h-8 bg-gradient-to-br from-gold-300/20 to-gold-400/20 rounded-lg rotate-45"
        />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-7xl xl:max-w-8xl 2xl:max-w-9xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 h-full flex items-center relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 2xl:gap-32 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-50 to-gold-100 border border-gold-200/50 rounded-full text-gold-700 text-sm font-medium"
              >
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                Clínica Odontológica Especializada
              </m.div>
              
              {/* Main Heading */}
              <m.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight xl:leading-[1.1] 2xl:leading-[1.05]"
              >
                <span className="text-slate-800 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                  Cuidando do seu
                </span>
                <br />
                <span className="text-gold-700 bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 bg-clip-text text-transparent">
                  sorriso
                </span>
                <br />
                <span className="text-slate-800 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                  com excelência
                </span>
              </m.h1>
              
              {/* Subtitle */}
              <m.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-slate-600 leading-relaxed max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
              >
                Tecnologia de ponta aliada a profissionais experientes para proporcionar o melhor cuidado odontológico em um ambiente acolhedor e moderno.
              </m.p>
            </m.div>
            
            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-6 2xl:gap-8"
            >
              <button 
                onClick={() => handleScrollToSection('contact')}
                className="group relative px-6 sm:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-xl xl:rounded-2xl font-semibold text-base sm:text-lg xl:text-xl 2xl:text-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Agendar Consulta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-700 to-gold-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => handleScrollToSection('services')}
                className="group px-6 sm:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 border-2 border-gold-200 text-gold-700 hover:border-gold-400 hover:text-gold-800 rounded-xl xl:rounded-2xl font-semibold text-base sm:text-lg xl:text-xl 2xl:text-2xl transition-all duration-300 flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm hover:bg-gold-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Nossos Tratamentos
              </button>
            </m.div>
            
            {/* Stats */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 pt-4 xl:pt-6 2xl:pt-8"
            >
              <div className="text-center px-2">
                <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">10+</div>
                <div className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-500 font-medium">Anos de experiência</div>
              </div>
              <div className="text-center px-2">
                <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">5k+</div>
                <div className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-500 font-medium">Pacientes atendidos</div>
              </div>
              <div className="text-center px-2">
                <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">15+</div>
                <div className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-500 font-medium">Especialistas</div>
              </div>
            </m.div>
          </div>
          
          {/* Right Content - Image/Visual */}
          <div className="hidden lg:flex justify-center xl:justify-end relative w-full">
            <m.div
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Main image container */}
              <div className="relative z-10">
                <div className="aspect-[4/5] w-full max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl relative rounded-3xl overflow-hidden shadow-2xl shadow-gold-500/20">
                  <Image 
                    src="/images/clinica_hero.jpg" 
                    alt="Clínica Odontológica Moderna" 
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-900/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Floating cards */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -left-4 z-20"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Atendimento</div>
                      <div className="text-sm text-slate-500">Humanizado</div>
                    </div>
                  </div>
                </div>
              </m.div>
              
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -right-4 z-20"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Tecnologia</div>
                      <div className="text-sm text-slate-500">Equipamentos modernos</div>
                    </div>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 