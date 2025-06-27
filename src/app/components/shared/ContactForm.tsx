"use client";

import React, { useState } from 'react';

interface FormData {
  nomeCompleto: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const ContactForm: React.FC = () => {
  // Estados para os campos do formulário
  const [nomeCompleto, setNomeCompleto] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  // Estados para controle do formulário
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Dados do formulário
    const formData: FormData = {
      nomeCompleto,
      email,
      telefone,
      mensagem
    };

    // Exibir dados no console
    console.log('Dados do formulário:', formData);
    console.log('Nome Completo:', nomeCompleto);
    console.log('E-mail:', email);
    console.log('Telefone/WhatsApp:', telefone);
    console.log('Mensagem:', mensagem);

    // Simular processo de envio
    setIsLoading(true);
    
    // Simular delay de envio (remover quando implementar envio real)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset do formulário após envio bem-sucedido
      setNomeCompleto('');
      setEmail('');
      setTelefone('');
      setMensagem('');
      
      // Reset da mensagem de sucesso após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-600">
          Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
        </p>
      </div>

      {/* Mensagem de sucesso */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-green-800 font-medium">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome Completo */}
        <div>
          <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="nomeCompleto"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-200"
            placeholder="Digite seu nome completo"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-200"
            placeholder="seu@email.com"
          />
        </div>

        {/* Telefone/WhatsApp */}
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-200"
            placeholder="(00) 00000-0000"
          />
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
            Mensagem *
          </label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            disabled={isLoading}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-200 resize-vertical"
            placeholder="Digite sua mensagem, dúvidas ou como podemos ajudá-lo..."
          />
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#866D36] hover:bg-[#9d824b] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isLoading ? (
            <>
              {/* Spinner de carregamento */}
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Enviar Mensagem</span>
            </>
          )}
        </button>

        {/* Informações adicionais */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">
            * Campos obrigatórios. Responderemos em até 24 horas.
          </p>
          <div className="mt-2 flex items-center justify-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Dados protegidos
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Resposta rápida
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 