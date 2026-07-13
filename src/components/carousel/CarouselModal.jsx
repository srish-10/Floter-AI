import { useEffect } from "react";

const CarouselModal = ({ slide, onClose }) => {
  useEffect(() => {
    if (!slide) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [slide, onClose]);

  if (!slide) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
        p-6
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
              w-[95vw]
              md:w-[75vw]
              lg:w-[50vw]
              max-w-4xl
              max-h-[calc(100vh-5rem)]
              bg-white
              rounded-3xl
              shadow-2xl
              overflow-hidden
              animate-fadeIn
          "
      >
        {/* Image */}

        <div className="relative h-44 lg:h-48">

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              w-10
              h-10
              rounded-full
              bg-white
              shadow-lg
              text-slate-700
              hover:bg-red-500
              hover:text-white
              transition
            "
          >
            ✕
          </button>

          <div className="absolute bottom-6 left-8 text-white">

            <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
              {slide.title}
            </p>

            <p className="text-3xl font-bold mt-2">
              {slide.subtitle}
            </p>

          </div>

        </div>

        {/* Content */}

        <div className="p-6">

          <h3 className="text-lg font-bold text-slate-800">
            About this Service
          </h3>

          <p className="mt-2 text-slate-600 leading-7">
            {slide.description}
          </p>

          {slide.details && (
            <div className="grid grid-cols-2 gap-3 mt-6">

              {slide.details.map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    p-3
                    rounded-lg
                    bg-slate-100
                  "
                >
                  <div
                    className="
                      w-6
                      h-6
                      rounded-full
                      bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      test-xs
                      font-bold
                    "
                  >
                    ✓
                  </div>

                  <span className="text-slate-700 font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>
          )}

          <div className="flex justify-end gap-3 mt-5">

            <button
              onClick={onClose}
              className="
                px-5
                py-2.5
                rounded-xl
                border
                border-slate-300
                hover:bg-slate-100
                transition
              "
            >
              Close
            </button>

            <button
              className="
                px-6
                py-3
                rounded-xl
                bg-blue-600
                text-white
                hover:bg-blue-700
                transition
              "
            >
              Learn More
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CarouselModal;