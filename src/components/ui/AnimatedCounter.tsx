"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/three/SceneBoundary";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
}

export function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState<string>(value.toFixed(decimals));

  useEffect(() => {
    if (!inView || reducedMotion) return;

    let frameId = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(current.toFixed(decimals));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplay(value.toFixed(decimals));
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value, decimals, reducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
