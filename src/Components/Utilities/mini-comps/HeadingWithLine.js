import React from "react";

const HeadingWithLine = ({ data }) => {
  return (
    <div className="basic-grid-container heading-with-line-grid-container">
      <div
        data-animname="fade-in-up"
        data-delay=".1"
        data-onetime="true"
        className="heading-container"
      >
        <h2 className="primary-color heading primary-font">{data.heading}</h2>
      </div>

      <div
        data-animname="fade-in-up"
        data-onetime="true"
        data-delay=".2"
        className="line-container"
      >
        <div className="gradient-line"></div>
      </div>
    </div>
  );
};

export default HeadingWithLine;
