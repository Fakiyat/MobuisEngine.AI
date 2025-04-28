import React from "react";
import "./Work.css";

function Work() {
  return (
    <section className="how-we-work">
      <h2>How we work?</h2>
      <div className="steps-container">
        <div className="step">
          <div className="circle-line">
            <div className="circle">1</div>
            <div className="line"></div>
          </div>
          <p>Submit Intake Form</p>
        </div>
        <div className="step">
          <div className="circle-line">
            <div className="circle">2</div>
            <div className="line"></div>
          </div>
          <p>We do the search and curation for list of jobs</p>
        </div>
        <div className="step">
          <div className="circle-line">
            <div className="circle">3</div>
            <div className="line"></div>
          </div>
          <p>You approve, we do the tedious part (applying)</p>
        </div>
        <div className="step">
          <div className="circle-line">
            <div className="circle">4</div>
            <div className="line"></div>
          </div>
          <p>You get the interviews</p>
        </div>
      </div>
    </section>
  );
}

export default Work;
