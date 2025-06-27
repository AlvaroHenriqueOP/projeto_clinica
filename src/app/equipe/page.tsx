import React from 'react';
import Image from 'next/image'; // Descomentado para usar as imagens reais

interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  cro: string;
  description: string;
  image: string;
  experience: string;
  education: string[];
  specializations: string[];
}

// Usando as imagens reais da pasta /public/images/team/
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Carlos Eduardo Silva',
    specialty: 'Implantodontista',
    cro: 'CRO-SP 45.678',
    description: 'Especialista em implantodontia com mais de 15 anos de experiência. Formado pela USP e pós-graduado em implantes pela NYU.',
    image: '/images/team/dentista1.jpg',
    experience: '15 anos',
    education: ['Graduação em Odontologia - USP', 'Especialização em Implantodontia - NYU', 'Mestrado em Periodontia - UNICAMP'],
    specializations: ['Implantes Dentários', 'Cirurgia Oral', 'Periodontia', 'Prótese sobre Implante']
  },
  {
    id: 2,
    name: 'Dra. Mariana Santos',
    specialty: 'Ortodontista',
    cro: 'CRO-SP 32.145',
    description: 'Ortodontista especializada em aparelhos estéticos e alinhadores invisíveis. Referência em tratamentos para adultos.',
    image: '/images/team/dentista2.jpg',
    experience: '12 anos',
    education: ['Graduação em Odontologia - UNESP', 'Especialização em Ortodontia - São Leopoldo Mandic', 'Curso em Invisalign - Align Technology'],
    specializations: ['Ortodontia Estética', 'Alinhadores Invisíveis', 'Ortodontia para Adultos', 'Aparelhos Autoligados']
  },
  {
    id: 3,
    name: 'Dr. Roberto Mendes',
    specialty: 'Endodontista',
    cro: 'CRO-SP 28.967',
    description: 'Especialista em endodontia com expertise em casos complexos. Utiliza microscopia operatória em todos os procedimentos.',
    image: '/images/team/dentista3.jpg',
    experience: '18 anos',
    education: ['Graduação em Odontologia - PUC-SP', 'Especialização em Endodontia - APCD', 'Curso de Microscopia Operatória - ABO'],
    specializations: ['Tratamento de Canal', 'Retratamento Endodôntico', 'Microscopia Operatória', 'Traumatologia Dental']
  },
  {
    id: 4,
    name: 'Dra. Ana Paula Costa',
    specialty: 'Odontopediatra',
    cro: 'CRO-SP 41.523',
    description: 'Especialista em odontopediatria com abordagem lúdica e humanizada. Atende bebês, crianças e adolescentes.',
    image: '/images/team/dentista4.jpg',
    experience: '10 anos',
    education: ['Graduação em Odontologia - UNIFESP', 'Especialização em Odontopediatria - FOUSP', 'Curso em Sedação Consciente - ABO'],
    specializations: ['Odontopediatria', 'Prevenção Infantil', 'Sedação Consciente', 'Ortodontia Preventiva']
  },
  {
    id: 5,
    name: 'Dr. Fernando Lima',
    specialty: 'Periodontista',
    cro: 'CRO-SP 36.789',
    description: 'Especialista em periodontia e implantodontia. Foco em tratamentos regenerativos e cirurgias plásticas gengivais.',
    image: '/images/team/dentista5.jpg',
    experience: '14 anos',
    education: ['Graduação em Odontologia - UFRJ', 'Especialização em Periodontia - UERJ', 'Fellowship em Regeneração Tecidual - Harvard'],
    specializations: ['Periodontia', 'Cirurgia Plástica Gengival', 'Regeneração Tecidual', 'Estética Gengival']
  },
  {
    id: 6,
    name: 'Dra. Juliana Oliveira',
    specialty: 'Dentística e Estética',
    cro: 'CRO-SP 39.456',
    description: 'Especialista em dentística restauradora e estética dental. Referência em laminados cerâmicos e harmonização orofacial.',
    image: '/images/team/dentista6.jpg',
    experience: '11 anos',
    education: ['Graduação em Odontologia - UNICAMP', 'Especialização em Dentística - São Leopoldo Mandic', 'Curso em Harmonização Orofacial - ILAPEO'],
    specializations: ['Dentística Estética', 'Laminados Cerâmicos', 'Harmonização Orofacial', 'Clareamento Dental']
  }
];

