import Environment from "./components/environment/Environment";

import Footer from "./components/layout/Footer";
import BusinessGrowthJourney from "./components/sections/BusinessGrowthJourney";
import Capabilities from "./components/sections/Capabilities";
import Contact from "./components/sections/Contact";
import FeaturedWork from "./components/sections/FeaturedWork";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import Technology from "./components/sections/Technology";
import Testimonials from "./components/sections/Testimonials";
import WhyFinchx from "./components/sections/WhyFinchx";

export default function HomePage() {
  return (
    <Environment>
      <main
        className="
          relative
          min-h-screen
          overflow-x-hidden
          text-[#232c31]
        "
      >
        <Hero />

        <Services />

        <BusinessGrowthJourney />

        <Capabilities />

        <FeaturedWork />

        <Process />

        <WhyFinchx />

        <Technology />

        <Testimonials />

        <FAQ />

        <FinalCTA />

        <Contact />

        <Footer />
      </main>
    </Environment>
  );
}
