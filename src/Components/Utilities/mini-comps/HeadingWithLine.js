import React from "react";

const HeadingWithLine = ({ data }) => {
  return (
    <div className="basic-grid-container heading-with-line-grid-container">
      <div className="heading-container">
        <h2 className="primary-color heading secondary-font">{data.heading}</h2>
      </div>

      <div className="line-container">
        <div className="gradient-line"></div>
      </div>
    </div>
  );
};

export default HeadingWithLine;
