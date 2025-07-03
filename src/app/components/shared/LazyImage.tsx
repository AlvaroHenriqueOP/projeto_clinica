'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  style?: React.CSSProperties;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
}

/**
 * LazyImage - Componente otimizado para carregamento de imagens
 * 
 * Este componente encapsula o componente Image do Next.js com configurações
 * otimizadas para carregamento lazy e efeito de blur placeholder.
 * 
 * @param props - Propriedades do componente
 * @returns Componente de imagem com carregamento otimizado
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  fill = false,
  width,
  height,
  sizes = '100vw',
  priority = false,
  quality = 85,
  style,
  objectFit = 'cover',
  objectPosition = 'center',
  onLoad,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Determinar se deve usar carregamento lazy ou não
  const loadingStrategy = priority ? undefined : 'lazy';

  // Estilo para o objeto de imagem
  const imageStyle: React.CSSProperties = {
    objectFit,
    objectPosition,
    ...style,
    transition: 'opacity 0.5s, filter 0.5s',
    opacity: isLoaded ? 1 : 0,
    filter: isLoaded ? 'none' : 'blur(10px)',
  };

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div 
      className={cn(
        'overflow-hidden relative', 
        fill ? 'w-full h-full' : '', 
        containerClassName
      )}
      style={!fill ? { width: width, height: height } : undefined}
    >
      {/* Placeholder de baixa qualidade */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: objectPosition,
          }}
        />
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        loading={loadingStrategy}
        quality={quality}
        sizes={sizes}
        className={cn('transition-all duration-500', className)}
        style={imageStyle}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
} 