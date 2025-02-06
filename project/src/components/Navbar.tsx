import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2b50a5] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Somalac</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#quem-somos" className="hover:bg-[#2354c4] px-3 py-2 rounded-md">Quem Somos</a>
              <a href="#servicos" className="hover:bg-[#2354c4] px-3 py-2 rounded-md">Serviços</a>
              <a href="#estufa" className="hover:bg-[#2354c4] px-3 py-2 rounded-md">Nossa Estufa</a>
              <a href="#equipe" className="hover:bg-[#2354c4] px-3 py-2 rounded-md">Equipe</a>
              <a href="#contato" className="hover:bg-[#2354c4] px-3 py-2 rounded-md">Contato</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#2354c4]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#quem-somos" className="block hover:bg-[#2354c4] px-3 py-2 rounded-md">Quem Somos</a>
            <a href="#servicos" className="block hover:bg-[#2354c4] px-3 py-2 rounded-md">Serviços</a>
            <a href="#estufa" className="block hover:bg-[#2354c4] px-3 py-2 rounded-md">Nossa Estufa</a>
            <a href="#equipe" className="block hover:bg-[#2354c4] px-3 py-2 rounded-md">Equipe</a>
            <a href="#contato" className="block hover:bg-[#2354c4] px-3 py-2 rounded-md">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;