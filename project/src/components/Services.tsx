import React from 'react';
import { Microscope, TowerControl as PetrolPump, FlaskRound as Flask, Users, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Microscope className="w-12 h-12" />,
    title: 'Classificação da Mastite',
    description: 'Diagnóstico preciso e rápido para identificação da mastite bovina.'
  },
  {
    icon: <Flask className="w-12 h-12" />,
    title: 'Identificação Microbiológica',
    description: 'Análise detalhada de amostras de leite para identificação de patógenos.'
  },
  {
    icon: <PetrolPump className="w-12 h-12" />,
    title: 'Placas para Cultura',
    description: 'Fornecimento de placas especializadas para cultura microbiológica.'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Parcerias',
    description: 'Colaboração com profissionais e empresas do setor.'
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: 'Assistência Técnica',
    description: 'Suporte técnico especializado para nossos clientes.'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2b50a5] mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#2b50a5] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;