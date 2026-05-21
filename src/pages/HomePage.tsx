import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Hero } from "../sections/Hero";
import { HowItWorks } from "../sections/HowItWorks";
import { Features } from "../sections/Features";
import { Industries } from "../sections/Industries";
import { Pricing } from "../sections/Pricing";
import { CTA } from "../sections/CTA";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash, location.key]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Industries />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
