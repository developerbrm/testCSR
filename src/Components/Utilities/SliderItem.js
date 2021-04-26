import React from "react";
import { Link } from "react-router-dom";

function SliderItem({ data }) {
  const { img, textData, index, mobImg } = data;

  const rendertext = (text) => {
    return (
      <div className="txt-container">
        {text.map(({ heading, content, color }, index) => (
          <div className="txt-item" style={{ color: color }} key={index}>
            <h3>{heading}</h3>
            <p>{content}</p>
          </div>
        ))}

        <Link className="btn" to="/book-test-ride">
          Book a Test Ride
        </Link>
      </div>
    );
  };

  return (
    <div className={`slider-item slider-item-${index}`}>
      <div className="img-container">
        <picture>
          {mobImg && <source srcSet={mobImg} media="(max-width: 750px)" />}
          <img src={img} alt={`${img}`} />
        </picture>
      </div>

      {textData && rendertext(textData)}
    </div>
  );
}

export default SliderItem;
