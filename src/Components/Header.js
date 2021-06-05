import React, { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import HamIcon from "./Utilities/mini-comps/HamIcon";
import { useIntercom } from "react-use-intercom";

const Header = () => {
  const headerRef = useRef(null);
  const hamMenuRef = useRef(null);
  const { show } = useIntercom();

  const handleHamClick = (e) => {
    if (!e) return;

    const target = e.target.closest(".ham-menu svg");
    headerRef.current.classList.toggle("hide");

    if (headerRef.current.classList.contains("hide")) {
      // target.classList.add("opened");
      // target.setAttribute("aria-expanded", target.classList.contains("opened"));

      hamMenuRef.current.classList.remove("open");
    } else {
      // target.classList.remove("opened");
      // target.setAttribute("aria-expanded", target.classList.contains("opened"));
      hamMenuRef.current.classList.add("open");
    }
  };

  const animateHamIcon = () => {
    if (headerRef.current.classList.contains("hide")) {
      hamMenuRef.current.classList.remove("open");
    } else {
      hamMenuRef.current.classList.add("open");
    }
  };

  const handleCustomersClick = (e) => {
    handleLinkClick();
    show();
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }

    handleHamClick();
    animateHamIcon();
  };

  useEffect(() => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }
  }, [window.innerWidth]);

  return (
    <>
      <div className="mobile-header">
        <div className="nav-link-item">
          <Link onClick={handleLinkClick} className="logo-container" to="/">
            <img src="/assets/logo.png" alt="logo" />
          </Link>
        </div>

        <HamIcon data={{ handleHamClick, hamMenuRef }} />
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
                <Link onClick={handleLinkClick} className="main-link" to="/why">
                  Why Us ?
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/product"
                >
                  How it Works?
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
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-links-group">
            <div className="customers-group">
              {/* <span>
                <Link onClick={handleCustomersClick} className="icon" to="#">
                  <img src="/assets/icon-customers.png" alt="customers"></img>
                </Link>
              </span>
              <span>
                <Link onClick={handleLinkClick} className="icon" to="/">
                  <img src="/assets/icon-search.png" alt="search"></img>
                </Link>
              </span> */}
              <span>
                <Link onClick={handleLinkClick} className="btn" to="/quotes">
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

export default Header;
