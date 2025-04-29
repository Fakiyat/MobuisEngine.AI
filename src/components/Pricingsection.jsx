import React, { useEffect } from "react";
import "./Pricingsection.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Pricingsection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="pricing-section" data-aos="fade-up">
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>April Promo</h3>
          <h2>
            $35<span>/week</span>
          </h2>
          <hr />
          <ul>
            <li>Curated jobs from 1M+ listings, refreshed every 48 hours</li>
            <li>Up to 20 human-applied roles per week</li>
            <li>Need more? Add extra apps for just $1.5 each</li>
            <li>Your own dedicated application analyst</li>
            <li>Personalized with up to 10 filters & 5 job titles</li>
          </ul>
          <button>Get Started →</button>
        </div>

        <div className="pricing-card popular">
          <h3>
            Starter <span className="badge">Popular</span>
          </h3>
          <h2>
            $50<span>/week</span>
          </h2>
          <hr />
          <ul>
            <li>All the perks of the Promo Plan, plus:</li>
            <li>Resume review & story-focused feedback</li>
            <li>Dedicated search specialist</li>
            <li>Up to 50 job apps/week</li>
            <li>Extra apps at $1.5 each</li>
            <li>Analyst support within 6 hours</li>
          </ul>
          <button>Get Started →</button>
        </div>

        <div className="pricing-card">
          <h3>Plus</h3>
          <h2>
            $100<span>/week</span>
          </h2>
          <hr />
          <ul>
            <li>Everything in Starter, with more muscle:</li>
            <li>Up to 75 apps/week</li>
            <li>Apply to 15 job titles</li>
            <li>Analyst + full application team on Pacific hours</li>
          </ul>
          <button>Get Started →</button>
        </div>
      </div>

      <div className="advance-card" data-aos="fade-up" data-aos-delay="200">
        <div className="advance-content">
          <div className="left">
            <h3>Advance</h3>
            <p>Top-tier support for serious job hunters:</p>
            <hr />
            <ul>
              <li>Everything in Plus</li>
              <li>Custom Resumes & Cover Letters</li>
              <li>20 fully customized applications/week</li>
              <li>Help with complex job searches</li>
              <li>Access to senior resume experts, Founder & Exec Coaches</li>
            </ul>
          </div>
          <div className="right">
            <h2>
              $150<span>/week</span>
            </h2>
            <button>Get Started →</button>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Pricingsection;
