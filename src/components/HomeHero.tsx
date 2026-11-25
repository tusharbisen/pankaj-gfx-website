"use client";

import Link from "next/link";
import {
  Aperture,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { whatsappUrl } from "@/config/business";

const orbitServices = [
  { name: "Photography", position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
  { name: "Online Forms", position: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
  { name: "Graphic Design", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { name: "Printing", position: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
];

export default function HomeHero() {
  const prefersReducedMotion = useReducedMotion() === true;
  const orbitTransition = (duration: number) => ({
    duration: prefersReducedMotion ? 0 : duration,
    repeat: prefersReducedMotion ? 0 : Infinity,
    ease: "linear" as const,
  });
  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.48,
      delay: prefersReducedMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <MotionConfig reducedMotion="user">
      <section
        className="relative isolate overflow-hidden bg-[#10172A] text-white"
        aria-labelledby="hero-heading"
      >
        <div
          className="pointer-events-none absolute -right-36 -top-32 h-[28rem] w-[28rem] rounded-full bg-amber-400/[0.07] blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <motion.p
              {...reveal(0.04)}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-amber-300 sm:text-sm"
            >
              <span className="h-px w-6 bg-amber-400" aria-hidden="true" />
              PANKAJ GFX <span className="text-amber-100/50">·</span> GIDHADI, GONDIA
            </motion.p>

            <h1
              id="hero-heading"
              className="mt-5 font-heading text-balance text-[1.875rem] font-bold leading-[1.08] tracking-tight min-[375px]:text-[2.125rem] sm:mt-6 sm:text-5xl lg:text-[4.25rem]"
            >
              <motion.span {...reveal(0.1)} className="block">
                Creative Design.
              </motion.span>
              <motion.span {...reveal(0.19)} className="block">
                Print.
              </motion.span>
              <motion.span {...reveal(0.28)} className="block text-amber-400">
                Digital Services.
              </motion.span>
            </h1>

            <motion.p
              {...reveal(0.37)}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg"
            >
              From creative designs and photography to printing and online assistance — everything you need, in one place.
            </motion.p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <motion.div {...reveal(0.46)}>
                <Link
                  href="#services"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-bold text-[#10172A] transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 motion-reduce:transition-none sm:w-auto"
                >
                  Explore Services
                  <ArrowDown size={17} className="transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none" aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div {...reveal(0.54)}>
                <a
                  href={whatsappUrl("Hello Pankaj GFX, I would like to know about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:border-amber-300 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 motion-reduce:transition-none sm:w-auto"
                >
                  Contact on WhatsApp
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            <motion.div
              {...reveal(0.62)}
              className="mt-6 flex items-center gap-2 text-sm text-slate-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
              Print & design services in Gidhadi, Gondia
            </motion.div>
          </div>

          <div
            className="relative mx-auto aspect-square w-[min(100%,320px)] sm:w-[min(100%,420px)] lg:w-[min(100%,500px)]"
            aria-hidden="true"
          >
              <div className="absolute inset-[5%] rounded-full border border-white/[0.08]" />

              <motion.div
                className="absolute inset-[17%] rounded-full border border-white/10"
                animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
                transition={orbitTransition(36)}
              >
                {orbitServices.map(({ name, position }) => (
                  <span key={name} className={`absolute ${position}`}>
                    <motion.span
                      className="block rounded-full bg-gradient-to-r from-amber-400 via-white/70 to-sky-300 p-px shadow-[0_0_14px_rgba(245,158,11,0.12)]"
                      animate={{ rotate: prefersReducedMotion ? 0 : -360 }}
                      transition={orbitTransition(36)}
                    >
                      <span className="block whitespace-nowrap rounded-full bg-[#10172A] px-2 py-1 text-[9px] font-semibold tracking-wide text-slate-100 sm:px-2.5 sm:text-[10px]">
                        {name}
                      </span>
                    </motion.span>
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="absolute inset-[28%] rounded-full p-[2px]"
                style={{
                  background:
                    "conic-gradient(from 20deg, transparent 0deg, transparent 210deg, rgba(245,158,11,0.15) 250deg, rgba(245,158,11,0.8) 285deg, rgba(186,230,253,0.45) 310deg, transparent 345deg)",
                }}
                animate={{ rotate: prefersReducedMotion ? 0 : -360 }}
                transition={orbitTransition(28)}
              >
                <div className="absolute inset-[2px] rounded-full border border-white/[0.06] bg-[#10172A]" />
              </motion.div>

              <div className="absolute inset-[38%] grid place-items-center rounded-full border border-amber-300/25 bg-gradient-to-br from-[#1E2B42] via-[#131E33] to-[#0B1220] shadow-[0_0_36px_rgba(245,158,11,0.12)]">
                <div className="absolute inset-[12%] rounded-full border border-white/[0.08]" />
                <Aperture size={34} strokeWidth={1.35} className="relative text-amber-300" />
                <span className="absolute bottom-[18%] right-[22%] h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
