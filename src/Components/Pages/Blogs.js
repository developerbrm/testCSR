import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

const Blogs = () => {
  const dataForBlogs = [
    {
      img: "/assets/pages/blogs/how-to-start-selling-online/featured-image.png",
      date: "23rd June 2021",
      title: "How to start selling online?",
      des: "Want to start an online business but don’t know where to start? Learn how to launch an online store and start selling with our ultimate step by step guide.",
      author: "Garima Mehta",
      url: "/blogs/how-to-start-selling-online",
    },
  ];

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="blogs-page">
      <div className="blogs-container blog-page-width">
        {dataForBlogs?.map(({ img, date, title, des, author, url }, index) => (
          <div className="blog-item" key={index}>
            <div className="featured-image">
              <Link to={url}>
                <ResponsiveDisplayImg data={{ img }} />
              </Link>
            </div>

            <div className="content">
              <p className="date">{date}</p>
              <p className="title primary-font">{title}</p>
              <p className="des">{des}</p>
              <div className="custom-hr"></div>
              <p className="author">
                by <span>{author}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
