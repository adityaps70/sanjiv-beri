"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Label } from "./ui";
import { Reveal, TwoTone, EASE } from "./Motion";
import { ProgramIcon } from "./Icons";
import { programs, img, BOOKING } from "@/lib/data";

const ROLL = "transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)]";
const FADE = "transition-opacity duration-500 ease-[cubic-bezier(.22,1,.36,1)]";

/* Luzia service-card spec: 365×458 frame, 6px padding, 24px radius,
   white 56px title box (20px radius), white body box, 99px photos (12px radius). */
export default function Programs() {
  return (
    <section id="programs" className="pb-24 md:pb-44">
      <Container>
        <div className="grid gap-6 md:grid-cols-[448px_1fr]">
          <Reveal>
            <Label>Programs</Label>
          </Reveal>
          <TwoTone
            muted="Science-backed programs that extend your healthspan and sharpen your edge."
            strong="I help you perform at your peak, for decades to come"
            className="text-[28px] font-medium leading-[1.2] tracking-[-0.04em] md:text-[36px]"
          />
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {programs.map((p, idx) => {
            const f = !!p.featured;
            return (
              <Reveal key={p.title} delay={idx * 0.08} className={f ? "relative z-10" : ""}>
                <motion.a
                  href={BOOKING}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title}: book a call`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={`group flex h-full flex-col gap-1.5 rounded-[24px] p-1.5 ${f ? "bg-[#03111F]" : "bg-[#F7F7F7]"}`}
                  style={
                    f
                      ? {
                          boxShadow:
                            "0 0.7px 1px -0.1px rgba(7,31,54,.05), 0 1.6px 2.3px -0.25px rgba(7,31,54,.06), 0 6px 9px -0.6px rgba(7,31,54,.08), 0 14px 20px -1px rgba(7,31,54,.12), 0 34px 60px -14px rgba(7,31,54,.35)",
                        }
                      : undefined
                  }
                >
                  {/* title box: title rolls up into "Start a Project", icon flips to an arrow */}
                  <div className={`flex h-14 items-center justify-between rounded-[20px] py-2 pl-3 pr-2 ${f ? "bg-navy" : "bg-white"}`}>
                    <div className="relative h-[26px] flex-1 overflow-hidden">
                      <h3 className={`text-[18px] font-medium leading-[26px] tracking-[-0.03em] md:text-[20px] ${ROLL} group-hover:-translate-y-full ${f ? "text-white" : ""}`}>{p.title}</h3>
                      <span aria-hidden className={`absolute inset-x-0 top-0 block translate-y-full text-[18px] font-medium md:text-[20px] leading-[26px] tracking-[-0.03em] ${ROLL} group-hover:translate-y-0 ${f ? "text-white" : ""}`}>
                        Start a Project
                      </span>
                    </div>
                    <span className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[12px] ${f ? "bg-white text-navy" : "bg-[#FBF6EC] text-gold"}`}>
                      <span className={`flex ${ROLL} group-hover:-translate-y-10`}>
                        <ProgramIcon kind={p.icon} className="h-[18px] w-[18px]" />
                      </span>
                      <span className={`absolute inset-0 flex translate-y-10 items-center justify-center ${ROLL} group-hover:translate-y-0`}>
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M7 17 17 7M8 7h9v9" />
                        </svg>
                      </span>
                    </span>
                  </div>

                  {/* body box: dims on hover so the call to action reads first */}
                  <div className={`flex flex-1 flex-col rounded-[20px] p-5 md:p-6 ${f ? "bg-navy" : "bg-white"}`}>
                    <div className={`flex flex-1 flex-col ${FADE} group-hover:opacity-30`}>
                      <p className={`text-[15px] font-normal leading-[1.4] tracking-[-0.03em] md:text-[16px] ${f ? "text-white" : "text-[#6C7179]"}`}>{p.body}</p>
                      <div className="mt-6 grid grid-cols-3 gap-1">
                        {p.photos.map((src) => (
                          <div key={src} className="relative aspect-square overflow-hidden rounded-[12px] bg-[#F7F7F7]">
                            <Image src={img(src, 300)} alt="" fill sizes="110px" className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className={`inline-flex items-center rounded-[12px] px-3 py-1.5 text-[15px] font-normal md:text-[16px] leading-[1.4] tracking-[-0.03em] ${
                              f ? "border border-white/50 text-white" : "bg-[#F7F7F7] text-[#6C7179]"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
