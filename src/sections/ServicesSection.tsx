import {
  LayoutTemplate,
  Globe2,
  MonitorCog,
  Wifi,
  Settings2,
  LifeBuoy,
} from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas enfocadas en presentar tu marca, captar clientes y convertir visitas en contactos.",
    icon: LayoutTemplate,
  },
  {
    title: "Sitios Web",
    description:
      "Webs modernas, rápidas y adaptadas a computador, tablet y celular.",
    icon: Globe2,
  },
  {
    title: "Aplicaciones Web",
    description:
      "Plataformas interactivas para gestionar procesos, usuarios, datos y operaciones.",
    icon: MonitorCog,
  },
  {
    title: "Apps Web Online / Offline",
    description:
      "Aplicaciones web que pueden seguir funcionando incluso con conexión limitada.",
    icon: Wifi,
  },
  {
    title: "Software a la Medida",
    description:
      "Soluciones personalizadas según las necesidades reales de tu negocio.",
    icon: Settings2,
  },
  {
    title: "Mantenimiento y Soporte",
    description:
      "Mejoras, actualizaciones, corrección de errores y acompañamiento técnico.",
    icon: LifeBuoy,
  },
];

function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-[#f6f8fc] px-6 py-20 text-slate-950 md:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.08),transparent_30%)]" />

<div className="container relative mx-auto w-full">
          <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-blue-500/15 bg-blue-500/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-blue-500">
            Servicios
          </span>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Soluciones digitales para hacer crecer tu negocio
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Creamos sitios, plataformas y sistemas pensados para verse bien,
            funcionar rápido y adaptarse a cualquier dispositivo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/25 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-blue-500/20" />

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/[0.07]">
                  <Icon size={32} className="text-blue-500" />
                </div>

                <h3 className="mb-4 text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="max-w-md text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-24" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;