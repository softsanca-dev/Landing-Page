import { Users, ClipboardCheck, Code2, Rocket } from "lucide-react";

const processSteps = [
  { number: "01", title: "Descubrimiento", description: "Entendemos tus necesidades, objetivos y desafíos.", icon: Users },
  { number: "02", title: "Planeación", description: "Diseñamos la solución estratégica y tecnológica.", icon: ClipboardCheck },
  { number: "03", title: "Desarrollo", description: "Construimos tu software con calidad y buenas prácticas.", icon: Code2 },
  { number: "04", title: "Entrega", description: "Probamos, entregamos y acompañamos el lanzamiento.", icon: Rocket },
];

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#030918] px-6 py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.14),transparent_32%),radial-gradient(circle_at_85%_85%,rgba(37,99,235,0.14),transparent_34%)]" />

      <div className="container relative mx-auto w-full">
          <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-blue-500">
            Nuestro proceso
          </span>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Así <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">trabajamos</span>
          </h2>

        
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute left-[14%] right-[14%] top-[48px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid grid-cols-4 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group flex flex-col items-center text-center">
                  <div className="relative mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/45 bg-[#061126]/80 shadow-[0_0_35px_rgba(37,99,235,0.16)] transition duration-500 group-hover:-translate-y-2 group-hover:border-blue-500 group-hover:shadow-[0_0_55px_rgba(37,99,235,0.3)]">
                    <Icon size={34} className="text-blue-500 transition duration-500 group-hover:scale-110" />
                  </div>

                  <span className="mb-4 block w-[220px] text-center text-lg font-medium text-blue-500">
                    {step.number}
                  </span>

                  <h3 className="mb-4 block w-[220px] text-center text-xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="block w-[220px] text-center text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex flex-col gap-10 lg:hidden">
          <div className="absolute bottom-0 left-[34px] top-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative flex gap-6">
                <div className="relative z-10 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-[#061126]">
                  <Icon size={28} className="text-blue-500" />
                </div>

                <div className="pt-1 text-left">
                  <span className="mb-2 block text-xs font-bold tracking-[0.25em] text-blue-500">
                    {step.number}
                  </span>

                  <h3 className="mb-3 text-2xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="max-w-md text-base leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <div className="mx-auto mb-6 h-[3px] w-14 rounded-full bg-blue-500" />

          <h3 className="text-center text-xl font-black text-white md:text-2xl">
            Acompañamiento continuo después de la entrega
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-300 md:text-base">
            No solo construimos el producto. También acompañamos su lanzamiento,
            mejoras iniciales y evolución para asegurar una experiencia sólida y profesional.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;