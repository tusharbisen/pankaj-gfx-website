import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Image,
  Megaphone,
  Monitor,
  Palette,
  PartyPopper,
  Play,
  ShoppingBag,
  Sparkles,
  Tag,
  TrendingUp,
} from "lucide-react";
import { whatsappUrl } from "@/config/business";

export const metadata: Metadata = {
  title: "Banner Design Services | Pankaj GFX",
  description:
    "Custom promotional, business, festival, event and digital banner design by Pankaj GFX. Share your brief and discuss a design for your brand.",
};

const benefits = [
  {
    icon: Sparkles,
    title: "Creative & Unique Designs",
    description: "Thoughtful layouts that make your message easy to notice and understand.",
  },
  {
    icon: Image,
    title: "High-Quality Graphics",
    description: "Careful attention to composition, legibility and the intended display size.",
  },
  {
    icon: Palette,
    title: "Tailored to Your Brand",
    description: "Design direction shaped around your content, audience and visual preferences.",
  },
  {
    icon: CircleHelp,
    title: "Reliable Communication",
    description: "A clear conversation about the brief, feedback and final file requirements.",
  },
];

const examples = [
  { style: "festival", title: "Festival Celebration", label: "FESTIVE GREETINGS" },
  { style: "product", title: "Product Promotion", label: "NEW ARRIVAL" },
  { style: "business", title: "Business Advertisement", label: "GROW YOUR BUSINESS" },
  { style: "sale", title: "Sale & Offer", label: "LIMITED-TIME OFFER" },
  { style: "social", title: "Social Media Promotion", label: "MAKE IT SOCIAL" },
  { style: "event", title: "Event Announcement", label: "SAVE THE DATE" },
] as const;

const designTypes = [
  {
    icon: BadgePercent,
    title: "Promotional Banners",
    description: "Highlight an offer, launch or announcement with a clear call to action.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Brand Banners",
    description: "Introduce your business, services or brand message with confidence.",
  },
  {
    icon: PartyPopper,
    title: "Festival & Celebration Banners",
    description: "Seasonal greetings and celebration designs for your chosen occasion.",
  },
  {
    icon: Megaphone,
    title: "Social Media Banners",
    description: "Platform-ready creative for posts, covers and digital announcements.",
  },
  {
    icon: ShoppingBag,
    title: "Product Advertising Banners",
    description: "Put a product, key feature or promotion at the centre of the design.",
  },
  {
    icon: CalendarDays,
    title: "Event & Announcement Banners",
    description: "Share event details and important information in an easy-to-read format.",
  },
  {
    icon: Play,
    title: "YouTube Thumbnail Designs",
    description: "Create a distinctive thumbnail concept around your video topic.",
  },
  {
    icon: Monitor,
    title: "Website & Campaign Banners",
    description: "Digital campaign graphics prepared to fit your intended placement.",
  },
];

const process = [
  {
    title: "Share Your Requirements",
    description: "Tell us about your business, audience, message, size and where the banner will appear.",
  },
  {
    title: "Design & Creation",
    description: "We create a design direction using the content and preferences you provide.",
  },
  {
    title: "Review & Feedback",
    description: "Review the draft and share focused feedback. Revision scope is agreed for each project.",
  },
  {
    title: "Final Delivery",
    description: "Receive the agreed final design files in the formats discussed for your use.",
  },
];

const faqs = [
  {
    question: "What types of banners do you design?",
    answer:
      "We can discuss promotional, business, festival, event, product, social media, YouTube and website banner designs.",
  },
  {
    question: "Can I request a custom banner?",
    answer:
      "Yes. Share the purpose, size or placement, message and any visual direction you have in mind so the design can be tailored to your needs.",
  },
  {
    question: "Can I provide my own content and images?",
    answer:
      "Yes. You can share your text, logo and suitable images. Please make sure you have permission to use any materials you provide.",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "The final format depends on the intended use and will be discussed and confirmed before the project is completed.",
  },
  {
    question: "How can I request a banner design?",
    answer:
      "Use the WhatsApp button on this page to share your requirements. We can then discuss the design, scope and charges.",
  },
];

function BannerArtwork({ style }: { style: (typeof examples)[number]["style"] }) {
  if (style === "festival") {
    return (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#17243c] p-5 text-white sm:p-6">
        <div className="absolute -right-7 -top-10 h-40 w-40 rounded-full border-[18px] border-amber-400/20" />
        <div className="absolute bottom-0 right-8 h-20 w-20 rounded-t-full bg-amber-400/15 blur-sm" />
        <div className="relative flex items-center gap-2 text-amber-300">
          <Sparkles size={16} aria-hidden="true" />
          <span className="text-[10px] font-bold tracking-[0.18em]">FESTIVE GREETINGS</span>
        </div>
        <div className="relative max-w-[75%]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">A season to celebrate</p>
          <h3 className="mt-1 font-heading text-2xl font-bold leading-tight sm:text-3xl">Light up<br />the moment.</h3>
          <p className="mt-2 text-xs text-slate-200">Warm wishes, shared together.</p>
        </div>
        <div className="absolute bottom-6 right-7 grid h-14 w-14 place-items-center rounded-full border border-amber-300/70 bg-amber-400 text-[#17243c] shadow-lg shadow-amber-500/20">
          <Sparkles size={24} aria-hidden="true" />
        </div>
      </div>
    );
  }

  if (style === "product") {
    return (
      <div className="relative flex h-full overflow-hidden bg-[#f2eee4] p-5 text-[#17243c] sm:p-6">
        <div className="relative z-10 flex w-[58%] flex-col justify-between">
          <span className="w-fit rounded-full bg-[#17243c] px-3 py-1 text-[9px] font-bold tracking-[0.15em] text-white">NEW ARRIVAL</span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700">Made for every day</p>
            <h3 className="mt-1 font-heading text-2xl font-bold leading-tight sm:text-3xl">Small detail.<br />Big difference.</h3>
            <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold">DISCOVER MORE <ArrowRight size={12} aria-hidden="true" /></span>
          </div>
        </div>
        <div className="absolute -right-3 bottom-3 top-3 grid w-[43%] place-items-center rounded-[42%] bg-amber-400/80">
          <div className="grid h-24 w-20 place-items-center rounded-2xl border border-white/60 bg-white/70 shadow-xl sm:h-28 sm:w-24">
            <ShoppingBag size={38} strokeWidth={1.4} aria-hidden="true" />
          </div>
          <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-white" />
          <div className="absolute bottom-5 left-3 h-2 w-2 rounded-full bg-[#17243c]" />
        </div>
      </div>
    );
  }

  if (style === "business") {
    return (
      <div className="relative flex h-full overflow-hidden bg-[#123e68] p-5 text-white sm:p-6">
        <div className="relative z-10 flex w-[64%] flex-col justify-between">
          <span className="text-[9px] font-bold tracking-[0.18em] text-sky-200">A CLEARER WAY FORWARD</span>
          <div>
            <h3 className="font-heading text-2xl font-bold leading-tight sm:text-3xl">Grow your<br />business.</h3>
            <p className="mt-2 max-w-40 text-[11px] text-sky-100">Make your next message count.</p>
            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1.5 text-[9px] font-bold text-[#17243c]">LET&apos;S TALK <ArrowRight size={11} aria-hidden="true" /></span>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 flex h-28 items-end gap-1.5 opacity-90">
          <span className="h-8 w-3 rounded-t bg-sky-300/60" />
          <span className="h-14 w-3 rounded-t bg-sky-300/75" />
          <span className="h-20 w-3 rounded-t bg-sky-200" />
          <TrendingUp className="absolute -left-7 top-1 text-amber-300" size={54} strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
    );
  }

  if (style === "sale") {
    return (
      <div className="relative flex h-full overflow-hidden bg-amber-400 p-5 text-[#17243c] sm:p-6">
        <div className="relative z-10 flex w-[70%] flex-col justify-between">
          <span className="text-[10px] font-black tracking-[0.2em]">A LITTLE SOMETHING FOR YOU</span>
          <div>
            <p className="text-xs font-bold uppercase">The offer edit</p>
            <h3 className="font-heading text-4xl font-black leading-[0.9] sm:text-5xl">GOOD<br />THINGS<br />AHEAD.</h3>
            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#17243c] px-3 py-1.5 text-[9px] font-bold text-white">SEE WHAT&apos;S NEW <ArrowRight size={11} aria-hidden="true" /></span>
          </div>
        </div>
        <div className="absolute -right-6 top-1/2 grid h-24 w-24 -translate-y-1/2 place-items-center rounded-full border-4 border-[#17243c] bg-white text-center shadow-lg sm:right-3">
          <div>
            <Tag size={20} className="mx-auto" aria-hidden="true" />
            <span className="mt-1 block text-[9px] font-black leading-tight">SPECIAL<br />OFFER</span>
          </div>
        </div>
        <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-orange-500/40" />
      </div>
    );
  }

  if (style === "social") {
    return (
      <div className="relative flex h-full items-center overflow-hidden bg-[#f6e8df] p-5 text-[#17243c] sm:p-6">
        <div className="absolute -right-7 -top-12 h-36 w-36 rounded-full bg-orange-300/70" />
        <div className="absolute bottom-0 right-8 h-20 w-20 rounded-full bg-rose-300/60" />
        <div className="relative z-10 w-[62%]">
          <span className="text-[9px] font-bold tracking-[0.18em] text-rose-800">YOUR NEXT POST</span>
          <h3 className="mt-2 font-heading text-2xl font-bold leading-tight sm:text-3xl">Make them<br />stop scrolling.</h3>
          <p className="mt-2 text-[11px] text-slate-700">A fresh idea deserves a bold introduction.</p>
        </div>
        <div className="absolute right-5 top-1/2 grid h-16 w-16 -translate-y-1/2 place-items-center rounded-full bg-white text-rose-700 shadow-xl sm:right-8 sm:h-20 sm:w-20">
          <Play size={28} fill="currentColor" aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#f4efe4] p-5 text-[#17243c] sm:p-6">
      <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border-[20px] border-amber-400/30" />
      <div className="relative flex items-center justify-between">
        <span className="text-[9px] font-bold tracking-[0.18em]">A MOMENT TO GATHER</span>
        <CalendarDays size={20} className="text-amber-600" aria-hidden="true" />
      </div>
      <div className="relative text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700">You are invited</p>
        <h3 className="mt-1 font-heading text-2xl font-bold leading-tight sm:text-3xl">An evening<br />to remember.</h3>
        <p className="mt-2 text-[10px] text-slate-600">DATE · TIME · PLACE</p>
      </div>
      <div className="relative flex items-center justify-center gap-2 text-[9px] font-bold tracking-[0.15em]">
        <span className="h-px w-8 bg-amber-500" /> SAVE THE DATE <span className="h-px w-8 bg-amber-500" />
      </div>
    </div>
  );
}

export default function BannerDesignPage() {
  const inquiryUrl = whatsappUrl(
    "Hello Pankaj GFX, I am interested in banner design. I would like to discuss my requirements.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-[#0F172A] text-white">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-amber-300">
              <Palette size={15} aria-hidden="true" /> CREATIVE BANNER DESIGN
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Banners That Make Your Brand <span className="text-amber-400">Stand Out</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Custom banner designs help businesses, events and brands share their message clearly and catch the attention of the people they want to reach.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={inquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-bold text-[#0F172A] transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                Get Your Banner Designed <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#banner-examples"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-500 px-5 py-3 font-semibold text-white transition hover:border-amber-300 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                Explore Our Designs <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[310px] w-full max-w-[570px] sm:h-[390px]" aria-label="Illustrative banner design concepts" role="img">
            <div className="absolute left-0 top-[15%] h-[68%] w-[43%] -rotate-6 overflow-hidden rounded-xl border border-white/30 shadow-2xl shadow-black/40 transition-transform duration-300 hover:-rotate-3">
              <BannerArtwork style="festival" />
            </div>
            <div className="absolute right-0 top-[17%] h-[66%] w-[43%] rotate-6 overflow-hidden rounded-xl border border-white/30 shadow-2xl shadow-black/40 transition-transform duration-300 hover:rotate-3">
              <BannerArtwork style="business" />
            </div>
            <div className="absolute left-[27%] top-0 z-10 h-full w-[47%] -rotate-1 overflow-hidden rounded-xl border border-white/50 shadow-2xl shadow-black/50 transition-transform duration-300 hover:rotate-0">
              <BannerArtwork style="sale" />
            </div>
            <span className="absolute bottom-0 right-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium text-slate-200 backdrop-blur-sm">
              Illustrative design concepts
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold tracking-[0.16em] text-amber-600">A GOOD DESIGN STARTS WITH A GOOD BRIEF</p>
            <h2 id="benefits-heading" className="mt-2 font-heading text-3xl font-bold text-[#0F172A] sm:text-4xl">Why Choose Pankaj GFX?</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="border-l-2 border-amber-400 bg-slate-50 p-5">
                <Icon size={23} className="text-amber-600" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="banner-examples" className="scroll-mt-24 bg-slate-50 py-14 sm:py-20" aria-labelledby="examples-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-amber-600">DESIGN DIRECTIONS</p>
              <h2 id="examples-heading" className="mt-2 font-heading text-3xl font-bold text-[#0F172A] sm:text-4xl">Explore Our Banner Design Styles</h2>
              <p className="mt-3 max-w-2xl text-slate-600">A glimpse of the creative possibilities we can bring to your brand.</p>
            </div>
            <p className="w-fit shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
              Sample concepts · Not client work
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <article key={example.style} className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-[1.75] overflow-hidden">
                  <BannerArtwork style={example.style} />
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.13em] text-amber-600">{example.label}</p>
                    <h3 className="mt-1 font-heading text-base font-bold text-[#0F172A]">{example.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-amber-50 p-2 text-amber-700" aria-hidden="true">
                    <Check size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">These visuals are illustrative examples created to show possible design directions. They are not represented as completed client projects.</p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="design-types-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold tracking-[0.16em] text-amber-600">DESIGN FOR YOUR NEXT IDEA</p>
            <h2 id="design-types-heading" className="mt-2 font-heading text-3xl font-bold text-[#0F172A] sm:text-4xl">Banner Designs for Every Purpose</h2>
            <p className="mt-3 text-slate-600">Choose a format that fits your message, audience and where your design will be seen.</p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {designTypes.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex gap-4 border-t border-slate-200 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-amber-50 text-amber-700">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold tracking-[0.16em] text-amber-600">FROM FIRST MESSAGE TO FINAL FILE</p>
            <h2 id="process-heading" className="mt-2 font-heading text-3xl font-bold text-[#0F172A] sm:text-4xl">A Clear, Collaborative Process</h2>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <li key={step.title} className="relative border-t-2 border-amber-400 bg-white p-5 pt-6">
                <span className="font-heading text-sm font-bold tracking-widest text-amber-600">0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20" aria-labelledby="cta-heading">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#0F172A] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full border-[36px] border-amber-400/10" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.16em] text-amber-300">LET&apos;S MAKE SOMETHING MEMORABLE</p>
              <h2 id="cta-heading" className="mt-2 font-heading text-3xl font-bold sm:text-4xl">Ready to Make Your Brand Stand Out?</h2>
              <p className="mt-3 text-slate-300">Let&apos;s create a banner that communicates your message and captures attention.</p>
            </div>
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-bold text-[#0F172A] transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Request a Design <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-7">
            <p className="text-xs font-bold tracking-[0.16em] text-amber-600">GOOD TO KNOW</p>
            <h2 id="faq-heading" className="mt-2 font-heading text-3xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm font-semibold text-[#0F172A] outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown size={18} className="shrink-0 text-amber-600 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 pr-7 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
