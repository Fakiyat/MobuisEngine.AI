import React, { useEffect } from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-us">
      <h2>About Us</h2>

      <div className="profile">
        <div className="profile-image" data-aos="fade-up">
          <img src="/Profile1.png" alt="Ashwin" />
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            in
          </a>
        </div>
        <div className="profile-text" data-aos="fade-up" data-aos-delay="100">
          <p>
            <strong>Ashwin </strong> is the founder of mobiusengine.ai. He is an
            accomplished senior executive with over 20 years of experience in
            cloud infrastructure and financial services. With over 2 decades of
            experience at Google and JP Morgan, Ashwin held various product and
            GTM roles. Ashwin is an MBA holder from Yale University.
          </p>
          <p>
            Ashwin's vision with Mobius is to give job seekers a significant
            advantage in securing the roles of their dreams.
          </p>
        </div>
      </div>

      <div className="profile">
        <div className="profile-image" data-aos="fade-up">
          <img src="/Profile2.png" alt="Nicole" />
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            in
          </a>
        </div>
        <div className="profile-text" data-aos="fade-up" data-aos-delay="100">
          <p>
            <strong>Nicole </strong> is an Executive coach at Mobius
            specializing in resume builds and career advisory.
          </p>
          <p>
            With a B.S. in Business Administration from UC Berkeley and 7+ years
            of experience in AI-driven product strategy, she has seen firsthand
            how the proper positioning opens doors. She takes a targeted,
            results-driven approach to help clients confidently stand out and
            land roles that truly match their skills and potential.
          </p>
        </div>
      </div>
      <div className="profile">
        <div className="profile-image" data-aos="fade-up">
          <img src="./profile-3.svg" alt="Myself" />
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            in
          </a>
        </div>
        <div className="profile-text" data-aos="fade-up" data-aos-delay="100">
          <p>
            <strong>Fakiyat Afaq </strong>
          </p>
          <p>
            Frontend-Developer. Passionate and detail-oriented Frontend
            Developer with experience in developing responsive, user-friendly
            web applications. Proficient in HTML, CSS, JavaScript, and modern
            frontend frameworks like React.Js.
          </p>
        </div>
      </div>

      <div className="links" data-aos="fade-up" data-aos-delay="200">
        <a href="#">Learn more about our Board of Advisors ↗</a>
        <a href="#">Follow us on our LinkedIn page ↗</a>
      </div>
    </section>
  );
}

export default AboutUs;
