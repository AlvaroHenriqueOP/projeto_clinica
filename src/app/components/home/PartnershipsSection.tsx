"use client";

import React, { useEffect, useState, useRef } from 'react';
import { m } from '../shared/motion';
import Image from 'next/image';

// Lista de convênios com imagens válidas
const convenios = [
  {
    id: 1,
    nome: "Bradesco Saúde",
    logo: "/images/convenios/convenio.png",
  },
  {
    id: 2,
    nome: "SulAmérica",
    logo: "/images/convenios/convenio2.png",
  },
  {
    id: 3,
    nome: "Amil",
    logo: "/images/convenios/convenio3.png",
  },
  {
    id: 4,
    nome: "Unimed",
    logo: "/images/convenios/convenio4.png",
  },
  {
    id: 5,
    nome: "Qualicorp",
    logo: "/images/convenios/convenio5.png",
  },
  {
    id: 6,
    nome: "Porto Seguro",
    logo: "/images/convenios/convenio6.png",
  },
  {
    id: 7,
    nome: "Odonto System",
    logo: "/images/convenios/convenio7.png",
  },
  {
    id: 8,
    nome: "Metlife",
    logo: "/images/convenios/convenio8.png",
  }
];

const PartnershipsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Verificar se o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Efeito de carrossel automático
  useEffect(() => {
    if (!isMounted || !carouselRef.current) return;
    
    let animationId: number;
    let position = 0;
    const speed = 0.5;
    const container = carouselRef.current;
    const totalWidth = container.scrollWidth;
    
    // Duplicar os itens para criar um loop infinito
    const originalItems = container.querySelectorAll('.carousel-item');
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      container.appendChild(clone);
    });
    
    const animate = () => {
      if (!container) return;
      
      position += speed;
      
      // Resetar a posição quando chegar ao final dos itens originais
      if (position >= totalWidth / 2) {
        position = 0;
        container.style.transition = 'none';
        container.style.transform = `translateX(0px)`;
        
        // Forçar reflow para que a transição seja aplicada novamente
        void container.offsetWidth;
        container.style.transition = 'transform 0.5s ease';
      } else {
        container.style.transform = `translateX(-${position}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Iniciar a animação
    container.style.transition = 'transform 0.5s ease';
    animationId = requestAnimationFrame(animate);
    
    // Pausar a animação quando o mouse estiver sobre o carrossel
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Limpar a animação quando o componente for desmontado
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMounted]);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#f9f5ec] to-[#f3eddf] w-full">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/40 to-transparent"></div>
      
      {/* Elementos decorativos adicionais */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#866D36]/5 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#866D36]/5 blur-2xl"></div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <m.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#866D36] font-medium text-sm uppercase tracking-wider">
            Planos aceitos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-3">
            Nossos Convênios
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-[#866D36] rounded-full"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Trabalhamos com as principais operadoras de planos odontológicos para facilitar o seu atendimento.
          </p>
        </m.div>
        
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
            {/* Efeito de sombra nas bordas */}
            <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Carrossel de logos */}
            <div className="overflow-hidden">
              <div 
                ref={carouselRef}
                className="flex items-center gap-8 py-4"
                style={{ width: 'max-content' }}
              >
                {convenios.map((convenio, index) => (
                  <div
                    key={`${convenio.id}-${index}`}
                    className="carousel-item flex-shrink-0"
                  >
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-center h-[80px] w-[160px] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="relative h-full w-full">
                        <Image
                          src={convenio.logo}
                          alt={`Convênio ${convenio.nome}`}
                          fill
                          sizes="160px"
                          className="object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decoração lateral */}
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 h-16 w-1.5 bg-gradient-to-b from-[#866D36] via-[#b69c67] to-[#866D36] rounded-full"></div>
          </div>
        </m.div>
        
        {/* Grade estática de logos para dispositivos móveis */}
        <div className="md:hidden mt-8 mb-10">
          <div className="grid grid-cols-2 gap-4">
            {convenios.map((convenio) => (
              <m.div
                key={convenio.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex justify-center"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex items-center justify-center h-[70px] w-full">
                  <div className="relative h-full w-full">
                    <Image
                      src={convenio.logo}
                      alt={`Convênio ${convenio.nome}`}
                      fill
                      sizes="(max-width: 768px) 40vw, 20vw"
                      className="object-contain p-1"
                      loading="lazy"
                    />
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
        
        {/* Botão de contato */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a 
            href="/contato" 
            className="inline-flex items-center bg-[#866D36] hover:bg-[#9d824b] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="mr-2">Não encontrou seu convênio?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default PartnershipsSection; 