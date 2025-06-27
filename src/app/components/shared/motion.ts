'use client';

// Importações específicas do Framer Motion para evitar problemas de "export *"
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
  m,
  MotionConfig,
  LazyMotion,
  domAnimation
} from 'framer-motion';

// Re-exportação nomeada para uso em componentes
export {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
  m,
  MotionConfig,
  LazyMotion,
  domAnimation
};

// Variantes de animação comuns
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Configuração para animações otimizadas
export const motionConfig = {
  transition: {
    type: "spring",
    damping: 15,
    stiffness: 100
  }
}; 