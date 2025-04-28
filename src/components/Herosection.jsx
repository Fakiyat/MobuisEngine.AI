import React from "react";
import ButtonWhite from "../shared/ButtonWhite/buttonWhite";
import "./herosection.css";

function Herosection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Land Job Interview
          <br />
          <span className="highlight">10x </span>
          faster
        </h1>
        <p>
          Custom-built resumes that match your goals, keywords, and recruiter
          expectations.
        </p>
        <ButtonWhite />
      </div>

      <div className="hero-ebook-container">
        <img src="/eBook.svg" alt="Download Free E-Book" />
        <span> Download Free E-Book</span>
        <div className="book-icon-container">
          <img src="./openbook.jpg" alt="Book Icon" className="book-icon" />
          <div className="arrow-button">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
