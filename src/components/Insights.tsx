"use client";

import { motion } from "framer-motion";
import { Container } from "./ui";
import { Reveal, ScrollFill, EASE } from "./Motion";
import { Help, Plus } from "./Icons";
import Image from "next/image";
import { ALL_POSTS, featuredPost, posts, why, img } from "@/lib/data";

function Meta({ cats, extra }: { cats: string[]; extra?: string }) {
  return (
    <div className="flex items-center gap-2 text-[13px] font-normal text-navy/45">
      {cats.map((c) => (
        <span key={c} className="rounded-full bg-surface px-3 py-1.5 text-navy/55">
          {c}
        </span>
      ))}
      {extra && (
        <>
          <span className="h-1 w-1 rounded-full bg-navy/20" />
          {extra}
        </>
      )}
    </div>
  );
}

function Byline({ date }: { date: string }) {
  return (
    <div className="flex items-end justify-between border-t border-line pt-5 text-[13px] font-normal">
      <div>
        <div className="text-navy/40">Written by</div>
        <div className="text-navy/70">Sanjiv Beri</div>
      </div>
      <div className="text-right">
        <div className="text-navy/40">Published</div>
        <div className="text-navy/70">{date}</div>
      </div>
    </div>
  );
}

export default function Insights() {
  return (
    <section id="insights" className="bg-[#FAFAFB] py-28 md:py-36">
      <Container>
        {/* header – OneDollar style */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <h2 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[52px]">
              Fresh insights,
              <br />
              for a longer life.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[17px] font-normal leading-[1.55] text-navy/75">
              Practical thinking on healthspan, emotional intelligence and leadership, from calm minds and self-care to building teams where people genuinely support each other.
            </p>
            <a href={ALL_POSTS} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 text-[17px] text-navy/55 transition-colors hover:text-navy">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:rotate-90">
                <Plus className="h-3 w-3" />
              </span>
              See all posts
            </a>
          </Reveal>
        </div>

        {/* featured */}
        <Reveal className="mt-16">
          <motion.a
            href={featuredPost.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            className="grid overflow-hidden rounded-[22px] border border-line bg-white p-3 shadow-soft md:grid-cols-2"
          >
            <div className="flex flex-col justify-between gap-8 p-5 md:p-7">
              <div>
                <Meta cats={featuredPost.cat} extra="Article" />
                <h3 className="mt-6 text-[30px] font-semibold leading-[1.12] tracking-[-0.04em] md:text-[38px]">{featuredPost.title}</h3>
                <p className="mt-5 text-[16px] font-normal leading-[1.55] text-navy/50">{featuredPost.excerpt}</p>
              </div>
              <Byline date={featuredPost.date} />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-[16px] md:aspect-auto">
              <motion.div variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.9, ease: EASE }} className="relative h-full min-h-[320px] w-full">
                <Image src={img(featuredPost.photo, 1000)} alt="" fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
              </motion.div>
            </div>
          </motion.a>
        </Reveal>

        {/* grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={{ hover: { y: -6 } }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex h-full flex-col rounded-[22px] border border-line bg-white p-3 shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[16px]">
                  <motion.div variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.9, ease: EASE }} className="relative h-full w-full">
                    <Image src={img(p.photo, 700)} alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col p-3 pt-5">
                  <Meta cats={[p.cat]} extra={p.date} />
                  <h4 className="mt-5 text-[20px] leading-[1.3] tracking-[-0.03em]">{p.title}</h4>
                  <p className="mb-6 mt-3 text-[15px] font-normal leading-[1.55] text-navy/50">{p.excerpt}</p>
                  <div className="mt-auto">
                    <Byline date={p.date} />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* Why – scroll-filling statement */}
        <div className="mt-36 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex items-center gap-3 self-start">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-navy">
              <Help />
            </span>
            <span className="text-[32px] font-semibold tracking-[-0.045em]">Why Sanjiv</span>
          </Reveal>
          <div>
            <ScrollFill text={why} className="text-[28px] font-semibold leading-[1.25] tracking-[-0.035em] md:text-[40px]" />
            <a href="#faq" className="group mt-10 inline-flex items-center gap-2 text-[18px] text-navy/50 transition-colors hover:text-navy">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:rotate-90">
                <Plus className="h-3 w-3" />
              </span>
              More about working together
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
