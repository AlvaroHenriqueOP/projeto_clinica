import React from 'react';
import Image from 'next/image';

// Dados placeholder para artigos do blog
const blogPosts = [
  {
    id: 1,
    title: "Como manter a saúde bucal diária",
    excerpt: "Dicas práticas para cuidar dos seus dentes diariamente e prevenir problemas bucais comuns.",
    imageUrl: "/images/clinica-interior.jpg", // Imagem placeholder
    category: "Saúde Bucal",
    date: "12 Out 2023",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Mitos e verdades sobre clareamento dental",
    excerpt: "Esclarecemos as dúvidas mais comuns sobre o procedimento de clareamento dental e seus resultados.",
    imageUrl: "/images/clinica-interior.jpg", // Imagem placeholder
    category: "Estética Dental",
    date: "05 Out 2023",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Quando levar as crianças ao dentista pela primeira vez",
    excerpt: "Descubra a idade ideal para a primeira consulta odontológica infantil e como preparar seu filho.",
    imageUrl: "/images/clinica-interior.jpg", // Imagem placeholder
    category: "Odontopediatria",
    date: "28 Set 2023",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Alimentação e saúde bucal: o que evitar",
    excerpt: "Conheça os alimentos que podem prejudicar seus dentes e como minimizar os danos à sua saúde bucal.",
    imageUrl: "/images/clinica-interior.jpg", // Imagem placeholder
    category: "Nutrição",
    date: "20 Set 2023",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Avanços tecnológicos em implantes dentários",
    excerpt: "As mais recentes inovações na área de implantodontia e como elas beneficiam os pacientes.",
    imageUrl: "/images/clinica-interior.jpg", // Imagem placeholder
    category: "Implantes",
    date: "15 Set 2023",
    readTime: "10 min"
  },
  {
    id: 6,
    title: "Como o bruxismo afeta sua saúde bucal",
    excerpt: "Entenda o que é bruxismo, seus sintomas e os tratamentos disponíveis para combater esse hábito.",
    imageUrl: "/images/clinica-interior.jpg", // Imagem placeholder
    category: "Saúde Bucal",
    date: "08 Set 2023",
    readTime: "6 min"
  }
];

export default function BlogPage() {
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
          </div>
          
          {/* Categorias do blog */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {['Saúde Bucal', 'Estética', 'Ortodontia', 'Implantes', 'Crianças', 'Prevenção'].map((item) => (
              <div key={item} className="px-4 py-2 bg-[oklch(97%_0.03_80deg)] text-[#866D36] rounded-full text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de artigos do blog */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
                {/* Imagem do post */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#866D36] text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                {/* Conteúdo do post */}
                <div className="p-6">
                  <div className="flex items-center text-xs text-[oklch(50%_0.02_80deg)] mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} leitura</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[oklch(40%_0.02_80deg)] mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-[oklch(50%_0.02_80deg)] text-sm line-clamp-3 mb-5">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-[#866D36] hover:text-[#9d824b] text-sm font-medium"
                  >
                    Continuar lendo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[oklch(97%_0.03_80deg)] rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 relative">
                <span className="relative inline-block">
                  Inscreva-se em nossa newsletter
                  <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2" width="100" height="6" viewBox="0 0 100 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3C20 1.5 50 1.5 99 3" stroke="#866D36" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="text-[oklch(50%_0.02_80deg)] mb-8">
                Receba dicas de saúde bucal e novidades odontológicas diretamente no seu e-mail. Prometemos não enviar spam!
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#866D36]"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#866D36] hover:bg-[#9d824b] text-white px-6 py-3 rounded-md transition-colors duration-300 text-sm font-medium"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 