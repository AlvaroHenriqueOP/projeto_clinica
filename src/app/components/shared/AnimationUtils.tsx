'use client';

import React, { ReactNode } from 'react';
import { m } from './motion';

// Variantes de animações reutilizáveis
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const scaleOnHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 }
};

// Configuração padrão para viewport detection (otimizada)
const defaultViewportOptions = {
  once: true,
  amount: 0.2, // Reduzir para iniciar animações mais cedo
  margin: "0px 0px -100px 0px" // Melhorar detecção durante scroll
};

// Componentes de animação reutilizáveis
interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  margin?: string;
}

export const FadeIn: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  once = true,
  amount = 0.2,
  margin = "0px 0px -100px 0px"
}) => {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration, delay, ease: 'easeOut' }
        }
      }}
    >
      {children}
    </m.div>
  );
};

export const FadeInUp: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  once = true,
  amount = 0.2,
  margin = "0px 0px -100px 0px"
}) => {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration, delay, ease: 'easeOut' }
        }
      }}
    >
      {children}
    </m.div>
  );
};

export const StaggerContainer: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  delay = 0.1, 
  once = true,
  amount = 0.2,
  margin = "0px 0px -100px 0px"
}) => {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.08,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </m.div>
  );
};

export const ScaleOnHover: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <m.div
      className={className}
      initial="rest"
      whileHover="hover"
      variants={scaleOnHoverVariants}
    >
      {children}
    </m.div>
  );
};

// Placeholder para imagens com animação de entrada
interface PlaceholderImageProps {
  className?: string;
  height?: string;
  width?: string;
  label?: string;
  delay?: number;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  className = 'bg-gray-200',
  height = 'h-64',
  width = 'w-full',
  label = 'Placeholder',
  delay = 0
}) => {
  return (
    <m.div
      className={`${className} ${height} ${width} flex items-center justify-center rounded-lg overflow-hidden relative placeholder-pulse`}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={defaultViewportOptions}
      transition={{ duration: 0.4, delay }}
    >
      <svg className="w-1/4 h-1/4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v8l4-2 4 4 4-6 4 4V6H4z" />
      </svg>
      <span className="absolute bottom-2 right-2 bg-gray-800/70 text-white px-2 py-1 rounded text-xs">
        {label}
      </span>
    </m.div>
  );
}; 