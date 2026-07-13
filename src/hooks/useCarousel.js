import { useEffect, useState } from "react";

const AUTO_PLAY_INTERVAL = 5000;

export default function useCarousel(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previous = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const goTo = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return {
    currentSlide,
    next,
    previous,
    goTo,
  };
}

