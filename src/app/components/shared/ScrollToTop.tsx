'use client';

import React, { useState, useEffect } from 'react';
import { scrollToTop } from '@/lib/navigation';
import { m, AnimatePresence } from './motion';

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

/**
 * Componente que exibe um botão "Voltar ao topo" quando o usuário
 * rola a página além de um limite definido
 */
export default function ScrollToTop({ 
  threshold = 300, 
  className = '' 
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Verificar se o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Não executar no servidor ou antes da montagem no cliente
    if (!isMounted) return;
    
    // Função para verificar a posição de scroll
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adicionar evento de scroll
    window.addEventListener('scroll', toggleVisibility);

    // Verificar posição inicial
    toggleVisibility();

    // Limpar evento ao desmontar
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold, isMounted]);

  // Função para rolar suavemente para o topo
  const handleClick = () => {
    scrollToTop();
  };

  // Não renderizar nada durante SSR ou antes da montagem no cliente
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className={`fixed bottom-6 right-6 z-50 bg-[#866D36] text-white p-3 rounded-full shadow-lg hover:bg-[#9d824b] transition-colors ${className}`}
          aria-label="Voltar ao topo"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </m.button>
      )}
    </AnimatePresence>
  );
} 