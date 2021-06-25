import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import FooterLinksGenerator from "./Utilities/mini-comps/FooterLinksGenerator";
import IconLink from "./Utilities/mini-comps/IconLink";

const Footer = () => {
  const dataForCompany = {
    heading: "Company",
    linksData: [
      { text: "About", to: "/about" },
      { text: "Get in Touch", to: "/contact" },
      { text: "Careers", to: "/careers" },
      { text: "Fulfillment Centers", to: "/fddsf" },
      { text: "Technology", to: "/technology" },
    ],
  };
  const dataForExplore = {
    heading: "Product",
    linksData: [
      { text: "How it works?", to: "/product" },
      { text: "Partners and Integrations", to: "/" },
      { text: "Pricing", to: "/" },
      { text: "Payment Reconciliation", to: "/" },
    ],
  };
  const dataForBrowse = {
    heading: "Resources",
    linksData: [
      { text: "Guides", to: "/guide" },
      { text: "Case Studies", to: "/" },
      { text: "Frequently Asked Questions", to: "/" },
      { text: "Blogs", to: "/blogs" },
    ],
  };
  const dataForPolices = {
    heading: "Legal",
    linksData: [
      { text: "Terms and Conditions", to: "/polices/terms-conditions" },
      { text: "Privacy Policy", to: "/polices/privacy" },
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
              Kharsa no- 72/16 & 25, Swaran Park, Mundka, New Delhi 110041
            </address>
          </div>
          <br />
          <div className="icon-link">
            <div className="icon">
              <img src="/assets/icon-mail.png" alt="mail icon" />
            </div>
            <div className="link">
              <a href="mailto:info@storezippy.com">info@storezippy.com</a>
            </div>
          </div>
          <div className="icon-link">
            <div className="icon">
              <img src="/assets/icon-phone.png" alt="phone icon" />
            </div>
            <div className="link">
              <a href="tel: 9999332820"> 9999332820</a>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForCompany} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForExplore} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForBrowse} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForPolices} />
        </div>

        <div className="grid-item">
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
      <p className="rte txt-center" style={{ margin: "1rem" }}>
        Copyright © 2021 EMount Ventures Pvt. Ltd. All rights reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
