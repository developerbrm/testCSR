import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import SectionImgContentGrid from "../Utilities/mini-comps/SectionImgContentGrid";
import animationObserver from "../Utilities/library/animationObserver";

const Product = () => {
  React.useEffect(() => {
    animationObserver();
  }, []);

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="product" title="product">
      {/* hero  */}

      <SectionImgContentGrid
        data={{
          sectionClassName: "hero page-width",
          heading: "Reforming your Warehouse Management with Digitalization",
          text: "To have an upper hand in the era of new innovative technologies, we need to undergo a digital transformation. We at STORE ZIPPY believe in warehouse automation opportunities to add value to your business. Meeting higher client’s expectations calls for the real time inventory management and hence we keep you updated with a live dashboard ensuring you know exactly about everything related to your account.",
          urlTo: "/quotes",
          urlText: "Get Quotes",
          img: "/assets/pages/product/hero.png",
        }}
      />

      {/* steps */}
      <section className="steps">
        <h2 className="main-heading primary-font">
          Streamlining your Fulfillment Needs!
        </h2>
        <div className="step step-1">
          <div className="txt-container">
            <h3 className="heading tertiary-font">
              We receive and store your inventory.
            </h3>

            <p className="rte">
              We have a temperature controlled warehouse fulfillment environment
              to safely secure your merchandise.
            </p>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/product/step-1.png",
            }}
          />
        </div>
        <div className="step step-2">
          <div className="txt-container">
            <h3 className="heading tertiary-font">
              We pick and pack your orders.{" "}
            </h3>

            <p className="rte">
              Our dedicated warehouse team ensures quick pick and pack services
              following all packing requirements.
            </p>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/product/step-2.png",
            }}
          />
        </div>
        <div className="step step-3">
          <div className="txt-container">
            <h3 className="heading tertiary-font">
              We quality check and schedule Shipment.
            </h3>

            <p className="rte">
              As soon as you receive online orders, we do the proper quality
              checks and schedule order dispatching.
            </p>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/product/step-3.png",
            }}
          />
        </div>
      </section>

      <br />
      <br />
      <div className="basic-grid-container page-width">
        <div className="content-container width-45ch">
          <h2 className="primary-color primary-font heading text-with-line">
            We support a Diversity of Integrations Platform
          </h2>
        </div>

        <div className="img-container">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/product/logos-combined.png",
            }}
          />
        </div>
      </div>
      <br />
      <br />
      {/* inventory management */}
      <SectionImgContentGrid
        data={{
          sectionClassName: "inventory page-width",
          heading: "Inbound Inventory Management",
          text: "Once you ship your inventory to our warehouse centre, we perform thorough quality checks, count the inbound stock and report discrepancies, if any, to you without any delays.",
          img: "/assets/pages/product/inventory.png",
          imgRight: false,
        }}
      />

      {/* inventory management dashboard */}
      <SectionImgContentGrid
        data={{
          sectionClassName: "inventory-dashboard page-width",
          heading: "Inventory Storage Management",
          text: "After checking the stock, we add it to our system and allocate an appropriate location in the warehouse. The scalability of STORE ZIPPY’s system makes us suitable for a large number of businesses.",
          img: "/assets/pages/product/inventory-dashboard.png",
          mobImg: "/assets/pages/product/inventory-dashboard-mob.png",
          imgRight: true,
        }}
      />

      {/* report */}
      <SectionImgContentGrid
        data={{
          sectionClassName: "report page-width",
          heading: "Reporting",
          text: "To manage your stock within our warehouse, our system outputs a standard suite of reports. These reports are shared with you so that you have a clear visibility into the operations and performance.",
          img: "/assets/pages/product/report.png",
          mobImg: "/assets/pages/product/report-mob.png",
          imgRight: false,
        }}
      />

      {/* dispatch */}
      <SectionImgContentGrid
        data={{
          sectionClassName: "dispatch page-width",
          heading: "One Day Dispatch",
          text: "STORE ZIPPY prioritizes your business need of getting things where they need to be as quickly as possible. That’s why we offer a same day delivery service for the orders placed before 10am. What’s more? You will be able to track the progress online via our live dashboard.",
          img: "/assets/pages/product/dispatch.png",
          imgRight: true,
        }}
      />

      {/* returns */}
      <SectionImgContentGrid
        data={{
          sectionClassName: "returns page-width",
          heading: "Returns Management",
          text: "Management of returns is an important part of what STORE ZIPPY does. First and foremost, we do a thorough check of the returned stock. After the check, as per your guidelines, we will either return the items back to the stock or arrange it to be returned to you. ",
          img: "/assets/pages/product/returns.png",
          mobImg: "/assets/pages/product/returns-mob.png",
          imgRight: false,
        }}
      />

      {/* warehouse */}
      <SectionImgContentGrid
        data={{
          sectionClassName: "warehouse page-width",
          heading: "Your On Demand Digital Warehouse Partner",
          text: "Download the free guide today and get a jump start on your 3PL Service Provider.",
          img: "/assets/pages/product/warehouse.jpg",
          urlTo: "/guide",
          urlText: "Download",
          imgRight: true,
        }}
      />
    </div>
  );
};

export default Product;