export default function EquipePage() {
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
                Nossa Equipe
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
              Conheça nossos profissionais altamente qualificados, especialistas em suas áreas 
              e comprometidos em oferecer o melhor atendimento odontológico.
            </p>
            
            {/* Indicador de rolagem */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
              <p className="text-xs text-[#866D36] mb-2 font-medium">Conheça nossa equipe</p>
              <svg className="w-5 h-5 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Badges de especialidades */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {['Implantodontia', 'Ortodontia', 'Endodontia', 'Odontopediatria', 'Periodontia', 'Dentística'].map((item) => (
              <div key={item} className="px-4 py-2 bg-[oklch(97%_0.03_80deg)] text-[#866D36] rounded-full text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid da equipe */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Foto do profissional */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={member.id <= 3} // Priorizar o carregamento das primeiras imagens
                  />
                </div>

                {/* Informações do profissional */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-[oklch(60%_0.12_80deg)] font-semibold text-lg mb-1">
                      {member.specialty}
                    </p>
                    <p className="text-[oklch(55%_0.02_80deg)] text-sm">
                      {member.cro}
                    </p>
                  </div>

                  <p className="text-[oklch(50%_0.02_80deg)] mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Experiência */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-[oklch(60%_0.12_80deg)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-[oklch(45%_0.02_80deg)]">
                        {member.experience} de experiência
                      </span>
                    </div>
                  </div>

                  {/* Especializações */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[oklch(45%_0.02_80deg)] mb-2">Especializações:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.slice(0, 3).map((spec, index) => (
                        <span
                          key={index}
                          className="bg-[oklch(97%_0.03_80deg)] text-[oklch(60%_0.12_80deg)] px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                      {member.specializations.length > 3 && (
                        <span className="bg-[oklch(98%_0.01_80deg)] text-[oklch(50%_0.02_80deg)] px-2 py-1 rounded-full text-xs font-medium">
                          +{member.specializations.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Botão de contato */}
                  <div className="mt-auto">
                    <a 
                      href="/contato" 
                      className="block w-full bg-[#866D36] hover:bg-[#9d824b] text-white py-3 px-4 rounded-md transition-colors duration-300 text-sm font-medium text-center"
                    >
                      Agendar com {member.name.split(' ')[1]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de destaque */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#866D36] mb-6 rounded-full mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 relative">
              <span className="relative inline-block">
                Por que escolher nossa equipe?
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2" width="100" height="6" viewBox="0 0 100 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3C20 1.5 50 1.5 99 3" stroke="#866D36" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <div className="flex gap-4 items-center justify-center mb-8">
              <span className="w-8 h-[1px] bg-[#866D36]/50"></span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#866D36]/70"></div>
              <span className="w-8 h-[1px] bg-[#866D36]/50"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[oklch(97%_0.03_80deg)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[oklch(60%_0.12_80deg)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">Especialistas Certificados</h3>
              <p className="text-[oklch(50%_0.02_80deg)]">
                Todos os nossos profissionais possuem especialização e estão sempre atualizados com as mais modernas técnicas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[oklch(97%_0.03_80deg)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[oklch(60%_0.12_80deg)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">Atendimento Humanizado</h3>
              <p className="text-[oklch(50%_0.02_80deg)]">
                Nossa equipe prioriza o conforto e bem-estar dos pacientes, oferecendo um atendimento acolhedor e personalizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[oklch(97%_0.03_80deg)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[oklch(60%_0.12_80deg)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">Tecnologia Avançada</h3>
              <p className="text-[oklch(50%_0.02_80deg)]">
                Utilizamos equipamentos de última geração e técnicas modernas para garantir os melhores resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 