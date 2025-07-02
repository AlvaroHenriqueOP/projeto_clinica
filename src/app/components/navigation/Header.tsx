'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { m, AnimatePresence } from '../shared/motion';
import { scrollToSection } from '@/lib/navigation';

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
  const navigation = [
    { name: 'Início', href: '/', section: 'home' },
    { name: 'Tratamentos', href: '/tratamentos', section: 'services' },
    { name: 'Equipe', href: '/equipe', section: 'about' },
    { name: 'Sobre', href: '/sobre', section: 'about' },
    { name: 'Blog', href: '/blog', section: null },
    { name: 'Contato', href: '/contato', section: 'contact' },
  ];

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  // Função para lidar com a navegação
  const handleNavigation = (e: React.MouseEvent, href: string, section: string | null) => {
    // Se não estiver montado no cliente, não fazer nada
    if (!isMounted) return;

    // Se estiver na página inicial e houver uma seção definida, use navegação suave
    if (pathname === '/' && section) {
      e.preventDefault();
      scrollToSection(section, 80); // 80px de offset para compensar o header
      setIsMobileMenuOpen(false);
    } else if (pathname === href) {
      // Se já estiver na página do link, apenas feche o menu mobile
      e.preventDefault();
      setIsMobileMenuOpen(false);
      // Rolar para o topo se clicar no link da página atual
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Caso contrário, deixa o comportamento padrão do Link (navegação para outra página)
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled
            ? 'h-16 bg-white shadow-md border-b border-gray-100'
            : 'h-20 bg-white/95 backdrop-blur-md'
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
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <m.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-10 h-10 bg-gradient-to-r from-gold-300 to-gold-400 rounded-lg flex items-center justify-center shadow-sm"
            >
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </m.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[oklch(60%_0.12_80deg)]">DENTAL CORP</span>
              <span className="text-xs tracking-widest text-[oklch(55%_0.02_80deg)]">EXCELLENCE</span>
            </div>
          </Link>

          {/* Navegação Desktop - Centralizada */}
          <div className="hidden lg:flex items-center space-x-6 mx-auto">
            <nav className="flex items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.section)}
                  className={`relative px-3 py-2 mx-1.5 text-sm transition-colors duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-[oklch(60%_0.12_80deg)] font-medium'
                      : 'text-[oklch(45%_0.02_80deg)] hover:text-[oklch(55%_0.12_80deg)]'
                  }`}
                >
                  {item.name}
                  {isActiveLink(item.href) && (
                    <m.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-300" 
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>
            
          {/* CTA Button */}
          <m.div>
            <Button
              href="/contato"
              variant="primary"
              size="sm"
              icon={<PhoneIcon className="w-4 h-4" />}
            >
              Agendar
            </Button>
          </m.div>

          {/* Menu Mobile Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[oklch(45%_0.02_80deg)] hover:bg-gray-50"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white shadow-sm border-t border-gray-50 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <nav className="grid gap-1">
                  {navigation.map((item) => (
                    <m.div
                      key={item.name}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href, item.section)}
                        className={`block px-4 py-2.5 rounded transition-colors ${
                          isActiveLink(item.href)
                            ? 'bg-gray-50 text-[oklch(60%_0.12_80deg)] font-medium'
                            : 'text-[oklch(45%_0.02_80deg)] hover:bg-gray-50 hover:text-[oklch(55%_0.12_80deg)]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </m.div>
                  ))}

                  <m.div 
                    className="mt-4 px-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button
                      href="/contato"
                      variant="primary"
                      size="md"
                      fullWidth
                      icon={<PhoneIcon className="w-4 h-4" />}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Agendar Consulta
                    </Button>
                  </m.div>
                </nav>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </header>

      {/* Espaçador para compensar o header fixo */}
      <div className={isScrolled ? 'h-16' : 'h-20'} />
    </>
  );
};

export default Header; 