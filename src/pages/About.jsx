import { useEffect } from "react";
import "./About.css";

function About() {

  useEffect(() => {
    const sections = document.querySelectorAll(".about1-fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about1-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="about1-container">

      {/* HERO */}
      <section className="about1-hero about1-fade">
        <div className="about1-hero-content">
          <h1>About Us</h1>
          <p>Crafting Elegant Spaces with Precision & Passion</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about1-story about1-fade">
        <div className="about1-story-img">
          <img src="/mission.jpg" alt="Our Story" />
        </div>

        <div className="about1-story-text">
          <h2>Mission</h2>
          <p>
          To elevate spaces into living works of art through elegant,
          sustainable, and functional design solutions.
        </p>
          <p>
          <h2>Vision</h2>
          To become Mirns most trusted name in interior design by seamlessly 
          integrating creativity, technology, and craftmanship.
          </p>
        </div>
      </section>

      {/* MEET TEAM */}
      <section className="about1-team about1-fade">
        <div className="about1-team-text">
          <h2>Meet Our Team</h2>
          <p>
            Our professional designers, skilled factory craftsmen,
            and experienced installation specialists work together
            to ensure every project is delivered with perfection,
            attention to detail, and unmatched quality.
          </p>
        </div>

        <div className="about1-team-img">
          <img src="/office4.png" alt="Our Team" />
        </div>
      </section>

      {/* VALUES */}
      <section className="about1-values-section about1-fade">
        <h2>Our Core Values</h2>

        <div className="about1-values">
          <div className="about1-card">
            <h3>Innovative Thinking</h3>
            <p>Embracing creativity to craft unique, 
              forward-thinking design solutions.
            </p>
          </div>

          <div className="about1-card">
            <h3>Client-First Approach</h3>
            <p>Designing with empathy, collaboration,
               and your vision at the heart of every space.</p>
          </div>

          <div className="about1-card">
            <h3>Sustainable Practices</h3>
            <p>Committing to environmentally responsible 
              choices in every aspect of our work.
            </p>
          </div>

          <div className="about1-card">
            <h3>Unwavering Integrity</h3>
            <p>Operating with honesty, transparency, and ethical 
              responsibility.
            </p>
             </div>
             <div className="about1-card">
            <h3>Pursuit of Excellence</h3>
            <p>Delivering superior quality through attention 
              to detail and continuous improvement.
            </p>
           
          </div>
        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="about1-gallery about1-fade">
        <h2>Behind The Scenes</h2>

        <div className="about1-gallery-grid">
          <img src="/factorywork.JPG" alt="Factory Work" />
          <img src="/behindthework.jpg" alt="Installation Work" />
          <img src="/mission.jpg" alt="Finishing Work" />
        </div>
      </section>

      {/* CTA */}
      <section className="about1-cta about1-fade">
        <h2>Ready to Transform Your Space?</h2>
        <a href="/contact" className="about1-btn">
          Contact Us
        </a>
      </section>

    </div>
  );
}

export default About;
