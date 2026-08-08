import Environment from "./components/environment/Environment";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Work from "./components/sections/Work";

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
        <Navbar />

        <Hero />

        <Services />

        <Work />
      </main>
    </Environment>
  );
}
