'use client';

import React from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon, 
  HeartIcon,
  PhoneIcon,
  StarIcon
} from '@heroicons/react/24/solid';

const NavigationDemo = () => {
  const features = [
    {
      title: 'Header Fixo/Sticky',
      description: 'Header que permanece visível durante o scroll com efeito de blur',
      icon: HomeIcon,
      implemented: true
    },
    {
      title: 'Logo Luxuoso',
      description: 'Logo com gradiente dourado e efeitos de hover animados',
      icon: StarIcon,
      implemented: true
    },
    {
      title: 'Menu Responsivo',
      description: 'Menu hambúrguer elegante para dispositivos móveis',
      icon: UserGroupIcon,
      implemented: true
    },
    {
      title: 'Indicador de Página Ativa',
      description: 'Indicação visual clara da página atual na navegação',
      icon: HeartIcon,
      implemented: true
    },
    {
      title: 'Breadcrumbs Automáticos',
      description: 'Sistema de breadcrumbs gerados automaticamente',
      icon: ChatBubbleLeftRightIcon,
      implemented: true
    },
    {
      title: 'CTA Destacado',
      description: 'Botão de call-to-action com animações luxuosas',
      icon: PhoneIcon,
      implemented: true
    }
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent mb-4">
            Sistema de Navegação Luxuoso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navegação premium com design moderno, cores douradas e experiência de usuário excepcional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  {feature.implemented && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓ Implementado
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-amber-100">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Navegue pelo Site
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/"
              className="flex flex-col items-center p-4 rounded-xl hover:bg-amber-50 transition-colors duration-200 group"
            >
              <HomeIcon className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-gray-700">Início</span>
            </Link>
            
            <Link 
              href="/tratamentos"
              className="flex flex-col items-center p-4 rounded-xl hover:bg-amber-50 transition-colors duration-200 group"
            >
              <HeartIcon className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-gray-700">Tratamentos</span>
            </Link>
            
            <Link 
              href="/equipe"
              className="flex flex-col items-center p-4 rounded-xl hover:bg-amber-50 transition-colors duration-200 group"
            >
              <UserGroupIcon className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-gray-700">Equipe</span>
            </Link>
            
            <Link 
              href="/contato"
              className="flex flex-col items-center p-4 rounded-xl hover:bg-amber-50 transition-colors duration-200 group"
            >
              <PhoneIcon className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-gray-700">Contato</span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para Experienciar?
            </h3>
            <p className="text-amber-100 mb-6 text-lg">
              Navegue pelo site e desfrute da experiência luxuosa que criamos para você.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-amber-50"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Entre em Contato</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDemo; 