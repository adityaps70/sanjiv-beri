"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container, Label } from "./ui";
import { Reveal, TwoTone, EASE } from "./Motion";
import { steps } from "@/lib/data";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="grain overflow-hidden rounded-t-[36px] bg-navy py-28 text-white md:rounded-t-[48px] md:py-36">
      <Container>
        <div className="grid gap-6 md:grid-cols-[448px_1fr]">
          <Reveal>
            <Label dark>How it works</Label>
          </Reveal>
          <TwoTone
            dark
            muted="A simple, proven path to lasting change,"
            strong="from your first call to habits that last a lifetime"
            className="text-[30px] font-medium leading-[1.2] tracking-[-0.04em] md:text-[36px]"
          />
        </div>

        <div ref={ref} className="relative mt-20 md:ml-[45%]">
          <div className="absolute -left-10 bottom-0 top-0 hidden w-px bg-white/10 md:block">
            <motion.div style={{ height: line }} className="w-px bg-gold" />
          </div>
          <div className="flex flex-col gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className={`relative w-full rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-6 backdrop-blur-sm md:w-[64%] ${i % 2 ? "md:ml-auto" : ""}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] text-[18px] text-white/70">{i + 1}</span>
                <h4 className="mt-7 text-[24px] tracking-[-0.03em]">{s.t}</h4>
                <p className="mt-2.5 text-[16px] font-normal leading-[1.55] text-white/50">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
