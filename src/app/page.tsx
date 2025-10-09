import { ClientsSection } from "@/components/hero-section/clients";
import { HeroSection } from "@/components/hero-section/section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
    </>
  );
}
