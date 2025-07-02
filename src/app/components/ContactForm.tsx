"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Agende sua Consulta
        </h2>
        <p className="text-gray-600">
          Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar seu agendamento.
        </p>
      </div>

      {submitMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome completo */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent text-gray-800"
            placeholder="Digite seu nome completo"
            style={{ 
              caretColor: '#866D36'
            }}
          />
        </div>

        {/* Email e Telefone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent text-gray-800"
              placeholder="seu@email.com"
              style={{ caretColor: '#866D36' }}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent text-gray-800"
              placeholder="(00) 00000-0000"
              style={{ caretColor: '#866D36' }}
            />
          </div>
        </div>

        {/* Tipo de serviço */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Serviço
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent text-gray-800 bg-white"
          >
            <option value="" className="text-gray-500">Selecione um serviço</option>
            <option value="consulta" className="text-gray-800">Consulta de Avaliação</option>
            <option value="clareamento" className="text-gray-800">Clareamento Dental</option>
            <option value="implantes" className="text-gray-800">Implantes Dentários</option>
            <option value="ortodontia" className="text-gray-800">Ortodontia</option>
            <option value="proteses" className="text-gray-800">Próteses Dentárias</option>
            <option value="canal" className="text-gray-800">Tratamento de Canal</option>
            <option value="odontopediatria" className="text-gray-800">Odontopediatria</option>
            <option value="periodontia" className="text-gray-800">Periodontia</option>
            <option value="harmonizacao" className="text-gray-800">Harmonização Orofacial</option>
            <option value="outro" className="text-gray-800">Outro</option>
          </select>
        </div>

        {/* Data e horário preferidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
              Data Preferida
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent text-gray-800"
              style={{ caretColor: '#866D36' }}
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              Horário Preferido
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent text-gray-800 bg-white"
            >
              <option value="" className="text-gray-500">Selecione um horário</option>
              <option value="08:00" className="text-gray-800">08:00</option>
              <option value="09:00" className="text-gray-800">09:00</option>
              <option value="10:00" className="text-gray-800">10:00</option>
              <option value="11:00" className="text-gray-800">11:00</option>
              <option value="14:00" className="text-gray-800">14:00</option>
              <option value="15:00" className="text-gray-800">15:00</option>
              <option value="16:00" className="text-gray-800">16:00</option>
              <option value="17:00" className="text-gray-800">17:00</option>
              <option value="18:00" className="text-gray-800">18:00</option>
              <option value="19:00" className="text-gray-800">19:00</option>
            </select>
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#866D36] focus:border-transparent text-gray-800"
            placeholder="Conte-nos mais sobre suas necessidades ou dúvidas..."
            style={{ caretColor: '#866D36' }}
          ></textarea>
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#866D36] hover:bg-[#9d824b] disabled:bg-gray-400 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Solicitar Agendamento'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          * Campos obrigatórios. Retornaremos o contato em até 24 horas úteis.
        </p>
      </form>
    </div>
  );
};

export default ContactForm; 