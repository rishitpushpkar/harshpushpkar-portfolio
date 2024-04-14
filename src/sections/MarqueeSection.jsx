import "../css/MarqueeSection.css";
import star from "../assets/images/star.svg";
import { useNavigate } from "react-router-dom";

export default function MarqueeSection() {
  const navigate = useNavigate();
  const noOfArrows = Array.from({ length: 100 }, (value, index) => index);
  const noOfClickHere = Array.from({ length: 8 }, (value, index) => index);

  const moreProjectHandler = () => {
    navigate("/projects");
  };

  return (
    <section className="marqueeSection" onClick={moreProjectHandler}>
      <div className="ticker-tape-container basic-styling">
        <div className="ticker-tape">
          <h1>
            FOR MORE PROJECTS
            <img src={star} className=" starImg" />
          </h1>
        </div>
        <div className="ticker-tape" aria-hidden="true">
          <h1>
            FOR MORE PROJECTS
            <img src={star} className="starImg" />
          </h1>
        </div>
      </div>
      <div className="ticker-tape-container clickHereBox basic-styling ">
        <div className="ticker-tape-2">
          {noOfClickHere.map((i) => {
            return <h2 key={i}>CLICK HERE</h2>;
          })}
        </div>
        <div className="ticker-tape-2" aria-hidden="true">
          {noOfClickHere.map((i) => {
            return <h2 key={i}>CLICK HERE</h2>;
          })}
        </div>
      </div>

      <div className="ticker-tape-container movingArrowBox basic-styling ">
        <div className="ticker-tape-2 ticker-tape-arrow">
          {noOfArrows.map((i) => {
            return <h3 key={i}>&gt;</h3>;
          })}
        </div>
        <div className="ticker-tape-2 ticker-tape-arrow" aria-hidden="true">
          {noOfArrows.map((i) => {
            return <h3 key={i}>&gt;</h3>;
          })}
        </div>
      </div>
    </section>
  );
}
