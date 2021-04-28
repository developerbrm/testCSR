import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import HeadingWithLine from "../Utilities/mini-comps/HeadingWithLine";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import Stats from "../Utilities/mini-comps/Stats";
export const ContactFormContext = React.createContext();

const Contact = () => {
  const [contactFromData, setContactFromData] = useState({
    firstName: { value: "", required: true, label: "First Name" },
    lastName: { value: "", required: true, label: "Last Name" },
    email: { value: "", required: true, label: "Email" },
    phone: { value: "", required: true, label: "Phone" },
    company: { value: "", required: true, label: "Company Name" },
    platform: {
      value: "",
      required: false,
      label: "Current Ecom Platform ",
    },
    siteUrl: { value: "", required: false, label: "Company Website URL" },
    monthlyShipments: {
      value: "",
      required: true,
      label: "Current Monthly Shipments",
    },
  });

  const handleSubmit = (e) => {
    console.log(contactFromData);
  };

  const handleInvalid = (e) => {
    console.log("Form not filled properly");
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;

    setContactFromData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], name, value },
    }));
  };

  const monthlyShipmentsOptions = [
    {
      value: "",
      content: "Select Monthly Shipments",
    },
    {
      value: "One",
      content: "One",
    },

    {
      value: "Two",
      content: "Two",
    },

    {
      value: "Three",
      content: "Three",
    },

    {
      value: "Four",
      content: "Four",
    },
  ];

  return (
    <div id="contact">
      <section className="hero">
        <HeadingWithLine
          data={{
            heading: "Let’s Get Started!",
          }}
        />

        <br />
        <br />
        <br />

        <div className="basic-grid-container contact-grid-container">
          <ContactFormContext.Provider
            value={{
              contactFromData,
              handleFromChange,
              handleSubmit,
              handleInvalid,
              monthlyShipmentsOptions,
            }}
          >
            <ContactForm />
          </ContactFormContext.Provider>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/contact/hero-gird.png",
            }}
          />
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* testimonial */}
      <section className="testimonial">
        <div className="basic-grid-container">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/contact/testimonial.png",
              mobImg: "/assets/pages/contact/testimonial-mob.png",
            }}
          />

          <div className="content-container">
            <p className="rte">
              I felt like I couldn’t grow until I moved to Storezippy. Now I am
              encouraged to sell more with them. My CPA even said to me, ‘thank
              god you switched to Storezippy.
            </p>
          </div>
        </div>
      </section>
      <br />

      {/* partner */}
      <section className="partner-area">
        <div className="basic-grid-container">
          <div className="content-container">
            <h2 className="heading primary-color primary-font">
              Choose the Right 3PL Partner
            </h2>

            <p className="rte">
              Download the free guide today and get a jump start on your 3PL
              Service Provider.
            </p>

            <br />
            <br />
            <Link to="/download" className="btn">
              Download
            </Link>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/contact/partner.png",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
