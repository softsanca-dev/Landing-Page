import Navbar from "./components/layout/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import PriceSection from "./sections/PriceSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PriceSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;