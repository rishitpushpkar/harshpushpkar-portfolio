import { useEffect } from "react";
import downArrow from "../assets/images/down_arrow.svg";
import backgroundAnimation from "../jquery/backgroundAnimation";

export default function HeroSection() {
  useEffect(() => {
    const container = document.getElementById("container"); // Get the container element
    backgroundAnimation(container); // Pass the container element to the animation function
  }, []);
  return (
    <>
      <section className="heroSection">
        <main>
          <div id="container"></div>
          <h1>
            I&#x2019;m Harsh and
            <em> I craft digital experiences & visual stories</em>, through my
            designs.
          </h1>
        </main>
        <div className="downArrowBox">
          <img src={downArrow} alt="Down Arrow" />
        </div>
      </section>
    </>
  );
}
