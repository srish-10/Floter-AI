const CarouselDots = ({
  slides,
  currentSlide,
  goTo,
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          className={`h-3 rounded-full transition-all duration-300
            ${
              currentSlide === index
                ? "w-10 bg-blue-500"
                : "w-3 bg-white"
            }`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;