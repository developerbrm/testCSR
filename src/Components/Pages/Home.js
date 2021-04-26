import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";

const Home = () => {
  return (
    <div id="home" title="home">
      {/* hero  */}
      <section className="hero">
        <div className="basic-grid-container page-width">
          <div className="grid-item grid-item-1">
            <div className="img-container">
              <img src="/assets/pages/home/hero-grid-1.png" alt="text image" />
            </div>
          </div>
          <div className="grid-item grid-item-2">
            <div className="img-container">
              <img src="/assets/pages/home/hero-grid-2.png" alt="image" />
            </div>
          </div>
        </div>
      </section>

      {/* quotes  */}
      <section className="quotes">
        <div className="basic-grid-container page-width">
          <div className="grid-item grid-item-1">
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

              <Link className="btn" to="/contact">
                Get Quotes
              </Link>
            </div>
          </div>
          <div className="grid-item grid-item-2">
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
          <div className="grid-item">
            <div className="video-container">
              <video src="" alt="video" />
            </div>
          </div>
          <div className="grid-item">
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
        <div className="basic-grid-container heading-grid-container">
          <div className="heading-container">
            <h2 className="primary-color heading secondary-font">
              From Online Store to your Customer’s door
            </h2>
          </div>

          <div className="line-container">
            <div className="gradient-line"></div>
          </div>
        </div>

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/procedure.png",
            mobImg: "/assets/pages/home/procedure-mob.png",
          }}
        />
      </section>
    </div>
  );
};

export default Home;
