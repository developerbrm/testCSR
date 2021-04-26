import React, { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import HamIcon from "./Utilities/mini-comps/HamIcon";

export const Header = () => {
  const headerRef = useRef(null);

  const handleHamClick = (e) => {
    const target = e.target.closest(".ham-menu svg");

    if (headerRef.current.classList.contains("hide")) {
      target.classList.add("opened");
      target.setAttribute("aria-expanded", target.classList.contains("opened"));
      headerRef.current.classList.toggle("hide");
    } else {
      target.classList.remove("opened");
      target.setAttribute("aria-expanded", target.classList.contains("opened"));
      headerRef.current.classList.toggle("hide");
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }
  }, [window.innerWidth]);

  return (
    <>
      <HamIcon handleHamClick={handleHamClick} />
      <div className="fixed-mob-logo">
        <div className="nav-link-item">
          <Link onClick={handleLinkClick} className="logo-container" to="/">
            <img src="/assets/logo.png" alt="logo"></img>
          </Link>
        </div>
      </div>

      <header ref={headerRef}>
        <nav>
          <div className="nav-links-group">
            <Link onClick={handleLinkClick} className="logo-container" to="/">
              <img src="/assets/logo.png" alt="logo"></img>
            </Link>
          </div>
          <div className="nav-links-group">
            <ul className="main-links-container">
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/integrations"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-links-group">
            <div className="customers-group">
              <span>
                <Link onClick={handleLinkClick} className="icon" to="/">
                  <img src="/assets/icon-customers.png" alt="customers"></img>
                </Link>
              </span>
              <span>
                <Link onClick={handleLinkClick} className="icon" to="/">
                  <img src="/assets/icon-search.png" alt="search"></img>
                </Link>
              </span>
              <span>
                <Link onClick={handleLinkClick} className="btn" to="/">
                  Get Started
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
