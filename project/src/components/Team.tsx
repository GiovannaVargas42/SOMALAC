import React from 'react';
import { User } from 'lucide-react';

const team = [
  {
    name: 'Thiago Marinz',
    role: 'Médico Veterinário',
    image: <User className="w-24 h-24 text-[#2b50a5]" />
  },
  {
    name: 'Giovanna Vargas',
    role: 'Graduanda em Medicina Veterinária',
    image: <User className="w-24 h-24 text-[#2b50a5]" />
  },
  {
    name: 'Isabella Borges',
    role: 'Médica Veterinária',
    image: <User className="w-24 h-24 text-[#2b50a5]" />
  },
  {
    name: 'Jakelaine Lopes',
    role: 'Médica Veterinária',
    image: <User className="w-24 h-24 text-[#2b50a5]" />
  },
  {
    name: 'Ezequiel Cardoso',
    role: 'Graduando em Zootecnia',
    image: <User className="w-24 h-24 text-[#2b50a5]" />
  }
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2b50a5] mb-12">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                {member.image}
              </div>
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