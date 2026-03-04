import { FaComments, FaDraftingCompass, FaTools, FaCubes, FaHandshake } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    { title: "Consultation", icon: <FaComments /> },
    { title: "Design & Planning", icon: <FaDraftingCompass /> },
    { title: "Material Selection", icon: <FaCubes /> },
    { title: "Execution", icon: <FaTools /> },
    { title: "Handover", icon: <FaHandshake /> },
  ];

  return (
    <section className="how-section">
      <div className="how-overlay">
        <h2 className="how-title animate-title">How It Works</h2>

        <div className="how-cards">
          {steps.map((step, index) => (
            <div className="glass-card" key={index}>
              <div className="icon">{step.icon}</div>
              <h3>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 