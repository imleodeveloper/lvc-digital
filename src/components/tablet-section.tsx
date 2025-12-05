"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function TabletSection() {
  const tabletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !tabletRef.current) return;

    gsap.fromTo(
      tabletRef.current,
      {
        rotationX: 90,
        opacity: 0,
      },
      {
        rotationX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tabletRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full relative overflow-hidden bg-black">
      {/* Gradiente Top - black to transparent */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

      {/* Gradiente Bottom - black to transparent */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* Elementos decorativos laranjas com blur */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 z-10"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 z-10"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-2xl opacity-10 z-10"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />

      {/* Container principal */}
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-20 py-24 relative z-30">
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-4xl">
            {/* Tablet Image */}
            <div
              ref={tabletRef}
              className="relative w-full h-[40rem] rounded-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/tablet.webp"
                alt="Tablet LVC Digital"
                fill
                className="object-cover"
              />
            </div>

            {/* Elementos decorativos laranjas ao redor do tablet */}
            <div
              className="absolute -top-8 -left-8 w-24 h-24 rounded-full blur-xl opacity-30"
              style={{
                background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
                backgroundSize: "300% 300%",
                animation: "orangeReflex 5s ease-in-out infinite",
              }}
            />
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-xl opacity-25"
              style={{
                background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
                backgroundSize: "300% 300%",
                animation: "orangeReflex 5s ease-in-out infinite",
              }}
            />
            <div
              className="absolute top-1/2 -right-12 w-20 h-20 rounded-full blur-lg opacity-20"
              style={{
                background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
                backgroundSize: "300% 300%",
                animation: "orangeReflex 5s ease-in-out infinite",
              }}
            />
            <div
              className="absolute top-1/2 -left-12 w-20 h-20 rounded-full blur-lg opacity-20"
              style={{
                background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
                backgroundSize: "300% 300%",
                animation: "orangeReflex 5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
