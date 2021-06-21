import React, { useState, useEffect } from "react";
import ContactForm from "../forms/ContactForm";
import sendFormData from "../Utilities/library/sendFormData";
import HeadingWithLine from "../Utilities/mini-comps/HeadingWithLine";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import SectionImgContentGrid from "../Utilities/mini-comps/SectionImgContentGrid";
import { useIntercom } from "react-use-intercom";
import MailchimpContactForm from "../forms/MailchimpGuideForm";
export const ContactFormContext = React.createContext();

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    formType: { value: "Contact Form", name: "From Type" },
    firstName: { value: "", required: true, label: "First Name" },
    lastName: { value: "", required: true, label: "Last Name" },
    email: { value: "", required: true, label: "Email" },
    phone: { value: "", required: true, label: "Phone" },
    requirement: {
      value: "",
      required: false,
      label: "Describe your requirement",
    },
    company: { value: "", required: true, label: "Company Name" },
    siteUrl: { value: "", required: false, label: "Company Website URL" },
    platform: {
      value: "",
      required: false,
      label: "Current Ecom Platform ",
    },
    ordersProcessed: {
      value: "",
      required: true,
      label: "Orders processed per month.",
    },
    warehousingCount: {
      value: "",
      required: false,
      label:
        "How many FCs/Warehousing Location you operate from a pan-India coverage?",
    },
    keyChallanges: {
      value: "",
      required: false,
      name: "keyChallanges",
      label: "What are your key challenges?",
    },
  });

  const [message, setMessage] = useState("");
  const { show } = useIntercom();

  const [keyChallangesData, setKeyChallangesData] = useState([
    {
      checked: false,
      value: "Delivery timelines in Tier 1s and Tier 2s",
      id: 1,
    },
    {
      checked: false,
      value: "Cost of Operations being very high ",
      id: 2,
    },
    {
      checked: false,
      value: "Returns management and associated Ops support ",
      id: 3,
    },
    {
      checked: false,
      value: "Managing Warehouse Ops and Quality Control ",
      id: 4,
    },
  ]);

  const handleCheckboxClick = (e) => {
    const { id } = e.target;

    setKeyChallangesData((prevObj) => {
      const newData = prevObj.map((data) => {
        if (Number(id) === Number(data.id))
          return { ...data, checked: !data.checked };
        else return data;
      });

      return [...newData];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(() => "Connecting to the server..");
    sendFormData(contactFormData, setMessage);
  };

  const handleInvalid = (e) => {
    console.log("Form not filled properly");
  };

  const handleFromChange = (e) => {
    const { name, value, type } = e.target;

    setContactFormData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], name, value },
    }));
  };

  const handlSalesButtonClick = () => {
    show();
  };

  useEffect(() => {
    let newData = keyChallangesData
      .filter(({ checked }) => checked)
      .map(({ value }) => value);

    setContactFormData((prevObj) => ({
      ...prevObj,
      keyChallanges: { ...prevObj["keyChallanges"], value: newData },
    }));
  }, [keyChallangesData]);

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact">
      <div className="hero">
        <HeadingWithLine
          data={{
            heading: "Fulfillment Questionnaire",
          }}
        />
      </div>
      <div className="basic-grid-container contact-grid-container">
        <ContactFormContext.Provider
          value={{
            contactFormData,
            handleFromChange,
            handleSubmit,
            handleInvalid,
            message,
            keyChallangesData,
            handleCheckboxClick,
          }}
        >
          <ContactForm />
        </ContactFormContext.Provider>

        <div className="images-area">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/contact/display-img-1.png",
            }}
          />
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/contact/display-img-2.png",
            }}
          />
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/contact/display-img-3.png",
            }}
          />
        </div>
      </div>

      <section className="contact-sales">
        <button onClick={handlSalesButtonClick}>
          <img src="/assets/icon-handshake.png" />
          <h2 className="heading primary-font">Contact Sales</h2>
          <p className="rte">
            Want to know more about our products, features and services. Our
            sales team is here to help.
          </p>
        </button>
      </section>

      <SectionImgContentGrid
        data={{
          sectionClassName: "download page-width",
          heading: "One Stop Window for all your needs",
          text: "Download the free guide today and get a jump start on your 3PL Service Provider.",
          urlTo: "/guide",
          urlText: "Download",
          img: "/assets/pages/contact/download.png",
        }}
      />
    </div>
  );
};

export default Contact;
