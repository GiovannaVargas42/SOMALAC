import React from 'react';

const Incubator = () => {
  return (
    <section id="estufa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2b50a5] mb-12">Nossa Estufa de Cultivo</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg aspect-video">
            {/* Espaço reservado para a foto da estufa */}
          </div>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              A precisão no diagnóstico microbiológico começa com um ambiente de cultivo controlado e confiável. A estufa de cultivo da Somalac foi desenvolvida para proporcionar eficiência, segurança e rapidez na identificação bacteriana, sendo uma ferramenta essencial para laboratórios, clínicas veterinárias e produtores rurais que buscam um diagnóstico mais assertivo e ágil.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com tecnologia avançada, nossa estufa garante as condições ideais de temperatura e umidade para o crescimento das colônias bacterianas, reduzindo falhas no processo e proporcionando resultados confiáveis em menor tempo. Comparada ao método tradicional com placas bacterianas em ambientes não controlados, a estufa Somalac acelera a detecção, permitindo respostas mais rápidas e precisas no controle de infecções, como a mastite bovina.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Além da eficiência, prezamos pela segurança do operador e do ambiente, minimizando riscos de contaminação cruzada e garantindo um manuseio prático e higiênico. Seja para otimizar o diagnóstico no campo ou em laboratório, a estufa de cultivo Somalac é a escolha certa para quem busca inovação e confiabilidade no processo de identificação bacteriana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incubator;