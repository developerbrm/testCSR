import React from "react";

const TimeLineItem = ({ data }) => {
  const { heading, img, year } = data;

  return (
    <div className="time-line-item">
      <p>
        <strong>{year}</strong>
      </p>
      <div className="line">
        <div className="dot"></div>
      </div>
      <h3 className="rte">{heading}</h3>
      <img src={img} alt={img} />
    </div>
  );
};

export default TimeLineItem;
