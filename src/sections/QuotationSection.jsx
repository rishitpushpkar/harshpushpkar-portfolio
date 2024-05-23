import "../css/QuotationSection.css";

import { useInView } from "react-intersection-observer";

export default function QuotationSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section className="quotationSectionContainer">
      <div className="px-2">
        <figure>
          <blockquote>
            <p className="quoteText">
              &quot;Learning never exhausts the mind.&quot;
            </p>
          </blockquote>
          <figcaption className="quoteAuthor">
            &ndash; Leonardo da Vinci
          </figcaption>
        </figure>
      </div>
      <div className="px-2">
        <div className="circlesContainer" ref={ref}>
          <div className={`circle ${inView ? "animation" : ""}`}></div>
          <div className={`circle ${inView ? "animation" : ""}`}></div>
          <div className={`circle ${inView ? "animation" : ""}`}></div>
          <div className={`circle ${inView ? "animation" : ""}`}></div>
          <div className={`circle ${inView ? "animation" : ""}`}></div>
          <div className={`circle ${inView ? "animation" : ""}`}></div>
        </div>
      </div>
    </section>
  );
}
