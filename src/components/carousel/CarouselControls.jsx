const CarouselControls = ({ next, previous }) => {
  return (
    <>
      <button
        onClick={previous}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 shadow-lg hover:scale-105 transition"
      >
        ❮
      </button>

      <button
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 shadow-lg hover:scale-105 transition"
      >
        ❯
      </button>
    </>
  );
};

export default CarouselControls;