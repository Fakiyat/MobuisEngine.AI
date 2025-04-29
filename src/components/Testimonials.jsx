import React, { useEffect } from "react";
import "./Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="testimonials">
      <h2>What our clients have to say</h2>

      <div className="testimonial-cards " data-aos="fade-up">
        {[1, 2, 3].map((item) => (
          <div className="testimonial-card" key={item}>
            <div className="testimonial-video">
              <button className="play-button">▶</button>
            </div>
            <div className="testimonial-content">
              <p>
                Holly is a <strong>senior executive</strong> who got over
                <strong> 10 job interviews </strong> and an offer she accepted
              </p>
              <div className="arrow-button">↗</div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="testimonial-buttons"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button className="outline-button">More customer testimonials ↗</button>
        <button className="solid-button">Get Started →</button>
      </div>
    </section>
  );
}

export default Testimonials;
