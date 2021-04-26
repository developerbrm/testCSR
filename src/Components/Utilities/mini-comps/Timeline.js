import React from "react";
import TimeLineItem from "./TimeLineItem";

function Timeline({ dataForTimeLine, handleTimeLineScroll }) {
  let mouseIn = false;

  const handleScroll = () => {
    if (mouseIn) handleTimeLineScroll();
  };

  return (
    <div
      className="timeline"
      title="timeline"
      onMouseEnter={() => {
        mouseIn = true;
      }}
      onTouchStart={() => {
        mouseIn = true;
      }}
      onMouseLeave={() => {
        mouseIn = false;
      }}
      onScroll={handleScroll}
    >
      {dataForTimeLine &&
        dataForTimeLine.map((data, index) => (
          <TimeLineItem data={data} key={index} />
        ))}
    </div>
  );
}

export default Timeline;
