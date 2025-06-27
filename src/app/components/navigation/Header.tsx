'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { m, AnimatePresence } from '../shared/motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Efeito de scroll para mudança de estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navegação principal
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Tratamentos', href: '/tratamentos' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Convênios', href: '/convenios' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <m.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'h-16 bg-white shadow-sm border-b border-gray-50'
            : 'h-20 bg-white/80 backdrop-blur-sm'
        }`}
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
              <span className="text-xl font-bold text-[oklch(60%_0.12_80deg)]">DENTAL</span>
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
                        onClick={() => setIsMobileMenuOpen(false)}
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
      </m.header>

      {/* Spacer para compensar o header fixo */}
      <div className="h-20"></div>
    </>
  );
};

export default Header; 