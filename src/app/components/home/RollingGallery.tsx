"use client";

import React from 'react';
import Image from 'next/image';

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
 * usando animação CSS para melhor performance.
 */
export default function RollingGallery({
  images,
  direction = 'left',
  className = '',
}: RollingGalleryProps) {
  const animationDuration = images.length * 8; // 8 segundos por imagem (velocidade mais lenta)
  const totalWidth = images.length * 320; // 320px por imagem (300px + 20px margin)

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="flex"
        style={{
          width: `${totalWidth * 2}px`, // 2x o número de imagens para o loop
          animation: `scroll-${direction} ${animationDuration}s linear infinite`
        }}
      >
        {/* Primeiro conjunto */}
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mx-2 rounded-lg overflow-hidden"
            style={{ width: 300, height: 200 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-full"
              loading="lazy"
              quality={85}
              sizes="300px"
            />
          </div>
        ))}
        
        {/* Segundo conjunto para loop contínuo */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mx-2 rounded-lg overflow-hidden"
            style={{ width: 300, height: 200 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-full"
              loading="lazy"
              quality={85}
              sizes="300px"
            />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * ${images.length}));
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-320px * ${images.length}));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
} 