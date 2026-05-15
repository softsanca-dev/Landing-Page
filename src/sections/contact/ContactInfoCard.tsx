import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactBenefits } from "./contact.data";

const ContactInfoCard = () => {
  const [openInfo, setOpenInfo] = useState(false);

  const Benefits = () => (
    <div className="mt-8 flex flex-col gap-4">
      {contactBenefits.map((benefit, index) => (
        <motion.div
          key={benefit}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
        >
          <span className="text-lg text-blue-500">✓</span>
          <p className="text-sm font-semibold text-white">{benefit}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-[32px] border border-blue-500/10 bg-gradient-to-br from-[#020617] to-[#0f172a] p-7 lg:pr-0 shadow-[0_10px_40px_rgba(15,23,42,0.08)] lg:p-9"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

      <div className="relative z-10 min-w-0">
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setOpenInfo((prev) => !prev)}
            className="flex w-full items-center justify-center pb-2"
            aria-label="Mostrar información de contacto"
          >
            <motion.div
              animate={{ rotate: openInfo ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>
        </div>

        <motion.h2
          className="max-w-full text-[clamp(2.35rem,4vw,3.45rem)] font-black leading-[0.95] tracking-[-0.045em] text-white"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <span className="block break-words bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            CONTÁCTANOS
          </span>
        </motion.h2>

        <div className="mt-6 lg:hidden">
          <AnimatePresence initial={false}>
            {openInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="max-w-md pt-5 text-sm leading-relaxed text-slate-300">
                  Comunícate con nosotros para materializar tus futuros proyectos.
                  Estamos listos para ayudarte a llevar tu empresa al siguiente nivel.
                </p>

                <Benefits />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden lg:block">
          <motion.p
            className="max-w-md pt-8 text-sm leading-relaxed text-slate-300 sm:pt-10 sm:text-[15px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Comunícate con nosotros para materializar tus futuros proyectos.
            Estamos listos para ayudarte a llevar tu empresa al siguiente nivel.
          </motion.p>

          <Benefits />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;