import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* column 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">Mirns Interiors</h2>
          <p>
            We create elegant and modern interior spaces that bring comfort,
            beauty, and functionality to your home and workspace.
          </p>
        </div>

        {/* column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Custom Furniture Design</li>
            <li>Interior Design & Renovation</li>
            <li>Modular Kitchen System</li>
            <li>Decor & Styling</li>
          </ul>
        </div>

        {/* column 4 */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Email: mirnsinfo@gmail.com</p>
          <p>Phone: +9476 096 6543</p>
          <p>       +9477 086 6886</p>
          <div className="social-icons">
            <a href="https://web.facebook.com/mirnsinteriors/">FB</a>
            <a href="https://www.instagram.com/Mirns.Interiors">IG</a>
            <a href="#">WA</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Mirns Interiors. All rights reserved.</p>
         <p>Website developed by Faheema Nawasdeen (Frontend Developer).</p>
      </div>
      
    </footer>
  );
}

export default Footer;
