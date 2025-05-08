"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  targetNumber: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({
  targetNumber,
  duration = 2000,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const increment = Math.ceil(targetNumber / (duration / 16));
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [inView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
