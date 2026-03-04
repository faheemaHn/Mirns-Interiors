import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef(null);
  const videoRef = useRef(null);

  const SERVICE_ID = "service_sr00fzc";
  const TEMPLATE_ID = "template_zw9d35l";
  const PUBLIC_KEY = "Tk07rcO0fAQ8PTFqI";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        () => {
          setStatusMessage("Thank you! We will contact you soon.");
          setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        },
        (err) => {
          console.error(err);
          setStatusMessage("Oops! Something went wrong. Try again.");
        }
      );
  };

  // Fade-up animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  // Scroll to form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contactCards = [
    { title: "Home Interiors", image: "/kitchen1.jpg" },
    { title: "Office Interiors", image: "/living-room.jpg" },
    { title: "Custom Furniture", image: "/living-room1.jpg" },
    { title: "Wardrobe", image: "/wardrob4.png" },
  ];

  return (
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero hero-3">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>Reach out for bookings, inquiries, or consultations.</p>
        </div>
      </div>

      {/* MAP */}
      <div className="map-container fade-up">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1234567890!2d79.861243515!3d6.927078195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259b8b3b3e77b%3A0xabcdef1234567890!2sYour+Company+Location!5e0!3m2!1sen!2slk!4v1678901234567!5m2!1sen!2slk"
          width="100%"
          height="400"
          style={{ border: 1 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* CONTACT CARDS */}
      <div className="cards-section fade-up">
        {contactCards.map((card, index) => (
          <div className="contact-card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <button className="book-btn" onClick={scrollToForm}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* FORM + VIDEO */}
      <div className="contact-form-section fade-up" ref={formRef}>
        <h2>For More Details---</h2>
        <div className="form-video-wrapper">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required />
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select Service</option>
              <option value="Wardrobe">Wardrobe</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room Interiors</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Small Cupboard">Small Cupboard</option>
              <option value="TV Cupboard">TV Cupboard</option>
              <option value="Office Tables">Office Tables</option>
              <option value="Edgebanding">Edgebanding</option>
              <option value="Board Cutting">Board Cutting</option>
              <option value="Factory Works">Factory Works</option>
              <option value="Others">Others</option>
            </select>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5}></textarea>
            <button type="submit">Submit</button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>

          {/* VIDEO */}
          <div className="contact-video">
            <video ref={videoRef} autoPlay loop muted playsInline>
              <source src="/IMG_3826.MOV" type="video/mp4" />
            </video>
            <button
              className="unmute-btn"
              onClick={() => {
                if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
              }}
            >
              🔊
            </button>
          </div>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-info fade-up">
        <h2>Our Contact Details</h2>
        <p>Email: info@mirnsinteriors.com</p>
        <p>Phone: +94 770866886</p>
        <p>Address: No 72C, Kawdana Road, Dehiwala, Colombo, Sri Lanka</p>
      </div>
    </section>
  );
}