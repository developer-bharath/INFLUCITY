"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { BUTTON_MOTION, PREMIUM_EASE } from "@/lib/motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/influencers", label: "Influencers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: PREMIUM_EASE }}
        className="fixed top-0 left-0 right-0 z-50 h-20"
      >
        <div className="mx-auto h-full w-full max-w-7xl px-5 sm:px-6">
          <div
            className={clsx(
              "relative mt-3 flex h-[56px] items-center justify-between rounded-2xl border px-3 sm:px-4 transition-all duration-500",
              scrolled
                ? "border-white/14 bg-black/68 shadow-[0_14px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                : "border-white/10 bg-black/52 shadow-[0_8px_22px_rgba(0,0,0,0.18)] backdrop-blur-lg"
            )}
          >
          <Link
            href="/"
            aria-label="INFLUCITY - Home"
            className="relative z-10 -ml-1 shrink-0 outline-offset-4 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
          >
            <BrandLogo variant="navbar" />
          </Link>

          <nav className="relative z-10 hidden min-w-0 flex-1 items-center justify-center md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "relative rounded-full px-3 py-1.5 text-[12px] font-medium tracking-[0.03em] transition-colors lg:px-4",
                    active ? "text-white" : "text-zinc-300 hover:text-white"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ duration: 0.45, ease: PREMIUM_EASE }}
                      className="absolute inset-0 -z-10 rounded-full bg-white/12 shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
                    />
                  ) : null}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 hidden shrink-0 items-center md:flex">
            <motion.div whileHover={BUTTON_MOTION.hover} whileTap={BUTTON_MOTION.tap}>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white px-5 py-2 text-[12px] font-semibold tracking-[0.06em] text-neutral-950 shadow-sm transition-all hover:bg-zinc-100 hover:shadow-[0_0_18px_rgba(255,255,255,0.2)]"
              >
                Talk to Us
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={clsx(
              "relative z-10 rounded-full p-2.5 transition-colors md:hidden",
              "text-zinc-300 hover:bg-white/10 hover:text-white"
            )}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="fixed left-3 right-3 top-[78px] z-40 overflow-hidden rounded-2xl border border-white/12 bg-black/82 shadow-[0_24px_52px_rgba(0,0,0,0.42)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    className={clsx(
                      "block rounded-xl px-4 py-3 text-[14px] font-medium transition-colors",
                      pathname === l.href ? "bg-white/12 text-white" : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 border-t border-white/10 pt-4">
                <Link
                  href="/contact"
                  className="block rounded-xl bg-white py-3 text-center text-[14px] font-semibold text-neutral-950 transition-all hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.22)]"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}




