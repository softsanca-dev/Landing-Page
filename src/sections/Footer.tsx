import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/logo.png";

const contactItems = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+57 300 123 4567",
  },
  {
    icon: Mail,
    title: "Correo",
    value: "hola@softsancait.com",
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

const tags = [
  "Desarrollo Web",
  "Software",
  "UI/UX",
  "Apps Web",
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-[#edf4ff] text-slate-900">
      {/* TOP TRANSITION */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-24 left-[-140px] h-[340px] w-[340px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[150px]" />

      {/* LIGHT GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] [background-size:120px_120px]" />

      <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-8 pt-8 sm:px-6 lg:px-0">
        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.3rem] border border-white/70 bg-white/75 p-6 shadow-[0_25px_90px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-8 lg:p-12"
        >
          {/* CARD GLOW */}
          <div className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="absolute bottom-[-140px] right-[-120px] h-[280px] w-[280px] rounded-full bg-indigo-500/10 blur-[110px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.95fr_0.85fr] lg:gap-14">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex rounded-full border border-blue-500/10 bg-blue-500/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-blue-500">
                Soft SanCa IT
              </span>

              <h2 className="mx-auto mt-6 max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-4xl lg:mx-0 lg:text-5xl">
                Construyamos algo increíble juntos.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0">
                Diseñamos soluciones digitales modernas, escalables y enfocadas
                en resultados reales para empresas y marcas que quieren crecer.
              </p>

              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(37,99,235,0.24)] transition-all duration-300 hover:shadow-[0_24px_65px_rgba(37,99,235,0.35)] sm:w-auto"
              >
                Hablemos de tu proyecto

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            >
              <h3 className="text-center text-xl font-black text-slate-950 lg:text-left">
                Contacto
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:border-blue-500/20 hover:bg-white sm:px-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">
                        <Icon
                          size={18}
                          className="text-blue-500"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                          {item.title}
                        </p>

                        <span className="block truncate text-sm text-slate-700">
                          {item.value}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="flex flex-col items-center text-center lg:items-end lg:text-right"
            >
              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                src={logo}
                alt="Soft SanCa IT"
                className="w-[190px] object-contain drop-shadow-[0_0_30px_rgba(37,99,235,0.18)] sm:w-[220px] lg:w-[250px]"
              />

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600 sm:leading-8">
                Innovación, tecnología y desarrollo de soluciones digitales
                modernas para empresas que buscan crecer.
              </p>

              {/* TAGS */}
              <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-end">
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm transition duration-300 hover:border-blue-500/20 hover:text-blue-500"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="flex flex-col items-center justify-between gap-4 pt-7 text-center md:flex-row md:text-left"
        >
          <p className="text-sm text-slate-500">
            © 2026 Soft SanCa IT. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
            <span>Colombia</span>

            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            <span>Desarrollo de Software</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;