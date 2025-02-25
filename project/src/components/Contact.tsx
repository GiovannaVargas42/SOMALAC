import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2b50a5] mb-12">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bloco 1: Informações de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              {/* Instagram */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#2b50a5] rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <a href="https://instagram.com/somalac.dm" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#2b50a5]">
                  @somalac.dm
                </a>
              </div>

              {/* Telefone */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#2b50a5] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="https://wa.me/5562992378601" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#2b50a5]">
                  (62) 99237-8601
                </a>
              </div>

              {/* E-mail */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#2b50a5] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:contato@somalac.com.br" className="text-gray-700 hover:text-[#2b50a5]">
                  contato@somalac.com.br
                </a>
              </div>

              {/* Localização */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#2b50a5] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700">
                  Avenida Deputado Jamel Cecilio, Qd B22, Goiania - GO
                </span>
              </div>
            </div>
          </div>

          {/* Bloco 2: Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b50a5] focus:ring focus:ring-[#2b50a5] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b50a5] focus:ring focus:ring-[#2b50a5] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b50a5] focus:ring focus:ring-[#2b50a5] focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2b50a5] text-white py-2 px-4 rounded-md hover:bg-[#2354c4] transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;