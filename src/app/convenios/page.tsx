import React from 'react';
import Image from 'next/image';

// Dados placeholder para convênios
const convenios = [
  {
    id: 1,
    nome: "MediDental",
    logo: "/images/clinica-interior.jpg", // Imagem placeholder
    descricao: "Cobertura ampla para tratamentos odontológicos básicos e especializados com rede credenciada nacional.",
    beneficios: ["Cobertura nacional", "Atendimento de urgência", "Descontos em procedimentos estéticos"]
  },
  {
    id: 2,
    nome: "OdontoPlus",
    logo: "/images/clinica-interior.jpg", // Imagem placeholder
    descricao: "Planos personalizados para indivíduos e famílias, com foco em tratamentos preventivos e especializados.",
    beneficios: ["Planos familiares", "Prevenção e limpeza", "Especialidades inclusas"]
  },
  {
    id: 3,
    nome: "DentalCorp",
    logo: "/images/clinica-interior.jpg", // Imagem placeholder
    descricao: "Soluções corporativas de saúde bucal para empresas de todos os portes com condições especiais.",
    beneficios: ["Planos empresariais", "Gestão de benefícios", "Portal corporativo"]
  },
  {
    id: 4,
    nome: "SorrisoSeguro",
    logo: "/images/clinica-interior.jpg", // Imagem placeholder
    descricao: "Cobertura completa para procedimentos preventivos, restauradores e cirúrgicos com ampla rede.",
    beneficios: ["Ortodontia coberta", "Implantes com desconto", "Documentação gratuita"]
  },
  {
    id: 5,
    nome: "OdontoPrev",
    logo: "/images/clinica-interior.jpg", // Imagem placeholder
    descricao: "Líder em planos odontológicos com diversas opções para atender diferentes necessidades e orçamentos.",
    beneficios: ["Diversos planos", "App exclusivo", "Telemedicina odontológica"]
  },
  {
    id: 6,
    nome: "InterOdonto",
    logo: "/images/clinica-interior.jpg", // Imagem placeholder
    descricao: "Convênio especializado em tratamentos integrados com equipe multidisciplinar e atendimento diferenciado.",
    beneficios: ["Reembolso disponível", "Atendimento preferencial", "Clínicas premium"]
  }
];

export default function ConveniosPage() {
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
                Convênios e Planos
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
              Trabalhamos com os principais planos odontológicos do mercado para oferecer mais conforto
              e facilidade no acesso aos nossos serviços. Confira os convênios aceitos em nossa clínica.
            </p>
          </div>
          
          {/* Badges de convênios */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {['Planos Particulares', 'Planos Empresariais', 'Atendimento Particular', 'Pacotes Especiais'].map((item) => (
              <div key={item} className="px-4 py-2 bg-[oklch(97%_0.03_80deg)] text-[#866D36] rounded-full text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de convênios */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {convenios.map((convenio) => (
              <div 
                key={convenio.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Logo do convênio */}
                <div className="h-40 bg-[#866D36]/5 flex items-center justify-center p-6">
                  <div className="w-full h-full relative">
                    <div className="flex items-center justify-center h-full">
                      <span className="text-2xl font-bold text-[#866D36]">{convenio.nome}</span>
                    </div>
                    {/* Aqui seria a imagem do logo do convênio */}
                    {/* <Image
                      src={convenio.logo}
                      alt={convenio.nome}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    /> */}
                  </div>
                </div>
                
                {/* Informações do convênio */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[oklch(40%_0.02_80deg)] mb-4">{convenio.nome}</h3>
                  
                  <p className="text-[oklch(50%_0.02_80deg)] mb-5 leading-relaxed">
                    {convenio.descricao}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[oklch(45%_0.02_80deg)] mb-2">Benefícios:</h4>
                    <ul className="space-y-1">
                      {convenio.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-center text-sm text-[oklch(50%_0.02_80deg)]">
                          <svg className="w-4 h-4 text-[oklch(60%_0.12_80deg)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <a 
                      href="/contato" 
                      className="inline-block bg-[#866D36] hover:bg-[#9d824b] text-white py-2 px-4 rounded-md transition-colors duration-300 text-sm font-medium"
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
      
      {/* Informações adicionais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-[#866D36] mb-6 rounded-full"></div>
              <h2 className="text-3xl font-bold text-[oklch(40%_0.02_80deg)] mb-6">
                Como utilizar o seu convênio
              </h2>
              <div className="space-y-4 text-[oklch(50%_0.02_80deg)]">
                <p>
                  Utilizar seu convênio em nossa clínica é muito simples. No dia do seu atendimento, 
                  basta apresentar a sua carteirinha do plano odontológico e um documento com foto.
                </p>
                <p>
                  Nossa equipe verificará a cobertura do seu plano para os procedimentos necessários 
                  e informará sobre quaisquer custos adicionais antes de iniciar o tratamento.
                </p>
                <p>
                  Caso seu plano tenha carência para determinados procedimentos, podemos oferecer 
                  condições especiais para o atendimento particular.
                </p>
                <p>
                  Para maior comodidade, recomendamos que entre em contato conosco antes da consulta 
                  para verificarmos a cobertura do seu plano.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/contato" 
                  className="inline-flex items-center text-[#866D36] hover:text-[#9d824b] font-medium"
                >
                  Tem dúvidas? Entre em contato
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-[oklch(97%_0.03_80deg)] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[oklch(40%_0.02_80deg)] mb-6">
                Perguntas Frequentes
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-2">
                    O que acontece se meu plano não cobrir o tratamento necessário?
                  </h4>
                  <p className="text-[oklch(50%_0.02_80deg)] text-sm">
                    Oferecemos condições especiais para procedimentos não cobertos pelo seu plano, 
                    com opções de pagamento facilitadas.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-2">
                    Quanto tempo leva para a autorização do convênio?
                  </h4>
                  <p className="text-[oklch(50%_0.02_80deg)] text-sm">
                    A maioria dos procedimentos é autorizada no momento da consulta, mas alguns mais 
                    complexos podem levar até 48 horas para aprovação.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-2">
                    Posso usar meu plano empresarial para dependentes?
                  </h4>
                  <p className="text-[oklch(50%_0.02_80deg)] text-sm">
                    Sim, desde que estejam devidamente cadastrados como dependentes no seu plano 
                    odontológico empresarial.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-2">
                    O que acontece se eu perder a carteirinha do plano?
                  </h4>
                  <p className="text-[oklch(50%_0.02_80deg)] text-sm">
                    Na maioria dos casos, conseguimos realizar a consulta apenas com seu documento e 
                    número de CPF para verificar a cobertura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-12 bg-[oklch(97%_0.03_80deg)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[oklch(40%_0.02_80deg)] mb-4">
              Não encontrou seu convênio?
            </h2>
            <p className="text-[oklch(50%_0.02_80deg)] mb-8">
              Entre em contato conosco para verificar se atendemos o seu plano ou conheça nossas condições especiais para pagamento particular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contato" 
                className="inline-block bg-[#866D36] hover:bg-[#9d824b] text-white py-3 px-6 rounded-md transition-colors duration-300 text-sm font-medium"
              >
                Entrar em contato
              </a>
              <a 
                href="/tratamentos" 
                className="inline-block bg-white hover:bg-gray-100 text-[#866D36] py-3 px-6 rounded-md border border-[#866D36] transition-colors duration-300 text-sm font-medium"
              >
                Ver tratamentos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 