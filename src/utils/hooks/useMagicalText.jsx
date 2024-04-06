import { useEffect, useRef } from "react";
import Splitting from "splitting";
import { gsap } from "gsap";

const useMagicalText = () => {
  const animationTriggeredRef = useRef(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationTriggeredRef.current) {
          // Run the animation only if it hasn't been triggered before and the target is in view
          if (targetRef.current) {
            Splitting();

            // GSAP timeline for animations
            const tl = gsap.timeline();

            // Animation for the words within the <p> element
            tl.fromTo(
              "p .word",
              {
                // Initial state
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                rotate: "random(-90, 90)",
                filter: "blur(20px)",
                opacity: 0,
              },
              {
                // Final state
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

            // Set the flag to true to indicate that the animation has been triggered
            animationTriggeredRef.current = true;
          }
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return targetRef; // Return the ref object
};

export default useMagicalText;
