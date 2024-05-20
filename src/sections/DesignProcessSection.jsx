import { designProcessList } from "../utils/constants/constants";
import { useRef } from "react";
import "../css/DesignProcess.css";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";

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

  const sm = useTransform(scrollYProgress, [0, 8], [200, -2500]);

  return (
    <div className="OuterContainer" ref={ref}>
      <section className="howIDoSection">
        <motion.h1 animate={useSlideOnScroll()}>HOW I DO</motion.h1>
        <article>
          <div>
            <p>
              I begin by asking simple questions such as &quot;what,&quot;
              &quot;why,&quot; and &quot;whom.&quot; This helps establish the
              foundation for my design projects and better understand the needs
              and goals. Questions like &quot;how&quot; come later, once there
              is a sufficient understanding of the goal. Once all questions are
              answered, I explore possible solutions. This is where numerous
              ideas emerge. The ideas begin to take shape in the design process,
              in the form of working prototypes that mimic the actual product.
              However, the story is far from over. As we know, change is
              inevitable and necessary for refinement. Therefore, feedback is
              crucial at every stage of the process.
            </p>
          </div>
        </article>
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
