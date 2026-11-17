"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Container } from "./ui";
import { Reveal, TwoTone, EASE } from "./Motion";
import { ArrowRight } from "./Icons";
import { LINKEDIN, BOOKING, NEWSLETTER, ALL_POSTS, nav, featuredPost, posts } from "@/lib/data";

const GoldFlower = dynamic(() => import("./three/GoldFlower"), { ssr: false });

type L = { label: string; href: string };

const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

const short = (t: string) => t.split(":")[0];

const cols: { h: string; l: L[] }[] = [
  { h: "Explore", l: [{ label: "Home", href: "#top" }, ...nav] },
  {
    h: "Latest writing",
    l: [
      { label: short(featuredPost.title), href: featuredPost.url },
      ...posts.map((p) => ({ label: short(p.title), href: p.url })),
      { label: "All articles", href: ALL_POSTS },
    ],
  },
  {
    h: "Connect",
    l: [
      { label: "LinkedIn", href: LINKEDIN },
      { label: "The Mindful Mantra", href: NEWSLETTER },
      { label: "Book a Call", href: BOOKING },
    ],
  },
];

function FooterLink({ l }: { l: L }) {
  return (
    <a href={l.href} {...ext(l.href)} className="group relative inline-flex items-center gap-1.5 text-white/75 transition-colors duration-300 hover:text-white">
      <span className="relative">
        {l.label}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
      </span>
      {l.href.startsWith("http") && (
        <svg viewBox="0 0 24 24" className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      )}
    </a>
  );
}

export default function CtaFooter() {
  return (
    <footer id="contact" className="grain overflow-hidden rounded-t-[36px] bg-navy pt-20 text-white md:rounded-t-[48px]">
      {/* call to action */}
      <Container className="flex flex-col items-center text-center">
        <Reveal className="h-[200px] w-[200px] md:h-[240px] md:w-[240px]">
          <GoldFlower />
        </Reveal>
        <TwoTone
          dark
          muted="Book a call,"
          strong="and let's design your next decade"
          className="mt-2 max-w-[560px] text-[30px] leading-[1.15] tracking-[-0.04em] md:text-[48px]"
        />
        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center gap-2 rounded-[14px] bg-white px-6 text-[16px] font-medium text-navy shadow-float transition-transform duration-500 hover:-translate-y-0.5"
          >
            Book a Call
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <a
            href={NEWSLETTER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-[14px] border border-white/20 px-6 text-[16px] font-medium text-white transition-colors duration-300 hover:border-white/50"
          >
            Read the newsletter
          </a>
        </Reveal>
      </Container>

      {/* link block */}
      <Container className="mt-20 md:mt-28">
        <div className="grid gap-12 border-t border-white/10 pt-14 md:grid-cols-[1.05fr_1.95fr] md:gap-16">
          {/* newsletter card */}
          <Reveal>
            <motion.a
              href={NEWSLETTER}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="group block rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-gold/15 text-gold">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 5h16v14H4zM4 7l8 6 8-6" />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="text-[18px] font-medium tracking-[-0.03em]">The Mindful Mantra</div>
                  <div className="text-[14px] font-normal text-white/50">Keeping calm amidst chaos</div>
                </div>
              </div>
              <p className="mt-5 text-left text-[15px] font-normal leading-[1.5] text-white/65">
                A monthly LinkedIn newsletter on emotional intelligence, stress, self-care and leadership, read by over 164,000 subscribers.
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[15px]">
                <span className="text-white/50">164K+ subscribers</span>
                <span className="inline-flex items-center gap-1.5 text-gold">
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          </Reveal>

          {/* columns */}
          <Reveal delay={0.1} className="grid grid-cols-2 gap-x-10 gap-y-10 text-left text-[15px] font-normal md:grid-cols-[0.7fr_1.5fr_0.9fr]">
            {cols.map((c) => (
              <div key={c.h} className={c.h === "Latest writing" ? "order-last col-span-2 md:order-none md:col-span-1" : ""}>
                <div className="mb-5 text-[14px] text-white/40">{c.h}</div>
                <ul className="space-y-3">
                  {c.l.map((l) => (
                    <li key={l.label}>
                      <FooterLink l={l} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>

      {/* giant wordmark */}
      <div aria-hidden className="pointer-events-none mt-20 select-none overflow-hidden">
        <motion.div
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: "18%", opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, ease: EASE }}
          className="whitespace-nowrap text-center text-[19vw] font-semibold leading-[0.8] tracking-[-0.06em]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.02) 85%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Sanjiv Beri
        </motion.div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10">
        <Container>
          <div className="flex flex-col items-start justify-between gap-3 py-7 text-[14px] font-normal text-white/45 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Sanjiv Beri · Utrecht, the Netherlands</span>
            <span>
              Coaching &amp; education, <span className="text-white/75">not medical advice</span>
            </span>
            <a href="#top" className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white">
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-transform duration-500 group-hover:-translate-y-0.5">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M12 19V5M6 11l6-6 6 6" />
                </svg>
              </span>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
