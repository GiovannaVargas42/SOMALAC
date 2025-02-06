import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2b50a5] mb-12">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Instagram className="w-6 h-6 text-[#2b50a5]" />
              <a href="https://instagram.com/somalac.dm" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#2b50a5]">
                @somalac.dm
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-[#2b50a5]" />
              <a href="https://wa.me/5562985295369" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#2b50a5]">
                (62) 98529-5369
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-[#2b50a5]" />
              <a href="mailto:contato@somalac.com.br" className="text-gray-700 hover:text-[#2b50a5]">
                contato@somalac.com.br
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-[#2b50a5]" />
              <span className="text-gray-700">
                Setor Bueno, Goiânia - GO
              </span>
            </div>
          </div>
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
    </section>
  );
};

export default Contact;