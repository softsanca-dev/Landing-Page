import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, ArrowUpRight } from "lucide-react";

import logo from "../assets/logo.png";

const contactItems = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+57 314 594 4999",
  },
  {
    icon: Mail,
    title: "Correo",
    value: "softsanca@gmail.com",
  },
  {
    icon: Globe,
    title: "Sitio web",
    value: "www.softsancait.com",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Colombia",
  },
];

const tags = ["Desarrollo Web", "Software", "UI/UX", "Apps Web"];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-[#edf4ff] px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-[-140px] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-140px] h-[340px] w-[340px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] [background-size:110px_110px]" />

      <div className="relative mx-auto w-full max-w-[1450px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-7 md:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-[90px]" />
          <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-[240px] w-[240px] rounded-full bg-indigo-500/10 blur-[95px]" />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.85fr] lg:gap-12">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="inline-flex rounded-full border border-blue-500/10 bg-blue-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-blue-500">
                Soft SanCa IT
              </span>

              <h2 className="mt-6 py-[30px] max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Construyamos algo increíble juntos.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Diseñamos soluciones digitales modernas, escalables y enfocadas
                en resultados reales para empresas y marcas que quieren crecer.
              </p>

            <a
              href="#contacto"
              className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-blue-50/60 hover:text-blue-600 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)] sm:w-auto"
            >
              Hablemos de tu proyecto

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-950 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
                        </div>

            <div className="md:order-3 md:col-span-2 lg:order-none lg:col-span-1">
              <h3 className="text-center text-xl font-black text-slate-950 md:text-left">
                Contacto
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-1">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white sm:px-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 transition duration-300 group-hover:bg-blue-500/15">
                        <Icon size={18} className="text-blue-500" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                          {item.title}
                        </p>

                        <span className="block text-sm leading-6 text-slate-700 break-all sm:break-normal">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:items-end md:text-right lg:items-end">
              <img
                src={logo}
                alt="Soft SanCa IT"
                className="w-[170px] object-contain drop-shadow-[0_0_24px_rgba(37,99,235,0.14)] sm:w-[200px] lg:w-[230px]"
              />

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 sm:leading-8">
                Innovación, tecnología y desarrollo de soluciones digitales
                modernas para empresas que buscan crecer.
              </p>

              <div className="mt-6 flex max-w-sm flex-wrap justify-center gap-3 md:justify-end">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:text-blue-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 px-2 pt-7 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © 2026 Soft SanCa IT. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 md:justify-end">
            <span>Colombia</span>
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>Desarrollo de Software</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;