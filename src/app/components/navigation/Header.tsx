'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { m, AnimatePresence } from '../shared/motion';
import { NavigationItem } from './types';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Verificar se o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Efeito de scroll para mudança de estilo do header e visibilidade
  useEffect(() => {
    // Não executar no servidor ou antes da montagem no cliente
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledNow = currentScrollPos > 20;
      
      // Sempre visível nos primeiros 20px
      if (currentScrollPos <= 20) {
        setVisible(true);
      } else {
        // Determina se deve mostrar ou ocultar com base na direção da rolagem
        // Rolando para cima = mostrar, rolando para baixo = ocultar
        // Mas sempre mostrar quando o menu mobile estiver aberto
        setVisible(isMobileMenuOpen || prevScrollPos > currentScrollPos);
      }
      
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(isScrolledNow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMobileMenuOpen, isMounted]);

  // Garantir que o header fique visível quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      setVisible(true);
    }
  }, [isMobileMenuOpen]);

  // Navegação principal
  const navigation: NavigationItem[] = [
    { name: 'Início', href: '/', section: 'home' },
    { name: 'Tratamentos', href: '/tratamentos', section: null },
    { name: 'Equipe', href: '/equipe', section: null },
    { name: 'Sobre', href: '/sobre', section: null },
    { name: 'Blog', href: '/blog', section: null },
    { name: 'Contato', href: '/contato', section: null },
  ];

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  // Função para lidar com a navegação
  const handleNavigation = (e: React.MouseEvent, href: string, section: string | null | undefined) => {
    // Debug para entender o que está acontecendo
    console.log(`Navegação acionada - Href: ${href}, Section: ${section}, Pathname atual: ${pathname}`);

    // Se não estiver montado no cliente, não fazer nada
    if (!isMounted) return;

    // Fechar o menu mobile sempre que um link for clicado
    setIsMobileMenuOpen(false);

    // Se estiver na página inicial e o botão for Home, rolar para o topo
    if (pathname === '/' && href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Para os outros links, deixar a navegação padrão acontecer
    console.log(`Navegando para página: ${href}`);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          isScrolled
            ? 'h-16 bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-500/5 border-b border-slate-200/20'
            : 'h-20 bg-white/80 backdrop-blur-md'
        } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Modern Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <m.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
            >
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-7 4h6m2 5.291A7.962 7.962 0 0112 23a7.963 7.963 0 01-5.291-2.709A7.963 7.963 0 014 15.999c0-3.312 2.687-6 6-6 3.313 0 6 2.688 6 6a7.963 7.963 0 01-2.709 5.291z" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
            </m.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                DENTAL CORP
              </span>
              <span className="text-xs tracking-[0.2em] text-slate-500 font-medium">
                EXCELLENCE
              </span>
            </div>
          </Link>

          {/* Modern Navigation Desktop */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-2 py-1 border border-slate-200/50 shadow-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.section)}
                  className={`relative px-4 py-2 mx-1 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActiveLink(item.href)
                      ? 'text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/25'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-white/80'
                  }`}
                  data-section={item.section || undefined}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActiveLink(item.href) && (
                    <m.div 
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>
            
          {/* Modern CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <m.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleNavigation(e, '/contato', null)}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                Agendar Consulta
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </m.button>
          </div>

          {/* Modern Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-600 hover:text-slate-800 hover:bg-white transition-all duration-300"
            aria-label="Menu"
          >
            <m.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </m.div>
          </button>
        </div>

        {/* Modern Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 lg:hidden"
            >
              <div className="mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-500/10 border border-slate-200/20 overflow-hidden">
                <div className="p-4">
                  <nav className="space-y-1">
                    {navigation.map((item, index) => (
                      <m.div
                        key={item.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavigation(e, item.href, item.section)}
                          className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            isActiveLink(item.href)
                              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border border-blue-200/50'
                              : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                          }`}
                          data-section={item.section || undefined}
                        >
                          <span className="text-sm">{item.name}</span>
                          {isActiveLink(item.href) && (
                            <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </Link>
                      </m.div>
                    ))}
                  </nav>

                  <m.div 
                    className="mt-6 pt-4 border-t border-slate-200/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handleNavigation(e, '/contato', null);
                      }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Agendar Consulta
                    </button>
                  </m.div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modern spacer */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`} />
    </>
  );
};

export default Header; 