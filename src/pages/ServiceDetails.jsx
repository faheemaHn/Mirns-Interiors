import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import services from "../data/services";

import "./ServiceDetails.css";
import ContactButton from "../components/ContactButton";
import emailjs from "@emailjs/browser";

function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);
  const [activeSection, setActiveSection] = useState(null);

  // Inline booking form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    if (service) {
      setFormData((prev) => ({ ...prev, service: service.title }));
    }
  }, [service]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sr00fzc",
        "template_zw9d35l",
        formData,
        "Tk07rcO0fAQ8PTFqI"
      )
      .then(
        () => {
          setFormMessage("Thank you! We will contact you soon.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            service: service.title,
          });
        },
        (err) => {
          console.error(err);
          setFormMessage("Oops! Something went wrong. Try again.");
        }
      );
  };

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <section className="service-details">
      <div className="details-container">
        {/* LEFT SIDE */}
        <div className="details-left">
          <img src={service.bg} alt={service.title} className="main-img" />

          <h3>Our Projects</h3>
          <div className="project-gallery">
            {service.projects?.map((img, index) => (
              <div key={index} className="project-card">
                <img src={img} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="details-right">
          <h2>{service.title}</h2>
          <p>{service.description}</p>

          {/* Inline Booking Form */}
          <form className="booking-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="service"
              value={formData.service}
              readOnly
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Book Now</button>
            {formMessage && (
              <p className="success-message">{formMessage}</p>
            )}
          </form>

          {/* Contact Button Modal */}
          <ContactButton prefillService={service.title} />

          {/* Expandable Sections */}
          <div className="info-buttons">
            <button onClick={() => toggleSection("terms")}>
              Terms & Conditions
            </button>
            {activeSection === "terms" && (
              <div className="info-content">
                <ul>
                  <li>Order confirmation requires 60% advance payment.</li>
                  <li>The remaining 40% must be paid 10 days prior to installation.</li>
                  <li>Advance payments are used for custom-made furniture as per approved drawings.</li>
                  <li>No cancellations or refunds after advance payment.</li>
                  <li>Delivery will be made only after 100% payment completion.</li>
                  <li>Delivery within 21 working days (excluding weekends & holidays).</li>
                  <li>Installation will take 3–5 days after delivery.</li>
                  <li>Plumbing and electrical work must be done by the customer’s own technician.</li>
                  <li>No warranty for water damage, termite infestation, or physical damage.</li>
                </ul>
              </div>
            )}

            <button onClick={() => toggleSection("offer")}>What We Offer</button>
            {activeSection === "offer" && (
              <div className="info-content">
                <p>Full consultation, design execution, and finishing.</p>
              </div>
            )}

            <button onClick={() => toggleSection("faq")}>FAQ</button>
            {activeSection === "faq" && (
              <div className="info-content">
                <p>
                  <strong>Q: Do you provide 3D designs before production?</strong>
                  <br />
                  A: Yes, we provide design drawings before starting production.
                </p>
                <p>
                  <strong>Q: Can I customize materials and colors?</strong>
                  <br />
                  A: Yes, materials and finishes can be customized as per your preference.
                </p>
                <p>
                  <strong>Q: Do you handle full home projects?</strong>
                  <br />
                  A: Yes, we handle complete interior projects including kitchens, wardrobes, and TV units.
                </p>
                <p>
                  <strong>Q: Do you provide installation service?</strong>
                  <br />
                  A: Yes, installation is handled by our professional team.
                </p>
              </div>
            )}

            <button onClick={() => toggleSection("details")}>For More Details</button>
            {activeSection === "details" && (
              <div className="info-content">
                <p>Contact us for more information.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;