import React from "react";

const ImagesGridItem = ({ data }) => {
  const { image, txt, index } = data;

  return (
    <div className={`images-grid-item images-grid-item-${index}`}>
      <div className="img-container">
        <img src={image} alt={image} />
      </div>

      <div className="txt-container">
        <h2>{txt}</h2>
      </div>
    </div>
  );
};

export default ImagesGridItem;
