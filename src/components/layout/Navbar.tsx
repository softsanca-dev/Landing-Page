import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Layers,
  Workflow,
  BadgeDollarSign,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import logoImg from "../../assets/logolargo.webp";

const sections = ["inicio", "servicios", "proceso", "cotizacion", "contacto"];

const navItems = [
  { id: "inicio", label: "Inicio", description: "Vista principal", icon: Home },
  {
    id: "servicios",
    label: "Servicios",
    description: "Soluciones digitales",
    icon: Layers,
  },
  {
    id: "proceso",
    label: "Flujo",
    description: "Cómo trabajamos",
    icon: Workflow,
  },
  {
    id: "cotizacion",
    label: "Cotización",
    description: "Precios base",
    icon: BadgeDollarSign,
  },
  {
    id: "contacto",
    label: "Contacto",
    description: "Hablemos del proyecto",
    icon: MessageCircle,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const sectionIndex = sections.indexOf(activeSection);

  const navLink = (id: string, label: string) => {
    const currentIndex = sections.indexOf(id);
    const isPassed = currentIndex <= sectionIndex;

    return (
      <a
        href={`#${id}`}
        className={`relative pb-2 transition-all duration-500 ${
          isPassed ? "text-blue-400" : "text-white/80 hover:text-blue-400"
        }`}
      >
        {label}

        <span
          className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-500 ease-in-out ${
            isPassed ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </a>
    );
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0a0f2c]/95 backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="flex shrink-0 items-center">
          <div className="flex w-[140px] items-center sm:w-[170px] lg:w-[180px]">
            <img
              src={logoImg}
              loading="lazy"
              decoding="async"
              alt="Soft SanCa IT"
              className="h-auto w-full object-contain"
            />
          </div>
        </a>

        <div className="ml-auto mr-10 hidden items-center space-x-10 text-[13px] font-medium uppercase tracking-widest lg:flex">
          {navLink("inicio", "Inicio")}
          {navLink("servicios", "Servicios")}
          {navLink("proceso", "Flujo")}
          {navLink("cotizacion", "Cotización")}
          {navLink("contacto", "Contacto")}
        </div>

        <div className="hidden shrink-0 items-center lg:flex">
          <a
            href="https://wa.me/573145944999?text=Hola,%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/20"
          >
            Hablemos
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur-xl transition active:scale-95 lg:hidden"
          aria-label="Abrir menú"
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-950/70 px-4 pt-[78px] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#071024]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            >
              <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[220px] w-[220px] rounded-full bg-blue-500/20 blur-[90px]" />
              <div className="pointer-events-none absolute bottom-[-120px] left-[-90px] h-[240px] w-[240px] rounded-full bg-violet-500/15 blur-[100px]" />

              <div className="relative z-10">
                <div className="mb-5 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-300">
                    Navegación
                  </p>
                  <h3 className="mt-2 text-xl font-black text-white">
                    ¿A dónde quieres ir?
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Explora las secciones principales de Soft SanCa IT.
                  </p>
                </div>

                <div className="grid gap-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setMenuOpen(false)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.035,
                          ease: "easeOut",
                        }}
                        className={`group flex items-center gap-4 rounded-[1.35rem] border p-4 transition-all duration-300 active:scale-[0.98] ${
                          isActive
                            ? "border-blue-400/30 bg-blue-500/15 text-white shadow-[0_14px_35px_rgba(37,99,235,0.18)]"
                            : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-blue-400/20 hover:bg-white/[0.07]"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "bg-white/10 text-blue-300 group-hover:bg-blue-500/20"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-black uppercase tracking-[0.14em]">
                              {item.label}
                            </span>

                            {isActive && (
                              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
                            )}
                          </div>

                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div> 
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;