import { designProcessList } from "../utils/constants/constants";
import { useEffect, useRef } from "react";
import "../css/DesignProcess.css";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";

export default function DesignProcessSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const scrollRef = useRef(null); // Create a separate ref for useScroll

  const { scrollYProgress } = useScroll(
    (node) => {
      scrollRef.current = node;
    }, // Callback ref
    { offset: ["start end", "end start"] }
  );
  const sm = useTransform(scrollYProgress, [0, 8], [200, -2500]);

  useEffect(() => {
    designProcessList.forEach((process) => {
      if (inView) {
        process.videoPlayer.play();
      } else {
        process.videoPlayer.pause();
      }
    });
  }, [inView]);

  return (
    <div className="OuterContainer" ref={ref}>
      <section className="howIDoSection">
        <motion.h1 animate={useSlideOnScroll()}>HOW I DO</motion.h1>
      </section>
      {designProcessList.map((process) => (
        <section
          className="feedbackContainer designProcessContainer"
          key={process.step}
        >
          <motion.div className="serialNo" style={{ y: sm }}>
            {process.step}
          </motion.div>
          <div className="feedbackSection-description designProcess-description">
            <motion.div className="feedback-heading designProcess-heading">
              {process.title}
            </motion.div>
            <p className="feedback-content designProcess-content">
              {process.content}
            </p>
          </div>
          <div className="feedbackSection-video">
            <motion.video
              autoPlay
              muted
              ref={(el) => (process.videoPlayer = el)}
              className="mx-1 mb-5"
              style={{ maxWidth: "100%", height: "auto" }}
            >
              <source src={process.video} />
            </motion.video>
          </div>
        </section>
      ))}
    </div>
  );
}
