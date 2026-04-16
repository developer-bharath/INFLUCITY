"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import { PREMIUM_EASE } from "@/lib/motion";

/** Single block: fades/slides up once mounted (hero paragraphs, etc.). */
export function HeroReveal({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const mounted = useMounted();
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Staggered lines for premium hero typography (eyebrow â†’ title â†’ sub). */
export function HeroRevealStack({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  const mounted = useMounted();
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0, ease: PREMIUM_EASE }}
      >
        {eyebrow}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.08, ease: PREMIUM_EASE }}
      >
        {title}
      </motion.div>
      {subtitle ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.68, delay: 0.18, ease: PREMIUM_EASE }}
        >
          {subtitle}
        </motion.div>
      ) : null}
    </div>
  );
}



