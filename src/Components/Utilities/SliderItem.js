import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RenderText from "./mini-comps/RenderText";

function SliderItem({ data }) {
  const { img, textData, index, mobImg } = data;

  return (
    <div className={`slider-item slider-item-${index}`}>
      <div className="img-container">
        <picture>
          {mobImg && <source srcSet={mobImg} media="(max-width: 750px)" />}
          <img src={img} alt={`${img}`} />
        </picture>
      </div>

      {textData && <RenderText textData={textData} />}
    </div>
  );
}

export default SliderItem;
