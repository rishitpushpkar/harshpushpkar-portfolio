import "../css/WhatIDoSection.css";
import { motion } from "framer-motion";
import useMagicalText from "../utils/hooks/useMagicalText";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function WhatIDoSection() {
  const paragraphRef = useRef(null);
  // ##############Text Animation################
  useMagicalText([paragraphRef]);
  // ##############Scroll LInked Animation################
  useSlideOnScroll();
  return (
    <section className="whatIDoSection">
      <motion.h1 animate={useSlideOnScroll()}>WHAT I DO</motion.h1>
      <article>
        <div>
          <motion.p data-splitting="words" ref={paragraphRef}>
            I Design the look and feel <em>(UI)</em>
            <br />
            of a digital product <em>(Product Design)</em>
            <br />
            for the end-users to improve their experiences <em>(UX)</em>
            <br />
            during their interaction with the product <em>(IxD)</em>
            <br />
            while aligning with business needs and goals <em>(Strategy)</em>,
            <br />
            supported by thorough UX Research, testing <em>(UXR)</em>.
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
            <Link to="/about">
              <div className="scene">
                <div className="cube">
                  <span className="side top">WANNA KNOW MORE?</span>
                  <span className="side front">WANNA KNOW MORE?</span>
                </div>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
