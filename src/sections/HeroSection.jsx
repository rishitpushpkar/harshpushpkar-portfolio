import { useEffect } from "react";
import downArrow from "../assets/images/down_arrow.svg";
import backgroundAnimation from "../jquery/backgroundAnimation";

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
        <span className="downArrowBox">
          <img src={downArrow} alt="Down Arrow" />
        </span>
      </section>
    </>
  );
}
