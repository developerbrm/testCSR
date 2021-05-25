import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GuideFormContext } from "../Pages/Guide";
import CustomSelect from "../Utilities/mini-comps/CustomSelect";

function GuideForm() {
  const {
    guideFormData,
    handleFromChange,
    handleInvalid,
    handleSubmit,
    message,
    monthlyShipmentsOptions,
  } = useContext(GuideFormContext);

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
            <label data-required={guideFormData["firstName"]["required"]}>
              <span>{guideFormData["firstName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="firstName"
                type="text"
                required={guideFormData["firstName"]["required"]}
                value={guideFormData["firstName"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={guideFormData["lastName"]["required"]}>
              <span>{guideFormData["lastName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="lastName"
                type="text"
                required={guideFormData["lastName"]["required"]}
                value={guideFormData["lastName"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={guideFormData["email"]["required"]}>
              <span>{guideFormData["email"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="email"
                type="email"
                required={guideFormData["email"]["required"]}
                value={guideFormData["email"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={guideFormData["phone"]["required"]}>
              <span>{guideFormData["phone"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="phone"
                type="tel"
                required={guideFormData["phone"]["required"]}
                value={guideFormData["phone"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={guideFormData["company"]["required"]}>
              <span>{guideFormData["company"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="company"
                type="text"
                required={guideFormData["company"]["required"]}
                value={guideFormData["company"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={guideFormData["platform"]["required"]}>
              <span>{guideFormData["platform"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="platform"
                type="text"
                placeholder="Eg. Shopify, Wordpress"
                required={guideFormData["platform"]["required"]}
                value={guideFormData["platform"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="form-item">
          <label data-required={guideFormData["siteUrl"]["required"]}>
            <span>{guideFormData["siteUrl"]["label"]}</span>

            <input
              onChange={handleFromChange}
              name="siteUrl"
              type="url"
              required={guideFormData["siteUrl"]["required"]}
              value={guideFormData["siteUrl"]["value"]}
            />
          </label>
        </div>

        <div className="form-item">
          <label data-required={guideFormData["monthlyShipments"]["required"]}>
            <span>{guideFormData["monthlyShipments"]["label"]}</span>

            <CustomSelect
              onChange={handleFromChange}
              id="monthlyShipments"
              name="monthlyShipments"
              required={guideFormData["monthlyShipments"]["required"]}
              value={guideFormData["monthlyShipments"]["value"]}
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
            Download Now
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

export default GuideForm;
