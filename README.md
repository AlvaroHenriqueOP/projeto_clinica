# Clínica Odontológica - Site Institucional

Site institucional moderno para clínica odontológica construído com Next.js, React, TypeScript e Tailwind CSS.

## 📋 Funcionalidades

- Design moderno e responsivo
- Páginas institucionais (Home, Sobre, Tratamentos, Equipe, etc.)
- Formulário de contato e agendamento
- Blog odontológico
- Convênios e planos aceitos
- Animações com Framer Motion
- Carregamento lazy de imagens para melhor performance
- Compressão automática de imagens

## 🚀 Tecnologias Utilizadas

- Next.js 15.3
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons
- Sharp (para otimização de imagens)

## 💻 Instalação e Execução

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd projeto_clinica
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse http://localhost:3000 no navegador

## 🔧 Build do Projeto

Para criar uma versão de produção:

```bash
npm run build
npm start
```

Para limpar o cache e criar uma nova build:

```bash
npm run build:clean
```

## 🌐 Deploy

### Opção 1: Deploy na Vercel (Recomendado)

1. Crie uma conta na [Vercel](https://vercel.com)
2. Instale a CLI da Vercel:
```bash
npm i -g vercel
```
3. Faça login na sua conta:
```bash
vercel login
```
4. Deploy:
```bash
npm run deploy
```

### Opção 2: Deploy em Hospedagem Tradicional

1. Execute o build:
```bash
npm run build
```
2. O diretório `.next` contém os arquivos de build
3. Faça upload desses arquivos para o servidor
4. Configure o servidor para executar `npm start`

## 💾 Estrutura de Arquivos

- `/src/app/`: Páginas principais
- `/src/app/components/`: Componentes reutilizáveis
- `/public/`: Arquivos estáticos (imagens, etc.)
- `/scripts/`: Scripts de otimização de imagens

## 📱 Relatório de Responsividade

O site foi testado nas seguintes resoluções:
- Desktop: 1920px, 1440px, 1280px
- Tablet: 1024px, 768px
- Mobile: 480px, 360px

## 🚀 Otimização de Performance

### Compressão de Imagens

O projeto inclui scripts para compressão automática de imagens:

- `npm run compress:blog`: Comprime imagens do blog
- `npm run compress:all`: Comprime todas as imagens do projeto
- `npm run replace:images`: Substitui imagens originais por versões comprimidas

### Carregamento Lazy

Implementamos carregamento lazy para imagens não essenciais:

- Componente `LazyImage` para carregamento otimizado
- Atributo `loading="lazy"` em imagens secundárias
- Carregamento dinâmico de componentes pesados
- Priorização de imagens críticas para o LCP (Largest Contentful Paint)

Para mais detalhes sobre a implementação de carregamento lazy, consulte o arquivo [LAZY_LOADING.md](./LAZY_LOADING.md).

## 👨‍💻 Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
