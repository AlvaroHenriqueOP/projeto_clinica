"use client";

import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SimpleGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function SimpleGallery({ images, className = '' }: SimpleGalleryProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="flex animate-scroll-left"
        style={{
          width: 'calc(300px * 15)', // 3x o número de imagens para o loop
          animation: 'scroll-left 30s linear infinite'
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
            />
          </div>
        ))}
        
        {/* Terceiro conjunto para transição suave */}
        {images.map((image, index) => (
          <div
            key={`third-${index}`}
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
            transform: translateX(calc(-300px * 5)); /* Largura de um conjunto completo */
          }
        }
      `}</style>
    </div>
  );
}
