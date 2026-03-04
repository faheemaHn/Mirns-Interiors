import { useEffect, useState } from "react";

function TypingHeading({ text }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 150); // typing speed in ms

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h2 style={{ fontFamily: 'Montserrat', fontSize: '36px', marginBottom: '20px' }}>
      {displayText}
    </h2>
  );
}

export default TypingHeading;
