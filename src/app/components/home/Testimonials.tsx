"use client";

import React from 'react';
import Image from 'next/image';
import { m } from '../shared/motion';
import { PlaceholderImage } from '../shared/AnimationUtils';

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

interface BeforeAfterProps {
  id: number;
  title: string;
  treatment: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: 'Alvaro Henrique',
    role: 'Paciente desde 2020',
    quote: 'Experiência incrível! A equipe é extremamente profissional e cuidadosa. O ambiente é moderno e acolhedor, me deixou muito à vontade.',
    rating: 5,
    image: '/images/depoimentos/depoimentos.jpg', 
  },
  {
    id: 2,
    name: 'Natalia Gomes',
    role: 'Paciente desde 2019',
    quote: 'Finalmente consegui superar meu medo de dentista. A equipe soube lidar com minha ansiedade e o tratamento foi praticamente indolor.',
    rating: 5,
    image: '/images/depoimentos/depoimentos2.jpg',
  },
  {
    id: 3,
    name: 'Fernando Costa',
    role: 'Paciente desde 2021',
    quote: 'Resultados perfeitos no meu clareamento dental! Agora tenho confiança para sorrir em qualquer situação. Recomendo fortemente!',
    rating: 5,
    image: '/images/depoimentos/depoimentos3.jpg',
  }
];

const beforeAfterCases: BeforeAfterProps[] = [
  {
    id: 1,
    title: 'Clareamento Dental',
    treatment: 'Tratamento de 3 sessões',
    image: '/images/resultados/antesedepois.png'
  },
  {
    id: 2,
    title: 'Implante Dentário',
    treatment: 'Substituição de dente perdido',
    image: '/images/resultados/antesedepois2.png'
  },
  {
    id: 3,
    title: 'Ortodontia',
    treatment: 'Alinhamento com aparelho transparente',
    image: '/images/resultados/antesedepois3.png'
  }
];

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const }
  },
  hover: { 
    y: -10, 
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 } 
  }
};

const quoteIconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5,
      delay: 0.2 
    } 
  }
};

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <m.span 
          key={i} 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
          className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
        >
          ★
        </m.span>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Fundo com degradê */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F5EC] via-[#F5F0E5] to-[#EEEAD9] -z-10">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#866D36]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#866D36]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        {/* Padrão de pontos */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(#866D36 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative">
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
            O que dizem nossos pacientes
          </m.span>
          <m.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Depoimentos
          </m.h2>
          <m.div 
            className="w-24 h-1 bg-[#866D36] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></m.div>
        </m.div>

        <m.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <m.div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-[#866D36]/10 relative"
              variants={testimonialVariants}
              whileHover="hover"
            >
              <m.div 
                className="absolute -top-5 left-6"
                variants={quoteIconVariants}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 15H6C5.175 15 4.5 14.325 4.5 13.5V6.75C4.5 5.925 5.175 5.25 6 5.25H12.75C13.575 5.25 14.25 5.925 14.25 6.75V20.25C14.25 26.37 9.285 31.5 3 31.5V28.5C7.635 28.5 11.25 24.885 11.25 20.25V19.5C11.25 17.025 9.225 15 6.75 15H6H13.5ZM31.5 15H24C23.175 15 22.5 14.325 22.5 13.5V6.75C22.5 5.925 23.175 5.25 24 5.25H30.75C31.575 5.25 32.25 5.925 32.25 6.75V20.25C32.25 26.37 27.285 31.5 21 31.5V28.5C25.635 28.5 29.25 24.885 29.25 20.25V19.5C29.25 17.025 27.225 15 24.75 15H24H31.5Z" fill="#866D36" fillOpacity="0.5"/>
                </svg>
              </m.div>
              
              <div className="mb-4 flex justify-end">
                <div className="flex text-lg">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <m.p 
                className="text-gray-600 italic mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </m.p>

              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 w-12 h-12 overflow-hidden rounded-full border-2 border-[#866D36] relative">
                  <Image
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    fill
                    loading="lazy"
                    className="object-cover object-center"
                    sizes="48px"
                  />
                </div>
                <m.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-[#866D36]">{testimonial.role}</div>
                </m.div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Seção Antes e Depois */}
        <m.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <m.h3 
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Resultados <span className="text-[#866D36]">Transformadores</span>
          </m.h3>
          <m.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Veja alguns dos resultados reais dos nossos tratamentos
          </m.p>
        </m.div>

        <m.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
        >
          {beforeAfterCases.map((case_, index) => (
            <m.div
              key={case_.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-[#866D36]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{case_.title}</h4>
              <p className="text-sm text-[#866D36] mb-4">{case_.treatment}</p>
              
              <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-lg">
                <Image
                  src={case_.image}
                  alt={`Antes e depois - ${case_.title}`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 300px"
                />
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Testimonials; 