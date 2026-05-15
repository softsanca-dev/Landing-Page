import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  label: string;
  icon: React.ElementType;
  index: number;
  isMobile?: boolean;
  onClick: () => void;
};

const ServiceCard = ({
  title,
  description,
  label,
  icon: Icon,
  index,
  isMobile = false,
  onClick,
}: ServiceCardProps) => {
  return (
    <motion.article
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      initial={!isMobile ? { opacity: 0, y: 28, scale: 0.98 } : undefined}
      whileInView={!isMobile ? { opacity: 1, y: 0, scale: 1 } : undefined}
      whileHover={!isMobile ? { y: -8 } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:border-blue-500/25 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)] ${
        isMobile ? "min-h-[250px]" : "min-h-[280px] lg:p-8"
      }`}
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-blue-500/20" />

      <div className="relative z-10 mb-6 flex items-center justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/[0.07] transition duration-500 group-hover:scale-105 lg:h-16 lg:w-16">
          <Icon size={30} className="text-blue-500" />
        </div>

        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
      </div>

      <h3 className="mb-4 text-2xl font-black text-slate-950">{title}</h3>

      <p className="max-w-md text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-7 flex items-center justify-between">
        <div className="h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-24" />

        <span className="inline-flex translate-x-2 items-center gap-2 text-xs font-black text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Ver detalle
          <ArrowRight size={15} />
        </span>
      </div>
    </motion.article>
  );
};

export default ServiceCard;