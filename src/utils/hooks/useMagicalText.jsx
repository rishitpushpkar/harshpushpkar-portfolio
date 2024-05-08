import { useEffect, useRef } from "react";
import Splitting from "splitting";
import { gsap } from "gsap";

const useMagicalText = (targetRefs) => {
  const animationTriggeredRefs = useRef(Array(targetRefs.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && !animationTriggeredRefs.current[index]) {
          if (targetRefs[index].current) {
            Splitting();

            const tl = gsap.timeline();

            tl.fromTo(
              targetRefs[index].current.querySelectorAll(".word"),
              {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                rotate: "random(-90, 90)",
                filter: "blur(20px)",
                opacity: 0,
              },
              {
                x: 0,
                y: 0,
                rotate: 0,
                filter: "blur(0px)",
                opacity: 1,
                ease: "power3.out",
                duration: 1.5,
                stagger: {
                  amount: 3,
                },
              },
              "-=1"
            );

            animationTriggeredRefs.current[index] = true;
          }
        }
      });
    });

    targetRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [targetRefs]);

  return targetRefs;
};

export default useMagicalText;
