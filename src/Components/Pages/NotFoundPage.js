import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NotFoundPage = () => {
  return (
    <section
      id="404-page"
      title="404 page"
      className="page-width txt-center"
      style={{ fontSize: "clamp(1rem, 4vw, 5rem)" }}
    >
      <h1>Oops Page Not Found !</h1>
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
