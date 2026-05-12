import { useState } from 'react';
import logoImg from '../../assets/logolargo.png';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0f2c]/95 backdrop-blur-md border-b border-white/5">

      <div className="w-full flex items-center justify-between px-5 sm:px-8 py-3">

        {/* LOGO */}
        <div className="flex items-center shrink-0">

          <div className="w-[140px] sm:w-[170px] lg:w-[180px] flex items-center">

            <img
              src={logoImg}
              alt="Soft SanCa IT"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center space-x-10 text-white/80 font-medium text-[13px] tracking-widest uppercase ml-auto mr-10">

          <a
            href="#inicio"
            className="text-blue-400 border-b-2 border-blue-400 pb-1 transition-all"
          >
            Inicio
          </a>

          <a href="#servicios" className="hover:text-blue-400 transition-colors">
            Servicios
          </a>

          <a href="#nosotros" className="hover:text-blue-400 transition-colors">
            Nosotros
          </a>

          <a href="#proyectos" className="hover:text-blue-400 transition-colors">
            Proyectos
          </a>

          <a href="#contacto" className="hover:text-blue-400 transition-colors">
            Contacto
          </a>
        </div>

        {/* BOTON DESKTOP */}
        <div className="hidden lg:flex items-center shrink-0">

          <button className="bg-gradient-to-r from-[#3b5bdb] to-[#6741d9] text-white px-7 py-2.5 rounded-full font-semibold text-[13px] tracking-wide shadow-[0_4px_20px_rgba(67,65,217,0.45)] hover:shadow-[0_6px_25px_rgba(103,65,217,0.6)] hover:scale-105 active:scale-95 transition-all duration-300">

            Hablemos

          </button>
        </div>

        {/* BOTON HAMBURGUESA MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
        >

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div className={`
        lg:hidden
        overflow-hidden
        transition-all
        duration-300
        bg-[#0a0f2c]
        border-t border-white/5
        ${menuOpen ? 'max-h-[500px] py-6' : 'max-h-0'}
      `}>

        <div className="flex flex-col items-center gap-6 text-white/80 font-medium text-[13px] tracking-[0.2em] uppercase">

          <a
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            className="text-blue-400"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Nosotros
          </a>

          <a
            href="#proyectos"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Contacto
          </a>

          {/* BOTON MOBILE */}
          <button className="mt-2 bg-gradient-to-r from-[#3b5bdb] to-[#6741d9] text-white px-8 py-3 rounded-full font-semibold text-[13px] tracking-wide shadow-[0_4px_20px_rgba(67,65,217,0.45)]">

            Hablemos

          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;