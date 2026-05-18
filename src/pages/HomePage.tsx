import { Hero } from "../sections/Hero";
import { HowItWorks } from "../sections/HowItWorks";
import { Features } from "../sections/Features";
import { Industries } from "../sections/Industries";
import { Pricing } from "../sections/Pricing";
import { CTA } from "../sections/CTA";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export function HomePage() {
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
