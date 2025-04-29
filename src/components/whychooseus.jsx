import React, { useEffect } from "react";
import "./whychooseus.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Whychooseus() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>

      <div className="choose-cards" data-aos="fade-up" data-aos-delay="100">
        <div className="choose-card">
          <i className="fa-solid fa-handshake"></i>
          <h3>Tried, Tested, Trusted</h3>
          <p>
            Built by folks with 40+ years in tech and hiring — we know the game,
            and we’ve got your back.
          </p>
        </div>

        <div className="choose-card">
          <i className="fa-solid fa-user"></i>
          <h3>Real People, Real Help</h3>
          <p>
            A hands-on team that actually cares — guiding you through every
            twist in your career path.
          </p>
        </div>

        <div className="choose-card">
          <i className="fa-solid fa-star"></i>
          <h3>Beat the Line</h3>
          <p>
            We search, shortlist, and apply for you, so your name shows up first
            — every single day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Whychooseus;
