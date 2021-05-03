import React from "react";

function ResponsiveDisplayImg({ data }) {
  const { mobImg, img } = data;

  return (
    <section
      data-animname="fade-in-up"
      data-onetime="true"
      data-delay=".3"
      className="display-img"
    >
      <div className="img-container">
        <picture>
          {mobImg && <source srcSet={mobImg} media="(max-width: 750px)" />}
          <img src={img} alt={`${img}`} />
        </picture>
      </div>
    </section>
  );
}

export default ResponsiveDisplayImg;
