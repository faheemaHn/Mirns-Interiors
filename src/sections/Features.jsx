import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import services from "../data/services";

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getCardClass = (index) => {
    if (index === activeIndex) return "service-card center";
    if (index === (activeIndex - 1 + services.length) % services.length)
      return "service-card left";
    if (index === (activeIndex + 1) % services.length)
      return "service-card right";
    return "service-card hidden";
  };

  return (
    <section className="services-section">
      <div className="services-content">
        <h2>Our Services</h2>

        <div className="services-carousel">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className={getCardClass(index)}
              style={{
                backgroundImage: `url(${service.bg})`,
                textDecoration: "none",
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="services-btn-container">
          <Link to="/services" className="discover-btn">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Features;