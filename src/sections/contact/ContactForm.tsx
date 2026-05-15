import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { budgetOptionsByService, serviceOptions, contactoOptions } from "./contact.data";
import { sendContactEmail } from "./contactEmail.service";

const ContactForm = () => {
  const [mobileStep, setMobileStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await sendContactEmail(form);
      toast.success("Solicitud enviada correctamente", {
        description: "Te contactaremos lo antes posible para coordinar una reunión.",
      });

      form.reset();
      setMobileStep(1);
    } catch (error) {
      console.error(error);

      toast.error("No se pudo enviar la solicitud", {
        description: "Revisa tu conexión o intenta nuevamente en unos segundos.",
      });
    }
  };

  const handleNextStep = () => {
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
  };

  const inputClass =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition";

  const selectClass =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-600 bg-[#f8fafc] focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition";

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10"
    >
     <div className="pointer-events-none absolute -top-24 right-10 h-[220px] w-[220px] rounded-full bg-blue-400/10 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-28 -left-20 h-[260px] w-[260px] rounded-full bg-violet-400/10 blur-[100px]" />
      <div className="relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold leading-tight text-[#020617] sm:text-3xl lg:text-4xl">
            LLEVEMOS TU EMPRESA
            <span className="block bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              AL SIGUIENTE NIVEL.
            </span>
          </h2>
        </motion.div>

        <form onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            <div className={`${mobileStep === 1 ? "contents" : "hidden"} lg:contents`}>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-slate-700">
                  Nombre completo <span className="text-blue-500">*</span>
                </label>
                <input type="text" name="nombre" required className={inputClass} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-slate-700">
                  Cel/WhatsApp <span className="text-blue-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                  }}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1 md:col-span-2 md:mx-auto md:w-[70%] lg:col-span-1 lg:mx-0 lg:w-full">
                <label className="text-[13px] font-semibold text-slate-700">
                  Correo <span className="text-blue-500">*</span>
                </label>
                <input type="email" name="correo" required className={inputClass} />
              </div>
            </div>

            {mobileStep === 1 && (
              <div className="mt-8 md:col-span-2 lg:hidden">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 py-3 text-sm font-semibold text-white transition-all duration-300 active:scale-95"
                >
                  Siguiente →
                </button>
              </div>
            )}

            <div className={`${mobileStep === 2 ? "contents" : "hidden"} lg:contents`}>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-slate-700">
                  Nombre de la empresa <span className="text-blue-500">*</span>
                </label>
                <input type="text" name="empresa" required className={inputClass} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-slate-700">
                  ¿Cuál es el enfoque de tu proyecto? <span className="text-blue-500">*</span>
                </label>
                <input type="text" name="enfoque_empresa" required className={inputClass} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-slate-700">
                  ¿Por dónde deseas ser contactado? <span className="text-blue-500">*</span>
                </label>
                <select name="metodo_contacto"required className={selectClass}>
                  <option value="">Selecciona una opción</option>
                  {contactoOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>


              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-slate-700">
                  Servicio de interés <span className="text-blue-500">*</span>
                </label>
                <select name="servicio" required className={selectClass} value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                  <option value="">Selecciona una opción</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1 md:col-span-2 md:mx-auto md:w-[70%] lg:col-span-1 lg:mx-0 lg:w-full">
                <label className="text-[13px] font-semibold text-slate-700">
                  Presupuesto aproximado <span className="text-blue-500">*</span>
                </label>
                <select name="presupuesto" required disabled={!selectedService} className={`${selectClass} disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400`}>
                  <option value=""> {selectedService ? "Selecciona un presupuesto" : "Primero selecciona un servicio"}</option>
                    {selectedService && budgetOptionsByService[ selectedService as keyof typeof budgetOptionsByService ]?.map((option) => (
                  <option key={option.value} value={option.value}> {option.label}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div className={`${mobileStep === 2 ? "block opacity-100" : "hidden opacity-0 lg:block lg:opacity-100"}`}>
            <div className="mt-5 flex flex-col gap-1">
              <label className="text-[13px] font-semibold text-slate-700">
                Cuéntanos sobre tu proyecto
              </label>
              <textarea rows={4} name="mensaje" className={`${inputClass} resize-none`} />
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 lg:flex-row lg:items-center">
              <button
                type="button"
                onClick={() => setMobileStep(1)}
                className="w-full rounded-xl border border-slate-300 py-3 text-sm font-semibold text-slate-700 transition active:scale-95 lg:hidden"
              >
                ← Volver
              </button>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-3 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(59,130,246,0.25)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_8px_35px_rgba(59,130,246,0.35)] active:scale-95 lg:w-auto"
              >
                Enviar solicitud
              </button>

              <p className="text-[11px] leading-relaxed text-slate-400">
                Te contactaremos lo antes posible para coordinar una reunión.
              </p>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;