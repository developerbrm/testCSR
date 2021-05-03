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
        <h2
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".1"
          className="heading primary-color primary-font"
        >
          {heading}
        </h2>
      )}

      {subHeading && (
        <h3
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".1"
          className="heading primary-color secondary-font"
        >
          {subHeading}
        </h3>
      )}

      <p
        data-animname="fade-in-up"
        data-onetime="true"
        data-delay=".2"
        className="rte"
      >
        {text}
      </p>
      {urlTo && (
        <>
          <br />
          <br />
          <Link
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".3"
            to={urlTo}
            className="btn"
          >
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
