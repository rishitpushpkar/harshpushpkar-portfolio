import { designProcessList } from "../utils/constants/constants";
import { useRef } from "react";
import "../css/DesignProcess.css";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DesignProcessSection() {
  const [ref, inView] = useInView({ threshold: 0.1 }); // Adjust the threshold value
  const videoPlayers = useRef({});

  const playHandler = (process) => {
    if (inView) {
      videoPlayers.current[process.step].play();
    } else {
      videoPlayers.current[process.step].pause();
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 4], [200, -2500]);

  return (
    <div className="OuterContainer" ref={ref}>
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
              ref={(el) => (videoPlayers.current[process.step] = el)}
              className="mx-1 mb-5"
              whileInView={() => playHandler(process)}
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
