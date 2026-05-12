import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

const labels = [
  "Conversión",
  "Presencia digital",
  "Gestión",
  "Conectividad",
  "Personalización",
  "Continuidad",
];

const serviceGroups = [
  services.slice(0, 2),
  services.slice(2, 4),
  services.slice(4, 6),
];

function ServicesSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slideWidth = carousel.clientWidth;
    const current = Math.round(carousel.scrollLeft / slideWidth);
    setActiveSlide(current);
  };

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({
      left: carousel.clientWidth * index,
      behavior: "smooth",
    });

    setActiveSlide(index);
  };

  return (
    <section
      id="servicios"
      className="scroll-mt-24 relative overflow-hidden bg-[#f6f8fc] px-4 py-16 text-slate-950 sm:px-6 md:py-20 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.08),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
   
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Soluciones digitales para hacer crecer tu negocio
          </h2>

  
        </motion.div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {serviceGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex min-w-full snap-center flex-col gap-4"
              >
                {group.map((service) => {
                  const Icon = service.icon;
                  const realIndex = services.findIndex(
                    (item) => item.title === service.title
                  );

                  return (
                    <article
                      key={service.title}
                      className="group relative min-h-[230px] overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)]"
                    >
                      <div className="absolute right-0 top-0 h-28 w-28 translate-x-12 -translate-y-12 rounded-full bg-blue-500/10 blur-2xl" />

                      <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/[0.07]">
                          <Icon size={28} className="text-blue-500" />
                        </div>

                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                          {labels[realIndex]}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-black text-slate-950">
                        {service.title}
                      </h3>

                      <p className="text-sm leading-7 text-slate-600">
                        {service.description}
                      </p>

                      <div className="mt-6 h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                    </article>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-center gap-2">
            {serviceGroups.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-10 bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.45)]"
                    : "w-6 bg-blue-500/20"
                }`}
                aria-label={`Ir al grupo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="group relative min-h-[260px] overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/25 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)] lg:min-h-[280px] lg:p-8"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-blue-500/20" />

                <div className="relative z-10 mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/[0.07] transition duration-500 group-hover:scale-105 lg:h-16 lg:w-16">
                    <Icon size={30} className="text-blue-500" />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {labels[index]}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="max-w-md text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-24" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-[2rem] border border-blue-500/10 bg-white/80 p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl md:flex-row md:p-8 md:text-left"
        >
          <div>
            <h3 className="text-2xl font-black text-slate-950">
              ¿No sabes cuál solución necesitas?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              Te ayudamos a identificar la opción ideal según tu negocio,
              presupuesto, objetivos y etapa actual.
            </p>
          </div>

          <a
            href="#cotizacion"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_20px_50px_rgba(37,99,235,0.32)]"
          >
            Ver cotización
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;