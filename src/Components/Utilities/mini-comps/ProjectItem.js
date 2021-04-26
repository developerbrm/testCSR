import React from "react";

const ProjectItem = ({ data }) => {
  const { heading, text, url, img, imgMob } = data;

  return (
    <div className="project-item">
      <div className="grid-container">
        <div className="txt-container">
          <h3 className="heading rte">{heading}</h3>
					<p className="rte">{text}</p>

					{url && <a href={url} className="btn">Read More</a>}
        </div>
        <div className="img-container">
					<picture>
					<source srcSet={imgMob} media="" />
						<img src={img}  />
					</picture>
				</div>
      </div>
    </div>
  );
};

export default ProjectItem;
