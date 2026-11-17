"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button, Container, Label } from "./ui";
import { Reveal, TwoTone, EASE } from "./Motion";
import { Plus } from "./Icons";
import { LINKEDIN, faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-28 md:py-40">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="md:sticky md:top-28 md:self-start">
            <Reveal>
              <Label line>FAQs</Label>
            </Reveal>
            <TwoTone
              muted="Answers to common questions to help you understand"
              strong="the process and how we can work together"
              className="mt-6 text-[28px] font-medium leading-[1.2] tracking-[-0.04em] md:text-[36px]"
            />
            <Reveal delay={0.2} className="mt-8">
              <Button href={LINKEDIN} external>
                Message Me
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="rounded-[26px] bg-surface p-2">
            <div className="flex justify-center py-5">
              <span className="rounded-[14px] bg-navy px-4 py-2.5 text-[15px] text-white shadow-float">I&apos;m here to help you</span>
            </div>
            <div className="flex flex-col gap-2">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="rounded-[18px] bg-white shadow-soft">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-[17px] tracking-[-0.025em]"
                    >
                      {f.q}
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.5, ease: EASE }} className="shrink-0 text-navy/50">
                        <Plus className="h-5 w-5" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.55, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-[15px] font-normal leading-[1.55] text-navy/55 md:text-[16px]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
