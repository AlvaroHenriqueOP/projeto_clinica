import React from 'react';
import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato | Agende sua Consulta | Dental Corp',
  description: 'Entre em contato com a Dental Corp para agendar sua consulta, tirar dúvidas ou conhecer nossos tratamentos. Atendimento personalizado e ágil para seu conforto.',
  keywords: 'contato clínica odontológica, agendar consulta dentista, telefone dentista, endereço clínica odontológica, marcar consulta odontológica',
  openGraph: {
    title: 'Contato | Agende sua Consulta | Dental Corp',
    description: 'Entre em contato com a Dental Corp para agendar sua consulta, tirar dúvidas ou conhecer nossos tratamentos. Atendimento personalizado e ágil para seu conforto.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function ContatoPage() {
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
                Entre em Contato
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
              Estamos prontos para cuidar do seu sorriso. Entre em contato conosco para agendar 
              sua consulta ou esclarecer suas dúvidas.
            </p>
            
            {/* Indicador de rolagem */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
              <p className="text-xs text-[#866D36] mb-2 font-medium">Fale conosco</p>
              <svg className="w-5 h-5 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Badges de contato */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {['Consultas', 'Orçamentos', 'Emergências', 'Dúvidas', 'Convênios'].map((item) => (
              <div key={item} className="px-4 py-2 bg-[oklch(97%_0.03_80deg)] text-[#866D36] rounded-full text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de contato - Coluna esquerda */}
            <div>
              <ContactForm />
            </div>

            {/* Informações de contato - Coluna direita */}
            <div className="space-y-8">
              {/* Informações de contato */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 relative">
                  <span className="relative inline-block">
                    Informações de Contato
                    <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-[#866D36]"></div>
                  </span>
                </h2>
                
                <div className="space-y-6">
                  {/* Endereço */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#866D36]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-1">Endereço</h3>
                      <p className="text-[oklch(50%_0.02_80deg)]">
                        Av. Paulista, 1000 - Bela Vista<br />
                        São Paulo - SP, 01310-000<br />
                        Edifício Comercial - 5º andar
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#866D36]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-1">Telefone</h3>
                      <p className="text-[oklch(50%_0.02_80deg)]">
                        <a href="tel:+551134567890" className="hover:text-[#866D36] transition-colors">
                          (11) 3456-7890
                        </a>
                      </p>
                      <p className="text-[oklch(50%_0.02_80deg)]">
                        <a href="tel:+5511987654321" className="hover:text-[#866D36] transition-colors">
                          (11) 98765-4321
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* E-mail para Informações */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#866D36]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-1">E-mail para Informações</h3>
                      <p className="text-[oklch(50%_0.02_80deg)]">
                        <a href="mailto:contato@dentalcorp.com.br" className="hover:text-[#866D36] transition-colors">
                          contato@dentalcorp.com.br
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* E-mail para Agendamentos */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#866D36]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-1">E-mail para Agendamentos</h3>
                      <p className="text-[oklch(50%_0.02_80deg)]">
                        <a href="mailto:agendamento@dentalcorp.com.br" className="hover:text-[#866D36] transition-colors">
                          agendamento@dentalcorp.com.br
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Horário de funcionamento */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#866D36]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-1">Horário de Funcionamento</h3>
                      <div className="text-[oklch(50%_0.02_80deg)] space-y-1">
                        <p>Segunda a Sexta: 08h às 20h</p>
                        <p>Sábados: 08h às 14h</p>
                        <p>Domingos: Fechado</p>
                        <p className="text-sm text-[#866D36] font-medium mt-2">
                          Atendimento de emergência 24h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-[#866D36]/10">
                  <h2 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] relative">
                    <span className="relative inline-block">
                      Nossa Localização
                      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-[#866D36]"></div>
                    </span>
                  </h2>
                </div>
                <div className="h-80 relative w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0984260459433!2d-46.655459299999995!3d-23.5645212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1724348697289!5m2!1spt-BR!2sbr"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}}
                    allowFullScreen={false}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da clínica"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] mb-6 relative">
                  <span className="relative inline-block">
                    Siga-nos nas Redes Sociais
                    <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-[#866D36]"></div>
                  </span>
                </h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#866D36] hover:bg-[#9d824b] text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#866D36] hover:bg-[#9d824b] text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#866D36] hover:bg-[#9d824b] text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 