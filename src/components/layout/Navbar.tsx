import { useEffect, useState } from 'react';
import logoImg from '../../assets/logolargo.png';

const sections = [
  'inicio',
  'servicios',
  'proceso',
  'cotizacion',
  'contacto',
];

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 140;

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const sectionIndex = sections.indexOf(activeSection);

  const navLink = (id: string, label: string) => {

    const currentIndex = sections.indexOf(id);

    const isPassed = currentIndex <= sectionIndex;

    return (
      <a
        href={`#${id}`}
        className={`
          relative pb-2 transition-all duration-500
          ${
            isPassed
              ? 'text-blue-400'
              : 'text-white/80 hover:text-blue-400'
          }
        `}
      >
        {label}

        <span
          className={`
            absolute left-0 bottom-0 h-[2px]
            bg-gradient-to-r from-blue-400 to-blue-600
            shadow-[0_0_12px_rgba(59,130,246,0.8)]
            rounded-full
            transition-all duration-500 ease-in-out
            ${
              isPassed
                ? 'w-full opacity-100'
                : 'w-0 opacity-0'
            }
          `}
        />
      </a>
    );
  };

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
        <div className="hidden lg:flex items-center space-x-10 font-medium text-[13px] tracking-widest uppercase ml-auto mr-10">

          {navLink('inicio', 'Inicio')}

          {navLink('servicios', 'Servicios')}

          {navLink('proceso', 'Flujo')}

          {navLink('cotizacion', 'Cotización')}

          {navLink('contacto', 'Contacto')}

        </div>

        {/* BOTON DESKTOP */}
        <div className="hidden lg:flex items-center shrink-0">

          <a
            href="https://wa.me/573145944999?text=Hola,%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-[#3b5bdb] to-[#6741d9] text-white px-7 py-2.5 rounded-full font-semibold text-[13px] tracking-wide shadow-[0_4px_20px_rgba(67,65,217,0.45)] hover:shadow-[0_6px_25px_rgba(103,65,217,0.6)] hover:scale-105 active:scale-95 transition-all duration-300">
              Hablemos
            </button>
          </a>

        </div>

        {/* HAMBURGUESA */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
        >

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>

        </button>
      </div>

      {/* MOBILE */}
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
            className={activeSection === 'inicio' ? 'text-blue-400' : ''}
          >
            Inicio
          </a>

          <a
            href="#servicios"
            onClick={() => setMenuOpen(false)}
            className={activeSection === 'servicios' ? 'text-blue-400' : ''}
          >
            Servicios
          </a>

          <a
            href="#proceso"
            onClick={() => setMenuOpen(false)}
            className={activeSection === 'proceso' ? 'text-blue-400' : ''}
          >
            Flujo
          </a>

          <a
            href="#cotizacion"
            onClick={() => setMenuOpen(false)}
            className={activeSection === 'cotizacion' ? 'text-blue-400' : ''}
          >
            Cotización
          </a>

          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className={activeSection === 'contacto' ? 'text-blue-400' : ''}
          >
            Contacto
          </a>

          {/* BOTON MOBILE */}
          <a
            href="https://wa.me/573145944999?text=Hola,%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-2 bg-gradient-to-r from-[#3b5bdb] to-[#6741d9] text-white px-8 py-3 rounded-full font-semibold text-[13px] tracking-wide shadow-[0_4px_20px_rgba(67,65,217,0.45)]">
              Hablemos
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;