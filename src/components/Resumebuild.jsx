import React, { useEffect } from "react";
import "./Resumebuild.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Resumebuild() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="resume-container">
      {/* Header Section */}
      <div className="header">
        <h1>Resume Building & Coaching</h1>
        <p>
          Let's talk about where you're headed — and how your resume can get you
          there.
        </p>
        <p className="action-text">Schedule a call to get started.</p>
      </div>

      {/* Services Cards */}
      <div className="services-container" data-aos="fade-up">
        {/* Resume Rebuild Card */}
        <div className="service-card">
          <h2>Resume Rebuild</h2>
          <p className="description">
            Crafted for senior to VP-level professionals ready for their next
            big step.
          </p>

          <div className="price">
            <span className="amount">$1000</span>
            <span className="period">one time</span>
          </div>

          <hr />

          <div className="features">
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>3× 30-min coaching</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Focused on storytelling, not just formatting</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Analyst + full application team on Pacific hours</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Tailored to your target industry, company, or role</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>
                Direct work with our co-founder (ex-Google, JP Morgan)
              </span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>
                Executive coaching from UC Berkeley alum with 10+ yrs experience
              </span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Resume Rebuild portfolio available upon request</span>
            </div>
          </div>

          <button className="get-started-btn">Get Started →</button>
        </div>

        {/* Interview Prep Card */}
        <div className="service-card">
          <h2>Interview Prep</h2>
          <p className="description">
            Two sessions to sharpen your story, confidence, and clarity — fast.
          </p>

          <div className="price">
            <span className="amount">$500</span>
            <span className="period">one time</span>
          </div>

          <hr />

          <div className="features">
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>2× 45-min live coaching with our co-founder</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Real-time, practical feedback</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Build clarity, empathy & executive presence</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>
                For senior and leadership roles — technical & non-technical
              </span>
            </div>
          </div>

          <button className="get-started-btn">Get Started →</button>
        </div>
      </div>
    </div>
  );
}

export default Resumebuild;
