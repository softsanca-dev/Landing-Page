import { Check, Clock, Plus, ShieldCheck } from "lucide-react";

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
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 text-slate-950 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.055),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.055),transparent_32%)]" />

<div className="container relative mx-auto w-full">
          <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-blue-500/15 bg-blue-500/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-blue-500">
            Cotización
          </span>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Precios base para iniciar tu proyecto
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Estos valores sirven como guía inicial. La cotización final depende
            del alcance, funcionalidades, complejidad y tiempo requerido.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/25 hover:shadow-[0_26px_75px_rgba(37,99,235,0.12)] md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.09),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col">
                <h3 className="text-3xl font-black leading-tight text-slate-950">
                  {plan.name}
                </h3>

                <p className="mt-4 min-h-[78px] text-sm leading-7 text-slate-600">
                  {plan.description}
                </p>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
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

                <div className="mt-8 h-[4px] w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {extraItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="text-blue-500" size={24} />
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="mx-auto mb-5 h-[4px] w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Cada proyecto es único. Primero entendemos tu necesidad, luego
            definimos alcance, funcionalidades y una cotización clara.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PriceSection;