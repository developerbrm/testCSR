import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GuideFormContext } from "../Pages/Guide";
import CustomSelect from "../Utilities/mini-comps/CustomSelect";

const MailchimpGuideForm = () => {
  const {
    guideFormData,
    handleFromChange,
    handleInvalid,
    handleSubmit,
    message,
    monthlyShipmentsOptions,
  } = useContext(GuideFormContext);

  return (
    <div>
      <div id="mc_embed_signup" className="form-container">
        <form
          action="https://storezippy.us6.list-manage.com/subscribe/post?u=0ac89d59bb2dc464d014be5f5&amp;id=e4c9b16a6f"
          method="post"
          className="pageForm qotesform validate"
          onInvalid={handleInvalid}
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
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
                  name="FNAME"
                  type="text"
                  required={guideFormData["firstName"]["required"]}
                />
              </label>
            </div>

            <div className="form-item">
              <label data-required={guideFormData["lastName"]["required"]}>
                <span>{guideFormData["lastName"]["label"]}</span>

                <input
                  onChange={handleFromChange}
                  name="LNAME"
                  type="text"
                  required={guideFormData["lastName"]["required"]}
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
                  name="EMAIL"
                  type="email"
                  required={guideFormData["email"]["required"]}
                />
              </label>
            </div>

            <div className="form-item">
              <label data-required={guideFormData["phone"]["required"]}>
                <span>{guideFormData["phone"]["label"]}</span>

                <input
                  onChange={handleFromChange}
                  name="PHONE"
                  type="tel"
                  required={guideFormData["phone"]["required"]}
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
                  name="COMPANY"
                  type="text"
                  required={guideFormData["company"]["required"]}
                />
              </label>
            </div>

            <div className="form-item">
              <label data-required={guideFormData["platform"]["required"]}>
                <span>{guideFormData["platform"]["label"]}</span>

                <input
                  onChange={handleFromChange}
                  name="PLATFORM"
                  type="text"
                  placeholder="Eg. Shopify, Wordpress"
                  required={guideFormData["platform"]["required"]}
                />
              </label>
            </div>
          </div>

          <div className="form-item">
            <label data-required={guideFormData["siteUrl"]["required"]}>
              <span>{guideFormData["siteUrl"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="SITEURL"
                type="url"
                required={guideFormData["siteUrl"]["required"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={guideFormData["MO_SHIPS"]["required"]}>
              <span>{guideFormData["MO_SHIPS"]["label"]}</span>

              <CustomSelect
                onChange={handleFromChange}
                id="MO_SHIPS"
                name="MO_SHIPS"
                required={guideFormData["MO_SHIPS"]["required"]}
                value={guideFormData["MO_SHIPS"]["value"]}
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

          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_0ac89d59bb2dc464d014be5f5_e4c9b16a6f"
              tabIndex="-1"
            />
          </div>

          <div className="form-item form-submit">
            <button type="submit" className="btn">
              Download Now
            </button>
          </div>

          <div className="form-item">
            <p className="rte">
              After successfull form submission, the guide will be sent on your
              Email.
            </p>
          </div>

          <div className="form-item">
            <h2 className="primary-color tertiary-font heading">{message}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpGuideForm;
