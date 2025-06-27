import React from 'react';
import Image from 'next/image';

export default function SobrePage() {
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
                Sobre Nossa Clínica
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
              Conheça nossa história, valores e o compromisso com a excelência em tratamentos odontológicos.
              Uma jornada de dedicação à saúde bucal e bem-estar dos nossos pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem da clínica */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/clinica-interior.jpg"
                alt="Interior da nossa clínica odontológica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* História da clínica */}
            <div>
              <h2 className="text-3xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 relative">
                <span className="relative inline-block">
                  Nossa História
                  <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-[#866D36]"></div>
                </span>
              </h2>
              <div className="space-y-4 text-[oklch(50%_0.02_80deg)]">
                <p>
                  Fundada em 2005, a clínica Dental Excellence nasceu do sonho do Dr. Carlos Silva de criar um espaço 
                  onde tratamentos odontológicos de alta qualidade pudessem ser oferecidos em um ambiente acolhedor e com
                  tecnologia de ponta.
                </p>
                <p>
                  Começando com apenas dois consultórios, hoje contamos com uma equipe multidisciplinar de especialistas e
                  uma estrutura moderna com seis consultórios totalmente equipados para oferecer o melhor em odontologia.
                </p>
                <p>
                  Ao longo desses anos, consolidamos nossa reputação através do compromisso com a excelência, atendimento 
                  humanizado e resultados que transformam sorrisos e vidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores e Missão */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#866D36] mb-6 rounded-full mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 relative">
              <span className="relative inline-block">
                Nossos Valores e Missão
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
              <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">Excelência</h3>
              <p className="text-[oklch(50%_0.02_80deg)]">
                Buscamos a excelência em todos os tratamentos, utilizando as mais avançadas técnicas e materiais de qualidade premium.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[oklch(97%_0.03_80deg)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[oklch(60%_0.12_80deg)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">Humanização</h3>
              <p className="text-[oklch(50%_0.02_80deg)]">
                Priorizamos o atendimento humanizado, compreendendo as necessidades individuais de cada paciente e aliviando tensões.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[oklch(97%_0.03_80deg)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[oklch(60%_0.12_80deg)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[oklch(40%_0.02_80deg)]">Conhecimento</h3>
              <p className="text-[oklch(50%_0.02_80deg)]">
                Investimos constantemente na atualização e aperfeiçoamento de nossa equipe para oferecer os tratamentos mais modernos.
              </p>
            </div>
          </div>

          {/* Missão */}
          <div className="mt-16 bg-[oklch(97%_0.03_80deg)] p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] mb-4">Nossa Missão</h3>
              <p className="text-[oklch(50%_0.02_80deg)] max-w-3xl mx-auto">
                Transformar sorrisos e vidas através de tratamentos odontológicos de excelência, em um ambiente acolhedor
                e com profissionais comprometidos com o bem-estar, saúde e autoestima dos nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[oklch(40%_0.02_80deg)] mb-4">
                  Venha Conhecer Nossa Clínica
                </h2>
                <p className="text-[oklch(50%_0.02_80deg)] mb-6">
                  Estamos prontos para oferecer o melhor atendimento odontológico para você e sua família.
                  Agende uma visita e conheça nossa estrutura moderna e acolhedora.
                </p>
                <a 
                  href="/contato" 
                  className="inline-block bg-[#866D36] hover:bg-[#9d824b] text-white py-3 px-6 rounded-md transition-colors duration-300 text-sm font-medium"
                >
                  Agendar Consulta
                </a>
              </div>
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-[#866D36]/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[oklch(97%_0.03_80deg)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[oklch(40%_0.02_80deg)] text-lg font-medium">Conheça nossa clínica em vídeo</p>
                  </div>
                </div>
                {/* Aqui pode ser adicionado um vídeo real */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 