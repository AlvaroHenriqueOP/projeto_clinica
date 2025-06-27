'use client';

import React from 'react';
import { H1, H2, H3, H4, H5, Text, Caption } from './Typography';
import Button from './Button';
import Card, { CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './Card';
import { PhoneIcon, HeartIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/solid';

const DesignSystemDemo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      
      {/* Typography Section */}
      <section className="animate-fade-in-up">
        <H2 className="mb-8">Sistema de Tipografia</H2>
        <div className="space-y-6">
          <div>
            <H1>Heading 1 - Principal</H1>
            <Caption>heading-1</Caption>
          </div>
          <div>
            <H2>Heading 2 - Seções</H2>
            <Caption>heading-2</Caption>
          </div>
          <div>
            <H3>Heading 3 - Subseções</H3>
            <Caption>heading-3</Caption>
          </div>
          <div>
            <H4>Heading 4 - Cards</H4>
            <Caption>heading-4</Caption>
          </div>
          <div>
            <H5>Heading 5 - Pequenos</H5>
            <Caption>heading-5</Caption>
          </div>
          <div className="space-y-2">
            <Text variant="large">Texto Grande - Para introduções e destaques importantes</Text>
            <Text variant="base">Texto Base - Para conteúdo principal e descrições</Text>
            <Text variant="small">Texto Pequeno - Para informações secundárias</Text>
            <Caption>Caption - Para legendas e metadados</Caption>
          </div>
          <div>
            <H3 gradient>Texto com Gradiente</H3>
            <Caption>gradient={true}</Caption>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="animate-fade-in-up animate-delay-200">
        <H2 className="mb-8">Sistema de Botões</H2>
        
        {/* Button Variants */}
        <div className="space-y-8">
          <div>
            <H4 className="mb-4">Variações</H4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={<PhoneIcon className="w-4 h-4" />}>
                Primary
              </Button>
              <Button variant="secondary" icon={<HeartIcon className="w-4 h-4" />}>
                Secondary
              </Button>
              <Button variant="outline" icon={<UserGroupIcon className="w-4 h-4" />}>
                Outline
              </Button>
              <Button variant="ghost" icon={<StarIcon className="w-4 h-4" />}>
                Ghost
              </Button>
            </div>
          </div>

          <div>
            <H4 className="mb-4">Tamanhos</H4>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm" variant="primary">Small</Button>
              <Button size="md" variant="primary">Medium</Button>
              <Button size="lg" variant="primary">Large</Button>
            </div>
          </div>

          <div>
            <H4 className="mb-4">Estados</H4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Normal</Button>
              <Button variant="primary" loading>Loading</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <H4 className="mb-4">Com Ícones</H4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={<PhoneIcon className="w-4 h-4" />} iconPosition="left">
                Ícone Esquerda
              </Button>
              <Button variant="secondary" icon={<HeartIcon className="w-4 h-4" />} iconPosition="right">
                Ícone Direita
              </Button>
            </div>
          </div>

          <div>
            <H4 className="mb-4">Full Width</H4>
            <Button variant="primary" fullWidth icon={<PhoneIcon className="w-4 h-4" />}>
              Botão Full Width
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="animate-fade-in-up animate-delay-400">
        <H2 className="mb-8">Sistema de Cards</H2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Default Card */}
          <Card variant="default">
            <CardHeader>
              <CardTitle>Card Padrão</CardTitle>
              <CardDescription>
                Este é um card com o estilo padrão do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="small" color="muted">
                Conteúdo adicional do card pode ser adicionado aqui.
              </Text>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Ação</Button>
            </CardFooter>
          </Card>

          {/* Elevated Card */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Card Elevado</CardTitle>
              <CardDescription>
                Card com sombra mais proeminente para destaque.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="small" color="muted">
                Ideal para conteúdo importante ou CTAs.
              </Text>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">Destacar</Button>
            </CardFooter>
          </Card>

          {/* Gradient Card */}
          <Card variant="gradient">
            <CardHeader>
              <CardTitle>Card Gradiente</CardTitle>
              <CardDescription>
                Card com fundo gradiente sutil.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="small" color="muted">
                Para seções especiais ou premium.
              </Text>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="sm">Premium</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Card Paddings */}
        <div className="mt-8">
          <H4 className="mb-4">Variações de Padding</H4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="sm">
              <CardTitle>Padding Small</CardTitle>
              <CardDescription>Card com padding reduzido</CardDescription>
            </Card>
            <Card padding="md">
              <CardTitle>Padding Medium</CardTitle>
              <CardDescription>Card com padding padrão</CardDescription>
            </Card>
            <Card padding="lg">
              <CardTitle>Padding Large</CardTitle>
              <CardDescription>Card com padding aumentado</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="animate-fade-in-up animate-delay-500">
        <H2 className="mb-8">Paleta de Cores</H2>
        
        <div className="space-y-8">
          {/* Primary Blues */}
          <div>
            <H4 className="mb-4">Azuis Primários</H4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-sm font-mono mb-1">blue-50</div>
                <div className="text-xs text-gray-600">#eff6ff</div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <div className="text-sm font-mono mb-1">blue-100</div>
                <div className="text-xs text-gray-600">#dbeafe</div>
              </div>
              <div className="bg-blue-500 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">blue-500</div>
                <div className="text-xs opacity-80">#3b82f6</div>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">blue-600</div>
                <div className="text-xs opacity-80">#0066CC</div>
              </div>
              <div className="bg-blue-900 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">blue-900</div>
                <div className="text-xs opacity-80">#1e3a8a</div>
              </div>
            </div>
          </div>

          {/* Support Colors */}
          <div>
            <H4 className="mb-4">Cores de Apoio</H4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-teal-500 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">teal-500</div>
                <div className="text-xs opacity-80">Sucesso</div>
              </div>
              <div className="bg-green-500 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">green-500</div>
                <div className="text-xs opacity-80">Confirmação</div>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">yellow-500</div>
                <div className="text-xs opacity-80">Atenção</div>
              </div>
              <div className="bg-red-500 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">red-500</div>
                <div className="text-xs opacity-80">Erro</div>
              </div>
            </div>
          </div>

          {/* Grays */}
          <div>
            <H4 className="mb-4">Escala de Cinzas</H4>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center border">
                <div className="text-sm font-mono mb-1">gray-50</div>
                <div className="text-xs text-gray-600">Backgrounds</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-sm font-mono mb-1">gray-100</div>
                <div className="text-xs text-gray-600">Borders</div>
              </div>
              <div className="bg-gray-300 p-4 rounded-lg text-center">
                <div className="text-sm font-mono mb-1">gray-300</div>
                <div className="text-xs text-gray-600">Disabled</div>
              </div>
              <div className="bg-gray-600 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">gray-600</div>
                <div className="text-xs opacity-80">Secondary</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">gray-700</div>
                <div className="text-xs opacity-80">Text</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono mb-1">gray-900</div>
                <div className="text-xs opacity-80">Headings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="animate-fade-in-up animate-delay-500">
        <H2 className="mb-8">Sistema de Espaçamentos</H2>
        
        <div className="space-y-6">
          <div>
            <H4 className="mb-4">Espaçamentos Padrão</H4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-16 text-sm font-mono">xs</div>
                <div className="bg-blue-200 h-4" style={{ width: '0.5rem' }}></div>
                <div className="ml-4 text-sm text-gray-600">0.5rem (8px)</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm font-mono">sm</div>
                <div className="bg-blue-300 h-4" style={{ width: '1rem' }}></div>
                <div className="ml-4 text-sm text-gray-600">1rem (16px)</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm font-mono">md</div>
                <div className="bg-blue-400 h-4" style={{ width: '1.5rem' }}></div>
                <div className="ml-4 text-sm text-gray-600">1.5rem (24px)</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm font-mono">lg</div>
                <div className="bg-blue-500 h-4" style={{ width: '2rem' }}></div>
                <div className="ml-4 text-sm text-gray-600">2rem (32px)</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm font-mono">xl</div>
                <div className="bg-blue-600 h-4" style={{ width: '3rem' }}></div>
                <div className="ml-4 text-sm text-gray-600">3rem (48px)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="animate-fade-in-up animate-delay-500">
        <Card variant="gradient" className="text-center">
          <CardContent className="py-12">
            <H3 gradient className="mb-4">
              Sistema de Design Completo
            </H3>
            <Text variant="large" color="muted" className="mb-6">
              Todos os componentes foram projetados para trabalhar em harmonia, 
              criando uma experiência consistente e profissional.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" icon={<PhoneIcon className="w-5 h-5" />}>
                Implementar Sistema
              </Button>
              <Button variant="outline" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Ver Documentação
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DesignSystemDemo; 