import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactButton({ prefillService = "" }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selection: "",
  });
  const [message, setMessage] = useState("");

  // Prefill the selection when prefillService changes
  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, selection: prefillService }));
    }
  }, [prefillService]);

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
          setMessage("Thank you! We will contact you soon.");
          setFormData({ name: "", email: "", phone: "", selection: prefillService });
        },
        (err) => {
          console.error(err);
          setMessage("Oops! Something went wrong. Try again.");
        }
      );
  };

  return (
    <>
      {/* Fixed Button */}
      <button className="fixed-contact-btn" onClick={() => setOpen(!open)}>
        Contact Us
      </button>

      {/* Form Modal */}
      {open && (
        <div className="contact-form-overlay" onClick={() => setOpen(false)}>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Contact Us</h3>
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
              placeholder="Email"
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
            <select
              name="selection"
              value={formData.selection}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Wardrobe">Wardrobe</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room Interiors">Living Room Interiors</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Small Cupboard">Small Cupboard</option>
              <option value="TV Cupboard">TV Cupboard</option>
              <option value="Office Tables">Office Tables</option>
              <option value="Edgebanding">Edgebanding</option>
              <option value="Board Cutting">Board Cutting</option>
              <option value="Factory Works">Factory Works</option>
              <option value="Others">Others</option>
            </select>
            <button type="submit">Submit</button>
            {message && <p className="success-message">{message}</p>}
          </form>
        </div>
      )}
    </>
  );
}