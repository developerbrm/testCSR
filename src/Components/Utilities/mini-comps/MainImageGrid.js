import React from "react";
import MainImageGridItem from "./MainImageGridItem";

const MainImageGrid = ({ dataForGrid }) => {
  return (
    <div className="main-img-grid-container">
      {dataForGrid?.map((data, index) => (
        <MainImageGridItem data={{ ...data, index }} key={index} />
      ))}
    </div>
  );
};

export default MainImageGrid;
