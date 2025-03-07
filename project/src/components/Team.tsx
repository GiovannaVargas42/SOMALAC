import React from 'react';

const team = [
  {
    name: 'Thiago Marinz',
    role: 'Médico Veterinário',
    image: '/thiago.jpg'
  },
  {
    name: 'Giovanna Vargas',
    role: 'Graduanda em Medicina Veterinária',
    image: '/giovanna.jpg'
  },
  {
    name: 'Isabella Borges',
    role: 'Médica Veterinária',
    image: '/isabella.jpg'
  },
  {
    name: 'Jakelaine Lopes',
    role: 'Médica Veterinária',
    image: '/jakelaine.jpg'
  },
  {
    name: 'Ezequiel Cardoso',
    role: 'Graduando em Zootecnia',
    image: '/ezequiel.jpg'
  }
];

const Team = () => {
  return (
    <section 
      id="equipe" 
      className="py-20 bg-white relative"
      style={{ 
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-[#f7fbf9] mb-12">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="relative text-center p-6 bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Imagem do Integrante */}
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#2b50a5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Nome e Cargo do Integrante */}
              <h3 className="text-xl font-semibold text-[#2b50a5] mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;