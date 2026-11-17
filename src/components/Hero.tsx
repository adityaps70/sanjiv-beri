"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "./Motion";
import { Button } from "./ui";
import { BOOKING, PORTRAIT, credentials } from "@/lib/data";

const HeroOrb = dynamic(() => import("./three/HeroOrb"), { ssr: false });

const up = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay, ease: EASE },
});

export default function Hero() {
  const headline = "Sanjiv helps leaders live longer, think sharper and lead with heart";
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, -60]);
  const portraitScale = useTransform(scrollY, [0, 800], [1, 1.04]);
  return (
    <section id="top" className="relative pt-[68px]">
      <div className="relative mx-auto min-h-[calc(100svh-68px)] max-w-[1500px] overflow-hidden px-5 md:px-10">
        {/* centre visual */}
        {PORTRAIT ? (
          <motion.div
            style={{ y: portraitY, scale: portraitScale }}
            className="relative mx-auto h-[52vh] w-full max-w-[600px] md:absolute md:inset-x-0 md:top-2 md:h-[86%]"
          >
            <motion.div
              initial={{ opacity: 0, y: 60, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.8, delay: 0.15, ease: EASE }}
              className="portrait-mask h-full w-full"
            >
              <Image src={PORTRAIT} alt="Sanjiv Beri" fill priority sizes="(max-width: 768px) 100vw, 600px" className="object-cover object-top" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
            className="fade-b relative mx-auto h-[56vh] w-full max-w-[640px] md:absolute md:inset-x-0 md:top-0 md:h-[88%]"
          >
            <HeroOrb />
          </motion.div>
        )}

        <div className="relative z-10 grid gap-10 pb-16 md:absolute md:inset-x-10 md:bottom-[14%] md:grid-cols-[1.15fr_0.7fr_0.85fr] md:items-end md:pb-0">
          <div>
            <h1 className="max-w-[640px] text-[32px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[40px]">
              {headline.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.45 + i * 0.045, ease: EASE }}
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </h1>
          </div>
          <div className="hidden md:block" />
          <div className="md:self-center md:pb-24">
            <motion.p {...up(0.8)} className="mb-6 max-w-[420px] text-[16px] font-normal leading-[1.4] tracking-[-0.03em] text-navy">
              A Longevity Performance Strategist and ICF PCC coach based in Utrecht, Sanjiv blends nutrition science, emotional intelligence and executive coaching to help high performers add healthy, high-energy years to life and career.
            </motion.p>
            <motion.div {...up(0.95)}>
              <Button href={BOOKING} external arrow>
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* credentials strip */}
      <motion.div {...up(1.2)} className="relative z-10 border-y border-line bg-white py-6">
        <div className="fade-x overflow-hidden">
          <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
            {[...credentials, ...credentials].map((c, i) => (
              <span key={i} className="flex items-center gap-14 text-[15px] font-normal text-navy/45">
                {c}
                <span className="h-1 w-1 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
