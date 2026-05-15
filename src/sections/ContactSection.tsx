import emailjs from '@emailjs/browser';
import { useState } from "react";


const ContactSection = () => {

  const [openInfo, setOpenInfo] = useState(false);
  const [mobileStep, setMobileStep] = useState(1);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  const form = e.currentTarget;

  try {

    // EMAIL PARA TU EMPRESA
    await emailjs.sendForm(
      'service_w6vf4bd',
      'template_hql9itk',
      form,
      'W7v0x-hL22zla-2r0'
    );

    // AUTO RESPUESTA AL CLIENTE
    await emailjs.sendForm(
      'service_w6vf4bd',
      'template_7xd0odm',
      form,
      'W7v0x-hL22zla-2r0'
    );

    alert('Solicitud enviada correctamente');

    form.reset();

  } catch (error) {

    console.error(error);

    alert('Error al enviar');

  }
}; 
  return (
  <section
    id="contacto"
    className="scroll-mt-17 sm:scroll-mt-21 relative w-full bg-black py-16 overflow-hidden"
  >

    {/* GLOW */}
    <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-400/10 blur-[120px] rounded-full"></div>

    {/* CONTENEDOR */}
    <div className="container mx-auto relative z-10 w-full">

      {/* GRID GENERAL */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-6 lg:gap-8 items-start max-w-[1450px] mx-auto">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-[#020617] to-[#0f172a] rounded-[32px] p-7 lg:p-9 border border-blue-500/10 shadow-[0_10px_40px_rgba(15,23,42,0.08)] h-full flex flex-col justify-between relative overflow-hidden">

          {/* GLOW */}
          <div className="absolute -top-20 -right-20 w-[220px] h-[220px] bg-blue-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">

            <div className="sm:hidden">

              <button
                onClick={() => setOpenInfo(!openInfo)}
                className="w-full flex justify-center items-center pb-2"
              >
                <div
                  className={`transition-transform duration-300 ${
                    openInfo ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

            </div>    
            {/* MINI TITLE */}
            <div className="flex items-center gap-3 mb-6">

              <div className="w-8 h-[2px] bg-blue-500"></div>
            </div>

            {/* TITULO */}
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[58px] leading-[0.95] font-black tracking-[-0.04em]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                <span className="text-white">¡</span>CONTÁCTANOS<span className="text-white">!</span>
              </span> 
            </h2>

            {/* MOBILE TOGGLE */}
            <div className="sm:hidden mt-6">

              

              {/* CONTENIDO MOBILE */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openInfo ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >

                {/* TEXTO */}
                <p className="text-slate-300 text-sm leading-relaxed pt-5 max-w-md">
                  Comunicate con nosotros para materializar tus futuros proyectos estamos listos para ayudarte a llevar tu empresa al siguiente nivel.
                </p>

                {/* BENEFICIOS */}
                <div className="flex flex-col gap-4 mt-8">

                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">✓</span>
                    <p className="text-white font-semibold text-sm">
                      Respuesta rápida y asesoría personalizada.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">✓</span>
                    <p className="text-white font-semibold text-sm">
                      Cotización clara y sin costos ocultos.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">✓</span>
                    <p className="text-white font-semibold text-sm">
                      Atención remota para toda Colombia y el mundo.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">✓</span>
                    <p className="text-white font-semibold text-sm">
                      Seguimiento y acompañamiento del desarrollo.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">✓</span>
                    <p className="text-white font-semibold text-sm">
                      Requerimientos claros y estructurales.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">✓</span>
                    <p className="text-white font-semibold text-sm">
                      Desarrollo sostenible.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">✓</span>
                    <p className="text-white font-semibold text-sm">
                      Soporte 24/7.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* DESKTOP NORMAL */}
            <div className="hidden sm:block">

              {/* TEXTO */}
              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed pt-8 sm:pt-10 max-w-md">
                Comunicate con nosotros para materializar tus futuros proyectos estamos listos para ayudarte a llevar tu empresa al siguiente nivel.
              </p>

              {/* BENEFICIOS */}
              <div className="flex flex-col gap-4 mt-8">

                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">✓</span>
                  <p className="text-white font-semibold text-sm">
                    Respuesta rápida y asesoría personalizada.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">✓</span>
                  <p className="text-white font-semibold text-sm">
                    Cotización clara y sin costos ocultos.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">✓</span>
                  <p className="text-white font-semibold text-sm">
                    Atención remota para toda Colombia y el mundo.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">✓</span>
                  <p className="text-white font-semibold text-sm">
                    Seguimiento y acompañamiento del desarrollo.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">✓</span>
                  <p className="text-white font-semibold text-sm">
                    Requerimientos claros y estructurales.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">✓</span>
                  <p className="text-white font-semibold text-sm">
                    Desarrollo sostenible.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">✓</span>
                  <p className="text-white font-semibold text-sm">
                    Soporte 24/7.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(15,23,42,0.06)] w-full">

          {/* TITULO */}
          <div className="mb-8">

            <h2 className="text-[#020617] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              LLEVEMOS TU EMPRESA

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                AL SIGUIENTE NIVEL.
              </span>
            </h2>
          </div>

          {/* FORM */}
          <form onSubmit={sendEmail}>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

              {/* MOBILE STEP 1 */}
              <div
                className={`contents sm:contents transition-all duration-500 ${
                  mobileStep === 1 ? "block" : "hidden sm:contents"
                }`}
              >

              {/* Nombre */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  Nombre completo <span className="text-blue-500">*</span>
                </label>

                <input
                  type="text"
                  name="nombre"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  WhatsApp <span className="text-blue-500">*</span>
                </label>

                <input
                  type="tel"
                  name="whatsapp"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                  }}         
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* Correo */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  Correo <span className="text-blue-500">*</span>
                </label>

                <input
                  type="email"
                  name="correo"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>
            </div>

              {/* BOTON SIGUIENTE MOBILE */}
              {mobileStep === 1 && (
                <div className="sm:hidden mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      const nombre = document.querySelector('input[name="nombre"]') as HTMLInputElement;
                      const whatsapp = document.querySelector('input[name="whatsapp"]') as HTMLInputElement;
                      const correo = document.querySelector('input[name="correo"]') as HTMLInputElement;

                      if (!nombre.value || !whatsapp.value || !correo.value) {

                        nombre.reportValidity();
                        whatsapp.reportValidity();
                        correo.reportValidity();

                        return;
                      }

                      setMobileStep(2);
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                  >
                    Siguiente →
                  </button>
                </div>
              )}

              <div className={`contents sm:contents transition-all duration-500 ${ mobileStep === 2 ? "block" : "hidden sm:contents"}`}>

              {/* ENFOQUE */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  ¿Cuál es el enfoque de tu empresa?
                </label>

                <input
                  type="text"
                  name="enfoque_empresa"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              

              

              {/* CONTACTO */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  ¿Por dónde deseas ser contactado?
                </label>

                <input
                  type="text"
                  name="metodo_contacto"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* EMPRESA */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  Nombre de la empresa
                </label>

                <input
                  type="text"
                  name="empresa"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* SERVICIO */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  Servicio de interés <span className="text-blue-500">*</span>
                </label>

                <select
                  name="servicio"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-600 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">Sitio web</option>
                  <option value="app">Aplicación web</option>
                  <option value="software">Software a medida</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="consultoria">Consultoría digital</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              

              {/* PRESUPUESTO */}
              <div className="flex flex-col gap-1">

                <label className="text-slate-700 text-[13px] font-semibold">
                  Presupuesto aproximado
                </label>

                <select
                  name="presupuesto" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-600 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="menos-1m">Menos de $1.000.000</option>
                  <option value="1m-3m">$1.000.000 – $3.000.000</option>
                  <option value="3m-10m">$3.000.000 – $10.000.000</option>
                  <option value="mas-10m">Más de $10.000.000</option>
                </select>
              </div>
            </div>
            </div> 
            {/* STEP 2 CONTENT */}
            <div
              className={`transition-all duration-500 ${
                mobileStep === 2 ? "block opacity-100" : "hidden opacity-0 sm:block sm:opacity-100"
              }`}
            >

              {/* MENSAJE */}
              <div className="flex flex-col gap-1 mt-5">

                <label className="text-slate-700 text-[13px] font-semibold">
                  Cuéntanos sobre tu proyecto
                </label>

                <textarea
                  rows={4}
                  name="mensaje"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition resize-none"
                />
              </div>

              {/* BOTONES */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-7">

                {/* VOLVER MOBILE */}
                <button
                  type="button"
                  onClick={() => setMobileStep(1)}
                  className="sm:hidden w-full border border-slate-300 text-slate-700 py-3 rounded-xl font-semibold text-sm"
                >
                  ← Volver
                </button>

                {/* ENVIAR */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-[1.02] active:scale-95 text-white px-7 py-3 rounded-xl font-semibold text-[13px] shadow-[0_8px_25px_rgba(59,130,246,0.25)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.35)] transition-all duration-200"
                >
                  Enviar solicitud
                </button>

                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Te contactaremos lo antes posible para coordinar una reunión.
                </p>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
};

export default ContactSection;