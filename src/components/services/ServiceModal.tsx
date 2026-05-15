import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

type ServiceModalProps = {
  service: any;
  detail: any;
  label: string;
  onClose: () => void;
};

const ServiceModal = ({ service, detail, label, onClose }: ServiceModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
      >
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-24 -translate-y-24 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-24 translate-y-24 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10 max-h-[90vh] overflow-y-auto p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex items-start justify-between gap-5">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-blue-500/10 bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">
                {label}
              </span>

              <h3 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {service.title}
              </h3>

              <p className="mt-3 text-lg font-bold text-blue-600">
                {detail.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-blue-500/30 hover:text-blue-600"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>
          </div>

          <p className="max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            {detail.description}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <h4 className="mb-4 text-lg font-black text-slate-950">
                ¿Qué incluye?
              </h4>

              <div className="grid gap-3">
                {detail.benefits.map((benefit: string) => (
                  <div key={benefit} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-black text-white">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-slate-600">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-blue-500/10 bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] sm:p-6">
              <h4 className="mb-4 text-lg font-black">
                ¿Para quién es ideal?
              </h4>

              <p className="text-sm leading-7 text-blue-50">
                {detail.idealFor}
              </p>

              <a
                href="#contacto"
                onClick={onClose}
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15 hover:shadow-[0_14px_35px_rgba(15,23,42,0.18)]"
              >
                Quiero asesoría

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-white/20">
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceModal;