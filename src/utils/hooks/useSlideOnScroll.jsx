import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

const useSlideOnScroll = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: scrollY,
      transition: {
        type: "tween",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    });
  }, [scrollY, controls]);

  return controls;
};

export default useSlideOnScroll;
