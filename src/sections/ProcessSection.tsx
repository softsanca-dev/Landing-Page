import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../data/process";

function ProcessSection() {
  return (
    <section
      id="proceso"
      className="scroll-mt-21 relative overflow-hidden bg-[#030918] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-10"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_85%_85%,rgba(37,99,235,0.12),transparent_34%)]" />

      {/* DECORATION */}
      <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full border border-blue-500/10" />

      <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full border border-blue-500/10" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
    

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Así{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              trabajamos
            </span>
          </h2>

       
        </motion.div>

        {/* DESKTOP */}
        <div className="relative hidden lg:block">
          <div className="absolute left-[11%] right-[11%] top-[48px] h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.22,
                },
              },
            }}
            className="grid grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 45,
                      scale: 0.82,
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
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* ICON */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.22 + 0.15,
                      ease: "easeOut",
                    }}
                    className="relative mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/40 bg-[#061126]/90 shadow-[0_0_35px_rgba(37,99,235,0.16)] transition duration-500 group-hover:-translate-y-2 group-hover:border-blue-500 group-hover:shadow-[0_0_60px_rgba(37,99,235,0.32)]"
                  >
                    {/* PULSE */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{
                        opacity: [0, 1, 0],
                        scale: [0.7, 1.45, 1.8],
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: index * 0.22 + 0.25,
                        ease: "easeOut",
                      }}
                      className="absolute inset-[-10px] rounded-full border border-blue-500/25"
                    />

                    <div className="absolute inset-[-7px] rounded-full border border-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                    <Icon
                      size={34}
                      className="text-blue-500 transition duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* NUMBER */}
                  <span className="mb-4 block w-[220px] text-center text-lg font-semibold text-blue-500">
                    {step.number}
                  </span>

                  {/* TITLE */}
                  <h3 className="mb-4 block w-[220px] text-center text-xl font-black text-white">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="block w-[220px] text-center text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>

                  {/* ARROW */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.22 + 0.55,
                      }}
                    >
                      <ArrowRight
                        size={22}
                        className="absolute right-[-23px] top-[38px] text-blue-500/50"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* MOBILE / TABLET */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="relative flex flex-col gap-8 lg:hidden"
        >
          <div className="absolute bottom-0 left-[34px] top-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -35,
                    filter: "blur(8px)",
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="relative flex gap-5 rounded-[1.5rem] border border-white/5 bg-white/[0.025] p-4 backdrop-blur-sm"
              >
                <div className="relative z-10 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-[#061126]">
                  <Icon size={28} className="text-blue-500" />
                </div>

                <div className="pt-1 text-left">
                  <span className="mb-2 block text-xs font-bold tracking-[0.25em] text-blue-500">
                    {step.number}
                  </span>

                  <h3 className="mb-2 text-2xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
       
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSection;