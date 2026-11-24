import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Image as ImageIcon, MessageCircle, Palette, Sparkles } from "lucide-react";
import PortfolioGallery from "@/components/PortfolioGallery";
import { whatsappUrl } from "@/config/business";
import { createPageMetadata } from "@/components/Seo";

export const metadata = createPageMetadata(
  "Creative Portfolio",
  "Explore banner, social media, print, branding and video design concepts from Pankaj GFX.",
);

const ownerPortrait = "/owner_image.jpeg";

const creativeValues = [
  {
    icon: Sparkles,
    title: "Creative Approach",
    description: "Ideas shaped around the message, audience and purpose of each project.",
  },
  {
    icon: Check,
    title: "Attention to Detail",
    description: "Care with layout, readable type and the small details that bring a design together.",
  },
  {
    icon: ImageIcon,
    title: "Quality Design",
    description: "Considered visuals prepared for the format and place they will be used.",
  },
  {
    icon: MessageCircle,
    title: "Client-Focused Process",
    description: "An open conversation from the first brief through feedback and final delivery.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0F172A] text-white">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-amber-300">
              <Palette size={15} aria-hidden="true" /> OUR CREATIVE WORK
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Creativity That Brings <span className="text-amber-400">Ideas to Life</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Explore graphic design, branding, digital creatives and visual concepts made to help ideas find their shape.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#portfolio-gallery"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-bold text-[#0F172A] transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                Explore Portfolio <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-500 px-5 py-3 font-semibold text-white transition hover:border-amber-300 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                Let&apos;s Work Together <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[300px] w-full max-w-[620px] sm:h-[360px] lg:h-[400px]" aria-hidden="true">
            <div className="absolute left-[1%] top-[18%] h-[62%] w-[37%] -rotate-[8deg] overflow-hidden border border-white/30 bg-[#f7e7d6] p-4 shadow-2xl sm:p-5">
              <p className="text-[9px] font-bold tracking-[0.18em] text-orange-800 sm:text-[10px]">FESTIVAL EDITION</p>
              <p className="mt-3 font-heading text-lg font-bold leading-tight text-[#17243c] sm:text-2xl">Celebrate<br />in colour.</p>
              <div className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-amber-400 text-[#17243c] sm:h-16 sm:w-16">
                <Sparkles size={25} aria-hidden="true" />
              </div>
              <div className="absolute -bottom-8 -left-5 h-24 w-24 rounded-full bg-orange-300/60" />
            </div>
            <div className="absolute right-[1%] top-[23%] h-[59%] w-[37%] rotate-[7deg] overflow-hidden border border-white/30 bg-[#155d9b] p-4 text-white shadow-2xl sm:p-5">
              <p className="text-[9px] font-bold tracking-[0.18em] text-sky-200 sm:text-[10px]">DIGITAL CAMPAIGN</p>
              <p className="mt-3 font-heading text-lg font-bold leading-tight sm:text-2xl">Make your<br />next move.</p>
              <div className="absolute bottom-5 left-4 right-4 flex h-10 items-end gap-1">
                <span className="h-3 w-1/5 bg-sky-200/50" />
                <span className="h-5 w-1/5 bg-sky-200/70" />
                <span className="h-8 w-1/5 bg-amber-400" />
                <span className="h-10 w-1/5 bg-white/80" />
                <span className="h-7 w-1/5 bg-sky-200" />
              </div>
            </div>
            <div className="absolute left-[25%] top-[4%] z-10 flex h-[82%] w-[51%] -rotate-1 flex-col overflow-hidden rounded-xl border border-slate-400/50 bg-[#111c31] p-3 shadow-2xl shadow-black/40 sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="ml-auto text-[8px] tracking-wide text-slate-400">CREATIVE STUDIO</span>
              </div>
              <div className="relative my-2 flex flex-1 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 via-slate-800 to-[#0F172A]">
                <div className="absolute -left-8 top-2 h-24 w-24 rounded-full border-[14px] border-amber-400/30 sm:h-32 sm:w-32" />
                <div className="relative text-center">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-amber-400 text-lg font-black text-[#0F172A] sm:h-14 sm:w-14 sm:text-2xl">P</span>
                  <p className="mt-2 font-heading text-sm font-bold text-white sm:text-xl">Pankaj <span className="text-amber-400">GFX</span></p>
                  <p className="mt-1 text-[8px] tracking-[0.2em] text-slate-300 sm:text-[10px]">DESIGN · CREATE · GROW</p>
                </div>
                <div className="absolute -bottom-10 -right-7 h-24 w-24 rounded-full bg-blue-500/20 blur-xl sm:h-32 sm:w-32" />
              </div>
              <div className="mx-auto h-2 w-1/3 rounded-b bg-slate-500" />
            </div>
            <span className="absolute bottom-0 right-[4%] rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium text-slate-200 backdrop-blur-sm">
              Illustrative design concepts
            </span>
          </div>
        </div>
      </section>

      <PortfolioGallery />

      <section className="bg-white py-14 sm:py-20" aria-labelledby="owner-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l-4 border-t-4 border-amber-400" aria-hidden="true" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-4 border-r-4 border-amber-400" aria-hidden="true" />
            <div className="relative aspect-[4/4.2] overflow-hidden bg-slate-100">
              <Image
                src={ownerPortrait}
                alt="Portrait of the Pankaj GFX owner"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                Pankaj GFX owner
              </span>
            </div>
          </div>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold tracking-wide text-amber-800">
              <Sparkles size={14} aria-hidden="true" /> THE PERSON BEHIND THE DESIGNS
            </span>
            <h2 id="owner-heading" className="mt-4 font-heading text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
              Meet the Creative Behind Pankaj GFX
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Pankaj GFX is built around thoughtful visual storytelling. The person behind the studio works with each brief to understand its message and audience, then shape those ideas into clear, considered design.
            </p>
            <div className="mt-5 border-l-2 border-amber-400 pl-4">
              <p className="font-heading text-lg font-bold text-[#0F172A]">Owner Name</p>
              <p className="text-sm text-slate-500">Role / Title</p>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
              The name and title can be updated with the owner&apos;s preferred details.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 font-bold text-[#0F172A] transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Let&apos;s Work Together <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-18" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-11">
            <p className="text-xs font-bold tracking-[0.16em] text-amber-600">WHAT GUIDES OUR WORK</p>
            <h2 id="values-heading" className="mt-2 font-heading text-3xl font-bold text-[#0F172A] sm:text-4xl">Why Our Work Stands Out</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {creativeValues.map(({ icon: Icon, title, description }) => (
              <article key={title} className="border border-slate-200 bg-white p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20" aria-labelledby="portfolio-cta-heading">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#0F172A] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-8 -top-20 h-60 w-60 rounded-full border-[32px] border-amber-400/10" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.16em] text-amber-300">HAVE AN IDEA IN MIND?</p>
              <h2 id="portfolio-cta-heading" className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className="mt-3 text-slate-300">
                Have an idea, brand or project in mind? Let&apos;s bring it to life through creative design.
              </p>
            </div>
            <a
              href={whatsappUrl("Hello Pankaj GFX, I have a creative project in mind and would like to discuss it.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-bold text-[#0F172A] transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Start Your Project <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
