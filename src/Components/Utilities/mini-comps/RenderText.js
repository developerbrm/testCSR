import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const RenderText = ({ textData }) => {
  const { heading, content, buttonText, buttonURL, color } = textData;

  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    headingRef.current.innerHTML = heading;
    contentRef.current.innerHTML = content;
  }, []);

  return (
    <div className="txt-container" style={{ color }}>
      <div className="txt-item">
        <h3
          className="primary-font primary-color heading"
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".0"
          ref={headingRef}
        >
          {}
        </h3>
        <div
          className="secondary-font content"
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".5"
          ref={contentRef}
        >
          {}
        </div>
      </div>

      <Link
        className="btn"
        data-animname="fade-in-up"
        data-onetime="true"
        data-delay=".7"
        to={buttonURL}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default RenderText;
