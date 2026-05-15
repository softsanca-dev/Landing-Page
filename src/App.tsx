import Navbar from "./components/layout/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import PriceSection from "./sections/PriceSection";
import ContactSection from "./sections/contact/ContactSection";
import Footer from "./sections/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        richColors={false}
        toastOptions={{
          classNames: {
            toast:
              "rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]",
            title: "text-slate-950 font-black",
            description: "text-slate-500 text-sm",
            actionButton: "bg-blue-600 text-white",
            cancelButton: "bg-slate-100 text-slate-700",
            closeButton: "bg-white border border-slate-200",
          },
        }}
      />

      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PriceSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;