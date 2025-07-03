"use client";

import React, { useRef, useEffect, useState } from 'react';
import LazyImage from '../shared/LazyImage';
import { motion } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface RollingGalleryProps {
  images: GalleryImage[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

/**
 * RollingGallery - Componente de galeria com rolagem automática
 * 
 * Este componente exibe uma galeria de imagens com rolagem automática
 * e carregamento lazy para otimização de performance.
 * 
 * @param props - Propriedades do componente
 * @returns Componente de galeria rolante
 */
export default function RollingGallery({
  images,
  speed = 20,
  direction = 'left',
  className = '',
}: RollingGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Verificar se o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Não executar no servidor ou antes da montagem no cliente
    if (!isMounted || !scrollerRef.current || !scrollerInnerRef.current) return;

    // Duplicar as imagens para criar um loop contínuo
    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.appendChild(duplicatedItem);
      }
    });

    // Configurar a animação
    const scrollerInner = scrollerInnerRef.current;
    const scrollerWidth = scrollerInner.offsetWidth / 2;
    
    let animationId: number;
    
    const animate = () => {
      if (!scrollerInner) return;
      
      // Calcular a posição atual
      const currentScrollPosition = parseFloat(
        scrollerInner.style.transform?.split('translateX(')[1]?.split('px)')[0] || '0'
      );
      
      // Calcular a nova posição
      const newPosition = direction === 'left'
        ? currentScrollPosition - 0.5
        : currentScrollPosition + 0.5;
      
      // Resetar a posição quando chegar ao final
      if (direction === 'left' && newPosition <= -scrollerWidth) {
        scrollerInner.style.transform = `translateX(0px)`;
      } else if (direction === 'right' && newPosition >= 0) {
        scrollerInner.style.transform = `translateX(${-scrollerWidth}px)`;
      } else {
        scrollerInner.style.transform = `translateX(${newPosition}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Iniciar a animação
    animationId = requestAnimationFrame(animate);
    
    // Limpar a animação quando o componente for desmontado
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction, isMounted]);

  // Renderização condicional até que o componente esteja montado no cliente
  if (!isMounted) {
    return (
      <div className={`${className} h-[200px] bg-gray-100/30 rounded-lg flex items-center justify-center`}>
        <div className="text-gray-400 animate-pulse">Carregando galeria...</div>
      </div>
    );
  }

  return (
    <div 
      className={`scroller relative overflow-hidden ${className}`}
      ref={scrollerRef}
    >
      <div 
        className="scroller__inner flex"
        ref={scrollerInnerRef}
        style={{ transform: 'translateX(0)' }}
      >
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="mx-2 flex-shrink-0 rounded-lg overflow-hidden"
            style={{ width: image.width, height: image.height }}
          >
            <LazyImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg"
              containerClassName="h-full w-full"
              objectFit="cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 