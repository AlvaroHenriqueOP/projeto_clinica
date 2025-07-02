'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// Dados placeholder para artigos do blog (normalmente viria de uma API ou CMS)
const blogPosts = [
  {
    id: 1,
    title: "Como manter a saúde bucal diária",
    excerpt: "Dicas práticas para cuidar dos seus dentes diariamente e prevenir problemas bucais comuns.",
    imageUrl: "/images/blog/blog.jpg", 
    category: "Saúde Bucal",
    date: "12 Out 2023",
    readTime: "5 min",
    content: [
      {
        type: "paragraph",
        text: "Manter uma boa rotina de saúde bucal é essencial para prevenir cáries, gengivite e outros problemas. Neste artigo, compartilhamos dicas práticas que você pode incorporar na sua rotina diária."
      },
      {
        type: "heading",
        text: "Escovação correta"
      },
      {
        type: "paragraph",
        text: "Escove seus dentes pelo menos duas vezes ao dia, durante 2 minutos cada vez. Use uma escova de cerdas macias e creme dental com flúor. Faça movimentos circulares suaves e não esqueça de escovar a língua."
      },
      {
        type: "heading",
        text: "Uso do fio dental"
      },
      {
        type: "paragraph",
        text: "O fio dental é fundamental para remover a placa bacteriana e restos de alimentos entre os dentes, onde a escova não alcança. Use-o pelo menos uma vez ao dia, preferencialmente antes de dormir."
      },
      {
        type: "heading",
        text: "Alimentação balanceada"
      },
      {
        type: "paragraph",
        text: "Evite alimentos muito açucarados e bebidas ácidas. Prefira frutas, legumes e beba bastante água. Lembre-se que a saúde bucal está diretamente ligada à sua alimentação."
      },
      {
        type: "heading",
        text: "Visitas regulares ao dentista"
      },
      {
        type: "paragraph",
        text: "Consulte seu dentista a cada seis meses para uma limpeza profissional e avaliação da saúde bucal. Problemas identificados precocemente são mais fáceis e baratos de tratar."
      },
      {
        type: "tip",
        text: "Troque sua escova de dentes a cada três meses ou quando as cerdas começarem a desgastar."
      }
    ]
  },
  {
    id: 2,
    title: "Mitos e verdades sobre clareamento dental",
    excerpt: "Esclarecemos as dúvidas mais comuns sobre o procedimento de clareamento dental e seus resultados.",
    imageUrl: "/images/blog/blog1.jpg",
    category: "Estética Dental",
    date: "05 Out 2023",
    readTime: "8 min",
    content: [
      {
        type: "paragraph",
        text: "O clareamento dental é um dos procedimentos estéticos mais populares na odontologia atual. No entanto, existem muitos mitos e informações equivocadas sobre este tratamento."
      },
      {
        type: "heading",
        text: "Mito: O clareamento desgasta o esmalte dos dentes"
      },
      {
        type: "paragraph",
        text: "Verdade: Quando realizado por profissionais e com produtos de qualidade, o clareamento não causa desgaste do esmalte. Os produtos modernos são formulados para agir apenas na coloração sem danificar a estrutura dental."
      },
      {
        type: "heading",
        text: "Mito: O resultado dura para sempre"
      },
      {
        type: "paragraph",
        text: "Verdade: O clareamento não é permanente. Sua duração depende dos hábitos do paciente, como consumo de café, vinho tinto, cigarro e outros alimentos que mancham os dentes. Em média, os resultados podem durar de 6 meses a 2 anos."
      },
      {
        type: "heading",
        text: "Mito: Clareamento caseiro é igual ao profissional"
      },
      {
        type: "paragraph",
        text: "Verdade: Produtos de clareamento caseiro têm concentração menor de agentes clareadores e oferecem resultados mais sutis. O clareamento profissional é supervisionado, mais seguro e apresenta resultados mais significativos em menos tempo."
      },
      {
        type: "heading",
        text: "Mito: O clareamento funciona em todos os tipos de manchas"
      },
      {
        type: "paragraph",
        text: "Verdade: O clareamento é mais efetivo em manchas amareladas. Manchas acinzentadas (causadas por tetraciclina ou fluorose) respondem menos ao tratamento. Além disso, o clareamento não afeta restaurações, coroas ou facetas."
      },
      {
        type: "tip",
        text: "Sempre consulte um dentista antes de iniciar qualquer procedimento de clareamento para avaliar se você é um bom candidato para o tratamento."
      }
    ]
  },
  {
    id: 3,
    title: "Quando levar as crianças ao dentista pela primeira vez",
    excerpt: "Descubra a idade ideal para a primeira consulta odontológica infantil e como preparar seu filho.",
    imageUrl: "/images/blog/blog2.jpg",
    category: "Odontopediatria",
    date: "28 Set 2023",
    readTime: "6 min",
    content: [
      {
        type: "paragraph",
        text: "Muitos pais têm dúvidas sobre quando devem levar seus filhos ao dentista pela primeira vez. A orientação dos especialistas pode surpreender muitas famílias."
      },
      {
        type: "heading",
        text: "A primeira consulta"
      },
      {
        type: "paragraph",
        text: "De acordo com a Academia Americana de Odontopediatria, a primeira consulta deve acontecer após o nascimento do primeiro dente de leite e não depois do primeiro aniversário da criança. Essa visita precoce permite que o dentista verifique o desenvolvimento bucal e identifique possíveis problemas."
      },
      {
        type: "heading",
        text: "Como preparar seu filho para a consulta"
      },
      {
        type: "paragraph",
        text: "Fale sobre a visita ao dentista de forma positiva. Evite usar palavras que possam causar medo, como 'dor' ou 'injeção'. Explique que o dentista é um amigo que ajuda a manter os dentes saudáveis. Você pode até ler livros infantis sobre visitas ao dentista para familiarizar a criança."
      },
      {
        type: "heading",
        text: "O que esperar da primeira consulta"
      },
      {
        type: "paragraph",
        text: "A primeira consulta geralmente é rápida e simples. O dentista verificará o desenvolvimento dos dentes e gengivas, orientará sobre a higiene bucal adequada e responderá às dúvidas dos pais. Em crianças mais velhas, pode incluir uma limpeza suave e aplicação de flúor."
      },
      {
        type: "heading",
        text: "Frequência das visitas"
      },
      {
        type: "paragraph",
        text: "Após a primeira consulta, o odontopediatra recomendará um cronograma de visitas regulares, geralmente a cada seis meses. No entanto, algumas crianças podem precisar de consultas mais frequentes dependendo de suas necessidades específicas."
      },
      {
        type: "tip",
        text: "Lembre-se: estabelecer bons hábitos de higiene bucal desde cedo e manter visitas regulares ao dentista ajuda a prevenir problemas futuros e ensina às crianças a importância dos cuidados dentais."
      }
    ]
  },
  {
    id: 4,
    title: "Alimentação e saúde bucal: o que evitar",
    excerpt: "Conheça os alimentos que podem prejudicar seus dentes e como minimizar os danos à sua saúde bucal.",
    imageUrl: "/images/blog/blog3.jpg",
    category: "Nutrição",
    date: "20 Set 2023",
    readTime: "7 min",
    content: [
      {
        type: "paragraph",
        text: "A alimentação tem um impacto direto na saúde dos seus dentes e gengivas. Certos alimentos e bebidas podem causar cáries, manchas e outros problemas bucais. Neste artigo, vamos explorar quais são os vilões da saúde bucal e como minimizar seus efeitos."
      },
      {
        type: "heading",
        text: "Açúcares: o principal inimigo"
      },
      {
        type: "paragraph",
        text: "Alimentos ricos em açúcar são os principais responsáveis pelo desenvolvimento de cáries. As bactérias presentes na boca transformam o açúcar em ácidos que atacam o esmalte dos dentes. Doces, refrigerantes, sucos industrializados e até mesmo alimentos processados com açúcar adicionado devem ser consumidos com moderação."
      },
      {
        type: "heading",
        text: "Bebidas ácidas: desgaste do esmalte"
      },
      {
        type: "paragraph",
        text: "Refrigerantes, energéticos, sucos cítricos e bebidas alcoólicas possuem alta acidez, que pode corroer o esmalte dental. O consumo frequente dessas bebidas aumenta a sensibilidade dentária e torna os dentes mais vulneráveis às cáries. Se consumir estas bebidas, utilize canudo para minimizar o contato com os dentes e enxágue a boca com água logo após."
      },
      {
        type: "heading",
        text: "Alimentos pegajosos: risco prolongado"
      },
      {
        type: "paragraph",
        text: "Alimentos pegajosos como caramelos, balas mastigáveis e frutas secas aderem aos dentes e permanecem por mais tempo na boca, aumentando o tempo de exposição ao açúcar. Eles são particularmente problemáticos porque podem ficar presos em áreas difíceis de alcançar com a escovação."
      },
      {
        type: "heading",
        text: "Amido refinado: convertido em açúcar"
      },
      {
        type: "paragraph",
        text: "Pães brancos, batatas fritas, biscoitos e outros alimentos com amido refinado podem ser tão prejudiciais quanto o açúcar. Isso ocorre porque o amido é quebrado em açúcares simples pelas enzimas presentes na saliva. Alimentos que combinam amido e açúcar, como bolos e biscoitos, são duplamente prejudiciais."
      },
      {
        type: "heading",
        text: "Quando comer também importa"
      },
      {
        type: "paragraph",
        text: "Beliscar constantemente ao longo do dia mantém seus dentes em constante ataque ácido. É melhor consumir alimentos potencialmente prejudiciais durante as refeições principais, quando o fluxo de saliva é maior e ajuda a neutralizar os ácidos e remover resíduos alimentares."
      },
      {
        type: "tip",
        text: "Após consumir alimentos ou bebidas ácidas, espere pelo menos 30 minutos antes de escovar os dentes. A escovação imediata pode danificar ainda mais o esmalte temporariamente fragilizado pelo ácido."
      }
    ]
  },
  {
    id: 5,
    title: "Avanços tecnológicos em implantes dentários",
    excerpt: "As mais recentes inovações na área de implantodontia e como elas beneficiam os pacientes.",
    imageUrl: "/images/blog/blog4.jpg",
    category: "Implantes",
    date: "15 Set 2023",
    readTime: "10 min",
    content: [
      {
        type: "paragraph",
        text: "A implantodontia evoluiu significativamente nas últimas décadas, tornando os procedimentos mais rápidos, seguros e confortáveis para os pacientes. Neste artigo, apresentamos as principais inovações tecnológicas que revolucionaram os implantes dentários."
      },
      {
        type: "heading",
        text: "Planejamento digital e cirurgia guiada"
      },
      {
        type: "paragraph",
        text: "O planejamento digital revolucionou a forma como os implantes são realizados. Com tomografias computadorizadas e softwares especializados, os dentistas podem criar um modelo 3D da estrutura óssea do paciente e planejar precisamente o posicionamento dos implantes. Guias cirúrgicos produzidos por impressoras 3D permitem posicionar os implantes exatamente como planejado, aumentando a precisão e reduzindo o tempo de cirurgia."
      },
      {
        type: "heading",
        text: "Superfícies de implante avançadas"
      },
      {
        type: "paragraph",
        text: "Os implantes modernos apresentam superfícies especialmente tratadas para acelerar a osseointegração (a fusão do implante ao osso). Tratamentos de superfície como jateamento, condicionamento ácido e revestimentos bioativos promovem uma cicatrização mais rápida e aumentam a estabilidade do implante. Isso permite, em alguns casos, a realização de carga imediata, onde a prótese provisória é instalada no mesmo dia da cirurgia."
      },
      {
        type: "heading",
        text: "Biomateriais e regeneração óssea"
      },
      {
        type: "paragraph",
        text: "Para pacientes com volume ósseo insuficiente, novos biomateriais e técnicas de regeneração óssea permitem reconstruir o tecido perdido. Membranas de colágeno, malhas de titânio e fatores de crescimento derivados do próprio sangue do paciente (como o PRF - Fibrina Rica em Plaquetas) estimulam a regeneração do osso e dos tecidos moles, possibilitando a colocação de implantes em casos que antes seriam inviáveis."
      },
      {
        type: "heading",
        text: "Implantes de zircônia"
      },
      {
        type: "paragraph",
        text: "Tradicionalmente, os implantes são feitos de titânio, mas os implantes de zircônia (cerâmica) estão ganhando popularidade como alternativa estética e hipoalergênica. A zircônia apresenta cor branca semelhante aos dentes naturais e não contém metal, sendo ideal para pacientes com sensibilidade ao titânio ou preocupados com a estética em casos de gengiva fina."
      },
      {
        type: "heading",
        text: "Escaneamento intraoral e próteses CAD/CAM"
      },
      {
        type: "paragraph",
        text: "Scanners intraorais eliminam a necessidade de moldagens convencionais, que são desconfortáveis para o paciente. As impressões digitais são mais precisas e podem ser imediatamente enviadas ao laboratório para fabricação de próteses usando tecnologia CAD/CAM (desenho e fabricação assistidos por computador), garantindo melhor adaptação e estética."
      },
      {
        type: "tip",
        text: "Se você está considerando implantes dentários, pergunte ao seu dentista sobre quais dessas tecnologias estão disponíveis no consultório. O uso de técnicas avançadas pode significar menos desconforto, recuperação mais rápida e resultados mais previsíveis."
      }
    ]
  },
  {
    id: 6,
    title: "Como o bruxismo afeta sua saúde bucal",
    excerpt: "Entenda o que é bruxismo, seus sintomas e os tratamentos disponíveis para combater esse hábito.",
    imageUrl: "/images/blog/blog5.jpg",
    category: "Saúde Bucal",
    date: "08 Set 2023",
    readTime: "6 min",
    content: [
      {
        type: "paragraph",
        text: "O bruxismo, caracterizado pelo ranger ou apertar dos dentes, afeta milhões de pessoas no mundo todo. Este hábito, muitas vezes inconsciente, pode causar sérios danos à saúde bucal quando não tratado adequadamente."
      },
      {
        type: "heading",
        text: "O que é bruxismo?"
      },
      {
        type: "paragraph",
        text: "O bruxismo é o ato involuntário de ranger ou apertar os dentes, principalmente durante o sono (bruxismo noturno) ou em momentos de estresse e concentração (bruxismo diurno). Este hábito submete os dentes e músculos da face a forças excessivas que podem causar diversos problemas de saúde bucal."
      },
      {
        type: "heading",
        text: "Principais causas"
      },
      {
        type: "paragraph",
        text: "Embora as causas exatas não sejam completamente compreendidas, diversos fatores podem contribuir para o bruxismo: estresse e ansiedade, alterações na oclusão (mordida desalinhada), uso de certos medicamentos, consumo de álcool e cafeína, apneia do sono e até predisposição genética. Em crianças, pode estar relacionado ao desenvolvimento da dentição."
      },
      {
        type: "heading",
        text: "Sinais e sintomas"
      },
      {
        type: "paragraph",
        text: "Muitas pessoas não percebem que têm bruxismo até que os sintomas se tornem evidentes ou que um parceiro note o ranger noturno. Os sinais mais comuns incluem: desgaste anormal dos dentes, dentes sensíveis ou lascados, dor ou cansaço nos músculos da face, dores de cabeça matinais (especialmente na região das têmporas), dor na articulação temporomandibular (ATM) e marcas de mordidas na parte interna das bochechas."
      },
      {
        type: "heading",
        text: "Consequências para a saúde bucal"
      },
      {
        type: "paragraph",
        text: "O bruxismo crônico pode levar a problemas sérios como: desgaste severo do esmalte dentário, fraturas e lascas nos dentes, sensibilidade dental aumentada, mobilidade dentária, hipertrofia dos músculos mastigatórios (especialmente o masseter), disfunção temporomandibular (DTM) com dores crônicas, e até mesmo recessão gengival e perda óssea em casos graves."
      },
      {
        type: "heading",
        text: "Opções de tratamento"
      },
      {
        type: "paragraph",
        text: "O tratamento do bruxismo envolve uma abordagem multidisciplinar que pode incluir: uso de placas miorrelaxantes (goteiras) durante o sono para proteger os dentes, técnicas de manejo do estresse e relaxamento, ajustes na oclusão dental quando necessário, fisioterapia para os músculos da mastigação, aplicação de toxina botulínica para relaxar os músculos mastigatórios em casos graves, e até mesmo medicamentos para melhorar a qualidade do sono ou reduzir a ansiedade em casos específicos."
      },
      {
        type: "tip",
        text: "Se você suspeita que tem bruxismo, marque uma consulta com seu dentista. Quanto mais cedo o problema for diagnosticado, menores serão os danos à sua saúde bucal. Muitas vezes, pequenas mudanças no estilo de vida, como reduzir o consumo de cafeína e álcool e praticar técnicas de relaxamento antes de dormir, podem ajudar a reduzir os sintomas."
      }
    ]
  }
];

