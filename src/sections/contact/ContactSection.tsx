import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="scroll-mt-17 sm:scroll-mt-21 relative w-full overflow-hidden bg-black py-16"
    >
      {/* GLOW SUPERIOR */}
      <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-400/10 blur-[120px]" />

      {/* GLOW INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto w-full">
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-start gap-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-8">
          <ContactInfoCard />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;