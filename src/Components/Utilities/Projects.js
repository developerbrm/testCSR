import React from "react";
import Slider from "react-slick";
import ProjectItem from "./mini-comps/ProjectItem";

const Projects = ({ data }) => {
  const { dataForProjects } = data;

  var settings = {
    infinite: true,
    speed: 1500,
    fade: false,
    dots: false,
    cssEase: "ease",
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="projects-slider-container">
      {dataForProjects &&
        dataForProjects.map((data, index) => (
          <ProjectItem data={{ ...data, index }} key={index} />
        ))}
    </Slider>
  );
};

export default Projects;
