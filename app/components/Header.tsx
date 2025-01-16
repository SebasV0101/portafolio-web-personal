"use client";

import { FC, useState } from "react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Alterna el estado del menú
  };

  return (
    <header className="w-full p-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center">
        <a href="#inicio" className="text-xl font-bold">Portafolio personal</a>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          <a href="#proyectos" className="hover:underline">Proyectos</a>
          <a href="#habilidades" className="hover:underline">Habilidades</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </div>

        {/* Menú de hamburguesa para pantallas pequeñas */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </nav>

      {/* Menú desplegable en pantallas pequeñas */}
      <div 
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 space-y-4`}
      >
        <a href="#proyectos" className="block hover:underline">Proyectos</a>
        <a href="#habilidades" className="block hover:underline">Habilidades</a>
        <a href="#contacto" className="block hover:underline">Contacto</a>
      </div>
    </header>
  );
};

export default Header;
