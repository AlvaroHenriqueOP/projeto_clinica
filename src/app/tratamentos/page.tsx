import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tratamentos Odontológicos | Dental Corp',
  description: 'Conheça nossos tratamentos odontológicos especializados: implantes, ortodontia, clareamento, próteses, endodontia e mais. Atendimento personalizado e tecnologia avançada.',
  keywords: 'tratamentos odontológicos, implantes dentários, ortodontia, clareamento dental, próteses dentárias, tratamento de canal, periodontia, harmonização orofacial, odontopediatria',
  openGraph: {
    title: 'Tratamentos Odontológicos | Dental Corp',
    description: 'Conheça nossos tratamentos odontológicos especializados com tecnologia avançada e profissionais qualificados.',
    images: ['/images/treatments/implante_dentario.jpg'],
  },
};

interface Treatment {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: string;
  price: string;
  benefits: string[];
  hasRealImage?: boolean;
}

// Usando as imagens disponíveis em /public/images/treatments/
const treatments: Treatment[] = [
  {
    id: 1,
    title: 'Implantes Dentários',
    description: 'Recupere sua qualidade de vida com implantes que se integram naturalmente à sua estrutura dental.',
    fullDescription: 'Os implantes dentários são a solução mais moderna e eficaz para substituir dentes perdidos. Utilizamos implantes de titânio de alta qualidade que se integram ao osso, proporcionando uma base sólida para a prótese. O procedimento é realizado com anestesia local e o paciente pode retomar suas atividades normais em poucos dias.',
    image: '/images/treatments/implante_dentario.jpg',
    duration: '1-3 sessões',
    price: 'A partir de R$ 2.500',
    benefits: ['Durabilidade superior', 'Aparência natural', 'Preserva estrutura óssea', 'Melhora mastigação'],
    hasRealImage: true
  },
  {
    id: 2,
    title: 'Clareamento Dental',
    description: 'Conquiste um sorriso mais branco e radiante com nossos tratamentos de clareamento dental profissional.',
    fullDescription: 'Oferecemos clareamento dental profissional com gel de peróxido de hidrogênio, garantindo resultados seguros e duradouros. O tratamento pode ser realizado no consultório ou em casa com moldeiras personalizadas. Nosso protocolo garante até 8 tons mais claros com segurança.',
    image: '/images/treatments/clareamento.jpg',
    duration: '1-2 sessões',
    price: 'A partir de R$ 800',
    benefits: ['Resultados imediatos', 'Procedimento seguro', 'Dentes até 8 tons mais claros', 'Autoestima elevada'],
    hasRealImage: true
  },
  {
    id: 3,
    title: 'Ortodontia',
    description: 'Alinhe seus dentes com discrição usando os mais modernos aparelhos transparentes disponíveis.',
    fullDescription: 'Nossa ortodontia utiliza as mais modernas técnicas, incluindo aparelhos transparentes e alinhadores invisíveis. Realizamos um planejamento digital completo para prever os resultados e otimizar o tempo de tratamento. Ideal para crianças, adolescentes e adultos.',
    image: '/images/treatments/ortodontia.jpeg',
    duration: '12-24 meses',
    price: 'A partir de R$ 3.500',
    benefits: ['Aparelhos estéticos', 'Planejamento digital', 'Menor tempo de tratamento', 'Conforto superior'],
    hasRealImage: true
  },
  {
    id: 4,
    title: 'Próteses Dentárias',
    description: 'Restaurações personalizadas para substituir dentes ausentes e restaurar a funcionalidade e estética bucal.',
    fullDescription: 'Confeccionamos próteses totais e parciais com materiais de alta qualidade. Nossas próteses são personalizadas para cada paciente, garantindo conforto, estética e funcionalidade. Utilizamos tecnologia CAD/CAM para maior precisão.',
    image: '/images/treatments/protese_dentaria.jpg',
    duration: '2-4 sessões',
    price: 'A partir de R$ 1.200',
    benefits: ['Materiais premium', 'Encaixe perfeito', 'Estética natural', 'Durabilidade comprovada'],
    hasRealImage: true
  },
  {
    id: 5,
    title: 'Tratamento de Canal',
    description: 'Procedimentos precisos para tratar infecções da polpa dentária e preservar o dente natural.',
    fullDescription: 'Realizamos tratamento endodôntico com equipamentos de última geração, incluindo microscopia operatória e instrumentos rotatórios. O procedimento é praticamente indolor e permite preservar o dente natural, evitando a extração.',
    image: '/images/treatments/tratamento_canal.jpg',
    duration: '1-3 sessões',
    price: 'A partir de R$ 600',
    benefits: ['Preserva dente natural', 'Tecnologia avançada', 'Procedimento indolor', 'Alta taxa de sucesso'],
    hasRealImage: true
  },
  {
    id: 6,
    title: 'Odontopediatria',
    description: 'Cuidados especializados para a saúde bucal das crianças em um ambiente acolhedor e divertido.',
    fullDescription: 'Nossa odontopediatria oferece atendimento especializado para bebês, crianças e adolescentes. Criamos um ambiente lúdico e acolhedor para que as crianças se sintam confortáveis. Focamos na prevenção e educação para estabelecer hábitos saudáveis desde cedo.',
    image: '/images/treatments/odontopediatria.jpg',
    duration: '30-45 min',
    price: 'A partir de R$ 150',
    benefits: ['Ambiente infantil', 'Prevenção especializada', 'Educação bucal', 'Profissionais qualificados'],
    hasRealImage: true
  },
  {
    id: 7,
    title: 'Periodontia',
    description: 'Tratamento especializado das gengivas e estruturas de suporte dos dentes.',
    fullDescription: 'Tratamos doenças periodontais como gengivite e periodontite com técnicas modernas. Realizamos limpezas profundas, raspagem e alisamento radicular, além de cirurgias periodontais quando necessário. Nosso foco é preservar os dentes e manter a saúde gengival.',
    image: '/images/treatments/periodontia.jpg',
    duration: '1-4 sessões',
    price: 'A partir de R$ 400',
    benefits: ['Preserva dentes naturais', 'Elimina mau hálito', 'Previne perda óssea', 'Melhora saúde geral'],
    hasRealImage: true
  },
  {
    id: 8,
    title: 'Harmonização Orofacial',
    description: 'Procedimentos estéticos para harmonizar o sorriso com o rosto, realçando a beleza natural.',
    fullDescription: 'A harmonização orofacial combina odontologia e estética facial para criar um sorriso em harmonia com as características do rosto. Realizamos aplicação de toxina botulínica, preenchimento labial e outros procedimentos para realçar sua beleza natural.',
    image: '/images/treatments/harmonização_orofacial.jpg',
    duration: '30-60 min',
    price: 'A partir de R$ 800',
    benefits: ['Rejuvenescimento facial', 'Sorriso harmônico', 'Procedimentos minimamente invasivos', 'Resultados naturais'],
    hasRealImage: true
  }
];

