import { allProjects } from "../utils/constants/constants";
import "../css/AllProject.css";
import { Link } from "react-router-dom";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";
import { motion } from "framer-motion";

export default function AllProjectPage() {
  return (
    <div className="allProContainer container">
      <motion.h1 animate={useSlideOnScroll()}>MY PROJECTS</motion.h1>
      {allProjects.map((project, index) => {
        return (
          <section key={index}>
            <div>
              <div id="videoContainer">
                {project.video && (
                  <video loop muted id={`video-${index}`} autoPlay={true}>
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
                {project.image && (
                  <img src={project.image} alt="Project Image" />
                )}

                <button id="caseStudyBtn">
                  <Link to={project.btnLink}>
                    <div className="scene">
                      <div className="cube">
                        <span className="side top">
                          {project.buttonLabel} &gt;&gt;&gt;
                        </span>
                        <span className="side front">
                          {project.buttonLabel} &gt;&gt;&gt;
                        </span>
                      </div>
                    </div>
                  </Link>
                </button>
              </div>
              <article className="projectDescriptionContainer">
                <div>
                  <h1>{project.title}</h1>
                  <ul>
                    <li>
                      Type of Project <span>{project.type}</span>
                    </li>
                    {project.association && (
                      <li>
                        Association <span>{project.association}</span>
                      </li>
                    )}
                    {project.collaboration && (
                      <li>
                        Collaboration <span>{project.collaboration}</span>
                      </li>
                    )}
                    {project.duration && (
                      <li>
                        Project Duration <span>{project.duration}</span>
                      </li>
                    )}

                    <li>
                      Year <span>{project.year}</span>
                    </li>
                  </ul>
                </div>
                <p className="long-paragraph">{project.description}</p>
              </article>
            </div>
          </section>
        );
      })}
    </div>
  );
}
