import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Clock,
  Plus,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/logo.png";

const plans = [
  {
    name: "Landing Page",
    price: "$350.000",
    priceNote: "hasta $600.000 COP",
    description:
      "Página de una sola vista para presentar un servicio, producto o marca de forma clara y profesional.",
    features: [
      "Diseño responsive para celular, tablet y computador",
      "Secciones principales: inicio, beneficios, servicios y contacto",
      "Formulario o botón directo a WhatsApp",
      "Ideal para campañas, servicios específicos o presencia inicial",
    ],
  },
  {
    name: "Sitio Web",
    price: "$600.000",
    priceNote: "hasta $1.200.000 COP",
    description:
      "Sitio más completo para empresas que necesitan explicar varios servicios y generar mayor confianza.",
    features: [
      "Varias secciones o páginas internas según el alcance",
      "Diseño visual personalizado y alineado a la marca",
      "Estructura clara para servicios, empresa, contacto y llamadas a la acción",
      "Adaptado a computador, tablet y celular",
    ],
  },
  {
    name: "Aplicación Web",
    price: "$1.400.000",
    priceNote: "desde COP",
    description:
      "Sistema web para gestionar procesos, usuarios, datos o funciones internas de un negocio.",
    features: [
      "Versión offline desde $1.400.000 COP",
      "Versión online desde $1.600.000 COP",
      "Adaptación mobile desde $1.700.000 COP",
      "El valor final depende de módulos, usuarios, datos e integraciones",
    ],
  },
];

const extraItems = [
  {
    title: "Módulos adicionales",
    description:
      "Funciones extra como panel administrativo, gestión de usuarios, reportes, formularios avanzados, reservas, filtros, dashboards o integraciones. Desde $250.000 COP según complejidad.",
    icon: Plus,
  },
  {
    title: "Mantenimiento y soporte",
    description:
      "Acompañamiento posterior a la entrega para ajustes menores, corrección de errores, mejoras pequeñas, revisión técnica y soporte básico. Desde $50.000 COP según necesidad.",
    icon: ShieldCheck,
  },
  {
    title: "Tiempo estimado",
    description:
      "Una landing o sitio sencillo puede tardar menos tiempo. Proyectos más completos, aplicaciones web o sistemas personalizados pueden tomar entre 6 y 12 semanas según alcance, revisiones y funcionalidades.",
    icon: Clock,
  },
];

function PriceSection() {
  const [openExtra, setOpenExtra] = useState<number | null>(0);

  return (
    <section
      id="cotizacion"
      className="scroll-mt-17 sm:scroll-mt-24 relative overflow-hidden bg-white px-4 py-16 text-slate-950 sm:px-6 md:py-20 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.055),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.055),transparent_32%)]" />

      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-indigo-500/[0.04] blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Precios base para iniciar tu proyecto
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Estos valores son una referencia inicial. La cotización final
            depende del alcance, funcionalidades, diseño, integraciones y
            tiempos del proyecto.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14 } },
          }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.96,
                  filter: "blur(8px)",
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.65,
                    ease: "easeOut",
                  },
                },
              }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/25 hover:shadow-[0_26px_75px_rgba(37,99,235,0.12)] md:min-h-[620px] md:p-8"
            >
               <img
  src={logo}
  alt="Soft SanCa IT"
  className="
    pointer-events-none
    absolute
    right-[-120px]
    top-[-90px]
    z-0
    w-[420px]
    select-none
    object-contain
    opacity-[0.1]
    grayscale
    rotate-[10deg]
    transition-all
    duration-500
    group-hover:scale-[1.03]
    group-hover:opacity-[0.07]

    sm:right-[-100px]
    sm:top-[0px]
    sm:w-[500px]

    md:right-[-100px]
    md:top-[0px]
    md:w-[560px]

    lg:right-[-100px]
    lg:top-[0px]
    lg:w-[620px]
  "
/>


              <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.09),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute right-0 top-0 z-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

              <div className="relative z-10 flex flex-1 flex-col">
                <h3 className="text-3xl font-black leading-tight text-slate-950">
                  {plan.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:min-h-[70px]">
                  {plan.description}
                </p>

                <div className="mt-7 rounded-[1.7rem] border border-slate-200 bg-slate-50/90 p-5 transition duration-300">
                  <div className="flex items-start gap-2">
                    <span className="mt-[7px] text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                      COP
                    </span>

                    <span className="text-[34px] font-black leading-none tracking-[-0.04em] text-blue-500 sm:text-[38px]">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-2 pl-[44px] text-sm font-semibold text-slate-500">
                    {plan.priceNote}
                  </p>
                </div>

                <div className="mt-7 h-px w-full bg-slate-200" />

                <div className="mt-7 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                        <Check size={13} className="text-blue-500" />
                      </div>

                      <span className="text-sm leading-6 text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-blue-50/60 hover:text-blue-600 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]"
                >
                  Solicitar cotización

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </a>

                <div className="mt-6 h-[4px] w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-7 grid gap-4 md:hidden">
          {extraItems.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openExtra === index;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenExtra(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon className="text-blue-500" size={24} />
                    </div>

                    <h3 className="text-base font-black text-slate-950">
                      {item.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-blue-500"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-7 hidden gap-6 md:grid md:grid-cols-3"
        >
          {extraItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 28,
                    filter: "blur(8px)",
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.55,
                      ease: "easeOut",
                    },
                  },
                }}
                className="group rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/20"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition duration-300">
                  <Icon className="text-blue-500" size={25} />
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default PriceSection;