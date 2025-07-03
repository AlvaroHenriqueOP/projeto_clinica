"use client";

import React from 'react';
import { m } from '../shared/motion';
import Link from 'next/link';
import Image from 'next/image';

const featuredTreatments = [
  {
    id: 1,
    title: 'Implantes Dentários',
    description: 'Substitutos modernos para dentes perdidos, com aparência e função naturais.',
    image: '/images/treatments/implante_dentario.jpg',
    alt: 'Implantes Dentários'
  },
  {
    id: 2,
    title: 'Ortodontia',
    description: 'Alinhe seus dentes com aparelhos modernos e discretos para um sorriso perfeito.',
    image: '/images/treatments/ortodontia.jpeg',
    alt: 'Ortodontia'
  },
  {
    id: 3,
    title: 'Estética Dental',
    description: 'Procedimentos que realçam a beleza do seu sorriso, como clareamento e facetas.',
    image: '/images/treatments/clareamento.jpg',
    alt: 'Tratamentos Estéticos'
  }
];

// Constantes para viewport
const viewportConfig = { once: true, amount: 0.2, margin: "0px 0px -100px 0px" };

const ServicesHighlight: React.FC = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
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
            Cuidados odontológicos de excelência
          </m.span>
          <m.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Tratamentos Especializados
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
            Cuidamos da sua saúde bucal com tecnologia avançada e profissionais especializados.
            Nossa clínica oferece uma ampla gama de tratamentos odontológicos.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredTreatments.map((treatment, index) => (
            <m.div
              key={treatment.id}
              className="group relative overflow-hidden rounded-lg shadow-md h-64"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
              <div className="relative h-full w-full">
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAwdjQwSDBWMGg0MHpNMjAgMjBhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6IiBmaWxsPSIjRjdGMUUxIiBmaWxsLW9wYWNpdHk9Ii4yIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-xl font-medium mb-2">{treatment.title}</h3>
                <p className="text-white/85 text-sm line-clamp-2">{treatment.description}</p>
              </div>
            </m.div>
          ))}
        </div>
        
        <m.div 
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/tratamentos" className="inline-block">
            <button
              className="bg-[#866D36] hover:bg-[#9d824b] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <span>Conheça todos os nossos tratamentos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </m.div>
      </div>
    </section>
  );
};

export default ServicesHighlight; 