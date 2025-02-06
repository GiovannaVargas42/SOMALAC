import React from 'react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-[#2b50a5] to-[#2354c4] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Inovação em Diagnóstico Veterinário
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Tecnologia de ponta para identificação bacteriana e diagnóstico da mastite
          </p>
          <a
            href="#contato"
            className="inline-block bg-white text-[#2b50a5] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;