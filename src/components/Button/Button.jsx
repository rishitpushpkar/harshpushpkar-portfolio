import "./Button.css";
import PropTypes from "prop-types";

export default function Button({ title, arrows, btnColor }) {
  return (
    <>
      <button id="caseStudyBtn">
        <div className="scene">
          <div className="cube">
            {arrows ? (
              <>
                <span className="side top">{title} &gt;&gt;&gt;</span>
                <span className={`side front ${btnColor}`}>
                  {title} &gt;&gt;&gt;
                </span>
              </>
            ) : (
              <>
                <span className="side top">{title}</span>
                <span className={`side front ${btnColor}`}>{title}</span>
              </>
            )}
          </div>
        </div>
      </button>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  arrows: PropTypes.bool,
  btnColor: PropTypes.string,
};
