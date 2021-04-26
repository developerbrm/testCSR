import React from "react";

const HeroImgWithTxt = ({ data }) => {
  const { heading, content, img, mobImg } = data;

  return (
    <section className="hero-img-with-txt">
      <div className="img-container">
        <picture>
          {mobImg && <source srcSet={mobImg} media="(max-width: 750px)" />}
          <img src={img} alt={`${img}`} />
        </picture>
      </div>

      <div className="txt-container">
        <h2 className="primary-font">{heading}</h2>
        <p className="rte">{content}</p>
      </div>
    </section>
  );
};

export default HeroImgWithTxt;
