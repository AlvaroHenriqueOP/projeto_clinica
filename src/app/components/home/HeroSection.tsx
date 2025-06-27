"use client";

import React, { useState, useEffect } from 'react';
import { m } from '../shared/motion';
import { PlaceholderImage } from '../shared/AnimationUtils';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Efeito para carregar a imagem quando o componente montar
  useEffect(() => {
    const img = new Image();
    img.src = '/images/clinica_hero.jpg';
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      {/* Imagem de fundo com overlay mais suave */}
      <div className="absolute inset-0 z-0">
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50 z-10" 
        />
        
        {/* Placeholder condicional e imagem real */}
        {!isImageLoaded && (
          <PlaceholderImage 
            className="w-full h-full bg-gray-100" 
            height="h-full" 
            width="w-full"
            label="Imagem Hero" 
          />
        )}
        
        <m.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: isImageLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/clinica_hero.jpg')`,
            backgroundPosition: "center 30%"
          }}
        />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Padrão de pontos decorativos */}
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10">
          <div className="grid grid-cols-10 gap-4">
            {Array(100).fill(0).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gold-600"></div>
            ))}
          </div>
        </div>
        
        {/* Linhas decorativas */}
        <m.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-gold-300 via-gold-200 to-transparent origin-left"
        ></m.div>
        
        <m.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          className="absolute top-1/3 left-0 w-2/3 h-px bg-gradient-to-r from-gold-300 via-gold-200 to-transparent origin-left"
        ></m.div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto max-w-7xl px-4 relative z-20">
        <div className="max-w-3xl">
          <m.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-3 px-4 py-1 bg-gold-50 text-[oklch(55%_0.12_80deg)] rounded-full text-sm font-medium border border-gold-100"
          >
            Clínica Odontológica Especializada
          </m.span>
          
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(40%_0.02_80deg)] mb-6"
          >
            Cuidando do seu <span className="text-[oklch(60%_0.12_80deg)]">sorriso</span> com tecnologia e carinho
          </m.h1>
          
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-xl md:text-2xl text-[oklch(50%_0.02_80deg)] mb-8"
          >
            Tecnologia de ponta aliada a profissionais experientes para trazer o melhor resultado para você
          </m.p>
          
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contato" legacyBehavior>
              <m.a 
                className="bg-[#866D36] hover:bg-[#9d824b] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-gold-300/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Fale Conosco</span>
              </m.a>
            </Link>
            
            <Link href="/tratamentos" legacyBehavior>
              <m.a 
                className="border-2 border-gold-300 text-[oklch(55%_0.12_80deg)] hover:bg-gold-50 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Nossos Tratamentos</span>
              </m.a>
            </Link>
          </m.div>
          
          {/* Estatísticas */}
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-4"
          >
            <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
              <p className="text-[oklch(60%_0.12_80deg)] font-bold text-2xl">+15</p>
              <p className="text-[oklch(50%_0.02_80deg)] text-sm">Anos de experiência</p>
            </div>
            <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
              <p className="text-[oklch(60%_0.12_80deg)] font-bold text-2xl">+5000</p>
              <p className="text-[oklch(50%_0.02_80deg)] text-sm">Pacientes atendidos</p>
            </div>
            <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
              <p className="text-[oklch(60%_0.12_80deg)] font-bold text-2xl">+10</p>
              <p className="text-[oklch(50%_0.02_80deg)] text-sm">Especialidades</p>
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