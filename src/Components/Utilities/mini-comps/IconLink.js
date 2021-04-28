import React from "react";

const IconLink = ({ data }) => {
  const { icon, title, url } = data;

  return (
    <a
      title={title}
      className="link-item icon"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <img src={icon} alt={icon} />
    </a>
  );
};

export default IconLink;
