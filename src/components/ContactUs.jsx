import React, { useEffect } from "react";
import "./ContactUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="contact-button-container" data-aos="fade-up">
      <div className="contact-button">
        <div className="doubts-text">
          STILL HAVE
          <br />
          DOUBTS?
        </div>
        <div className="contact-text">Contact us</div>
        <div className="arrow-container">
          <div className="arrow-circle">
            <div className="arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
