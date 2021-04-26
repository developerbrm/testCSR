import React from "react";
import SliderContainer from "./SliderContainer";

function HeroSlider({ data }) {
  return (
    <section className="hero">
      <SliderContainer dataForSlider={data} />
    </section>
  );
}

export default HeroSlider;
