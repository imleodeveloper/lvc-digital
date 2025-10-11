"use client";
import React, { useRef, ReactNode } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/src/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AnimatedCopyProps {
  children: ReactNode;
  colorInitial?: string;
  colorAccent?: string;
  colorFinal?: string;
}

export function AnimatedCopy({ children }: AnimatedCopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRefs = useRef([]);
  const lastScrollProgress = useRef(0);
  const colorTransitionTimers = useRef(new Map());
  const completedChars = useRef(new Set());

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
