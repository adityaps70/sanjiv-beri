"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Award, Check } from "./Icons";
import { Reveal, EASE } from "./Motion";
import { proofChips, AVATAR, PORTRAIT } from "@/lib/data";

/** Luzia-spec card: 368×450, 40px radius, 24px padding, #F7F7F7 */
const card = "relative h-[450px] w-full overflow-hidden rounded-[40px] p-6";

const chipIcons = [
  // gold check badge
  <span key="c" className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-white">
    <Check className="h-3.5 w-3.5" />
  </span>,
  // clock
  <svg key="t" viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>,
  // award
  <Award key="a" className="h-6 w-6 text-gold" />,
];

const STEP = 74; // 62px chip + 12px gap, as on Luzia

/** Luzia "projects completed" card: a tidy stack at rest that fans out on hover. */
function Stack({ open }: { open: boolean }) {
  const chips = proofChips.slice(0, 3);
  return (
    <div className="relative h-[62px] w-full">
      {chips.map((text, k) => (
        <motion.div
          key={text}
          initial={false}
          animate={
            open
              ? { y: (k - 1) * STEP, scale: 1, opacity: 1 }
              : { y: k * 12, scale: 1 - k * 0.05, opacity: k === 0 ? 1 : 1 - k * 0.3 }
          }
          transition={{ duration: 0.7, ease: EASE, delay: open ? k * 0.04 : (2 - k) * 0.03 }}
          className="absolute inset-x-0 top-0 flex h-[62px] items-center justify-between rounded-[16px] bg-white px-5"
          style={{
            zIndex: 3 - k,
            boxShadow:
              k === 0 || open
                ? "0 1px 1px rgba(7,31,54,.04), 0 4px 10px rgba(7,31,54,.05), 0 16px 32px -8px rgba(7,31,54,.10)"
                : "0 1px 2px rgba(7,31,54,.04)",
          }}
        >
          <motion.span
            initial={false}
            animate={{ opacity: open || k === 0 ? 1 : 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex w-full items-center justify-between"
          >
            <span className="text-[20px] font-normal leading-[1.3] tracking-[-0.03em]">{text}</span>
            {chipIcons[k]}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

/** pill that pops in at the top edge of the card on hover */
function TrustPill({ open }: { open: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={open ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: 14, scale: 0.9, filter: "blur(6px)" }}
      transition={{ duration: 0.6, ease: EASE, delay: open ? 0.08 : 0 }}
      className="absolute inset-x-0 top-6 z-10 mx-auto flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-navy py-1 pl-1 pr-3.5 text-[14px] font-normal tracking-[-0.02em] text-white"
      style={{ boxShadow: "0 8px 20px -6px rgba(7,31,54,.45)" }}
    >
      <span className="flex -space-x-1.5">
        {["#c6a15b", "#e9d6ae", "#ffffff"].map((c, i) => (
          <span key={c} className="h-6 w-6 rounded-full border-2 border-navy" style={{ background: c, zIndex: 3 - i }} />
        ))}
      </span>
      Trusted on 3 continents
    </motion.div>
  );
}

function ProofCard() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onTap={() => setOpen((v) => !v)}
      className={`${card} flex cursor-default items-center bg-[#F7F7F7]`}
    >
      <TrustPill open={open} />
      <Stack open={open} />
    </motion.div>
  );
}

export default function Bento() {
  return (
    <section id="about" className="py-32 md:py-44">
      <div className="mx-auto grid max-w-[1128px] gap-3 px-5 md:grid-cols-3 md:px-0">
        {/* 1 — credential + photo inset (Luzia "Awwwards" card) */}
        <Reveal className={`${card} bg-[#F7F7F7]`}>
          <div className="flex items-center gap-3">
            <span className="text-[30px] font-bold leading-none tracking-[-0.06em]">ICF.</span>
            <Award className="h-7 w-7 text-gold" />
          </div>
          <h3 className="mt-6 text-[24px] font-medium leading-[1.3] tracking-[-0.03em]">PCC Certified Coach</h3>
          <p className="mt-2 text-[16px] font-normal leading-[1.4] tracking-[-0.03em] text-[#6C7179]">
            Accredited by the International Coaching Federation since 2011, renewed in 2022.
          </p>
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute left-6 right-6 top-[194px] h-[300px] overflow-hidden rounded-[10px] bg-navy"
          >
            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,#173a5e_0%,#071f36_60%)]" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-gold/30" />
            <div className="absolute -right-2 -top-2 h-28 w-28 rounded-full border border-gold/20" />
            <Image
              src={PORTRAIT ?? ""}
              alt="Sanjiv Beri"
              width={420}
              height={405}
              className="absolute right-[-18px] top-[46px] w-[250px] max-w-none"
            />
            <div className="absolute left-4 top-4 text-white">
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold">Since 2009</div>
              <div className="mt-1.5 max-w-[130px] text-[17px] font-medium leading-[1.2] tracking-[-0.03em]">Coaching leaders on 3 continents</div>
            </div>
          </motion.div>
        </Reveal>

        {/* 2 — dark quote card (Luzia testimonial card) */}
        <Reveal delay={0.08} className="relative z-10">
          <div
            className={`${card} flex flex-col justify-between bg-navy text-white`}
            style={{
              boxShadow:
                "0 0.7px 1px -0.1px rgba(7,31,54,.05), 0 1.6px 2.3px -0.25px rgba(7,31,54,.06), 0 3px 4px -0.4px rgba(7,31,54,.06), 0 6px 9px -0.6px rgba(7,31,54,.08), 0 14px 20px -1px rgba(7,31,54,.12), 0 30px 60px -12px rgba(7,31,54,.28)",
            }}
          >
            <div>
              <svg viewBox="0 0 40 30" className="h-[30px] w-[40px] text-white/35" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
                <path d="M3 27V14a9 9 0 0 1 9-9M3 27h9V16H3M23 27V14a9 9 0 0 1 9-9M23 27h9V16h-9" />
              </svg>
              <p className="mt-6 text-[24px] font-normal leading-[1.3] tracking-[-0.03em]">
                Longevity isn&apos;t only about adding years to your life. It&apos;s about adding life to your years, and leading with heart while you do it.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15">
                <Image src={AVATAR} alt="Sanjiv Beri" fill sizes="44px" className="object-cover" />
              </span>
              <div className="text-[16px] font-normal leading-[1.4] tracking-[-0.03em]">
                <div>Sanjiv Beri</div>
                <div className="text-white/70">Longevity Performance Strategist</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 — animated proof stack (Luzia "projects completed" card) */}
        <Reveal delay={0.16}>
          <ProofCard />
        </Reveal>
      </div>
    </section>
  );
}
