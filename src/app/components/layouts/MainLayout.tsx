'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../navigation/Header';
import { LazyMotion, domAnimation, MotionConfig, m } from '../shared/motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig transition={{ 
        type: "spring",
        damping: 15,
        stiffness: 100
      }}>
        <Header />
        {children}
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Coluna 1 - Sobre */}
              <div>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-[#866D36]">DentalBlanc</h3>
                  <p className="text-gray-400 mb-4">
                    Oferecemos tratamentos odontológicos de excelência com tecnologia avançada e profissionais qualificados em um ambiente acolhedor e moderno.
                  </p>
                  <div className="flex space-x-4 mt-4">
                    {/* Ícones de Redes Sociais */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.988-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.988-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                      <span className="sr-only">YouTube</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </m.div>
              </div>
              
              {/* Coluna 2 - Links Rápidos */}
              <div>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-[#866D36]">Links Rápidos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/sobre" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Sobre Nós
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Nossos Tratamentos
                      </Link>
                    </li>
                    <li>
                      <Link href="/equipe" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Equipe Médica
                      </Link>
                    </li>
                    <li>
                      <Link href="/convenios" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Convênios
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Blog & Notícias
                      </Link>
                    </li>
                    <li>
                      <Link href="/contato" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </m.div>
              </div>
              
              {/* Coluna 3 - Tratamentos */}
              <div>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-[#866D36]">Tratamentos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/tratamentos/implantes-dentarios" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Implantes Dentários
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/clareamento-dental" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Clareamento Dental
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/ortodontia" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Ortodontia
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/proteses-dentarias" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Próteses Dentárias
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/tratamento-de-canal" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Tratamento de Canal
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/odontopediatria" className="text-gray-400 hover:text-[#866D36] transition-colors duration-300">
                        Odontopediatria
                      </Link>
                    </li>
                  </ul>
                </m.div>
              </div>
              
              {/* Coluna 4 - Contato */}
              <div>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-[#866D36]">Contato</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPinIcon className="h-6 w-6 text-[#866D36] mr-3 flex-shrink-0" />
                      <span className="text-gray-400">
                        Av. Paulista, 1000 - Bela Vista<br />
                        São Paulo - SP, 01310-000
                      </span>
                    </li>
                    <li className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-[#866D36] mr-3 flex-shrink-0" />
                      <span className="text-gray-400">(11) 3456-7890</span>
                    </li>
                    <li className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-[#866D36] mr-3 flex-shrink-0" />
                      <span className="text-gray-400">contato@dentalblanc.com.br</span>
                    </li>
                    <li className="flex items-start">
                      <ClockIcon className="h-5 w-5 text-[#866D36] mr-3 flex-shrink-0 mt-0.5" />
                      <div className="text-gray-400">
                        <p>Segunda a Sexta: 08h às 20h</p>
                        <p>Sábados: 08h às 14h</p>
                      </div>
                    </li>
                  </ul>
                </m.div>
              </div>
            </div>
            
            {/* Linha divisória */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} DentalBlanc. Todos os direitos reservados.
                </p>
                <div className="mt-4 md:mt-0">
                  <ul className="flex space-x-6">
                    <li>
                      <Link href="/politica-de-privacidade" className="text-sm text-gray-500 hover:text-[#866D36] transition-colors duration-300">
                        Política de Privacidade
                      </Link>
                    </li>
                    <li>
                      <Link href="/termos-de-uso" className="text-sm text-gray-500 hover:text-[#866D36] transition-colors duration-300">
                        Termos de Uso
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </MotionConfig>
    </LazyMotion>
  );
};

export default MainLayout; 