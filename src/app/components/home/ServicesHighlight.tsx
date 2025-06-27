"use client";

import React from 'react';
import { m } from '../shared/motion';
import { StaggerContainer } from '../shared/AnimationUtils';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Implantes Dentários',
    description: 'Recupere sua qualidade de vida com implantes que se integram naturalmente à sua estrutura dental.',
    href: '/tratamentos/implantes',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Clareamento Dental',
    description: 'Conquiste um sorriso mais branco e radiante com nossos tratamentos de clareamento dental profissional.',
    href: '/tratamentos/clareamento',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Ortodontia',
    description: 'Alinhe seus dentes com discrição usando os mais modernos aparelhos transparentes disponíveis.',
    href: '/tratamentos/ortodontia',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Próteses Dentárias',
    description: 'Restaure a função mastigatória e a estética do seu sorriso com próteses personalizadas e naturais.',
    href: '/tratamentos/proteses',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Tratamento de Canal',
    description: 'Procedimento confortável e eficaz para eliminar infecções e preservar seu dente natural.',
    href: '/tratamentos/canal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Odontopediatria',
    description: 'Atendimento especializado para crianças em ambiente lúdico para uma experiência dental positiva.',
    href: '/tratamentos/odontopediatria',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
  hover: { 
    y: -8,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.07)",
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  hover: { 
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 }
  }
};

const ServicesHighlight: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold-100 opacity-20 blur-3xl"></div>
        
        {/* Padrão de pontos */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-20 gap-8 rotate-12">
            {Array(100).fill(0).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gold-500"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <m.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <m.span 
            className="inline-block mb-3 px-4 py-1 bg-gold-50 text-[oklch(55%_0.12_80deg)] rounded-full text-sm font-medium border border-gold-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossos Serviços
          </m.span>
          
          <m.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(40%_0.02_80deg)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tratamentos <span className="text-[oklch(60%_0.12_80deg)]">Especializados</span>
          </m.h2>
          
          <m.div 
            className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></m.div>
          
          <m.p 
            className="text-[oklch(50%_0.02_80deg)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Oferecemos uma variedade de serviços odontológicos para cuidar da sua saúde bucal com a mais alta qualidade e tecnologia disponível.
          </m.p>
        </m.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.href} key={service.id}>
              <m.div
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-gold-200 transition-all duration-500 h-full flex flex-col"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <m.div 
                  className="w-16 h-16 rounded-lg bg-gold-50 flex items-center justify-center text-[oklch(55%_0.12_80deg)] mb-6"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </m.div>
                
                <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">
                  {service.title}
                </h3>
                
                <p className="text-[oklch(50%_0.02_80deg)] mb-6 flex-grow">
                  {service.description}
                </p>
                
                <m.div 
                  className="flex items-center text-[oklch(55%_0.12_80deg)] font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Saiba mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </m.div>
              </m.div>
            </Link>
          ))}
        </StaggerContainer>
        
        <m.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/tratamentos" legacyBehavior>
            <m.a
              className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center shadow-lg shadow-gold-300/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Ver Todos os Tratamentos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </m.a>
          </Link>
        </m.div>
      </div>
    </section>
  );
};

export default ServicesHighlight; 