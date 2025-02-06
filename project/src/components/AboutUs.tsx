import React from 'react';

const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2b50a5] mb-12">Quem Somos</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Somos uma startup inovadora dedicada à identificação bacteriana e ao diagnóstico preciso da mastite em vacas leiteiras, utilizando tecnologia de ponta na análise de imagens. Nosso compromisso é oferecer soluções confiáveis e ágeis para produtores rurais, garantindo mais eficiência no manejo da saúde do rebanho e na produção leiteira.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossa equipe é composta por especialistas em Medicina Veterinária e Zootecnia, profissionais altamente capacitados que unem conhecimento técnico e inovação para transformar o setor agropecuário. Nascemos no coração do agronegócio, no estado de Goiás, e já conquistamos reconhecimento no setor, alcançando o pódio no Agrostartup 2024, em Goiânia.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#2b50a5] mb-4">Nossa Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Acreditamos que a tecnologia é uma aliada fundamental para o futuro da pecuária leiteira, proporcionando diagnósticos mais rápidos e precisos, reduzindo perdas e melhorando a produtividade no campo. Nossa missão é revolucionar a detecção da mastite, promovendo um agro mais sustentável, tecnológico e eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;