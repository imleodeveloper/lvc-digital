import { ClientsSection } from "@/components/clients";
import { HeroSection } from "@/components/hero-section/section";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ClientsSection />
    </main>
  );
}
