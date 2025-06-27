"use client";

import React from 'react';
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

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: 'Carolina Santos',
    role: 'Paciente desde 2020',
    quote: 'Experiência incrível! A equipe é extremamente profissional e cuidadosa. O ambiente é moderno e acolhedor, me deixou muito à vontade.',
    rating: 5,
    image: '/images/testimonials/testimonial-1.jpg', 
  },
  {
    id: 2,
    name: 'Roberto Almeida',
    role: 'Paciente desde 2019',
    quote: 'Finalmente consegui superar meu medo de dentista. A equipe soube lidar com minha ansiedade e o tratamento foi praticamente indolor.',
    rating: 5,
    image: '/images/testimonials/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Fernanda Costa',
    role: 'Paciente desde 2021',
    quote: 'Resultados perfeitos no meu clareamento dental! Agora tenho confiança para sorrir em qualquer situação. Recomendo fortemente!',
    rating: 5,
    image: '/images/testimonials/testimonial-3.jpg',
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
    <section className="py-16 md:py-24 bg-gray-50">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <m.div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-md relative"
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
                <div className="flex-shrink-0 mr-3 w-12 h-12 overflow-hidden rounded-full border-2 border-[#866D36]">
                  {/* Imagem Placeholder para os depoimentos */}
                  <PlaceholderImage 
                    className="bg-gray-200" 
                    height="h-12" 
                    width="w-12" 
                    label={`Foto ${testimonial.name}`}
                    delay={0.3}
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

        <m.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <m.button
            className="text-[#866D36] border-2 border-[#866D36] px-6 py-3 rounded-md font-medium hover:bg-[#866D36] hover:text-white transition-colors duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver Mais Depoimentos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </m.button>
        </m.div>
      </div>
    </section>
  );
};

export default Testimonials; 