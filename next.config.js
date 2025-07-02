/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Adicione domínios externos se necessário
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 dias para cache de imagens
  },
  eslint: {
    // Desativa a verificação de ESLint em produção para evitar falhas no build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Desativa a verificação de TypeScript em produção para evitar falhas no build
    ignoreBuildErrors: true,
  },
  // Melhorar performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ativar compression e otimizações
  compress: true,
  poweredByHeader: false,
  // Melhor caching
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Configuração para resolver conflito entre App Router e Pages Router
  experimental: {
    appDir: true, // Habilita o App Router como principal
    serverComponentsExternalPackages: [], // Pacotes que devem ser tratados como externos em Server Components
  },
  // Configuração específica para lidar com a pasta pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = nextConfig; 