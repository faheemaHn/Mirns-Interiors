import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData"; 
import "./ServiceDetails.css"; 
import ContactButton from "../components/ContactButton";
import emailjs from "@emailjs/browser";

function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((item) => String(item.id) === String(id));
  const [activeSection, setActiveSection] = useState(null);

  // Booking form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    project: "",
  });
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    if (project) {
      setFormData((prev) => ({ ...prev, project: project.title }));
    }
  }, [project]);

  const toggleSection = (section) =>
    setActiveSection(activeSection === section ? null : section);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
            project: project.title,
          });
        },
        (err) => {
          console.error(err);
          setFormMessage("Oops! Something went wrong. Try again.");
        }
      );
  };

  if (!project) return <h2>Project not found</h2>;

  return (
    <section className="service-details">
      <div className="details-container">

        {/* LEFT SIDE */}
        <div className="details-left">
          <img src={project.image} alt={project.title} className="main-img" />

          <h3>Related Projects</h3>
          <div className="project-gallery">
            {project.relatedProjects?.map((img, index) => (
              <div key={index} className="project-card">
                <img src={img} alt={`Related Project ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="details-right">
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          {/* Booking Form */}
          <form className="booking-form" onSubmit={handleSubmit}>
            <input type="text" name="project" value={formData.project} readOnly />
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
            {formMessage && <p className="success-message">{formMessage}</p>}
          </form>

          <ContactButton prefillService={project.title} />

          {/* Expandable Sections */}
          <div className="info-buttons">

            {/* Terms & Conditions */}
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
                  <li>Delivery within 21 working days.</li>
                  <li>Installation 3–5 days after delivery.</li>
                  <li>Plumbing and electrical work by customer’s own technician.</li>
                </ul>
              </div>
            )}

            {/* What We Offer */}
            <button onClick={() => toggleSection("offer")}>What We Offer</button>
            {activeSection === "offer" && (
             <div className="info-content">
    <ul>
      <li>Personalized Consultation</li>
      <li>Complete Interior Design (2D & 3D layouts, color schemes)</li>
      <li>Furniture & Material Selection</li>
      <li>Project Management & Execution</li>
      <li>Styling & Finishing Touches</li>
    </ul>
  </div>
            )}

            {/* FAQ */}
            <button onClick={() => toggleSection("faq")}>FAQ</button>
            {activeSection === "faq" && (
              <div className="info-content">
                <p>
                  <strong>Q1: Can I customize materials and colors?</strong><br />
                  A: Yes, materials and finishes can be customized as per your preference.
                </p>
                <p>
                  <strong>Q2: Do you handle full home projects?</strong><br />
                  A: Yes, we handle complete interior projects including kitchens, wardrobes, and living areas.
                </p>
                <p>
                  <strong>Q3: How long does a typical project take?</strong><br />
                  A: Most projects take 4–12 weeks depending on scope and design complexity.
                </p>
                <p>
                  <strong>Q4: Can you work within my budget?</strong><br />
                  A: Yes, we provide options to align the project with your budget without compromising quality.
                </p>
                <p>
                  <strong>Q5: Do you provide support after completion?</strong><br />
                  A: Yes, we guide you for minor adjustments and questions after the project is complete.
                </p>
              </div>
            )}

            {/* For More Details */}
            <button onClick={() => toggleSection("details")}>For More Details</button>
            {activeSection === "details" && (
              <div className="info-content">
                <p>Contact us to discuss your project in detail.</p>
                <p><strong>Email:</strong> <a href="mailto:mirnsinfo@gmail.com">mirnsinfo@gmail.com</a></p>
                <p><strong>Phone:</strong> +9476 096 6543 / +9477 086 6886</p>
                <p><strong>Visit:</strong> Our office by appointment – see past projects and materials.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;