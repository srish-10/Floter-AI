import { useRef, useState } from "react";
import services from "../../data/services";
import ServiceCard from "./ServiceCard";

const WhatWeDo = () => {
    const [activeCard, setActiveCard] = useState(0);
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -340,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 340,
            behavior: "smooth",
        });
    };

    return (
        <section id="about" className=" bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-14 text-xl">
                    <p className="text-blue-600 font-semibold uppercase tracking-widest">
                        Services
                    </p>

                    <p className="text-3xl font-bold mt-8 text-slate-800">
                        What We Do
                    </p>

                    <p className="text-slate-500 mt-6 max-w-6xl  leading-8">
                        We help organisations transform ideas into scalable digital
                        products through planning, design and implementation.
                    </p>
                </div>

                {/* Slider */}

                <div className="relative  h-[700px]">

                    {/* Left Button */}

                    <button
                        onClick={scrollLeft}
                        className="
                                absolute
                                left-2
                                top-[180px]
                                z-30
                                w-12
                                h-12
                                rounded-full
                                bg-white
                                shadow-xl
                                flex
                                items-center
                                justify-center
                                hover:bg-blue-600
                                hover:text-white
                                transition-all
                                duration-300
                        "
                    >
                        ←
                    </button>

                    {/* Right Button */}

                    <button
                        onClick={scrollRight}
                       className="
                                absolute
                                right-2
                                top-[180px]
                                z-30
                                w-12
                                h-12
                                rounded-full
                                bg-white
                                shadow-xl
                                flex
                                items-center
                                justify-center
                                hover:bg-blue-600
                                hover:text-white
                                transition-all
                                duration-300
                            "
                >→</button>
                <div
                ref={sliderRef}
                className="
                    flex
                    items-start
                    gap-5
                    overflow-x-auto
                    scroll-smooth
                    snap-x
                    snap-mandatory
                    px-4
                    h-full
                    scrollbar-hide
                "
                >
                    {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                expanded={activeCard === index}
                                onClick={() => setActiveCard(index)}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;