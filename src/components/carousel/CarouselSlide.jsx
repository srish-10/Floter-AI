const CarouselSlide = ({ slide, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        relative
        w-full
        h-[550px]
        flex-shrink-0
        cursor-pointer
        overflow-hidden
        group
      "
    >
      {/* Background Image */}
      

      <img
        src={slide.image}
        alt={slide.title}
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-8 lg:px-12 text-white">

          <div className="max-w-2xl">

            <p className="uppercase tracking-[4px] text-blue-300 font-semibold">
              {slide.title}
            </p>

            <p className="text-xl lg:text-5xl font-bold mt-4 leading-tight text-white">
              {slide.subtitle}
            </p>

            <p className="mt-8 text-lg lg:text-xl leading-8 text-slate-200">
              {slide.description}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="
                mt-10
                px-8
                py-4
                rounded-xl
                bg-blue-600
                text-white
                font-semibold
                hover:bg-blue-700
                hover:scale-105
                transition-all
                duration-300
                shadow-xl
              "
            >
              Learn More →
            </button>

          </div>

        </div>
      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
};

export default CarouselSlide;