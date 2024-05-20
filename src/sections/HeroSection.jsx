import { useEffect } from "react";
import downArrow from "../assets/images/down_arrow.svg";
import backgroundAnimation from "../jquery/backgroundAnimation";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
  useEffect(() => {
    backgroundAnimation();
  }, []);
  return (
    <>
      <section className="heroSection">
        <main>
          <div id="container">
            <canvas></canvas>
          </div>
          <h1>
            I&#x2019;m Harsh and
            <em> I craft digital experiences & visual stories</em>, through my
            designs.
          </h1>
        </main>
        <HashLink
          className="downArrowBox"
          to="#az"
          scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
        >
          <img src={downArrow} alt="Down Arrow" />
        </HashLink>
      </section>
    </>
  );
}
