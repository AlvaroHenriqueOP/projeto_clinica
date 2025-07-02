"use client";

import React, { useState, useEffect } from 'react';
import { m } from '../shared/motion';
import { PlaceholderImage } from '../shared/AnimationUtils';
import Link from 'next/link';
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
      scrollToSection(sectionId, 80);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Imagem de fundo com overlay mais sofisticado */}
      <div className="absolute inset-0 z-0">
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10" 
        />
        
        {/* Degradê adicional para melhorar o visual */}
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#866D36]/20 z-11" 
        />
        
        {/* Usar Image do Next.js para otimização automática */}
        <div className="relative w-full h-full">
          <Image 
            src="/images/clinica_hero.jpg" 
            alt="Clínica Odontológica" 
            fill
            priority
            quality={85}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              objectPosition: "center 30%"
            }}
          />
        </div>
      </div>

      {/* Elementos decorativos com animações otimizadas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Círculos decorativos coloridos */}
        <m.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#866D36]/40 to-[#B09048]/30"
        />
        
        <m.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-[#866D36]/30 to-[#B09048]/20"
        />
        
        {/* Linhas decorativas */}
        <m.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-[#866D36]/50 via-[#B09048]/30 to-transparent origin-left"
        ></m.div>
        
        <m.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute top-1/3 left-0 w-2/3 h-px bg-gradient-to-r from-[#866D36]/50 via-[#B09048]/30 to-transparent origin-left"
        ></m.div>
        
        {/* Partículas douradas */}
        <div className="absolute inset-0">
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '20%', left: '10%', animation: 'pulse 3s infinite alternate' }}
          ></m.div>
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '70%', left: '80%', animation: 'pulse 4s infinite alternate' }}
          ></m.div>
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '40%', left: '25%', animation: 'pulse 3.5s infinite alternate' }}
          ></m.div>
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '65%', left: '15%', animation: 'pulse 2.8s infinite alternate' }}
          ></m.div>
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '30%', left: '60%', animation: 'pulse 4.2s infinite alternate' }}
          ></m.div>
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '80%', left: '40%', animation: 'pulse 3.7s infinite alternate' }}
          ></m.div>
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '35%', left: '90%', animation: 'pulse 3.2s infinite alternate' }}
          ></m.div>
          <m.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="absolute w-1 h-1 bg-[#B09048] rounded-full"
            style={{ top: '15%', left: '45%', animation: 'pulse 4.5s infinite alternate' }}
          ></m.div>
        </div>
      </div>
      
      {/* Estilos para animação das partículas */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.4; }
          100% { transform: scale(1.2); opacity: 0.8; }
        }
      `}</style>

      {/* Conteúdo */}
      <div className="container mx-auto max-w-7xl px-4 relative z-20">
        <div className="max-w-3xl">
          <m.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-3 px-4 py-1 bg-gold-50 text-[oklch(55%_0.12_80deg)] rounded-full text-sm font-medium border border-gold-100"
          >
            Clínica Odontológica Especializada
          </m.span>
          
          <m.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(40%_0.02_80deg)] mb-6"
          >
            Cuidando do seu <span className="text-[oklch(60%_0.12_80deg)]">sorriso</span> com tecnologia e carinho
          </m.h1>
          
          <m.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-xl md:text-2xl text-[oklch(50%_0.02_80deg)] mb-8"
          >
            Tecnologia de ponta aliada a profissionais experientes para trazer o melhor resultado para você
          </m.p>
          
          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="bg-[#866D36] hover:bg-[#9d824b] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-gold-300/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Fale Conosco</span>
            </button>
            
            <button 
              onClick={() => handleScrollToSection('services')}
              className="border-2 border-gold-300 text-[oklch(55%_0.12_80deg)] hover:bg-gold-50 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Nossos Tratamentos</span>
            </button>
          </m.div>
          
          {/* Navegação rápida */}
          {isMounted && (
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-6 text-sm text-[oklch(50%_0.02_80deg)]">
                {[
                  { name: 'Sobre', section: 'about' },
                  { name: 'Serviços', section: 'services' },
                  { name: 'Galeria', section: 'gallery' },
                  { name: 'Convênios', section: 'partnerships' },
                  { name: 'Depoimentos', section: 'testimonials' },
                  { name: 'Contato', section: 'contact' },
                ].map((item, index) => (
                  <React.Fragment key={item.section}>
                    <button
                      onClick={() => handleScrollToSection(item.section)}
                      className="hover:text-[#866D36] transition-colors font-medium"
                    >
                      {item.name}
                    </button>
                    {index < 5 && <span className="w-1 h-1 rounded-full bg-[#866D36]/40"></span>}
                  </React.Fragment>
                ))}
              </div>
            </m.div>
          )}
          
          {/* Estatísticas */}
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4"
          >
            <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-[#866D36]">10+</div>
              <div className="text-sm text-gray-600">Anos de experiência</div>
            </div>
            <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-[#866D36]">5k+</div>
              <div className="text-sm text-gray-600">Pacientes atendidos</div>
            </div>
            <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-[#866D36]">15+</div>
              <div className="text-sm text-gray-600">Especialistas</div>
            </div>
          </m.div>
        </div>
      </div>
      
      {/* Círculos decorativos animados */}
      <div className="absolute bottom-0 right-0 z-10 opacity-30">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-64 h-64 rounded-full bg-gold-300/30 absolute -bottom-20 -right-20"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="w-96 h-96 rounded-full bg-gold-200/20 absolute bottom-10 -right-32"
        />
      </div>
    </section>
  );
};

export default HeroSection; 