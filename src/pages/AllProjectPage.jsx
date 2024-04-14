import { allProjects } from "../utils/constants/constants";
import "../css/AllProject.css";
import { useState, useRef } from "react";

export default function AllProjectPage() {
  const [isCursorPaused, setIsCursorPaused] = useState(false);

  const videoRefs = useRef(Array(allProjects.length).fill(false));

  const handleVideoClick = (index) => {
    setIsCursorPaused(!isCursorPaused);
    // Toggle the playing state of the video
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play().catch((error) => {
          // Autoplay was prevented, handle error or show user feedback
          console.error("Autoplay prevented:", error);
        });
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="allProContainer container">
      <h1>MY PROJECTS</h1>
      {allProjects.map((project, index) => {
        return (
          <section key={index}>
            <div>
              <div
                id="videoContainer"
                className={` ${
                  isCursorPaused ? "playing-cursor" : "paused-cursor"
                }`}
                onClick={() => handleVideoClick(index)}
              >
                {project.video && (
                  <video
                    ref={(video) => (videoRefs.current[index] = video)}
                    loop
                    muted
                    id={`video-${index}`}
                    autoPlay={true}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
                {project.image && (
                  <img src={project.image} alt="Project Image" />
                )}
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
