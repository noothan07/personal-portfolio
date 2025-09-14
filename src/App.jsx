import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import ScrollBanner from "./components/ScrollBanner";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

import AOS from "aos";
import "aos/dist/aos.css";
import initCursor from "./utils/cursor";
import initLenis from "./utils/lenis";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Initialize AOS (animations)
    AOS.init({ duration: 300, once: false, mirror: true,offset:120,anchorPlacement: "top-bottom" });

    // Initialize cursor
    initCursor();


    // Initialize Lenis (safe)
    const lenis = initLenis();

    // Navbar shrink effect
    const nav = document.querySelector(".navbar");
    if (nav) {
      lenis.on("scroll", ({ scroll }) => {
        nav.style.transition = "all 0.3s ease";
        if (scroll > 70) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    AOS.refresh();
  };

  return (
    <>
      {/* Splash overlays on top */}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      {/* Main site always renders */}
      <Navbar />
      <Hero />
      <AboutMe/>
      <TechStack />
      <Projects />
      <Contact />
      <ScrollBanner />
      <Footer />
    </>
  );
}

export default App;