export default function TratamentosPage() {
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
                Nossos Tratamentos
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
              Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta 
              e profissionais especializados para cuidar do seu sorriso.
            </p>
            
            {/* Indicador de rolagem */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
              <p className="text-xs text-[#866D36] mb-2 font-medium">Conheça nossos tratamentos</p>
              <svg className="w-5 h-5 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Badges de especialidades */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {['Implantes', 'Ortodontia', 'Estética', 'Endodontia', 'Pediatria'].map((item) => (
              <div key={item} className="px-4 py-2 bg-[oklch(97%_0.03_80deg)] text-[#866D36] rounded-full text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de tratamentos */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Imagem do tratamento */}
                <div className="relative h-48 overflow-hidden">
                  {treatment.hasRealImage ? (
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={treatment.id <= 2} // Priorizar o carregamento das primeiras imagens
                      loading={treatment.id <= 2 ? undefined : "lazy"} // Lazy loading para imagens não prioritárias
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[oklch(97%_0.03_80deg)] rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-[oklch(60%_0.12_80deg)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-[oklch(50%_0.02_80deg)] font-medium">{treatment.title}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Conteúdo do card */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-[oklch(50%_0.02_80deg)] mb-4 text-sm leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-[oklch(55%_0.02_80deg)] mb-2">
                      <strong>Duração:</strong> {treatment.duration}
                    </p>
                    <p className="text-sm text-[oklch(60%_0.12_80deg)] font-semibold">
                      {treatment.price}
                    </p>
                  </div>

                  {/* Benefícios */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[oklch(45%_0.02_80deg)] mb-2">Benefícios:</h4>
                    <ul className="text-xs text-[oklch(50%_0.02_80deg)] space-y-1">
                      {treatment.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-3 h-3 text-[oklch(60%_0.12_80deg)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botão de ação */}
                  <div className="mt-auto">
                    <a 
                      href="/contato" 
                      className="block w-full bg-[#866D36] hover:bg-[#9d824b] text-white py-3 px-4 rounded-md transition-colors duration-300 text-sm font-medium text-center"
                    >
                      Agendar Consulta
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative py-24 overflow-hidden">
        {/* Fundo com gradiente simplificado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A7339] via-[#866D36] to-[#5D4824] z-0">
          {/* Overlay de gradiente suave */}
          <div className="absolute inset-0 opacity-30" 
               style={{background: 'radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 60%)'}}></div>
          
          {/* Padrão de linhas decorativas */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{ 
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Conteúdo de texto */}
            <div className="md:col-span-3 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Pronto para transformar<br />seu <span className="relative inline-block">
                  sorriso?
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/60 rounded-full"></span>
                </span>
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl">
                Entre em contato conosco e agende uma avaliação gratuita para descobrir 
                qual tratamento é ideal para você.
              </p>
              
              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-3xl font-bold text-white">98%</p>
                  <p className="text-xs text-white/80">pacientes satisfeitos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-3xl font-bold text-white">15+</p>
                  <p className="text-xs text-white/80">anos de experiência</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-3xl font-bold text-white">8</p>
                  <p className="text-xs text-white/80">especialidades</p>
                </div>
              </div>
              
              {/* Botão com efeito */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/50 to-white/30 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <a 
                  href="/contato" 
                  className="relative flex items-center justify-center gap-2 bg-white text-[#866D36] px-8 py-4 rounded-lg font-semibold hover:bg-white/95 transition-all duration-300 group-hover:shadow-xl"
                >
                  <span>Agendar Avaliação Gratuita</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Imagem ou ilustração decorativa */}
            <div className="md:col-span-2 hidden md:block">
              <div className="relative">
                {/* Círculos decorativos */}
                <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-white/20 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-20 h-20 border-2 border-white/20 rounded-full"></div>
                
                {/* Card flutuante */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Primeira Consulta</h3>
                      <p className="text-white/70 text-sm">Avaliação completa</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white/90 text-sm">Diagnóstico digital</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white/90 text-sm">Plano de tratamento</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white/90 text-sm">Orçamento transparente</p>
                    </div>
                  </div>
                </div>
                
                {/* Card flutuante secundário */}
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl absolute -bottom-10 -right-5 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Atendimento Rápido</p>
                      <p className="text-white/70 text-xs">Sem longas esperas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 