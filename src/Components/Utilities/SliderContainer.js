import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

function SliderContainer({ dataForSlider }) {
  var settings = {
    infinite: true,
    speed: 1500,
    fade: false,
    dots: false,
    cssEase: "ease",
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider-container">
      {dataForSlider.map((data, index) => (
        <SliderItem data={{ ...data, index }} key={index} />
      ))}
    </Slider>
  );
}

export default SliderContainer;
