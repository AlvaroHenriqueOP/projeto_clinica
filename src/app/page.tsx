'use client';

import React from 'react';
import HeroSection from './components/home/HeroSection';
import ServicesHighlight from './components/home/ServicesHighlight';
import AboutPreview from './components/home/AboutPreview';
import Testimonials from './components/home/Testimonials';
import ContactSection from './components/home/ContactSection';

export default function Home() {
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
        <HeroSection />
        
        {/* Divisor decorativo */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-white to-[oklch(98%_0.01_80deg)] -mt-12 transform skew-y-1"></div>
        </div>
        
        <div className="bg-[oklch(98%_0.01_80deg)] relative">
          <ServicesHighlight />
          
          {/* Divisor decorativo */}
          <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-[oklch(98%_0.01_80deg)] to-white -mt-12 transform -skew-y-1"></div>
        </div>
        
        <AboutPreview />
        
        {/* Divisor decorativo */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-white to-[oklch(97%_0.03_80deg)] -mt-12 transform skew-y-1"></div>
        </div>
        
        <div className="bg-[oklch(97%_0.03_80deg)] relative">
          <Testimonials />
          
          {/* Divisor decorativo */}
          <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-[oklch(97%_0.03_80deg)] to-white -mt-12 transform -skew-y-1"></div>
        </div>
        
        <ContactSection />
      </div>
    </main>
  );
}
