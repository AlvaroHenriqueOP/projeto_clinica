"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Dados placeholder para artigos do blog
const blogPosts = [
  {
    id: 1,
    title: "Como manter a saúde bucal diária",
    excerpt: "Dicas práticas para cuidar dos seus dentes diariamente e prevenir problemas bucais comuns.",
    imageUrl: "/images/blog/blog.jpg",
    category: "Saúde Bucal",
    date: "12 Out 2023",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Mitos e verdades sobre clareamento dental",
    excerpt: "Esclarecemos as dúvidas mais comuns sobre o procedimento de clareamento dental e seus resultados.",
    imageUrl: "/images/blog/blog1.jpg",
    category: "Estética Dental",
    date: "05 Out 2023",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Quando levar as crianças ao dentista pela primeira vez",
    excerpt: "Descubra a idade ideal para a primeira consulta odontológica infantil e como preparar seu filho.",
    imageUrl: "/images/blog/blog2.jpg",
    category: "Odontopediatria",
    date: "28 Set 2023",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Alimentação e saúde bucal: o que evitar",
    excerpt: "Conheça os alimentos que podem prejudicar seus dentes e como minimizar os danos à sua saúde bucal.",
    imageUrl: "/images/blog/blog3.jpg",
    category: "Nutrição",
    date: "20 Set 2023",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Avanços tecnológicos em implantes dentários",
    excerpt: "As mais recentes inovações na área de implantodontia e como elas beneficiam os pacientes.",
    imageUrl: "/images/blog/blog4.jpg",
    category: "Implantes",
    date: "15 Set 2023",
    readTime: "10 min"
  },
  {
    id: 6,
    title: "Como o bruxismo afeta sua saúde bucal",
    excerpt: "Entenda o que é bruxismo, seus sintomas e os tratamentos disponíveis para combater esse hábito.",
    imageUrl: "/images/blog/blog5.jpg",
    category: "Saúde Bucal",
    date: "08 Set 2023",
    readTime: "6 min"
  }
];

// Lista de todas as categorias disponíveis
const categories = ['Todos', 'Saúde Bucal', 'Estética Dental', 'Ortodontia', 'Implantes', 'Odontopediatria', 'Nutrição', 'Prevenção'];

export default function BlogContent() {
  // Estados para funcionalidade
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filtrar posts com base na pesquisa e categoria
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calcular posts da página atual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-[oklch(98%_0.01_80deg)]">
      {/* Header da página - Redesenhado */}
      <section className="relative bg-white overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Círculos decorativos */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[oklch(95%_0.03_80deg)] opacity-70"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[oklch(97%_0.02_80deg)] opacity-50"></div>
          
          {/* Padrão de pontos */}
          <div className="absolute top-10 right-10 grid grid-cols-5 gap-3">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#866D36]/20"></div>
            ))}
          </div>
          
          {/* Linha decorativa */}
          <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#866D36]/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 relative">
          <div className="flex flex-col items-center">
            {/* Elemento decorativo acima do título */}
            <div className="w-16 h-1 bg-[#866D36] mb-6 rounded-full"></div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 text-center relative">
              <span className="relative inline-block">
                Blog Odontológico
                <svg className="absolute -bottom-4 left-1/2 transform -translate-x-1/2" width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C20 1.5 60 1.5 119 3.5" stroke="#866D36" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <div className="flex gap-4 items-center justify-center mb-8">
              <span className="w-12 h-[1px] bg-[#866D36]/50"></span>
              <div className="w-2 h-2 rounded-full bg-[#866D36]/70"></div>
              <span className="w-12 h-[1px] bg-[#866D36]/50"></span>
            </div>
            
            <p className="text-xl text-[oklch(50%_0.02_80deg)] max-w-3xl mx-auto text-center leading-relaxed">
              Confira nossas dicas, novidades e informações sobre saúde bucal, procedimentos odontológicos
              e cuidados com seus dentes. Mantenha-se informado conosco!
            </p>
            
            {/* Barra de pesquisa */}
            <div className="w-full max-w-lg mt-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pl-12 rounded-full border border-[#866D36]/30 focus:outline-none focus:border-[#866D36] bg-white shadow-sm text-gray-800 placeholder-gray-500"
                  style={{ caretColor: '#866D36' }}
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Categorias do blog */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button 
                key={category} 
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-[#866D36] text-white' 
                    : 'bg-[oklch(97%_0.03_80deg)] text-[#866D36] hover:bg-[#866D36]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de artigos do blog */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          {currentPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl text-[oklch(40%_0.02_80deg)]">Nenhum artigo encontrado</h3>
              <p className="mt-2 text-[oklch(50%_0.02_80deg)]">Tente ajustar sua pesquisa ou filtros</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('Todos');
                }}
                className="mt-4 px-6 py-2 bg-[#866D36] text-white rounded-md hover:bg-[#9d824b] transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg flex flex-col">
                  {/* Imagem do post */}
                  <Link href={`/blog/${post.id}`} className="relative h-56 overflow-hidden cursor-pointer">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-[#866D36] text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </Link>
                  
                  {/* Conteúdo do post */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-[oklch(50%_0.02_80deg)] mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} leitura</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[oklch(40%_0.02_80deg)] mb-3">
                      <Link href={`/blog/${post.id}`} className="hover:text-[#866D36] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-[oklch(50%_0.02_80deg)] text-sm line-clamp-3 mb-5">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#866D36] hover:text-[#9d824b] text-sm font-medium"
                      >
                        Continuar lendo
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {/* Paginação */}
          {filteredPosts.length > postsPerPage && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#866D36] hover:bg-[#866D36]/10'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      currentPage === idx + 1
                        ? 'bg-[#866D36] text-white'
                        : 'text-[oklch(50%_0.02_80deg)] hover:bg-[#866D36]/10'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[#866D36] hover:bg-[#866D36]/10'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 