import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="logo-container">
          <img src="/Logo-blue.svg" alt="MobiusEngine Logo" className="logo" />
          <h2 className="logo-text">MobiusEngine</h2>
        </div>

        <div className="footer-divider"></div>

        <div className="contact-info">
          <div className="contact-column">
            <h3>Address</h3>
            <p>
              1875 Mission St Ste 103 #450
              <br />
              San Francisco, CA 94103
            </p>
          </div>

          <div className="contact-column">
            <h3>Email</h3>
            <a href="mailto:finance@mobiusengine.ai">finance@mobiusengine.ai</a>
          </div>

          <div className="contact-column">
            <h3>Telephone</h3>
            <a href="tel:650-889-6026">650-889-6026</a>
          </div>

          <div className="social-column">
            <h3>Socials</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <span className="linkedin-icon-footer">in</span>
              </a>
              <a href="#" className="social-icon">
                <span className="linkedin-icon-footer">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Mobiusservices LLC</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
