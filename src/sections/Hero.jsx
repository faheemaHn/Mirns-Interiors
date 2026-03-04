
import { useNavigate } from "react-router-dom";
function Hero() {

  const navigate = useNavigate();
  return (
    <section className="hero1">
      <div className="hero-overlay1"></div>

      {/* Top Left Logo */}
      <img
        src="/bg4.png"
        alt="mirns interiors logo"
        className="hero-logo1"
      />

      <div className="hero-content1">
        {/* Center Logo */}
        <img
          src="/bg7.png"
          alt="MIRNS Interiors Logo"
          className="hero-logo-center1"
        />

        <p>
          Crafting Elegant Interiors & Precision Factory Works for Modern Living
        </p>

        <div className="hero-buttons1">
         <button
  className="primary-btn1"
  onClick={() => {
    const whatsappNumber = "94770866886";
    const message = "Hello, can I get a free quote for your services?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank"); // opens WhatsApp in new tab/app
  }}
>
  Get a Free Quote
</button>
          <button className="secondary-btn1"
          onClick={()=> navigate("/Blog")}
          >View Our Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;