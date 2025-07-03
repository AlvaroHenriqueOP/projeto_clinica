"use client";

import React, { useRef, useEffect } from 'react';
import LazyImage from '../shared/LazyImage';

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

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    // Duplicar as imagens 3 vezes para criar um loop contínuo mais suave
    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    
    // Primeiro conjunto - clonar ao final para transição
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.appendChild(duplicatedItem);
      }
    });
    
    // Segundo conjunto - clonar novamente para garantir um loop mais suave
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.appendChild(duplicatedItem);
      }
    });

    // Configurar a animação
    const scrollerInner = scrollerInnerRef.current;
    const originalSetWidth = scrollerContent.reduce((width, item) => {
      const itemWidth = (item as HTMLElement).offsetWidth;
      return width + itemWidth + 16; // 16px para as margens (mx-2)
    }, 0);
    
    let currentTranslate = 0;
    const pixelsPerFrame = speed / 40; // Converter o speed para uma velocidade adequada de pixels por frame
    
    const animate = () => {
      if (!scrollerInner) return;
      
      // Avançar a posição baseado na direção
      if (direction === 'left') {
        currentTranslate -= pixelsPerFrame;
        
        // Quando deslocar a largura do primeiro conjunto, resetar para continuar o loop
        if (Math.abs(currentTranslate) >= originalSetWidth) {
          currentTranslate += originalSetWidth;
        }
      } else {
        currentTranslate += pixelsPerFrame;
        
        // Para direção direita, lógica inversa
        if (currentTranslate >= 0) {
          currentTranslate -= originalSetWidth;
        }
      }
      
      // Aplicar a transformação
      scrollerInner.style.transform = `translateX(${currentTranslate}px)`;
      
      // Continuar animação
      requestAnimationFrame(animate);
    };

    // Inicializar a posição baseada na direção
    if (direction === 'right') {
      currentTranslate = -originalSetWidth;
      scrollerInner.style.transform = `translateX(${currentTranslate}px)`;
    }

    // Iniciar a animação
    const animationId = requestAnimationFrame(animate);
    
    // Limpar a animação quando o componente for desmontado
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction, speed]);

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