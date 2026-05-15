import { useRef, useState } from "react";
import { services } from "../../data/services";
import { serviceLabels } from "../../data/serviceDetails";
import ServiceCard from "./ServiceCard";

type ServicesMobileCarouselProps = {
  onSelectService: (index: number) => void;
};

const serviceGroups = [
  services.slice(0, 2),
  services.slice(2, 4),
  services.slice(4, 6),
];

const ServicesMobileCarousel = ({
  onSelectService,
}: ServicesMobileCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slideWidth = carousel.clientWidth;
    const current = Math.round(carousel.scrollLeft / slideWidth);
    setActiveSlide(current);
  };

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({
      left: carousel.clientWidth * index,
      behavior: "smooth",
    });

    setActiveSlide(index);
  };

  return (
    <div className="md:hidden">
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {serviceGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex min-w-full snap-center flex-col gap-4">
            {group.map((service) => {
              const realIndex = services.findIndex(
                (item) => item.title === service.title
              );

              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  label={serviceLabels[realIndex]}
                  index={realIndex}
                  isMobile
                  onClick={() => onSelectService(realIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {serviceGroups.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-10 bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.45)]"
                : "w-6 bg-blue-500/20"
            }`}
            aria-label={`Ir al grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesMobileCarousel;