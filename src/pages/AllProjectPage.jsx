import { allProjects } from "../utils/constants/constants";
import "../css/AllProject.css";
import { Link } from "react-router-dom";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";
import { motion } from "framer-motion";
import Button from "../components/Button/Button";

export default function AllProjectPage() {
  return (
    <div className="outer_container">
      <motion.h1 className="heading1" animate={useSlideOnScroll()}>
        MY PROJECTS
      </motion.h1>
      <div className="allProContainer container">
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
                  <Link to={project.btnLink}>
                    <Button title={project.buttonLabel} arrows={true} />
                  </Link>
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
    </div>
  );
}
