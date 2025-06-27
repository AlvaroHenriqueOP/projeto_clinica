import React from 'react';
import ContactForm from '../components/ContactForm';

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

                  {/* E-mail */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#866D36]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[oklch(40%_0.02_80deg)] mb-1">E-mail</h3>
                      <p className="text-[oklch(50%_0.02_80deg)]">
                        <a href="mailto:contato@dentalblanc.com.br" className="hover:text-[#866D36] transition-colors">
                          contato@dentalblanc.com.br
                        </a>
                      </p>
                      <p className="text-[oklch(50%_0.02_80deg)]">
                        <a href="mailto:agendamento@dentalblanc.com.br" className="hover:text-[#866D36] transition-colors">
                          agendamento@dentalblanc.com.br
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
                <div className="h-80 bg-gray-200 relative">
                  {/* Placeholder para o Google Maps */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-[oklch(50%_0.02_80deg)] font-medium">Mapa do Google Maps</p>
                      <p className="text-[oklch(60%_0.02_80deg)] text-sm">Av. Paulista, 1000 - São Paulo</p>
                    </div>
                  </div>
                  {/* 
                  Para implementar o Google Maps real, substitua este div por:
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975..."
                    width="100%" 
                    height="320" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  */}
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
                    href="#" 
                    className="w-12 h-12 bg-[#866D36] hover:bg-[#9d824b] text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#866D36] hover:bg-[#9d824b] text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#866D36] hover:bg-[#9d824b] text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#866D36] hover:bg-[#9d824b] text-white rounded-lg flex items-center justify-center transition-colors"
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