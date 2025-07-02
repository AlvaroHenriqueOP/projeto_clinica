'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

interface BreadcrumbItem {
  name: string;
  href: string;
  icon?: React.ComponentType<React.ComponentProps<typeof HomeIcon>>;
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // Não mostrar breadcrumbs na home
  if (pathname === '/') return null;

  // Mapeamento de rotas para nomes mais amigáveis
  const routeNames: { [key: string]: string } = {
    'tratamentos': 'Tratamentos',
    'equipe': 'Nossa Equipe',
    'contato': 'Contato',
    'sobre': 'Sobre Nós',
    'blog': 'Blog'
  };

  // Gerar caminhos baseados na URL atual
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (!pathname) return [{ name: 'Início', href: '/', icon: HomeIcon }];
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Início', href: '/', icon: HomeIcon }
    ];

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        name: routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="bg-gradient-to-r from-gold-50 to-gold-100 border-b border-gold-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              const Icon = breadcrumb.icon;

              return (
                <li
                  key={breadcrumb.href}
                  className="flex items-center animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {index > 0 && (
                    <ChevronRightIcon className="w-4 h-4 text-gold-400 mx-2 animate-fade-in" />
                  )}
                  
                  {isLast ? (
                    <span className="flex items-center text-gold-700 font-semibold">
                      {Icon && <Icon className="w-4 h-4 mr-2" />}
                      {breadcrumb.name}
                    </span>
                  ) : (
                    <Link
                      href={breadcrumb.href}
                      className="flex items-center text-gold-600 hover:text-gold-800 transition-colors duration-200 hover:underline"
                    >
                      {Icon && <Icon className="w-4 h-4 mr-2" />}
                      {breadcrumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 