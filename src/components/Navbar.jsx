import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
      
        {/* Nav Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className={`line ${open ? "rotate1" : ""}`}></div>
          <div className={`line ${open ? "fade" : ""}`}></div>
          <div className={`line ${open ? "rotate2" : ""}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
