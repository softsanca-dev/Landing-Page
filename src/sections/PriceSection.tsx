import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Plus, ShieldCheck, ChevronDown } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "$350.000",
    priceNote: "hasta $600.000",
    description:
      "Ideal para presentar tu marca, servicio o producto con una página clara y profesional.",
    features: [
      "Diseño moderno y responsive",
      "Secciones comerciales claras",
      "Formulario o botón de contacto",
      "Integración con redes sociales",
    ],
  },
  {
    name: "Sitio Web",
    price: "$600.000",
    priceNote: "hasta $1.200.000",
    description:
      "Para empresas que necesitan una presencia digital completa, confiable y bien estructurada.",
    features: [
      "Varias páginas internas",
      "Diseño visual personalizado",
      "Estructura profesional",
      "Adaptado a computador, tablet y celular",
    ],
  },
  {
    name: "Aplicación Web",
    price: "$1.400.000",
    priceNote: "desde",
    description:
      "Sistemas web para gestionar procesos, usuarios, información y operaciones del negocio.",
    features: [
      "Offline desde COP $1.400.000",
      "Online desde COP $1.600.000",
      "Adaptación mobile desde COP $1.700.000",
      "Funciones según necesidad",
    ],
  },
];

const extraItems = [
  {
    title: "Módulos adicionales",
    description:
      "Desde COP $250.000 por módulo, según complejidad y funcionalidades requeridas.",
    icon: Plus,
  },
  {
    title: "Mantenimiento y soporte",
    description:
      "Desde COP $50.000 para soporte técnico, ajustes, mejoras y acompañamiento.",
    icon: ShieldCheck,
  },
  {
    title: "Tiempo estimado",
    description:
      "Entre mes y medio y tres meses, dependiendo del alcance del proyecto.",
    icon: Clock,
  },
];

function PriceSection() {
  const [openExtra, setOpenExtra] = useState<number | null>(0);

  return (
    <section
      id="cotizacion"
      className="scroll-mt-24 relative overflow-hidden bg-white px-4 py-16 text-slate-950 sm:px-6 md:py-20 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.055),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.055),transparent_32%)]" />
      <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />
      <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-indigo-500/[0.04] blur-[140px]" />

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
                hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.65, ease: "easeOut" },
                },
              }}
              className="group relative flex min-h-[540px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/25 hover:shadow-[0_26px_75px_rgba(37,99,235,0.12)] md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.09),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

              <div className="relative flex flex-1 flex-col">
                <h3 className="text-3xl font-black leading-tight text-slate-950">
                  {plan.name}
                </h3>

                <p className="mt-4 min-h-[78px] text-sm leading-7 text-slate-600">
                  {plan.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-7 rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5 transition duration-300"
                >
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
                </motion.div>

                <div className="mt-7 h-px w-full bg-slate-200" />

                <div className="mt-7 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <motion.div
                      whileHover={{ x: 4 }}
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                        <Check size={13} className="text-blue-500" />
                      </div>

                      <span className="text-sm leading-6 text-slate-600">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 h-[4px] w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* MOBILE ACCORDION */}
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

        {/* DESKTOP EXTRA CARDS */}
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
                  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.55, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -5 }}
                className="group rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:border-blue-500/20"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition duration-300 group-hover:scale-105">
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