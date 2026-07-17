import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Hero from "@/sections/Hero";
import PlatformSection from "@/sections/PlatformSection";
import TellPluciaSection from "@/sections/TellPluciaSection";
import CalendarSection from "@/sections/CalendarSection";
import InsightsSection from "@/sections/InsightsSection";
import IntegrationSection from "@/sections/IntegrationSection";
import FeaturesSection from "@/sections/FeaturesSection";
import FaqSection from "@/sections/FaqSection";
import SubscribeSection from "@/sections/SubscribeSection";
import Footer from "@/sections/Footer";

/**
 * Plucia landing page — composed 1:1 from the Figma "Landing page" frame
 * (1440 × 9161). Section order and vertical rhythm follow the Figma canvas.
 */
export default function HomePage() {
  return (
    <main className="bg-white min-h-screen overflow-x-clip w-full">
      {/* Sticky site header — stays pinned to the top as the page scrolls.
          Lives above Hero so it isn't bounded by the hero section; the hero is
          pulled up underneath it (negative margin) so the gradient backdrop
          still sits behind the floating navbar card. */}
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto w-full max-w-[1440px] px-[20px] sm:px-[48px] xl:px-[152px] pt-[20px] sm:pt-[28px]">
          <Navbar />
        </div>
      </header>
      <Hero />
      <div className="max-w-[1440px] mx-auto relative w-full">
        <Reveal>
          <PlatformSection />
        </Reveal>
        <Reveal>
          <TellPluciaSection />
        </Reveal>
        <Reveal>
          <CalendarSection />
        </Reveal>
        <Reveal>
          <InsightsSection />
        </Reveal>
        <Reveal>
          <IntegrationSection />
        </Reveal>
        <Reveal>
          <FeaturesSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
      </div>
      <Reveal>
        <SubscribeSection />
      </Reveal>
      <Footer />
    </main>
  );
}
