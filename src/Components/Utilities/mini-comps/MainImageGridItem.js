import React from "react";

const MainImageGridItem = ({ data }) => {
  const { image, subHeading, hading, content, index } = data;
  return (
    <div className={`main-image-grid-item main-image-grid-item-${index}`}>
      <div className="img-container">
        <img src={image} alt={image} />
      </div>

      <div className="txt-container">
        <h4 className="rte">{subHeading}</h4>
        <h2 className="tertiary-font">{hading}</h2>
        <p className="rte">{content}</p>
      </div>
    </div>
  );
};

export default MainImageGridItem;
