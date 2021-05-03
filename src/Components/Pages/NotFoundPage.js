import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NotFoundPage = () => {
  return (
    <section id="not-found-page" title="not-found-page" className="page-width txt-center">
      <h1 className="heading primary-color primary-font">Coming Soon</h1>
      <p>Get back to</p>
      <div>
        <Link style={{ fontSize: "inherit" }} to="/" className="btn">
          Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
