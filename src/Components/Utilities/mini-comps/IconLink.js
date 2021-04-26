import React from "react";

const IconLink = ({ data }) => {
  const { icon, title, url } = data;

  return (
    <a title={title} className="link-item icon" href={url} target="_blank">
      <img src={icon}></img>
    </a>
  );
};

export default IconLink;
