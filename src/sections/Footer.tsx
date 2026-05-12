import {
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#f7f9fc] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.06),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.1fr_1px_1fr_1.1fr]">
        {/* Left */}
        <div>
          <h2 className="max-w-sm text-4xl font-black leading-tight text-slate-950">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
            Estamos listos para ayudarte a construir una solución moderna,
            profesional y enfocada en resultados.
          </p>

          <button className="mt-8 rounded-2xl border border-blue-500 bg-white px-7 py-4 text-sm font-bold text-blue-500 shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white">
            Hablemos de tu proyecto
          </button>
        </div>

        {/* Divider */}
        <div className="hidden bg-gradient-to-b from-transparent via-blue-500/30 to-transparent lg:block" />

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-black text-slate-950">
            Contáctanos
          </h3>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-blue-500" />
              <span className="text-slate-600">
                +57 300 123 4567
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail size={18} className="text-blue-500" />
              <span className="text-slate-600">
                hola@softsancait.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe size={18} className="text-blue-500" />
              <span className="text-slate-600">
                www.softsancait.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-blue-500" />
              <span className="text-slate-600">
                Colombia
              </span>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-start lg:items-center">
          <img
            src={logo}
            alt="Soft SanCa IT"
            className="w-[220px] object-contain"
          />

          <p className="mt-5 text-center text-sm leading-7 text-slate-500">
            Innovación, tecnología y soluciones digitales modernas.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 text-center text-sm text-slate-500">
          © 2026 Soft SanCa IT. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;