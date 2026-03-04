import { useEffect, useRef, useState } from "react";
import TypingHeading from "../components/TypingHeading";
import { Link } from "react-router-dom";


function AboutSec() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
  <div className={`about-container ${show ? "fade-down" : ""}`}>

    {/* Rotating Image */}
    <div className="about-image rotate-360">
      <img src="/ABOUT_US1.png" alt="About Us" />
    </div>

    {/* Right Content */}
    <div className="about-text">
      <TypingHeading text="About Us" />
      <p className={`fade-item ${show ? "fade-in" : ""}`} style={{ animationDelay: '0.3s' }}>
       <strong>Mirns Interiors</strong>is a Sri Mirns interior design and furniture company specializing in custom-made furnishings, modular kitchens, and complete interior solutions for residential and corporate spaces. Based in Colombo,
         with project operations across Sri Lanka, Mirns Interiors was established to bring aesthetic innovation, sustainable materials, and fine craftmanship into every corner of the modern home.
      </p>
      <p className={`fade-item ${show ? "fade-in" : ""}`} style={{ animationDelay: '0.9s' }}>
       We provide comprehensive design and fit-out solutions tailored to every scale and style:
       <ul>

      <li> <strong>Turnkey Projects</strong></li>
      <li> <strong>Modular & Custom Febrication</strong> </li> 
       <li><strong>Renovation & Remodling</strong></li>
      <li> <strong>Design Consultation</strong> </li> 
      
       </ul>
       </p>
  {/* Get to Know More Button */}
<Link
  to="/about"
  className={`get-btn ${show ? "fade-in" : ""}`}
  style={{ animationDelay: '1.2s' }}
>
  Get to Know More
</Link>
    </div>

  </div>
</section>

  );
}

export default AboutSec;
