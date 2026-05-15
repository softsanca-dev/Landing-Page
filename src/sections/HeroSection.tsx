import logoImg from '../assets/logoCompleto.png';
import logoMobile from '../assets/logoCompletoMobile.png';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full bg-[#020617] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-0"
    >

      {/* Brillo Superior Derecha */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[800px] h-full opacity-50 pointer-events-none">
        <div className="absolute top-0 right-0 w-[2px] h-[1000px] bg-gradient-to-b from-transparent via-purple-500 to-transparent rotate-[35deg] blur-sm translate-x-10"></div>

        <div className="absolute top-0 right-10 w-[1px] h-[1000px] bg-gradient-to-b from-transparent via-blue-400 to-transparent rotate-[35deg] blur-[1px]"></div>

        <div className="absolute -top-20 -right-20 w-[180px] sm:w-[250px] lg:w-[400px] h-[180px] sm:h-[250px] lg:h-[400px] bg-purple-600/25 blur-[120px] rounded-full"></div>
      </div>

      {/* Líneas diagonales */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 lg:opacity-30 pointer-events-none overflow-hidden">

        <div className="absolute top-[-200px] right-[-100px] w-[3px] h-[130%] bg-gradient-to-b from-transparent via-purple-500 to-transparent rotate-[20deg]"></div>

        <div className="absolute top-[-200px] right-[60px] w-[1px] h-[130%] bg-gradient-to-b from-transparent via-purple-400 to-transparent rotate-[20deg]"></div>

        <div className="absolute top-[-200px] right-[140px] w-[2px] h-[130%] bg-gradient-to-b from-transparent via-blue-500 to-transparent rotate-[20deg]"></div>

        <div className="absolute top-[-200px] right-[220px] w-[1px] h-[130%] bg-gradient-to-b from-transparent via-purple-300 to-transparent rotate-[20deg]"></div>

      </div>

      {/* Brillo Inferior Izquierda */}
      <div className="absolute -bottom-20 -left-20 w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] opacity-30 pointer-events-none">

        <div className="absolute bottom-0 left-0 w-[2px] h-[800px] bg-gradient-to-t from-transparent via-purple-600 to-transparent rotate-[35deg] blur-sm"></div>

        <div className="absolute bottom-0 left-10 w-[220px] sm:w-[300px] lg:w-[400px] h-[220px] sm:h-[300px] lg:h-[400px] bg-blue-900/30 blur-[150px] rounded-full"></div>

      </div>

      {/* CONTENIDO */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 w-full pt-28 sm:pt-32 lg:pt-28">

        {/* COLUMNA IZQUIERDA */}
        <div className="h-full flex flex-col justify-center lg:justify-between text-center lg:text-left order-2 lg:order-1">

          {/* TITULO */}
          <div>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.1]">

              Transformamos ideas <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                en soluciones digitales
              </span>

            </h1>
          </div>

          {/* TEXTO */}
          <div className="flex flex-col gap-6 mt-8 lg:mt-0 items-center lg:items-start">

            <div className="w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[620px] h-[2px] bg-blue-400 rounded-full"></div>

            <p className="text-slate-300 text-[15px] sm:text-base lg:text-base xl:text-lg max-w-full sm:max-w-lg lg:max-w-md xl:max-w-md leading-relaxed font-light">

              Optimizando empresas a través de <strong>desarrollo de software</strong> y revolucionando procesos. <br />

              Diseñamos <strong>sitios y aplicaciones web profesionales</strong>, modernos y de <strong>alto impacto</strong> para empresas en Colombia y el mundo, enfocados en crear la mejor <strong>Solución</strong> y <strong>Propuesta</strong> en cada desarrollo.

            </p>

          </div>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 pt-10 pb-1">

            {/* BOTON SERVICIOS */}
            <a href="#servicios">

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 sm:px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg font-semibold text-sm lg:text-base shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all group">

                Ver servicios

                <span className="group-hover:translate-x-1 transition-transform text-base lg:text-lg">
                  →
                </span>

              </button>

            </a>

            {/* BOTON WHATSAPP */}
            <a
              href="https://wa.me/573145944999?text=Hola,%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-600 bg-transparent text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-3.5 rounded-lg font-semibold text-sm lg:text-base hover:bg-white/5 transition-all">

                Hablemos

              </button>

            </a>

          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col items-center justify-center relative order-1 lg:order-2 pl-0 lg:pl-10 xl:pl-16">

          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] lg:blur-[100px] rounded-full scale-150"></div>

          {/* LOGO MOBILE */}
          <div className="relative w-full max-w-[320px] sm:hidden">

            <img
              src={logoMobile}
              alt="Soft SanCa IT Logo Mobile"
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.35)] brightness-110"
            />

          </div>

          {/* LOGO DESKTOP */}
          <div className="relative hidden sm:block w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[560px]">

            <img
              src={logoImg}
              alt="Soft SanCa IT Logo"
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] brightness-110"
            />

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full text-center px-4 z-20 flex flex-col items-center gap-3 lg:gap-4 mt-20 sm:mt-24 lg:mt-32 pb-10 lg:pb-12">

        <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 text-white text-[11px] sm:text-[12px] lg:text-[15px] tracking-[0.1em] lg:tracking-[0.25em] font-medium uppercase">

          <span>Tecnología</span>

          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>

          <span>Experiencia</span>

          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>

          <span>Compromiso</span>

        </div>

        <p className="text-slate-400 text-[13px] sm:text-[14px] lg:text-[17px] xl:text-[18px] max-w-sm sm:max-w-lg lg:max-w-2xl leading-relaxed font-light opacity-90 italic">

          Conectamos tecnología y estrategia para entregar soluciones
          <br className="hidden md:block" />
          confiables, escalables y de alto impacto.

        </p>
      </div>
        <a
          href="https://wa.me/573145944999?text=Hola,%20quiero%20cotizar%20un%20proyecto"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50"
        >
          {/* CONTENEDOR */}
          <div
            className="
              flex items-center gap-4
              bg-[#0f172a]/95
              backdrop-blur-md
              rounded-full
              transition-all duration-300
              hover:scale-105
            "
          >

            {/* BOTON */}
            <div
              className="
                relative
                w-[62px] h-[62px]
                rounded-full
                bg-gradient-to-br from-green-400 to-green-600
                flex items-center justify-center
              "
            >

              {/* ICONO */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-8 h-8 fill-white relative z-10"
              >
                <path d="M19.11 17.2c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.73.92-.89 1.1-.16.19-.33.22-.62.08-.29-.15-1.2-.44-2.29-1.39-.84-.75-1.41-1.67-1.57-1.96-.16-.29-.02-.45.12-.59.13-.13.29-.33.44-.49.15-.16.19-.28.29-.47.1-.19.05-.36-.02-.5-.08-.15-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.54c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.17 3 .15.19 2.02 3.09 4.9 4.33.68.29 1.22.46 1.63.58.69.22 1.31.19 1.8.11.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33zM16.02 3C8.84 3 3 8.73 3 15.8c0 2.5.73 4.84 1.98 6.82L3 29l6.6-1.91c1.91 1.03 4.08 1.57 6.42 1.57h.01c7.18 0 13.02-5.73 13.02-12.8C29.04 8.73 23.2 3 16.02 3zm0 23.39h-.01c-2.08 0-4.12-.56-5.89-1.61l-.42-.25-3.92 1.13 1.17-3.8-.27-.39c-1.16-1.69-1.78-3.66-1.78-5.67 0-5.76 4.76-10.45 10.62-10.45 2.83 0 5.49 1.09 7.49 3.07a10.3 10.3 0 013.12 7.38c0 5.76-4.76 10.45-10.61 10.45z" />
              </svg>
            </div>
          </div>
        </a>
    </section>
  );
};

export default HeroSection;