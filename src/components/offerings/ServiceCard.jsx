

const ServiceCard = ({
  service,
  expanded,
  onClick,
}) => {
  return (
    <div
  onClick={onClick}
  className={`
    relative
    w-[320px]
    flex-shrink-0
    snap-start
    rounded-3xl
    overflow-hidden
    cursor-pointer
    bg-white
    shadow-lg
    transition-all
    duration-500
    ease-in-out
    hover:-translate-y-2
    hover:shadow-2xl
    self-start
    
    ${
      expanded
        ? "ring-2 ring-blue-500  scale-[1.02]"
        : ""
    }
  `}
>
      {/* Image */}

      <div className="relative h-46">

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />

        <div className="absolute inset-0 p-6 flex flex-col justify-end">

      

          <h3 className="text-3xl font-bold text-white">
            {service.title}
          </h3>

          <p className="text-blue-200 mt-2">
            {service.subtitle}
          </p>

        </div>

      </div>

      {/* Expandable Section */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${
            expanded
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="bg-blue-50 p-4">

          <p className="text-slate-600 leading-7">
            {service.description}
          </p>

          <ul className="mt-3 space-y-">

            {service.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600" />

                <span className="text-slate-700">
                  {point}
                </span>
              </li>
            ))}

          </ul>

          <button
            className="
              mt-8
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Learn More →
          </button>

        </div>
      </div>

    </div>
  );
};

export default ServiceCard;