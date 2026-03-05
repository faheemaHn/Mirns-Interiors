import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo">
     
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`line ${menuOpen ? "rotate1" : ""}`}></span>
          <span className={`line ${menuOpen ? "fade" : ""}`}></span>
          <span className={`line ${menuOpen ? "rotate2" : ""}`}></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;