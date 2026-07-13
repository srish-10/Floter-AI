
import { useState } from "react";

import carouselData from "../../data/carouselData";
import useCarousel from "../../hooks/useCarousel";

import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselControls";
import CarouselDots from "./CarouselDots";
import CarouselModal from "./CarouselModal";

const HeroCarousel = () => {
  const {
    currentSlide,
    next,
    previous,
    goTo,
  } = useCarousel(carouselData.length);

  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <>
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          {/* Carousel Wrapper */}

          <div className="relative w-[80%] mx-auto overflow-hidden rounded-3xl shadow-2xl">

            {/* Slides */}

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {carouselData.map((slide) => (
                <CarouselSlide
                  key={slide.id}
                  slide={slide}
                  onClick={() => setSelectedSlide(slide)}
                />
              ))}
            </div>

            {/* Navigation */}

            <CarouselControls
              next={next}
              previous={previous}
            />

            {/* Dots */}

            <CarouselDots
              slides={carouselData}
              currentSlide={currentSlide}
              goTo={goTo}
            />

          </div>

        </div>
      </section>

      {/* Popup */}

      {selectedSlide && (
        <CarouselModal
          slide={selectedSlide}
          onClose={() => setSelectedSlide(null)}
        />
      )}
    </>
  );
};



export default HeroCarousel;