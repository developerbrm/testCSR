import React, { useState } from "react";

const NewsLetter = ({ data }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setInputValue(() => value);
  };

  return (
    <section className="newsletter-contanier">
      <div className="form-container">
        <form>
          <div className="form-item">
            <input
              type="email"
              name="signup"
              value={inputValue}
              onChange={handleChange}
              placeholder="Sign up for our newsletter"
              required
            />
          </div>
          <div className="form-item">
            <button type="submit" className="btn">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
