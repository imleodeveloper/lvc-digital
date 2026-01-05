import { AnimatedBand } from "@/components/animated-band";
import { ClientsSection } from "@/components/clients";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section/section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { TabletSection } from "@/components/tablet-section";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <div className="w-full relative z-20 bg-orange-overlay-no-overflow">
        <AnimatedBand angle={-4} animationFrom="right" />
      </div>
      <div className="w-full relative z-10 bg-orange-overlay-no-overflow">
        <AnimatedBand
          angle={4}
          className="opacity-20"
          direction="right"
          animationFrom="left"
        />
      </div>
      <ClientsSection />
      <ServicesSection />
      <TabletSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </main>
  );
}
