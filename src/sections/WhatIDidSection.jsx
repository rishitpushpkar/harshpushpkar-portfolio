import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/sea-green";
import "../css/WhatIDidSection.css";
import { projects } from "../utils/constants/constants";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export default function WhatIDidSection() {
  useSlideOnScroll();
  const [splideRef, setSplideRef] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isCursorPaused, setIsCursorPaused] = useState(false);
  const [activeSlides, setActiveSlides] = useState(
    Array(projects.length).fill(false)
  );
  const videoRefs = useRef(Array(projects.length).fill(null));

  // Define the links for each slide
  const slideLinks = [
    "https://www.aerologixmaps.com/",
    "https://cypher.gozero.ooo/",
    "https://www.figma.com/proto/MossOx6VgYNV1apyOJqaAd/Apron---Product-Design-%26-UX-Case-Study?type=design&node-id=474-7737&t=0BlcLeW52It18sy0-0&scaling=contain&page-id=474%3A6366&starting-point-node-id=474%3A6367",
    // Add more links if needed
  ];

  const handleSlideChange = (splide) => {
    setIsCursorPaused(false);
    setActiveSlideIndex(splide.index);
    const newActiveSlides = Array(projects.length).fill(false);
    setActiveSlides(newActiveSlides);
    newActiveSlides[splide.index] = true;

    // Pause all videos except for the active slide
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === splide.index) {
          video.play().catch((error) => {
            // Autoplay was prevented, handle error or show user feedback
            console.error("Autoplay prevented:", error);
          });
        } else {
          video.pause();
        }
      }
    });
  };

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

  // Get the link for the active slide

  // Function to go to the next slide
  const nextSlide = () => {
    if (splideRef) {
      splideRef.go("+1");
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (splideRef) {
      splideRef.go("-1");
    }
  };

  const activeSlideLink = slideLinks[activeSlideIndex];
  return (
    <section className="whatIDidSection">
      <motion.h1 animate={useSlideOnScroll()}>WHAT I DID</motion.h1>
      <Splide
        className="splideElement p-0"
        aria-label="My Favorite Images"
        hasTrack={false}
        options={{
          type: "loop",
          width: "100vw",
          height: "100vh",
          gap: "5%",
          padding: { left: "20%", right: "20%" },
          focus: "center",
          pagination: false,
          breakpoints: {
            1800: {
              gap: "10%",
              padding: { left: "10%", right: "10%" },
            },
            1300: {
              gap: "10%",
              padding: { left: "2%", right: "2%" },
            },
            1025: {
              gap: "10%",
              padding: "0%",
            },
          },
        }}
        onActive={handleSlideChange}
        ref={setSplideRef}
      >
        <div className="changeCursorArrowBox">
          <div className="leftArea" onClick={prevSlide}></div>
          <div className="rightArea" onClick={nextSlide}></div>
        </div>
        <SplideTrack>
          {projects.map((project, index) => {
            return (
              <SplideSlide key={index} className="h-auto">
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
                      autoPlay={activeSlides[index]}
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )}
                  {project.image && (
                    <img src={project.image} alt="Project Image" />
                  )}
                  {activeSlideIndex === index && (
                    <Link to={activeSlideLink}>
                      <Button title={project.buttonLabel} />
                    </Link>
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
                      <li>
                        Project Duration <span>{project.duration}</span>
                      </li>
                      <li>
                        Year <span>{project.year}</span>
                      </li>
                    </ul>
                  </div>
                  <p className="long-paragraph">{project.description}</p>
                </article>
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </section>
  );
}
