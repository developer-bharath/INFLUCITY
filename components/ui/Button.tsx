"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { BUTTON_MOTION } from "@/lib/motion";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const v = {
  primary:   "bg-white text-[#0a0a0a] border border-[#e5e5e5] hover:bg-gray-100 shadow-sm hover:shadow-[0_0_22px_rgba(255,255,255,0.28)]",
  secondary: "border border-[#0a0a0a] text-[#0a0a0a] bg-transparent hover:bg-[#0a0a0a] hover:text-white hover:shadow-[0_0_16px_rgba(10,10,10,0.2)]",
  outline:   "border border-[#0a0a0a] text-[#0a0a0a] bg-transparent hover:bg-[#0a0a0a] hover:text-white hover:shadow-[0_0_16px_rgba(10,10,10,0.2)]",
  ghost:     "text-[#555] hover:text-[#0a0a0a] hover:bg-[#f5f5f5]",
};
const s = { sm: "px-4 py-2 text-sm", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };

export default function Button({ children, href, variant = "primary", size = "md", className, onClick, type = "button", disabled }: Props) {
  const cls = clsx("inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer", v[variant], s[size], disabled && "opacity-50 cursor-not-allowed", className);
  if (href) return (
    <motion.div whileHover={BUTTON_MOTION.hover} whileTap={BUTTON_MOTION.tap} className="inline-block">
      <Link href={href} className={cls}>{children}</Link>
    </motion.div>
  );
  return (
    <motion.button whileHover={disabled ? { scale: 1 } : BUTTON_MOTION.hover} whileTap={disabled ? { scale: 1 } : BUTTON_MOTION.tap} className={cls} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </motion.button>
  );
}



