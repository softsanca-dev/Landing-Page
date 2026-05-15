import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { serviceDetails, serviceLabels } from "../data/serviceDetails";
import ServiceCard from "../components/services/ServiceCard";
import ServiceModal from "../components/services/ServiceModal";
import ServicesMobileCarousel from "../components/services/ServicesMobileCarousel";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const closeModal = () => setSelectedService(null);

  const selected =
    selectedService !== null
      ? {
          service: services[selectedService],
          detail: serviceDetails[selectedService],
          label: serviceLabels[selectedService],
        }
      : null;

  return (
    <section
      id="servicios"
      className="scroll-mt-18 sm:scroll-mt-24 relative overflow-hidden bg-[#f6f8fc] px-4 py-16 text-slate-950 sm:px-6 md:py-20 lg:px-10"
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

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Explora cada servicio y descubre cómo puede ayudarte según la etapa,
            necesidad y objetivo de tu empresa.
          </p>
        </motion.div>

        <ServicesMobileCarousel onSelectService={setSelectedService} />

        <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              label={serviceLabels[index]}
              index={index}
              onClick={() => setSelectedService(index)}
            />
          ))}
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
  className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-2xl border border-blue-500/10 bg-white px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-blue-50/60 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]"
>
  <span>Ver cotización</span>

  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600">
    <ArrowRight size={16} />
  </div>
</a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ServiceModal
            service={selected.service}
            detail={selected.detail}
            label={selected.label}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default ServicesSection;