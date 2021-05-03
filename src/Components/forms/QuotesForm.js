import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuotesFormContext } from "../Pages/Quotes";
import CustomSelect from "../Utilities/mini-comps/CustomSelect";

function QotesForm() {
  const {
    quotesFromData,
    handleFromChange,
    handleInvalid,
    handleSubmit,
    message,
    monthlyShipmentsOptions,
  } = useContext(QuotesFormContext);

  return (
    <div className="form-container">
      <form
        // action="https://formsubmit.co/braham@sociomonkey.com"
        method="POST"
        id="contact form"
        className="pageForm qotesform"
        onInvalid={handleInvalid}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_captcha" value="false" />

        <input
          onChange={handleFromChange}
          name="Form Type"
          type="hidden"
          value="Quotes Form"
        />

        <div className="split-half">
          <div className="form-item">
            <label data-required={quotesFromData["firstName"]["required"]}>
              <span>{quotesFromData["firstName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="firstName"
                type="text"
                required={quotesFromData["firstName"]["required"]}
                value={quotesFromData["firstName"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={quotesFromData["lastName"]["required"]}>
              <span>{quotesFromData["lastName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="lastName"
                type="text"
                required={quotesFromData["lastName"]["required"]}
                value={quotesFromData["lastName"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={quotesFromData["email"]["required"]}>
              <span>{quotesFromData["email"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="email"
                type="email"
                required={quotesFromData["email"]["required"]}
                value={quotesFromData["email"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={quotesFromData["phone"]["required"]}>
              <span>{quotesFromData["phone"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="phone"
                type="tel"
                required={quotesFromData["phone"]["required"]}
                value={quotesFromData["phone"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={quotesFromData["company"]["required"]}>
              <span>{quotesFromData["company"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="company"
                type="text"
                required={quotesFromData["company"]["required"]}
                value={quotesFromData["company"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={quotesFromData["platform"]["required"]}>
              <span>{quotesFromData["platform"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="platform"
                type="text"
                placeholder="Eg. Shopify, Wordpress"
                required={quotesFromData["platform"]["required"]}
                value={quotesFromData["platform"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="form-item">
          <label data-required={quotesFromData["siteUrl"]["required"]}>
            <span>{quotesFromData["siteUrl"]["label"]}</span>

            <input
              onChange={handleFromChange}
              name="siteUrl"
              type="url"
              required={quotesFromData["siteUrl"]["required"]}
              value={quotesFromData["siteUrl"]["value"]}
            />
          </label>
        </div>

        <div className="form-item">
          <label data-required={quotesFromData["monthlyShipments"]["required"]}>
            <span>{quotesFromData["monthlyShipments"]["label"]}</span>

            <CustomSelect
              onChange={handleFromChange}
              id="monthlyShipments"
              name="monthlyShipments"
              required={quotesFromData["monthlyShipments"]["required"]}
              value={quotesFromData["monthlyShipments"]["value"]}
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

        <div className="form-item">
          <h2 className="primary-color tertiary-font heading">{message}</h2>
        </div>
      </form>
    </div>
  );
}

export default QotesForm;
