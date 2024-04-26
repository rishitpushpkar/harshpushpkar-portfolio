import mypic from "../assets/images/about_picture1.png";
import mypic_2 from "../assets/images/about_picture2.png";
import narutoSketch from "../assets/images/Naruto_sketch.png";
import historyArt from "../assets/images/Historical_art.png";
import mobileParts from "../assets/images/Phone_parts_image.png";
import travelPic from "../assets/images/Travel_pic.png";
import nightPic from "../assets/images/Night_pic.png";
import sunSetPic from "../assets/images/Lake_sun_set.png";
import CyclingPic from "../assets/images/Cycling.svg";
import iceCreamPic from "../assets/images/Icecream.svg";
import useSlideOnScroll from "../utils/hooks/useSlideOnScroll";
import { motion } from "framer-motion";

import "../css/AboutPage.css";
import { experiences } from "../utils/constants/constants";

export default function AboutPage() {
  useSlideOnScroll();
  return (
    <>
      <div className="aboutPageContainer ">
        <section className="aboutSection">
          <motion.h1 animate={useSlideOnScroll()}>THIS IS ME</motion.h1>
          <div className="row align-items-center ">
            <p className="col-lg-8 text-center text-lg-end order-2 order-lg-1">
              Hello there! I&apos;m <strong>Harsh Pushpkar</strong>, a creative
              soul hailing from the vibrant city of Bhopal, the heart of Madhya
              Pradesh. I embarked on my journey by graduating in Mechanical
              Engineering in 2019, setting the stage for a dynamic career that
              seamlessly blends technology and creativity.
            </p>
            <div className="col-lg-4 myPicContainer order-1 order-lg-2">
              <img src={mypic} alt="My Picture" />
            </div>
          </div>
        </section>
        <section className="experienceSection">
          <motion.h1 animate={useSlideOnScroll()}>EXPERIENCE</motion.h1>
          {experiences.map((experience, index) => {
            return (
              <article className="row" key={index}>
                <div className="col-lg-2">
                  <img
                    src={experience.companyLogo}
                    alt={`${experience.company} Logo`}
                  />
                </div>
                <div className="col-lg-10">
                  <div className="company_row ">
                    <h2>{experience.company}</h2>

                    <div>
                      <h3>{experience.role}</h3>
                      <p>{experience.date}</p>
                    </div>
                  </div>
                  <div className="company_projects ">
                    <ul>
                      <h4>Projects:</h4>
                      {experience.projects.map((project, index) => {
                        return <li key={index + 100}>{project}</li>;
                      })}
                    </ul>
                  </div>
                  <p className="company_description">
                    {experience.description}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
        <section className="moreThingsSection">
          <motion.h1 animate={useSlideOnScroll()}>MORE THINGS</motion.h1>
          <article className="mts_1">
            <div className="row">
              <div className="myPic2Container col-lg-4">
                <img src={mypic_2} alt="My Picture 2" />
              </div>
              <p className="col-lg-8">
                Over the past 3 years, I&apos;ve immersed myself in the
                fascinating world of designing digital products, collaborating
                with startups and international clients. But my passion
                doesn&apos;t stop there—I&apos;ve been refining my craft in
                video editing for over 9 years and graphic designing for 4. To
                add a cherry on top, I&apos;ve honed my skills through a Google
                and Coursera certification in User Experience Design
              </p>
            </div>
          </article>
          <article className="mts_2">
            <div>
              <p>
                What sets me apart is not just my technical prowess, but my
                insatiable curiosity and diverse interests. From the abstract
                realms of Art, Culture, History, Language, Storytelling, and
                Philosophy to the concrete landscapes of Engineering, Science,
                Technology, Architecture, Astronomy & Development—I find joy in
                exploring the full spectrum of human experience.
              </p>
              <div className="myPic3Container">
                <div>
                  <img src={narutoSketch} alt="Naruto Sketch" />
                </div>
                <div>
                  <img src={mobileParts} alt="Mobile Parts" />
                </div>
                <div>
                  <img src={historyArt} alt="Historical Arts" />
                </div>
                <div>
                  <img src={nightPic} alt="Night Pic" />
                </div>
                <div>
                  <img src={travelPic} alt="travel Pic" />
                </div>
              </div>
            </div>
          </article>
          <article className="mts_3">
            <div className="row">
              <div className="myPic4Container col-lg-4">
                <img src={sunSetPic} alt="Sun Set" />
                <img src={CyclingPic} alt="Cycling" />
              </div>
              <p className="col-lg-8">
                Beyond the pixels and code, you&apos;ll find me grooving to
                music or finding zen through meditation. Yoga and swimming keep
                me physically and mentally fit. When I&apos;m not crafting
                digital wonders, I&apos;m lost in the pages of a good book,
                sketching my imagination, diving into anime and movies,
                strolling through nature, and giving my space a touch of
                creativity.
              </p>
            </div>
          </article>
          <article className="mts_4">
            <div className="row">
              <p className="col-lg-8 order-2 order-lg-1">
                And yes, I do have a sweet tooth—I find solace in the world of
                ice cream and desserts. So, let&apos;s connect and create
                something extraordinary together, fuelled by passion,
                creativity, and a sprinkle of sweetness!
              </p>
              <div className="myPic5Container col-lg-4 order-1 order-lg-2">
                <img src={iceCreamPic} alt="Ice Cream" />
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
