import logoImg from '../assets/logoCompleto.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full  bg-[#020617] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Brillo Superior Derecha */}
      <div className="absolute top-0 right-0 w-[500px] lg:w-[800px] h-full opacity-50 pointer-events-none">
        <div className="absolute top-0 right-0 w-[2px] h-[1000px] bg-gradient-to-b from-transparent via-purple-500 to-transparent rotate-[35deg] blur-sm translate-x-10"></div>
        <div className="absolute top-0 right-10 w-[1px] h-[1000px] bg-gradient-to-b from-transparent via-blue-400 to-transparent rotate-[35deg] blur-[1px]"></div>
        <div className="absolute -top-20 -right-20 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-purple-600/25 blur-[120px] rounded-full"></div>
      </div>

      {/* Líneas diagonales moradas - lado derecho */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[3px] h-[130%] bg-gradient-to-b from-transparent via-purple-500 to-transparent rotate-[20deg]"></div>
        <div className="absolute top-[-200px] right-[60px] w-[1px] h-[130%] bg-gradient-to-b from-transparent via-purple-400 to-transparent rotate-[20deg]"></div>
        <div className="absolute top-[-200px] right-[140px] w-[2px] h-[130%] bg-gradient-to-b from-transparent via-blue-500 to-transparent rotate-[20deg]"></div>
        <div className="absolute top-[-200px] right-[220px] w-[1px] h-[130%] bg-gradient-to-b from-transparent via-purple-300 to-transparent rotate-[20deg]"></div>
      </div>

      {/* Brillo Inferior Izquierda */}
      <div className="absolute -bottom-20 -left-20 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[2px] h-[800px] bg-gradient-to-t from-transparent via-purple-600 to-transparent rotate-[35deg] blur-sm"></div>
        <div className="absolute bottom-0 left-10 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-blue-900/30 blur-[150px] rounded-full"></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10 w-full pt-24 lg:pt-28">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="h-full min-h-[500px] flex flex-col justify-between text-left order-2 lg:order-1">

        {/* PARTE SUPERIOR */}
        <div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.15]">
            Transformamos ideas <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                en soluciones digitales
            </span>
            </h1>
        </div>

        {/* PARTE CENTRAL */}
        <div className="flex flex-col gap-6">

            <div className="w-full max-w-[620px] h-[2px] bg-purple-600 rounded-full"></div>

            <p className="text-slate-300 text-sm sm:text-base lg:text-base xl:text-lg max-w-xs lg:max-w-sm xl:max-w-md leading-relaxed font-light">
            Optimizando empresas a través de <strong>desarrollo de software</strong> y revolucionando procesos. <br />
            Diseñamos <strong>sitios y aplicaciones web profesionales</strong>, modernos y de <strong>alto impacto</strong> para empresas en Colombia y el mundo, enfocados en crear la mejor <strong>Solución</strong> y <strong>Propuesta</strong> en cada desarrollo.
            </p>
        </div>

        {/* PARTE INFERIOR */}
        <div className="flex flex-wrap gap-3 lg:gap-4 pt-10 pb-1">

            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 sm:px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg font-semibold text-sm lg:text-base shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all group">

            Ver servicios

            <span className="group-hover:translate-x-1 transition-transform text-base lg:text-lg">
                →
            </span>
            </button>

            <button className="flex items-center gap-2 border border-slate-600 bg-transparent text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-3.5 rounded-lg font-semibold text-sm lg:text-base hover:bg-white/5 transition-all">

            Hablemos

            <div className="w-4 lg:w-5 h-4 lg:h-5 border-[1.5px] border-slate-400 rounded-[4px] flex items-center justify-center text-[9px] lg:text-[10px]">
                💬
            </div>
            </button>
            </div>
        </div>

        {/* COLUMNA DERECHA: Logo - más a la derecha */}
        <div className="flex flex-col items-center justify-center relative order-1 lg:order-2 pl-0 lg:pl-10 xl:pl-16">
          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] lg:blur-[100px] rounded-full scale-150"></div>
          <div className="relative w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[560px]">
            <img 
              src={logoImg}  
              alt="Soft SanCa IT Logo" 
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] brightness-110"
            />
          </div>
        </div>
      </div>

      {/* FOOTER INFERIOR */}
      <div className="w-full text-center px-4 z-20 flex flex-col items-center gap-3 lg:gap-4 mt-28 lg:mt-32 pb-10 lg:pb-12">
        <div className="flex justify-center items-center gap-3 lg:gap-4 text-white text-[12px] lg:text-[15px] tracking-[0.15em] lg:tracking-[0.25em] font-medium uppercase">
          <span>Tecnología</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>
          <span>Experiencia</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>
          <span>Compromiso</span>
        </div>
        <p className="text-slate-400 text-[14px] lg:text-[17px] xl:text-[18px] max-w-lg lg:max-w-2xl leading-relaxed font-light opacity-90 italic">
          Conectamos tecnología y estrategia para entregar soluciones <br className="hidden md:block" />
          confiables, escalables y de alto impacto.
        </p>
      </div>

    </section>
  );
};

export default HeroSection;