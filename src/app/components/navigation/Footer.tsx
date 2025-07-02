'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[oklch(97%_0.03_80deg)] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[oklch(95%_0.06_80deg)] opacity-30 blur-xl"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-[#866D36]/10"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Logo e informações */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)]">Dental Corp</h2>
              <div className="w-12 h-0.5 bg-[#866D36] mt-2"></div>
            </div>
            <p className="text-[oklch(50%_0.02_80deg)] mb-4 text-sm">
              Excelência em odontologia moderna com atendimento humanizado e tecnologia de ponta.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#866D36]/10 transition-colors">
                <svg className="w-4 h-4 text-[#866D36]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#866D36]/10 transition-colors">
                <svg className="w-4 h-4 text-[#866D36]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#866D36]/10 transition-colors">
                <svg className="w-4 h-4 text-[#866D36]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Seções */}
          <div>
            <h3 className="text-lg font-semibold text-[oklch(40%_0.02_80deg)] mb-4">Seções</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/tratamentos" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Tratamentos</Link>
              </li>
              <li>
                <Link href="/equipe" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Nossa Equipe</Link>
              </li>
              <li>
                <Link href="/blog" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contato" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3: Tratamentos */}
          <div>
            <h3 className="text-lg font-semibold text-[oklch(40%_0.02_80deg)] mb-4">Tratamentos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tratamentos" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Implantes Dentários</Link>
              </li>
              <li>
                <Link href="/tratamentos" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Clareamento Dental</Link>
              </li>
              <li>
                <Link href="/tratamentos" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Ortodontia</Link>
              </li>
              <li>
                <Link href="/tratamentos" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Próteses Dentárias</Link>
              </li>
              <li>
                <Link href="/tratamentos" className="text-[oklch(50%_0.02_80deg)] text-sm hover:text-[#866D36] transition-colors">Harmonização Facial</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-lg font-semibold text-[oklch(40%_0.02_80deg)] mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#866D36] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[oklch(50%_0.02_80deg)] text-sm">
                  Av. Paulista, 1000 - Bela Vista<br/>
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#866D36] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[oklch(50%_0.02_80deg)] text-sm">
                  (11) 5555-5555<br/>
                  (11) 98765-4321
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#866D36] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[oklch(50%_0.02_80deg)] text-sm">
                  contato@dentalcorp.com.br<br/>
                  atendimento@dentalcorp.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-[oklch(90%_0.02_80deg)] text-center">
          <p className="text-sm text-[oklch(50%_0.02_80deg)]">
            © {new Date().getFullYear()} Dental Corp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 