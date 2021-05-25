import React, { useState, useEffect } from "react";
import GuideForm from "../forms/GuideForm";
import sendFormData from "../Utilities/library/sendFormData";
import HeadingWithLine from "../Utilities/mini-comps/HeadingWithLine";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import SectionImgContentGrid from "../Utilities/mini-comps/SectionImgContentGrid";
export const GuideFormContext = React.createContext();

const Guide = () => {
  const [guideFormData, setGuideFormData] = useState({
    formType: { value: "Guide Form", name: "From Type" },
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
    sendFormData(guideFormData, setMessage);
  };

  const handleInvalid = (e) => {
    console.log("Form not filled properly");
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;

    setGuideFormData((prevData) => ({
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

  return (
    <div id="guide">
      <SectionImgContentGrid
        data={{
          sectionClassName: "hero page-width",
          heading: "The Ultimate Guide to Order Fulfillment 2021",
          text: "Are you struggling with Order Fulfillment? Then you have come to the right place! We understand it is a crucial process which requires a lot of planning and manpower and as a result it’s easy to make mistakes that can damage your brand’s reputation. <br /> <br /> We at StoreZippy are a team of FBA experts to set you up for success with adequate experience in providing 3PL fulfillment solutions. <br /><ul>This Order Fulfillment guide will help you learn:<br /><li>What is order fulfillment and the steps involved.</li> <li>Different order fulfillment options.</li> <li>Why outsource?</li><li>Important factors while choosing the right 3PL.</li></ul>",
          img: "/assets/pages/guide/hero.png",
          mobImg: "/assets/pages/guide/hero-mob.png",
        }}
      />

      <div className="page-width">
        <div className="basic-grid-container guide-grid-container">
          <div>
            <br />
            <br />
            <br />
            <HeadingWithLine
              data={{
                heading: "You are just a step away!",
              }}
            />

            <br />
            <br />
            <br />

            <GuideFormContext.Provider
              value={{
                guideFormData,
                handleFromChange,
                handleSubmit,
                handleInvalid,
                monthlyShipmentsOptions,
                message,
              }}
            >
              <GuideForm />
            </GuideFormContext.Provider>
          </div>
          <div className="images-area">
            <ResponsiveDisplayImg
              data={{
                img: "/assets/pages/guide/dude.png",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
