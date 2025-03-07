import React from 'react';
import { Target } from 'lucide-react'; // Importando o ícone de alvo

const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#2b50a5] mb-12 relative after:absolute after:content-[''] after:w-16 after:h-1 after:bg-[#2b50a5] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px]">
          Quem Somos
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 flex flex-col justify-center text-lg text-gray-700">
            <p className="leading-relaxed">
              Somos uma startup inovadora dedicada à identificação bacteriana e ao diagnóstico preciso da mastite em vacas leiteiras, utilizando tecnologia de ponta na análise de imagens. Nosso compromisso é oferecer soluções confiáveis e ágeis para produtores rurais, garantindo mais eficiência no manejo da saúde do rebanho e na produção leiteira.
            </p>
            <p className="leading-relaxed">
              Nossa equipe é composta por especialistas em Medicina Veterinária e Zootecnia, profissionais altamente capacitados que unem conhecimento técnico e inovação para transformar o setor agropecuário. Nascemos no coração do agronegócio, no estado de Goiás, e já conquistamos reconhecimento no setor, alcançando o pódio no Agrostartup 2024, em Goiânia.
            </p>
          </div>
          
          {/* Imagem maior e dinâmica */}
          <div className="flex justify-center">
            <img
              src="/public/equipe.jpg"
              alt="Equipe"
              className="rounded-lg shadow-xl w-full max-w-2xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Missão com ícone */}
        <div className="bg-[#2b50a5] p-8 rounded-lg mt-12 text-center md:text-left">
          <div className="flex items-center justify-start space-x-4">
            <Target className="text-white w-8 h-8" />
            <h3 className="text-2xl font-bold text-[#f7fbf9] mb-4">Nossa Missão</h3>
          </div>
          <p className="text-[#f7fbf9] leading-relaxed">
            Acreditamos que a tecnologia é uma aliada fundamental para o futuro da pecuária leiteira, proporcionando diagnósticos mais rápidos e precisos, reduzindo perdas e melhorando a produtividade no campo. Nossa missão é revolucionar a detecção da mastite, promovendo um agro mais sustentável, tecnológico e eficiente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
