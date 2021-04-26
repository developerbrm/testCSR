import React from "react";
import ImagesGridItem from "./ImagesGridItem";

const ImagesGrid = ({ dataForImagesGrid }) => {

  return (
    <div className="images-grid-container">
      {dataForImagesGrid?.map((data, index) => (
        <ImagesGridItem data={{...data, index}} key={index} />
      ))}
    </div>
  );
};

export default ImagesGrid;
