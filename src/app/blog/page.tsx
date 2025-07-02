// Este arquivo é server component por padrão
import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Blog Odontológico | Artigos e Dicas de Saúde Bucal | Dental Corp',
  description: 'Confira artigos, dicas e novidades sobre saúde bucal, procedimentos odontológicos e cuidados com seus dentes. Blog da Dental Corp.',
  keywords: 'blog odontológico, saúde bucal, dicas dentista, cuidados dentários, clareamento dental, implantes, ortodontia, prevenção dental',
  openGraph: {
    title: 'Blog Odontológico | Artigos e Dicas de Saúde Bucal | Dental Corp',
    description: 'Confira artigos, dicas e novidades sobre saúde bucal, procedimentos odontológicos e cuidados com seus dentes. Blog da Dental Corp.',
    images: ['/images/blog/blog.jpg'],
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function BlogPage() {
  return <BlogContent />;
} 