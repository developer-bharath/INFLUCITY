"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";
import { PREMIUM_EASE } from "@/lib/motion";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

const dirMap = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
};

/** Scroll-driven fade/slide using whileInView (avoids layout/hydration edge cases with empty animate targets). */
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: Props) {
  const d = dirMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...d }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px", amount: 0.08 }}
      transition={{ duration: 0.7, delay, ease: PREMIUM_EASE }}
      className={clsx("w-full min-w-0", className)}
    >
      {children}
    </motion.div>
  );
}



