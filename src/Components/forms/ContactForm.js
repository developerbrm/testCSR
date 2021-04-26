import React, { useContext } from "react";
import { ContactFormContext } from "../Pages/Contact";

function ContactForm() {
  const { contactFromData, handleFromChange, handleInvalid } = useContext(
    ContactFormContext
  );

  return (
    <div className="form-container page-width">
      <form
        action="https://formsubmit.co/braham@sociomonkey.com"
        method="POST"
        id="contact form"
        className="pageForm contactform"
        onInvalid={handleInvalid}
      >
        <div className="form-item">
          <input
            onChange={handleFromChange}
            name="name"
            placeholder="Full Name"
            type="text"
            required={contactFromData["name"]["required"]}
            value={contactFromData["name"]["value"]}
          ></input>
        </div>

        <div className="form-item">
          <input
            onChange={handleFromChange}
            name="email"
            placeholder="Email"
            required={contactFromData["email"]["required"]}
            value={contactFromData["email"]["value"]}
            type="email"
          ></input>
        </div>

        <div className="form-item">
          <input
            onChange={handleFromChange}
            name="phone"
            placeholder="Phone"
            required={contactFromData["phone"]["required"]}
            value={contactFromData["phone"]["value"]}
            type="tel"
          ></input>
        </div>

        <div className="form-item">
          <input
            onChange={handleFromChange}
            name="message"
            placeholder="Message"
            required={contactFromData["message"]["required"]}
            value={contactFromData["message"]["value"]}
            type="text"
          ></input>
        </div>

        <div className="form-item form-submit">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
