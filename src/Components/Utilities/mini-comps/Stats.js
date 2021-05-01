import React from "react";
import HeadingWithLine from "./HeadingWithLine";
import ResponsiveDisplayImg from "./ResponsiveDisplayImg";

const Stats = () => {
  return (
    <section className="stats">
      <HeadingWithLine data={{ heading: "Your Business is in safe hands" }} />
      <br />
      <br />
      <ResponsiveDisplayImg
        data={{
          img: "/assets/pages/home/stats.png",
        }}
      />
    </section>
  );
};

export default Stats;
