import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactFormContext } from "../Pages/Contact";
import CustomSelect from "../Utilities/mini-comps/CustomSelect";

function ContactForm() {
  const {
    contactFromData,
    handleFromChange,
    handleInvalid,
    handleSubmit,
    monthlyShipmentsOptions,
  } = useContext(ContactFormContext);

  return (
    <div className="form-container">
      <form
        action="https://formsubmit.co/braham@sociomonkey.com"
        method="POST"
        id="contact form"
        className="pageForm contactform"
        onInvalid={handleInvalid}
        onSubmit={handleSubmit}
      >
        <div className="split-half">
          <div className="form-item">
            <label data-required={contactFromData["firstName"]["required"]}>
              <span>{contactFromData["firstName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="firstName"
                type="text"
                required={contactFromData["firstName"]["required"]}
                value={contactFromData["firstName"]["value"]}
              ></input>
            </label>
          </div>

          <div className="form-item">
            <label data-required={contactFromData["lastName"]["required"]}>
              <span>{contactFromData["lastName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="lastName"
                type="text"
                required={contactFromData["lastName"]["required"]}
                value={contactFromData["lastName"]["value"]}
              ></input>
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={contactFromData["email"]["required"]}>
              <span>{contactFromData["email"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="email"
                type="email"
                required={contactFromData["email"]["required"]}
                value={contactFromData["email"]["value"]}
              ></input>
            </label>
          </div>

          <div className="form-item">
            <label data-required={contactFromData["phone"]["required"]}>
              <span>{contactFromData["phone"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="phone"
                type="tel"
                required={contactFromData["phone"]["required"]}
                value={contactFromData["phone"]["value"]}
              ></input>
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={contactFromData["company"]["required"]}>
              <span>{contactFromData["company"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="company"
                type="text"
                required={contactFromData["company"]["required"]}
                value={contactFromData["company"]["value"]}
              ></input>
            </label>
          </div>

          <div className="form-item">
            <label data-required={contactFromData["platform"]["required"]}>
              <span>{contactFromData["platform"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="platform"
                type="text"
                placeholder="Eg. Shopify, Wordpress"
                required={contactFromData["platform"]["required"]}
                value={contactFromData["platform"]["value"]}
              ></input>
            </label>
          </div>
        </div>

        <div className="form-item">
          <label data-required={contactFromData["siteUrl"]["required"]}>
            <span>{contactFromData["siteUrl"]["label"]}</span>

            <input
              onChange={handleFromChange}
              name="siteUrl"
              type="url"
              required={contactFromData["siteUrl"]["required"]}
              value={contactFromData["siteUrl"]["value"]}
            ></input>
          </label>
        </div>

        <div className="form-item">
          <label
            data-required={contactFromData["monthlyShipments"]["required"]}
          >
            <span>{contactFromData["monthlyShipments"]["label"]}</span>

            <CustomSelect
              onChange={handleFromChange}
              id="monthlyShipments"
              name="monthlyShipments"
              required={contactFromData["monthlyShipments"]["required"]}
              value={contactFromData["monthlyShipments"]["value"]}
              options={monthlyShipmentsOptions}
            />
          </label>
        </div>

        <div className="form-item">
          <Link
            to="/polices"
            style={{ textDecoration: "underline", color: "#2077F5" }}
          >
            Privacy Policy
          </Link>
        </div>

        <div className="form-item form-submit">
          <button type="submit" className="btn">
            Request Pricing
          </button>
        </div>

        <div className="form-item">
          <p className="rte">
            A fulfillment expert will get back to you shortly.
          </p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
