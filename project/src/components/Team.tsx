import React from 'react';
import { User } from 'lucide-react';

const team = [
  {
    name: 'Thiago Marinz',
    role: 'Médico Veterinário',
  },
  {
    name: 'Giovanna Vargas',
    role: 'Graduanda em Medicina Veterinária',
  },
  {
    name: 'Isabella Borges',
    role: 'Médica Veterinária',
  },
  {
    name: 'Jakelaine Lopes',
    role: 'Médica Veterinária',
  },
  {
    name: 'Ezequiel Cardoso',
    role: 'Graduando em Zootecnia',
  }
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2b50a5] mb-12">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="relative text-center p-6 bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Quadrado Azul Inclinado */}
              <div className="absolute -z-10 inset-0 transform rotate-45 bg-[#2b50a5] w-32 h-32 mx-auto transition-transform duration-300 hover:scale-110"></div>
              
              {/* Ícone com Fundo Azul Escuro */}
              <div className="w-24 h-24 bg-[#2b50a5] rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              
              {/* Nome e Cargo do Integrante */}
              <h3 className="text-xl font-semibold text-[#2b50a5]">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;