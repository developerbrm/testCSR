import React from "react";
import { Link } from "react-router-dom";
import ResponsiveDisplayImg from "./ResponsiveDisplayImg";

const SectionImgContentGrid = ({ data }) => {
  const {
    sectionClassName,
    heading,
    subHeading,
    text,
    urlTo,
    urlText,
    img,
    mobImg,
    imgRight = true,
  } = data;

  const RenderContent = () => (
    <div className="content-container width-45ch">
      {heading && (
        <h2 className="heading primary-color primary-font">{heading}</h2>
      )}
      
      {subHeading && (
        <h3 className="heading primary-color secondary-font">{subHeading}</h3>
      )}

      <p className="rte">{text}</p>
      {urlTo && (
        <>
          <br />
          <br />
          <Link to={urlTo} className="btn">
            {urlText}
          </Link>
        </>
      )}
    </div>
  );

  const RenderImg = () => (
    <ResponsiveDisplayImg
      data={{
        img,
        mobImg,
      }}
    />
  );

  return (
    <section className={sectionClassName}>
      <div className="basic-grid-container">
        {imgRight ? (
          <>
            <RenderContent />
            <RenderImg />
          </>
        ) : (
          <>
            <RenderImg />
            <RenderContent />
          </>
        )}
      </div>
    </section>
  );
};

export default SectionImgContentGrid;
