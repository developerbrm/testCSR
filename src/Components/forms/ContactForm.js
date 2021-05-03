import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactFormContext } from "../Pages/Contact";

function QotesForm() {
  const {
    contactFormData,
    handleFromChange,
    handleInvalid,
    handleSubmit,
    message,
    keyChallangesData,
    handleCheckboxClick,
  } = useContext(ContactFormContext);

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

        <div className="split-half">
          <div className="form-item">
            <label data-required={contactFormData["firstName"]["required"]}>
              <span>{contactFormData["firstName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="firstName"
                type="text"
                required={contactFormData["firstName"]["required"]}
                value={contactFormData["firstName"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={contactFormData["lastName"]["required"]}>
              <span>{contactFormData["lastName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="lastName"
                type="text"
                required={contactFormData["lastName"]["required"]}
                value={contactFormData["lastName"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={contactFormData["email"]["required"]}>
              <span>{contactFormData["email"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="email"
                type="email"
                required={contactFormData["email"]["required"]}
                value={contactFormData["email"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={contactFormData["phone"]["required"]}>
              <span>{contactFormData["phone"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="phone"
                type="tel"
                required={contactFormData["phone"]["required"]}
                value={contactFormData["phone"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={contactFormData["company"]["required"]}>
              <span>{contactFormData["company"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="company"
                type="text"
                required={contactFormData["company"]["required"]}
                value={contactFormData["company"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={contactFormData["platform"]["required"]}>
              <span>{contactFormData["platform"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="platform"
                type="text"
                placeholder="Eg. Shopify, Wordpress"
                required={contactFormData["platform"]["required"]}
                value={contactFormData["platform"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="form-item">
          <label data-required={contactFormData["siteUrl"]["required"]}>
            <span>{contactFormData["siteUrl"]["label"]}</span>

            <input
              onChange={handleFromChange}
              name="siteUrl"
              type="url"
              required={contactFormData["siteUrl"]["required"]}
              value={contactFormData["siteUrl"]["value"]}
            />
          </label>
        </div>

        {/* type checkbox  */}
        <div className="form-item">
          <label data-required={contactFormData["keyChallanges"]["required"]}>
            <span>{contactFormData["keyChallanges"]["label"]}</span>
          </label>

          {keyChallangesData?.map(({ checked, id, value }) => (
            <div className="label-checkbox" key={id}>
              <input
                onChange={handleCheckboxClick}
                id={id}
                name="keyChallanges"
                type="checkbox"
                checked={checked}
                required={contactFormData["keyChallanges"]["required"]}
                value={value}
              />
              <label htmlFor={id}>{value}</label>
            </div>
          ))}
        </div>

        {/* type radio  */}
        <div className="form-item">
          <label data-required={contactFormData["ordersProcessed"]["required"]}>
            <span>{contactFormData["ordersProcessed"]["label"]}</span>
          </label>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="ordersProcessed"
              type="radio"
              checked={
                contactFormData["ordersProcessed"]["value"] === "Start up"
              }
              required={contactFormData["ordersProcessed"]["required"]}
              value="Start up"
              id="Start up"
            />

            <label htmlFor="Start up">Start up, Uncertain</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="ordersProcessed"
              type="radio"
              checked={
                contactFormData["ordersProcessed"]["value"] === "Less than 500"
              }
              required={contactFormData["ordersProcessed"]["required"]}
              value="Less than 500"
              id="Less than 500"
            />

            <label htmlFor="Less than 500">Less than 500</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="ordersProcessed"
              type="radio"
              checked={
                contactFormData["ordersProcessed"]["value"] === "500-1000"
              }
              required={contactFormData["ordersProcessed"]["required"]}
              value="500-1000"
              id="500-1000"
            />

            <label htmlFor="500-1000">500-1000</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="ordersProcessed"
              type="radio"
              checked={
                contactFormData["ordersProcessed"]["value"] === "1000-3000"
              }
              required={contactFormData["ordersProcessed"]["required"]}
              value="1000-3000"
              id="1000-3000"
            />

            <label htmlFor="1000-3000">1000-3000</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="ordersProcessed"
              type="radio"
              checked={contactFormData["ordersProcessed"]["value"] === "3000+"}
              required={contactFormData["ordersProcessed"]["required"]}
              value="3000+"
              id="3000+"
            />

            <label htmlFor="3000+">3000+</label>
          </div>
        </div>

        <div className="form-item">
          <label
            data-required={contactFormData["warehousingCount"]["required"]}
          >
            <span>{contactFormData["warehousingCount"]["label"]}</span>
          </label>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="warehousingCount"
              type="radio"
              checked={contactFormData["warehousingCount"]["value"] === "1"}
              required={contactFormData["warehousingCount"]["required"]}
              value="1"
              id="1"
            />

            <label htmlFor="1">1</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="warehousingCount"
              type="radio"
              checked={contactFormData["warehousingCount"]["value"] === "2"}
              required={contactFormData["warehousingCount"]["required"]}
              value="2"
              id="2"
            />

            <label htmlFor="2">2</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="warehousingCount"
              type="radio"
              checked={contactFormData["warehousingCount"]["value"] === "3"}
              required={contactFormData["warehousingCount"]["required"]}
              value="3"
              id="3"
            />

            <label htmlFor="3">3</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="warehousingCount"
              type="radio"
              checked={contactFormData["warehousingCount"]["value"] === "4"}
              required={contactFormData["warehousingCount"]["required"]}
              value="4"
              id="4"
            />

            <label htmlFor="4">4</label>
          </div>

          <div className="label-radio">
            <input
              onChange={handleFromChange}
              name="warehousingCount"
              type="radio"
              checked={
                contactFormData["warehousingCount"]["value"] === "more than 4"
              }
              required={contactFormData["warehousingCount"]["required"]}
              value="more than 4"
              id="more than 4"
            />

            <label htmlFor="more than 4">More than 4</label>
          </div>
        </div>

        <div className="form-item">
          <label data-required={contactFormData["requirement"]["required"]}>
            <span>{contactFormData["requirement"]["label"]}</span>

            <textarea
              onChange={handleFromChange}
              name="requirement"
              required={contactFormData["requirement"]["required"]}
              value={contactFormData["requirement"]["value"]}
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
            Submit
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
