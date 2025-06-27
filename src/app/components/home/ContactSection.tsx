"use client";

import React from 'react';
import { m } from '../shared/motion';
import { PlaceholderImage } from '../shared/AnimationUtils';

const inputVariants = {
  focus: {
    scale: 0.99,
    boxShadow: "0 0 0 2px rgba(134, 109, 54, 0.4)",
    borderColor: "#866D36",
    transition: { duration: 0.2 }
  },
  hover: {
    y: -2,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.2 }
  }
};

const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const infoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <m.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <m.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Entre em Contato
          </m.h2>
          <m.div 
            className="w-24 h-1 bg-[#866D36] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></m.div>
          <m.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Estamos prontos para cuidar do seu sorriso. Agende sua consulta ou entre em contato para mais informações.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Formulário de Contato */}
          <m.div 
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <m.h3 
              className="text-2xl font-semibold mb-6 text-gray-800"
              variants={itemVariants}
            >
              Agende sua Consulta
            </m.h3>
            <form className="space-y-4">
              <m.div variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nome Completo</label>
                <m.input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-800 bg-white"
                  placeholder="Digite seu nome completo"
                  whileFocus="focus"
                  whileHover="hover"
                  variants={inputVariants}
                />
              </m.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <m.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">E-mail</label>
                  <m.input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-800 bg-white"
                    placeholder="seu@email.com"
                    whileFocus="focus"
                    whileHover="hover"
                    variants={inputVariants}
                  />
                </m.div>
                <m.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Telefone</label>
                  <m.input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-800 bg-white"
                    placeholder="(00) 00000-0000"
                    whileFocus="focus"
                    whileHover="hover"
                    variants={inputVariants}
                  />
                </m.div>
              </div>
              
              <m.div variants={itemVariants}>
                <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">Tipo de Serviço</label>
                <m.select 
                  id="service" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-800 bg-white"
                  whileFocus="focus"
                  whileHover="hover"
                  variants={inputVariants}
                >
                  <option value="" className="text-gray-500">Selecione um serviço</option>
                  <option value="clareamento" className="text-gray-800">Clareamento Dental</option>
                  <option value="implantes" className="text-gray-800">Implantes Dentários</option>
                  <option value="ortodontia" className="text-gray-800">Ortodontia Estética</option>
                  <option value="protese" className="text-gray-800">Próteses Dentárias</option>
                  <option value="canal" className="text-gray-800">Tratamento de Canal</option>
                  <option value="odontopediatria" className="text-gray-800">Odontopediatria</option>
                  <option value="outro" className="text-gray-800">Outro</option>
                </m.select>
              </m.div>
              
              <m.div variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Mensagem</label>
                <m.textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-800 bg-white"
                  placeholder="Como podemos ajudar? Informe detalhes adicionais aqui."
                  whileFocus="focus"
                  whileHover="hover"
                  variants={inputVariants}
                ></m.textarea>
              </m.div>
              
              <m.button 
                type="submit" 
                className="w-full bg-[#866D36] hover:bg-[#9d824b] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 overflow-hidden relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <m.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, x: "-100%" }}
                  whileHover={{ scale: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Solicitar Agendamento</span>
              </m.button>
              
              <m.p 
                className="text-sm text-gray-500 text-center mt-4"
                variants={itemVariants}
              >
                Retornaremos o contato em até 24 horas úteis para confirmar o agendamento.
              </m.p>
            </form>
          </m.div>
          
          {/* Informações de Contato */}
          <m.div
            variants={infoVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
          >
            <m.div 
              className="bg-[#866D36]/10 p-8 rounded-lg mb-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#866D36]">Informações de Contato</h3>
              <div className="space-y-4">
                <m.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="mt-1 mr-4 text-[#866D36]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-000
                    </p>
                  </div>
                </m.div>
                
                <m.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="mt-1 mr-4 text-[#866D36]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Telefone</h4>
                    <p className="text-gray-600">
                      (11) 3456-7890<br />
                      (11) 98765-4321
                    </p>
                  </div>
                </m.div>
                
                <m.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="mt-1 mr-4 text-[#866D36]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">E-mail</h4>
                    <p className="text-gray-600">
                      contato@dentalblanc.com.br<br />
                      agendamento@dentalblanc.com.br
                    </p>
                  </div>
                </m.div>
                
                <m.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="mt-1 mr-4 text-[#866D36]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 08h às 20h<br />
                      Sábados: 08h às 14h<br />
                      Domingos: Fechado
                    </p>
                  </div>
                </m.div>
              </div>
            </m.div>
            
            <m.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#866D36]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#866D36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Atendimento Personalizado</h4>
                <p className="text-gray-600">Cada paciente recebe um plano de tratamento individualizado para suas necessidades.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#866D36]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#866D36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Condições Especiais</h4>
                <p className="text-gray-600">Oferecemos diversas formas de pagamento e parcelamento para facilitar seu tratamento.</p>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 