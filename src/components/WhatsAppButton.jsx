import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function SocialButtons() {
  const whatsappNumber = "94770866886";
  const defaultMessage = "Hello, can I get more info on this?";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  const instagramURL = "https://www.instagram.com/Mirns.Interiors"; 
  const facebookURL = "https://web.facebook.com/mirnsinteriors/";      
  const tiktokURL = "https://www.tiktok.com/@mirnsinteriors";      

  const iconButtons = [
    { url: whatsappURL, bg: "#25d366", icon: <FaWhatsapp /> },
    { url: instagramURL, bg: "#C13584", icon: <FaInstagram /> },
    { url: facebookURL, bg: "#1877F2", icon: <FaFacebookF /> },
    { url: tiktokURL, bg: "#010101", icon: <FaTiktok /> }
  ];

  return (
    <div style={{
      position: "fixed",
      top: "50%",
      right: "0px",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      zIndex: 9999
    }}>
      {iconButtons.map((btn, index) => (
        <a
          key={index}
          href={btn.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "40px",        // small circle
            height: "40px",
            borderRadius: "50%",
            backgroundColor: btn.bg,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
            cursor: "pointer",
            fontSize: "18px",     // icon size
            textDecoration: "none"
          }}
        >
          {btn.icon}
        </a>
      ))}
    </div>
  );
}