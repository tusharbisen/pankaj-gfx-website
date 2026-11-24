"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { portfolioCategories, portfolioProjects } from "@/data/portfolioProjects";

const artworkStyles = {
  podcast: {
    background: "bg-[#11152d]",
    eyebrow: "BANNER DESIGN",
    headline: "PODCAST\nLIVE SHOW",
    caption: "Tune in · Listen · Enjoy",
    accent: "text-fuchsia-300",
    decoration: "bg-fuchsia-500/20",
  },
  festival: {
    background: "bg-[#7c2d12]",
    eyebrow: "FESTIVAL DESIGN",
    headline: "A FESTIVAL\nOF LIGHT",
    caption: "Celebrate the little moments.",
    accent: "text-amber-200",
    decoration: "bg-amber-300/25",
  },
  social: {
    background: "bg-[#0f766e]",
    eyebrow: "SOCIAL MEDIA",
    headline: "MAKE ROOM\nFOR MORE",
    caption: "A fresh idea for your next post.",
    accent: "text-teal-100",
    decoration: "bg-teal-300/20",
  },
  brand: {
    background: "bg-[#142d52]",
    eyebrow: "BRANDING CONCEPT",
    headline: "MADE TO\nMOVE YOU",
    caption: "A visual identity direction.",
    accent: "text-sky-200",
    decoration: "bg-sky-300/20",
  },
  event: {
    background: "bg-[#4c1d5e]",
    eyebrow: "EVENT POSTER",
    headline: "MUSIC\nAFTER DARK",
    caption: "A night for good sound.",
    accent: "text-fuchsia-200",
    decoration: "bg-pink-400/25",
  },
  print: {
    background: "bg-[#efe6d4]",
    eyebrow: "PRINT DESIGN",
    headline: "A GOOD\nPLACE TO GATHER",
    caption: "A sample community flyer layout.",
    accent: "text-orange-800",
    decoration: "bg-orange-400/25",
  },
  video: {
    background: "bg-[#18233b]",
    eyebrow: "VIDEO EDITING",
    headline: "THE NEXT\nBIG IDEA",
    caption: "A sample video cover concept.",
    accent: "text-amber-300",
    decoration: "bg-blue-400/20",
  },
} as const;

function ProjectArtwork({ visual }: { visual: keyof typeof artworkStyles }) {
  const style = artworkStyles[visual];

  return (
    <div aria-hidden="true" className={`relative flex h-full flex-col justify-between overflow-hidden p-5 text-white sm:p-6 ${style.background}`}>
      <div className={`absolute -right-8 -top-12 h-36 w-36 rounded-full ${style.decoration}`} />
      <div className={`absolute -bottom-16 -left-10 h-40 w-40 rounded-full border-[18px] border-white/10`} />
      <div className="relative flex items-center justify-between gap-3">
        <span className={`text-[9px] font-bold tracking-[0.18em] sm:text-[10px] ${style.accent}`}>{style.eyebrow}</span>
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      </div>
      <div className="relative z-10 max-w-[78%]">
        <h3 className="whitespace-pre-line font-heading text-2xl font-bold leading-[1.04] sm:text-3xl">{style.headline}</h3>
        <p className="mt-2 text-[10px] text-white/75 sm:text-xs">{style.caption}</p>
      </div>
      {visual === "podcast" && (
        <div className="absolute bottom-5 right-6 grid h-16 w-12 place-items-center rounded-[45%] border-2 border-fuchsia-300 bg-fuchsia-500/20 shadow-[0_0_30px_rgba(217,70,239,.35)] sm:h-20 sm:w-14">
          <span className="h-9 w-6 rounded-full border-2 border-fuchsia-200" />
        </div>
      )}
      {visual === "festival" && (
        <div className="absolute bottom-6 right-7 grid h-14 w-14 place-items-center rounded-full border border-amber-200/70 bg-amber-300 text-orange-900 shadow-lg">
          <span className="text-xl" aria-hidden="true">✦</span>
        </div>
      )}
      {visual === "brand" && (
        <div className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl bg-sky-100 font-heading text-2xl font-black text-[#142d52] sm:h-16 sm:w-16">
          M
        </div>
      )}
      {visual === "event" && (
        <div className="absolute bottom-5 right-5 flex items-end gap-1">
          <span className="h-8 w-1.5 rounded-t bg-fuchsia-200/50" />
          <span className="h-12 w-1.5 rounded-t bg-pink-200/70" />
          <span className="h-6 w-1.5 rounded-t bg-amber-200/70" />
          <span className="h-10 w-1.5 rounded-t bg-fuchsia-100/70" />
        </div>
      )}
      {visual === "print" && (
        <div className="absolute bottom-5 right-5 grid h-14 w-14 place-items-center border border-orange-800/40 text-xl font-black text-orange-800">P</div>
      )}
      {visual === "video" && (
        <div className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-amber-400 text-[#18233b] shadow-lg">
          <span className="ml-1 text-lg" aria-hidden="true">▶</span>
        </div>
      )}
    </div>
  );
}

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof portfolioCategories)[number]>("All");
  const visibleProjects = activeCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio-gallery" className="scroll-mt-24 bg-slate-50 py-12 sm:py-16" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-amber-600">SELECTED VISUAL DIRECTIONS</p>
            <h2 id="portfolio-heading" className="mt-2 font-heading text-3xl font-bold text-[#0F172A] sm:text-4xl">Explore the Portfolio</h2>
            <p className="mt-2 max-w-2xl text-slate-600">Browse a mix of illustrative design concepts and the website visual already featured in this portfolio.</p>
          </div>
          <p className="w-fit rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
            Concepts are labeled
          </p>
        </div>

        <div className="mb-7 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible" role="group" aria-label="Filter portfolio by category">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`min-h-10 shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
                activeCategory === category
                  ? "border-amber-500 bg-amber-500 text-[#0F172A]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-[#0F172A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visibleProjects.length} {activeCategory === "All" ? "portfolio items" : `${activeCategory} projects`}.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article key={project.id} className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[1.65] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <ProjectArtwork visual={project.visual} />
                )}
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#0F172A]/85 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                  {project.kindLabel}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 p-4">
                <div>
                  <p className="text-xs font-semibold text-amber-700">{project.category}</p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-[#0F172A]">{project.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{project.description}</p>
                </div>
                <span aria-hidden="true" className="mt-1 shrink-0 rounded-full border border-slate-200 p-2 text-slate-600 transition group-hover:border-amber-400 group-hover:text-amber-700">
                  <ArrowRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
