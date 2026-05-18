import { Nav } from "../components/Nav";
import { Pricing } from "../sections/Pricing";
import { Footer } from "../components/Footer";

export function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
