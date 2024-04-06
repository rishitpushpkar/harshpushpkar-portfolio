import "../css/WhatIDoSection.css";
import { motion } from "framer-motion";
import useMagicalText from "../utils/hooks/useMagicalText";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";

export default function WhatIDoSection() {
  const targetRef = useMagicalText();
  // ##############Text Animation################
  useMagicalText();
  // ##############Scroll LInked Animation################
  useSlideOnScroll();
  return (
    <section className="whatIDoSection">
      <motion.h1 animate={useSlideOnScroll()}>WHAT I DO</motion.h1>
      <article>
        <div>
          <motion.p data-splitting="words" ref={targetRef}>
            I Design the look and feel (UI)
            <br />
            of a digital product (Product Design)
            <br />
            for the end-users to improve their experiences (UX)
            <br />
            during their interaction with the product (IxD)
            <br />
            while aligning with business needs and goals (Strategy),
            <br />
            supported by thorough UX Research, testing (UXR).
            <br />
            <br />I also specialize in Video Editing, Graphic Designing &
            Branding and I am passionate about new trends in technology like AI,
            Metaverse.
          </motion.p>
        </div>
      </article>
      <div className="buttonContainer">
        <div></div>
        <div>
          <button>
            <div className="scene">
              <div className="cube">
                <span className="side top">WANNA KNOW MORE?</span>
                <span className="side front">WANNA KNOW MORE?</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
