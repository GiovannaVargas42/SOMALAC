import React from 'react';

const Hero = () => {
  return (
    <div className="pt-16 bg-[#2b50a5] bg-opacity-90 bg-gradient-to-b to-white relative text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/vacas-leiteiras.png')" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolucionando o <br /> Diagnóstico da Mastite Bovina
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Tecnologia de ponta para identificação bacteriana e diagnóstico preciso
          </p>
          <div className="flex space-x-4">
            <a
              href="#contato"
              className="inline-block bg-white text-[#2b50a5] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Entre em Contato
            </a>
            <a
              href="#servicos"
              className="inline-block bg-white text-[#2b50a5] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;