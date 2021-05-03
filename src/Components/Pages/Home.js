import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import animationObserver from "../Utilities/library/animationObserver";
import HeadingWithLine from "../Utilities/mini-comps/HeadingWithLine";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import Stats from "../Utilities/mini-comps/Stats";

const Home = () => {
  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <div id="home" title="home">
      {/* hero  */}
      <section className="hero">
        <div className="basic-grid-container page-width">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="grid-item grid-item-1"
          >
            <div className="content-container width-40ch">
              <h2 className="primary-color primary-font heading text-with-line">
                On Demand Warehousing and Fulfillment solution{" "}
              </h2>
            </div>
          </div>
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".3"
            className="grid-item grid-item-2"
          >
            <div className="img-container">
              <img src="/assets/pages/home/hero-grid-2.png" alt="image" />
            </div>
          </div>
        </div>
      </section>

      {/* quotes  */}
      <section className="quotes">
        <div className="basic-grid-container page-width">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="grid-item grid-item-1"
          >
            <div className="txt-container">
              <p className="rte">
                When logistics becomes the most critical part of your business
                to deal with, partnering with warehouse services is a wise idea.
                If you’re looking for a comprehensive fulfillment solution, then
                STOREZIPPY is the place to go.
                <br />
                <br />
                We pride ourselves on tailoring a warehousing solution to help
                our clients achieve their storage, fulfilment and distribution
                goals.
                <br />
                <br />
                We don't want to think of ourselves just as a warehousing
                service provider but as your active business partner.
                <br />
                <br />
              </p>

              <Link className="btn" to="/quotes">
                Get Quotes
              </Link>
            </div>
          </div>
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".3"
            className="grid-item grid-item-2"
          >
            <div className="img-container">
              <img src="/assets/pages/home/forklift-vector.png" alt="image" />
            </div>
          </div>
        </div>
      </section>

      {/* display img  */}
      <section className="info-img-conatiner">
        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/info-img.png",
            mobImg: "/assets/pages/home/info-img.png",
          }}
        />
      </section>

      {/* video area  */}
      <section className="video-area">
        <div className="basic-grid-container">
          <ResponsiveDisplayImg
            data={{
              img: "assets/pages/home/video.jpg",
            }}
          />
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="grid-item"
          >
            <div className="txt-container">
              <h2 className="primary-font heading">
                It’s time to outsource your fulfillment needs
              </h2>

              <p className="rte">
                Download the free guide today and get a jump start on your 3PL
                Service Provider.
              </p>

              <Link to="/" className="btn">
                Download
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* procedure */}
      <section className="procedure page-width">
        <HeadingWithLine
          data={{ heading: "From Online Store to your Customer’s door" }}
        />

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/procedure.png",
            mobImg: "/assets/pages/home/procedure-mob.png",
          }}
        />
      </section>

      {/* dark  */}
      <section className="dark">
        <div
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".1"
          className="basic-grid-container heading-with-line-grid-container"
        >
          <div className="heading-container">
            <div className="secondary-font">
              <Link className="btn" to="/">
                How it works ?
              </Link>
            </div>
          </div>

          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".2"
            className="line-container"
          >
            <div className="gradient-line"></div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".3"
          className="basic-grid-container"
        >
          <div className="content-container">
            <h2 className="heading primary-color primary-font">
              Store Zippy won’t keep you in the dark!
            </h2>
            <p className="rte sub-text">Stay updated with the Live Dashboard</p>
            <p className="rte">
              Yes, in order to ensure that you exactly know what’s happening
              with your customer’s orders, we provide you with a live dashboard
              which keeps you updated.
            </p>

            <ul>
              <li>Greater Accuracy.</li>
              <li>Warehouse Tracking.</li>
              <li>Improved Productivity.</li>
              <li>Live Updates.</li>
            </ul>
          </div>

          <div className="img-container">
            <ResponsiveDisplayImg
              data={{
                img: "/assets/pages/home/man-on-laptop.png",
              }}
            />
          </div>
        </div>
      </section>

      <br />
      {/* display img */}
      <div className="displayImg-container page-width">
        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/ui-dashboard.png",
          }}
        />
        <div className="btn-container" style={{ textAlign: "center" }}>
          <Link className="btn" to="/">
            How it works ?
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* warehouse  */}
      <section className="warehouse page-width">
        <div className="basic-grid-container">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/warehouse.png",
            }}
          />

          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="content-container"
          >
            <h2 className="heading primary-color primary-font">
              Warehouse Solutions with a personalised service
            </h2>
            <p className="rte sub-text">Be rest assured!</p>
            <p className="rte">
              When you choose us for your warehousing services, you can be
              assured that you are investing in a company dedicated to
              efficiently cater to all your warehousing needs.
            </p>
          </div>
        </div>
      </section>

      {/* package  */}
      <section className="package page-width">
        <div className="basic-grid-container page-width">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="content-container"
          >
            <h2 className="heading primary-color primary-font">
              The Complete Package
            </h2>
            <p className="rte">
              From start-ups to well-established companies, we store your goods,
              pick your orders and schedule shipments for your customers.
            </p>

            <Link className="btn" to="/quotes">
              Get Quotes
            </Link>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/forklift-vector.png",
            }}
          />
        </div>
      </section>

      {/* stats    */}
      <Stats />

      {/* animated tape  */}
      <section className="animated-logos-stripe">
        <div className="page-width">
          <HeadingWithLine
            data={{
              heading: "We work with",
            }}
          />
        </div>

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/logo-stripe.png",
          }}
        />
      </section>

      <div className="gradient-line-classic"></div>
      <br />

      {/* get quote  */}
      <section className="quotes page-width">
        <div className="basic-grid-container page-width">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="content-container"
          >
            <h2 className="heading primary-color primary-font">
              Looking for Fulfillment Center solutions?
              <br />
              <span style={{ color: "#FF8F3F" }}>Try Us!</span>
            </h2>

            <Link className="btn" to="/quotes">
              Get Quotes
            </Link>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/quotes.png",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
