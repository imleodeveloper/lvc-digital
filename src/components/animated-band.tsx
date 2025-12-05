"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedBandProps {
  texts?: string[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  angle?: number;
  className?: string;
  animationFrom?: "left" | "right";
}

export function AnimatedBand({
  texts = [
    "LVC DIGITAL",
    "WEB DESIGN",
    "GESTOR DE TRÁFEGO",
    "DESIGNER",
    "MARKETING DIGITAL",
  ],
  speed = "normal",
  direction = "left",
  angle = 0,
  className = "",
  animationFrom = "right",
}: AnimatedBandProps) {
  const bandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !bandRef.current) return;

    const translateX = animationFrom === "right" ? 500 : -500;

    gsap.fromTo(
      bandRef.current,
      {
        x: translateX,
        rotation: angle,
        opacity: 0,
      },
      {
        x: 0,
        rotation: angle,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bandRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [angle, animationFrom]);
  const speedDuration = {
    slow: "20s",
    normal: "15s",
    fast: "10s",
  };

  // Criar sequência repetida com todos os textos
  const textSequence = Array(10).fill(texts).flat().join(" • ");

  return (
    <div
      ref={bandRef}
      className={`w-full ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
        transformOrigin: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 100%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: `scroll ${speedDuration[speed]} linear infinite ${
              direction === "right" ? "reverse" : ""
            }`,
          }}
        >
          <span className="text-white font-bold text-lg md:text-xl lg:text-2xl px-4 py-3 inline-block">
            {textSequence}
          </span>
          <span className="text-white font-bold text-lg md:text-xl lg:text-2xl px-4 py-3 inline-block">
            {textSequence}
          </span>
        </div>
      </div>
    </div>
  );
}
