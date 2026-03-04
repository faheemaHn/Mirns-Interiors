import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import { projectData } from "../data/projectData"; // Project info



const featuredBlog = {
  id: 1,
  title: "Modern Interior Design Trends for 2026",
  short: "Explore how minimal luxury and organic textures redefine modern spaces.",
  full: "In 2026, interior design focuses on minimal luxury, curved furniture, natural wood textures, layered lighting, and warm neutral tones. Sustainable materials and custom-built storage solutions enhance both beauty and functionality.",
  image: "/living5.png",
  date: "March 10, 2026",
};
const categories = [
  "All",
  "Custom Furniture Design",
  "Interior Design & Renovation",
  "Modular Kitchen System",
  "Decor & Styling",
];



const testimonialsData = [
  { quote: "Mirns Interiors transformed our home beautifully.", name: "Aisha N." },
  { quote: "Excellent finishing and professional service.", name: "Imran R." },
  { quote: "Highly recommended for custom furniture.", name: "Zain M." },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((item) => item.category === activeCategory);

  useEffect(() => {
    // Sparks animation
    const sparksContainer = document.querySelector(".hero-sparks");
    if (sparksContainer) {
      sparksContainer.innerHTML = "";
      for (let i = 0; i < 25; i++) {
        const spark = document.createElement("span");
        spark.style.top = `${Math.random() * 60}px`;
        spark.style.right = `${Math.random() * 200}px`;
        spark.style.animationDelay = `${Math.random() * 2}s`;
        const size = 4 + Math.random() * 6;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        sparksContainer.appendChild(spark);
      }
    }

    // IntersectionObserver for fade-in
    const elements = document.querySelectorAll(
      ".fade-up, .testimonial-card, .project-card"
    );
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

  const handleCategoryClick = (cat) => {
    if (cat === "Contact Us") {
      navigate("/contact");
    } else {
      setActiveCategory(cat);
    }
  };

  return (
    <section className="blog-page">
      {/* HERO */}
      <div className="blog-hero hero-3">
        <div className="hero-overlay"></div>
        <div className="hero-sparks"></div>
        <div className="hero-text">
          <h1>Our Design Journal</h1>
          <p>Insights & inspiration from our interior design experts.</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="blog-layout fade-up show">
        {/* LEFT SIDEBAR */}
        <div className="blog-sidebar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="blog-content">
          {/* Featured Blog */}
          <div className="featured-blog fade-up show">
            <img src={featuredBlog.image} alt={featuredBlog.title} />
            <div className="featured-content">
              <span>{featuredBlog.date}</span>
              <h2>{featuredBlog.title}</h2>
              <p>{featuredBlog.short}</p>
              <button onClick={() => navigate(`/project/${projectData[0].id}`)}>
                View Project
              </button>
            </div>
          </div>

          {/* Terms & Help */}
          {activeCategory === "Terms & Conditions" && (
            <div className="terms-section fade-up show">
              <h2>Terms & Conditions</h2>
              <ul>
                <li>Order confirmation requires 60% advance payment.</li>
                <li>Remaining 40% must be paid 10 days prior to installation.</li>
                <li>Custom-made furniture as per approved drawings.</li>
                <li>No cancellations/refunds after advance payment.</li>
                <li>Delivery within 21 working days.</li>
                <li>Installation 3–5 days after delivery.</li>
                <li>Plumbing/electrical work by customer’s own technician.</li>
              </ul>
            </div>
          )}

          {activeCategory === "Help" && (
            <div className="help-section fade-up show">
              <h2>Help & Support</h2>
              <p>If you need assistance, contact our team anytime.</p>
            </div>
          )}

          {/* Projects Grid */}
          {activeCategory !== "Terms & Conditions" &&
            activeCategory !== "Help" && (
              <div className="project-grid fade-up show">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <img src={project.image} alt={project.title} />
                    <h4>{project.title}</h4>
                    <div className="project-info">
                      <div className="left">
                        <span className="customer">
                          Customer: {project.customer}
                        </span>
                        <span className="rating">Rating: {project.rating} ★</span>
                        <span className="description">{project.description}</span>
                      </div>
                      <div className="right">
                        <span className="date">{project.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>

      {/* TESTIMONIALS - DARK LUXURY */}
      <div className="testimonials-section dark-luxury fade-up">
        <div className="lux-header">
          <h2>What Our Clients Say</h2>
          <span className="gold-line"></span>
          <p>
            Feedback from our valued clients who experienced our premium services.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonialsData.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p>"{t.quote}"</p>
              <h4>– {t.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* DESIGN TIPS */}
      <div className="design-tips fade-up show">
        <h2>Interior Design Quick Tips</h2>
        
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Warm Lighting</h4>
            <p>Use warm lighting to create cozy spaces.</p>
          </div>
          <div className="tip-card">
            <h4>Neutral Colors</h4>
            <p>Neutral palettes create timeless interiors.</p>
          </div>
          <div className="tip-card">
            <h4>Smart Storage</h4>
            <p>Built-in cabinets maximize efficiency.</p>
          </div>
          <div className="tip-card">
            <h4>Layered Textures</h4>
            <p>Mix wood, fabric, and metal for premium look.</p>
          </div>
        </div>
      </div>

      {/* POSTS */}
      <div className="posts-section fade-up show">
        <h2>Our Posts</h2>
        
        <div className="posts-grid">
          <img src="/post1.png" alt="post1" />
          <img src="/post2.png" alt="post2" />
          <img src="/post3.png" alt="post3" />
          <img src="/post4.png" alt="post4" />
          <img src="/post5.png" alt="post5" />
          <img src="/post6.png" alt="post6" />
        </div>
      </div>
    </section>
  );
};

export default Blog;