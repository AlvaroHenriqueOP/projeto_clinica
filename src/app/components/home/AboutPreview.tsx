"use client";

import React from 'react';
import Link from 'next/link';
import { m } from '../shared/motion';
import { FadeIn, FadeInUp, PlaceholderImage } from '../shared/AnimationUtils';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem com elementos decorativos */}
          <div className="relative">
            {/* Elemento decorativo 1 */}
            <m.div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#866D36]/10 z-0"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            {/* Elemento decorativo 2 */}
            <m.div
              className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-[#866D36]/5 z-0"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            {/* Imagem principal */}
            <m.div
              className="relative z-10 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PlaceholderImage 
                className="bg-gray-200" 
                height="h-[500px]" 
                width="w-full"
                label="Interior da Clínica" 
              />
            </m.div>
            
            {/* Elemento flutuante com estatística */}
            <m.div
              className="absolute bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg z-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#866D36]">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </m.div>
          </div>
          
          {/* Conteúdo */}
          <div>
            <FadeIn>
              <span className="text-[#866D36] font-medium text-sm uppercase tracking-wider">
                Sobre Nossa Clínica
              </span>
            </FadeIn>
            
            <FadeInUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
                Excelência em Odontologia
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <div className="w-20 h-1 bg-[#866D36] mb-6"></div>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <p className="text-gray-600 mb-6">
                Nossa clínica foi fundada com o compromisso de oferecer tratamentos odontológicos de excelência, combinando tecnologia de ponta, profissionais altamente qualificados e um ambiente acolhedor e confortável.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <p className="text-gray-600 mb-8">
                Acreditamos que cada sorriso é único e merece um atendimento personalizado. Por isso, desenvolvemos protocolos clínicos que respeitam as necessidades individuais de cada paciente, garantindo resultados estéticos e funcionais duradouros.
              </p>
            </FadeInUp>
            
            {/* Lista de diferenciais */}
            <m.ul
              className="space-y-3 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {[
                'Equipamentos de última geração',
                'Profissionais especializados',
                'Ambiente confortável e acolhedor',
                'Protocolos rigorosos de biossegurança',
                'Atendimento humanizado'
              ].map((item, index) => (
                <m.li
                  key={index}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                  }}
                >
                  <m.div 
                    className="text-[#866D36] mr-2"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </m.div>
                  <span className="text-gray-700">{item}</span>
                </m.li>
              ))}
            </m.ul>
            
            <FadeInUp delay={0.7}>
              <Link href="/sobre" className="inline-flex items-center text-[#866D36] font-semibold hover:text-[#9d824b] transition-colors duration-300 group">
                <span>Conheça mais sobre nossa clínica</span>
                <m.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 group-hover:ml-3 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </m.svg>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview; 