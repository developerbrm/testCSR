import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import FooterLinksGenerator from "./Utilities/mini-comps/FooterLinksGenerator";
import IconLink from "./Utilities/mini-comps/IconLink";

const Footer = () => {
  const dataForCompany = {
    heading: "Company",
    linksData: [
      { text: "About", to: "/about" },
      { text: "Jobs", to: "/jobs" },
      { text: "Customers", to: "/customers" },
      { text: "Contact US", to: "/contact" },
    ],
  };
  const dataForExplore = {
    heading: "Explore",
    linksData: [
      { text: "How it works?", to: "/" },
      { text: "Technology", to: "/" },
      { text: "Fulfillment Centers", to: "/" },
    ],
  };
  const dataForBrowse = {
    heading: "Browse",
    linksData: [
      { text: "Sell your Products", to: "/" },
      { text: "Fulfill your orders", to: "/" },
      { text: "Reconcile your payments", to: "/" },
    ],
  };

  return (
    <footer className="txt-center">
      <div className="gradient-line"></div>

      <div className="grid-container links-container">
        <div className="grid-item address-area">
          <Link className="logo-container" to="/">
            <img src="/assets/logo.png" alt="logo"></img>
          </Link>
          <br />
          <br />
          <div className="rte">
            <address>
              B68/2-B, 3rd Floor, Nariana Industrial Area Phase-2, New Delhi,
              Delhi 110028
            </address>
          </div>
          <br />
          <div className="icon-link">
            <div className="icon">
              <img src="/assets/icon-mail.png" alt="mail icon" />
            </div>
            <div className="link">
              <a href="mailto:storezippydigital@gmail.com">
                storezippydigital@gmail.com
              </a>
            </div>
          </div>
          {/* <div className="icon-link">
            <div className="icon">
              <img src="/assets/icon-phone.png" alt="phone icon" />
            </div>
            <div className="link">
              <a href="tel:7838812153">7838812153</a>
            </div>
          </div> */}
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForCompany} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForExplore} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForBrowse} />

          <h3 className="heading">Follow us on:</h3>
          <div className="social-icons-container">
            <div className="social-link-item">
              <a href="/" target="_blank">
                <img src="/assets/icon-insta.png" alt="insta icon" />
              </a>
            </div>
            <div className="social-link-item">
              <a href="/" target="_blank">
                <img src="/assets/icon-fb.png" alt="fb icon" />
              </a>
            </div>
            <div className="social-link-item">
              <a href="/" target="_blank">
                <img src="/assets/icon-yt.png" alt="yt icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-line"></div>
      <p className="rte txt-center">
        Copyright © 2020 Eshopbox Ecommerce Pvt. Ltd. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