// Componente que usa props em vez de useParams
type Props = {
  params: {
    postId: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  // Converter o ID do post para número
  const postId = parseInt(params.postId);
  
  // Encontrar o post pelo ID
  const post = blogPosts.find(post => post.id === postId);

  // Se o post não for encontrado, usar o notFound do Next.js
  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[oklch(98%_0.01_80deg)]">
      {/* Header do post */}
      <section className="relative bg-white overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[oklch(95%_0.03_80deg)] opacity-70"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[oklch(97%_0.02_80deg)] opacity-50"></div>
          <div className="absolute top-10 right-10 grid grid-cols-5 gap-3">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#866D36]/20"></div>
            ))}
          </div>
          <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#866D36]/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 py-20 relative">
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#866D36] hover:text-[#9d824b] text-sm font-medium transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-1" />
              Voltar ao blog
            </Link>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <span className="px-4 py-2 bg-[oklch(97%_0.03_80deg)] text-[#866D36] rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 text-center relative">
              <span className="relative inline-block">
                {post.title}
                <svg className="absolute -bottom-4 left-1/2 transform -translate-x-1/2" width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C20 1.5 60 1.5 119 3.5" stroke="#866D36" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <div className="flex items-center text-[oklch(50%_0.02_80deg)] text-sm mb-8">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} leitura</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Imagem do post */}
      <section className="relative -mt-6">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>
      
      {/* Conteúdo do post */}
      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            {post.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-[oklch(45%_0.02_80deg)] mb-6 leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] mb-4 mt-8">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'tip') {
                return (
                  <div key={index} className="bg-[oklch(97%_0.03_80deg)] border-l-4 border-[#866D36] p-4 rounded-r-md mb-6">
                    <p className="text-[oklch(45%_0.02_80deg)] font-medium">
                      <span className="text-[#866D36] font-bold">Dica:</span> {block.text}
                    </p>
                  </div>
                );
              }
              return null;
            })}
            
            {/* Compartilhar e botão de voltar */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center mb-4 sm:mb-0">
                <span className="text-sm text-[oklch(50%_0.02_80deg)] mr-3">Compartilhar:</span>
                <div className="flex space-x-2">
                  {/* Botões de compartilhamento (apenas visual) */}
                  {['facebook', 'twitter', 'linkedin', 'whatsapp'].map((social) => (
                    <button 
                      key={social}
                      className="w-8 h-8 bg-[oklch(97%_0.03_80deg)] text-[#866D36] rounded-full flex items-center justify-center transition-colors hover:bg-[#866D36] hover:text-white"
                      aria-label={`Compartilhar no ${social}`}
                    >
                      <span className="text-xs capitalize">{social.charAt(0)}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/blog"
                className="inline-flex items-center bg-[#866D36] hover:bg-[#9d824b] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Voltar ao blog
              </Link>
            </div>
          </div>
          
          {/* Posts relacionados - opcional */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] mb-6">
              <span className="relative inline-block">
                Artigos relacionados
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-[#866D36]"></div>
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPost.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-[oklch(40%_0.02_80deg)] mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center text-xs text-[oklch(50%_0.02_80deg)]">
                        <span>{relatedPost.date}</span>
                        <span className="mx-2">•</span>
                        <span>{relatedPost.readTime} leitura</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 