import { useRef } from "react";

const useHorizontalScroll = () => {
  const containerRef = useRef(null);

  const scrollToCard = (index) => {
    const container = containerRef.current;

    if (!container) return;

    const card = container.children[index];

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return {
    containerRef,
    scrollToCard,
  };
};

export default useHorizontalScroll;