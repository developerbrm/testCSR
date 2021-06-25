import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";

const About = () => {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="page-about-us">
      <div className="hero">
        <ResponsiveDisplayImg data={{ img: "/assets/pages/about/hero.png" }} />
      </div>

      <div class="info">
        <p>
          StoreZippy is a tech-enabled, automated and India’s most
          cost-effective fulfillment service provider with tailored solutions
          across every aspect of your Ecommerce journey. We have served 40+ D2C,
          B2C and B2B brands by delivering optimal outcomes for their
          warehousing and order fulfillment needs.
          <br /> <br />
          With our strong network of fulfillment centres in strategic locations,
          we keep your inventory close to your customers which helps you save on
          shipping time and costs. Also, we are integrated with 15+ top-notch
          shipping partners which lets you take the advantage of discounted
          shipping rates.
          <br /> <br />
          All our fulfillment centers are highly secured with 24*7 surveillance
          to safeguard your inventory and improve warehouse safety. Our cutting
          edge technology and 20+ multi channel marketplace integration lets you
          manage inventory and orders from a single unified dashboard.
          <br /> <br />
          At StoreZippy we ensure that our clients not only achieve their
          business goals with us but also see us as their strategic partner.
          Read on to know about our inception and more about us.
        </p>
      </div>

      <div className="story basic-grid-container">
        <div className="content">
          <h1 className="offset-heading primary-font heading-rounded">
            The Store Zippy Story
          </h1>

          <p>
            The ecommerce industry is recognized as the fastest growing industry
            in India. With this tremendous growth, the demand for warehousing
            and fulfillment is also expected to rise. We luckily spotted this
            ever increasing demand and realised the need of a reliable and a
            scalable 3 PL partner at the right time and that’s how StoreZippy
            was born.
          </p>
        </div>

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/about/mobile.png",
          }}
        />
      </div>

      <div className="inception">
        <h1 className="offset-heading primary-font heading-rounded">
          Inception
        </h1>

        <p>
          The first real stepping stone towards the inception of{" "}
          <strong>“StoreZippy”</strong>
          was <strong>“SocioMonkey”</strong>. SocioMonkey is a team of digital
          mixologists using technology, strategy, innovation and human
          brilliance to help build digital presence for not just ecommerce
          ventures but businesses of all types and sizes.
          <br />
          <br />
          It was founded by Mr. Neeraj Kathuria and{" "}
          <strong>Mr. Vinay Aggarwal</strong> back in
          <strong>2015</strong> during the early wave of ecommerce in India and
          we have come a long way since then. Warehousing and fulfillment has
          always been a part of what we do and to accommodate the company’s
          growing client base, the founders decided to create a separate
          division for the same. The idea was to create customised solutions
          that match your fulfillment needs and preferences, no matter your
          industry. This business idea was finally brought to life and is now
          known as “StoreZippy - Aapka Apna warehouse.” <br />
          <br />
          We are extremely proud of the company, its humble beginnings and the
          proven track record of enabling businesses to succeed.
        </p>
      </div>

      <div className="founders">
        <h1 className="offset-heading primary-font heading-rounded">
          People behind the idea
        </h1>

        <div className="basic-grid-container">
          <div class="person">
            <ResponsiveDisplayImg
              data={{ img: "/assets/pages/about/founder-1.png" }}
            />
            <p className="txt-center">
              <strong>Mr. Neeraj Kathuria</strong>
            </p>
          </div>
          <div class="person">
            <ResponsiveDisplayImg
              data={{ img: "/assets/pages/about/founder-2.png" }}
            />
            <p className="txt-center">
              <strong>Mr. Vinay Aggarwal</strong>
            </p>
          </div>
        </div>

        <p>
          <strong>Mr. Kathuria</strong> and <strong>Mr. Aggarwal</strong>{" "}
          started their career as an Area Sales Officer with Channel Play, a
          Gurugram based startup. While working there they gained some valuable
          insights and realised the struggle people face to establish a strong
          digital presence and to grow their ecommerce business. It was then
          that they got an idea to build a company which helps bridge the gap
          between the brands, customers and the powerful digital media &
          ecommerce platforms. With this mesmerising idea in mind, these young,
          talented souls left their job at just the age of 25 and went beyond
          the barriers to start their own marvelous journey. <br />
          <br />
          Till now, they have helped over 200 brands establish a stronghold in
          the e-commerce sphere. After working on over 50,000 products and
          generating a revenue of more than 50 crores for them, they plan on
          adding more value to the e-commerce domain with the launch of Store
          Zippy.
        </p>
      </div>
    </div>
  );
};

export default About;
