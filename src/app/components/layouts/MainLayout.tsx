'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '../navigation/Header';
import ScrollToTop from '../shared/ScrollToTop';
import { LazyMotion, domAnimation, MotionConfig } from '../shared/motion';

// Carregamento dinâmico do Footer para melhorar o tempo de carregamento inicial
const Footer = dynamic(() => import('../navigation/Footer'), {
  ssr: true,
  loading: () => <div className="h-20"></div>
});

// Componente de carregamento simples
const LoadingIndicator = () => (
  <div className="h-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-[#866D36] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user" transition={{
          ease: [0.16, 1, 0.3, 1], // Curva de aceleração suave
          duration: 0.5, // Duração padrão para animações
        }}>
          <Header />
          <main>{children}</main>
          <Suspense fallback={<LoadingIndicator />}>
            <Footer />
          </Suspense>
          <ScrollToTop />
        </MotionConfig>
      </LazyMotion>
    </>
  );
};

export default MainLayout; 