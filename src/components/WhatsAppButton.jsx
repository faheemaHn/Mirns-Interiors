import React from "react";

export default function SocialButtons() {
  const whatsappNumber = "94770866886";
  const defaultMessage = "Hello, can I get more info on this?";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  const instagramURL = "https://www.instagram.com/yourprofile"; // replace with your Instagram
  const facebookURL = "https://www.facebook.com/yourpage";      // replace with your Facebook

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
      {/* WhatsApp */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#25d366",
          color: "white",
          padding: "12px 16px",
          borderRadius: "50px 0 0 20px",
          fontWeight: "bold",
          textDecoration: "none",
          textAlign: "center",
          fontSize: "16px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          cursor: "pointer"
        }}
      >
        WhatsApp
      </a>

      {/* Instagram */}
      <a
        href={instagramURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#C13584",
          color: "white",
          padding: "10px 14px",
          borderRadius: "50px 0 0 20px",
          fontWeight: "bold",
          textDecoration: "none",
          textAlign: "center",
          fontSize: "14px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          cursor: "pointer"
        }}
      >
        Instagram
      </a>

      {/* Facebook */}
      <a
        href={facebookURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#1877F2",
          color: "white",
          padding: "8px 12px",
          borderRadius: "50px 0 0 20px",
          fontWeight: "bold",
          textDecoration: "none",
          textAlign: "center",
          fontSize: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          cursor: "pointer"
        }}
      >
        Facebook
      </a>
    </div>
  );
}