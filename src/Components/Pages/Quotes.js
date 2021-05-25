import React, { useState } from "react";
import QuotesForm from "../forms/QuotesForm";
import sendFormData from "../Utilities/library/sendFormData";
import HeadingWithLine from "../Utilities/mini-comps/HeadingWithLine";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import SectionImgContentGrid from "../Utilities/mini-comps/SectionImgContentGrid";
import Stats from "../Utilities/mini-comps/Stats";
export const QuotesFormContext = React.createContext();

const Quotes = () => {
  const [quotesFromData, setquotesFromData] = useState({
    formType: { value: "Quotes Form", name: "From Type" },
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

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(() => "Connecting to the server..");
    sendFormData(quotesFromData, setMessage);

    setTimeout(() => {
      setMessage(() => "");
    }, 6000);
  };

  const handleInvalid = (e) => {
    console.log("Form not filled properly");
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;

    setquotesFromData((prevData) => ({
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
      value: "New Store, I'm not currently shipping",
      content: "New Store, I'm not currently shipping",
    },
    {
      value: "1-200",
      content: "1-200",
    },
    {
      value: "201-500",
      content: "201-500",
    },
    {
      value: "501-1,000",
      content: "501-1,000",
    },
    {
      value: "5001-10,000",
      content: "5001-10,000",
    },
    {
      value: "10,000+",
      content: "10,000+",
    },
  ];

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="quotes">
      <section className="hero">
        <HeadingWithLine
          data={{
            heading: "Let’s Get Started!",
          }}
        />

        <br />
        <br />
        <br />

        <div className="basic-grid-container quotes-grid-container">
          <QuotesFormContext.Provider
            value={{
              quotesFromData,
              handleFromChange,
              handleSubmit,
              handleInvalid,
              message,
              monthlyShipmentsOptions,
            }}
          >
            <QuotesForm />
          </QuotesFormContext.Provider>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/quotes/hero-gird.png",
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
              img: "/assets/pages/quotes/testimonial.png",
              mobImg: "/assets/pages/quotes/testimonial-mob.png",
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
      <SectionImgContentGrid
        data={{
          sectionClassName: "partner-area page-width",
          heading: "Choose the Right 3PL Partner",
          text: " Download the free guide today and get a jump start on your 3PL Service Provider.",
          urlTo: "/guide",
          urlText: "Download",
          img: "/assets/pages/quotes/partner.png",
        }}
      />
    </div>
  );
};

export default Quotes;
