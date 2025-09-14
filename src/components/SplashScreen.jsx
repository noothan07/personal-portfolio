
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(() => {
        onFinish();
      }, 1000); // match CSS closing animation timing
    },2500); // show splash for ~1.8s

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${closing ? "closing" : ""}`} role="dialog" aria-label="splash">
      <h1 className="welcome-text" aria-hidden={closing}>
        {"WELCOME".split("").map((l, i) => (
          <span key={i} aria-hidden={closing}>{l}</span>
        ))}
      </h1>
    </div>
  );
}
