"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right";
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const initial =
    reduce || from === "bottom"
      ? { opacity: 0, y: 28 }
      : from === "left"
      ? { opacity: 0, x: -28 }
      : { opacity: 0, x: 28 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
