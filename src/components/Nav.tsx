"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import { nav, BOOKING } from "@/lib/data";
import { EASE } from "./Motion";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            key="scrim"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 h-[100svh] w-full bg-navy/25 backdrop-blur-[2px] md:hidden"
          />
        )}
      </AnimatePresence>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/85 backdrop-blur-xl" : "bg-white"}`}
      >
        <div className="flex h-[68px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="text-[20px] font-medium tracking-[-0.03em]">
            Sanjiv Beri
          </a>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 text-[15px] font-medium md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-navy transition-opacity hover:opacity-60"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-12 items-center rounded-[14px] bg-navy px-6 text-[16px] font-medium text-white shadow-float transition-transform duration-500 hover:-translate-y-0.5 md:inline-flex"
          >
            Book a Call
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="relative h-10 w-10 md:hidden"
          >
            <span
              className={`absolute left-2 right-2 h-[1.5px] bg-navy transition-all duration-500 ${open ? "top-[19px] rotate-45" : "top-[15px]"}`}
            />
            <span
              className={`absolute left-2 right-2 h-[1.5px] bg-navy transition-all duration-500 ${open ? "top-[19px] -rotate-45" : "top-[23px]"}`}
            />
          </button>
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="relative z-10 overflow-hidden rounded-b-[24px] bg-white shadow-[0_24px_40px_-20px_rgba(7,31,54,.25)] md:hidden"
        >
          <div className="flex flex-col px-5 pb-6 pt-1">
            {nav.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={false}
                animate={{ opacity: open ? 1 : 0, y: open ? 0 : -8 }}
                transition={{
                  duration: 0.5,
                  delay: open ? 0.05 + i * 0.04 : 0,
                  ease: EASE,
                }}
                className="flex items-center justify-between border-b border-line py-3.5 text-[18px] tracking-[-0.03em]"
              >
                {n.label}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-navy/35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </motion.a>
            ))}
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-[14px] bg-navy px-6 text-[15px] text-white shadow-float"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
