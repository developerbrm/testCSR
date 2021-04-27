import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const FooterLinksGenerator = ({ data }) => {
  const { heading, linksData } = data;

  return (
    <div className="footer-links-column">
      <ul>
        <h3 className="heading">{heading}</h3>

        {linksData?.map(({ text, to }, index) => (
          <li key={index}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksGenerator;
