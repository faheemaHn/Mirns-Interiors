import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services1Data = [
  {
    title: "Custom Furniture Design",
    description: (
      <ul>
        <li>Wooden and steel furniture</li>
        <li>Tailored to the client's style & budget</li>
        <li>3D design previews before production</li>
      </ul>
    ),
    image: "/customF.jpg",
  },
  {
    title: "Interior Design & Renovation",
    description: (
      <ul>
        <li>Custom made design planning</li>
        <li>Lighting, and wall concept integration</li>
        <li>Home, office, and hospitality spaces</li>
      </ul>
    ),
    image: "/servises2.jpg",
  },
  {
    title: "Modular Kitchen System",
    description: (
      <ul>
        <li>Custom style made modular fittings</li>
        <li>Soft-close drawers & premium finishes</li>
        <li>Functionality with luxury</li>
      </ul>
    ),
    image: "/bedroom-kitchen.jpg",
  },
  {
    title: "Decor & Styling",
    description: (
      <ul>
        <li>Professional space staging</li>
        <li>Aesthetic balance</li>
        <li>Homeowners & real estate developers</li>
      </ul>
    ),
    image: "/Decore.jpg",
  },
];

const subUnitsData = [
  {
    title: "Mirns Studio",
    description:
      "Focuses on luxury handcrafted furniture and art installations.",
  },
  {
    title: "Mirns Fitouts",
    description:
      "Handles turnkey corporate interior projects and workspace design.",
  },
  {
    title: "Mirns Concepts",
    description:
      "R&D and design innovation lab experimenting with sustainable meterials.",
  },
];

const Services1 = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-container, .subunit-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    const sparksContainer = document.querySelector(".hero-sparks");
    if (sparksContainer) {
      sparksContainer.innerHTML = "";
      for (let i = 0; i < 20; i++) {
        const spark = document.createElement("span");
        spark.style.animationDelay = `${Math.random() * 2}s`;
        spark.style.top = `${Math.random() * 50}px`;
        spark.style.right = `${Math.random() * 50}px`;
        const size = 6 + Math.random() * 5;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        sparksContainer.appendChild(spark);
      }
    }
  }, []);

  return (
    <section className="services1">
      {/* HERO */}
      <div className="services-hero hero-3">
        <div className="hero-overlay"></div>
        <div className="hero-sparks"></div>
        <div className="hero-text">
          <h1>Our Services</h1>
          <p>Explore how we transform spaces with style and functionality.</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="services-cards">
        {services1Data.map((service, index) => (
          <div
            className={`service-container ${
              index % 2 === 0 ? "row-normal" : "row-reverse"
            }`}
            key={index}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>
              {service.description}

              <Link to="/contact">
                <button className="service-btn">
                  Request a Consultation
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

{/* SUB BUSINESS UNITS - DARK LUXURY */}
<div className="subunits-section dark-luxury">
  <div className="lux-header">
    <h2>Sub Business Units</h2>
    <span className="gold-line"></span>
    <p>Operating through specialized divisions to deliver refined excellence.</p>
  </div>

  <div className="lux-grid">
    {subUnitsData.map((unit, index) => (
      <div className="lux-card" key={index}>
        <div className="lux-number">0{index + 1}</div>
        <h3>{unit.title}</h3>
        <p>{unit.description}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Services1;