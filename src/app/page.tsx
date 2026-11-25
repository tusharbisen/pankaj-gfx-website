import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  Landmark,
  MessageCircle,
  Package,
  Palette,
  Printer,
} from "lucide-react";
import HomeHero from "@/components/HomeHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { whatsappUrl } from "@/config/business";

export const metadata: Metadata = {
  title: "Pankaj GFX | Creative Design, Printing & Digital Services in Gidhadi",
  description:
    "Explore photography, graphic design, printing and online service assistance from Pankaj GFX in Gidhadi, Gondia.",
};

const quickServices = [
  { title: "Photography", description: "Weddings, events, portraits and occasions", icon: Camera, href: "/services/photography" },
  { title: "Government & Online", description: "Form and digital service assistance", icon: Landmark, href: "/services/online-form-filling" },
  { title: "Graphic Design", description: "Posters, cards, banners and social designs", icon: Palette, href: "/services/banner-design" },
  { title: "Photo & Documents", description: "Passport photos, editing and album work", icon: FileText, href: "/services/photography" },
  { title: "Printing", description: "Printing, scanning, copying and lamination", icon: Printer, href: "/services/banner-printing" },
  { title: "Thermocol & Events", description: "Name boards and decorative event designs", icon: Package, href: "/services/video-making" },
];

const featuredServices = [
  { title: "Photography & Videography", description: "Capture weddings, birthdays, portraits and special events.", icon: <Camera size={24} />, slug: "photography" },
  { title: "Banner & Poster Printing", description: "Printed banners, posters and custom promotional materials.", icon: <Printer size={24} />, slug: "banner-printing" },
  { title: "Online Form Assistance", description: "Help with eligible government and online application forms.", icon: <FileText size={24} />, slug: "online-form-filling" },
];

const steps = [
  ["1", "Choose a service", "Find the service you need."],
  ["2", "Contact Pankaj GFX", "Call or send a WhatsApp message."],
  ["3", "Share details", "Provide only the information needed."],
  ["4", "Confirm and receive", "Confirm the process, time and charges."],
];

const reasons = [
  "Multiple services in one place",
  "Convenient local assistance",
  "Clear personal guidance",
  "Easy WhatsApp communication",
  "Creative design support",
  "Transparent inquiry process",
];

const faqs = [
  {
    question: "What services does Pankaj GFX offer?",
    answer: "Photography, graphic design, printing, photo and document work, event designs, and assistance with eligible online forms. Explore the services page for details.",
  },
  {
    question: "How do I ask about a service?",
    answer: "Send a message on WhatsApp or use the contact page. Share which service you are interested in and Pankaj GFX can explain the next steps.",
  },
  {
    question: "What should I share when I make an inquiry?",
    answer: "Start with the service you need and any relevant project details. Only provide information needed for that service.",
  },
  {
    question: "Are government applications guaranteed to be approved?",
    answer: "No. Application decisions and any official fees are determined by the relevant authority. Pankaj GFX can assist with the online process.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section id="services" className="scroll-mt-24 bg-slate-50 py-14 sm:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="services-heading" title="Find a Service" subtitle="Choose what you need. We will help you with the next step." />
          <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {quickServices.map(({ title, description, icon: Icon, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex min-h-48 flex-col rounded-xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-slate-900/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 sm:p-5"
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-700 transition-colors group-hover:bg-amber-100">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-bold leading-snug text-[#0F172A] sm:text-base">{title}</span>
                <span className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{description}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700">
                  Explore <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="popular-services" className="scroll-mt-24 py-14 sm:py-20" aria-labelledby="popular-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="popular-heading" title="Popular Services" subtitle="Explore a few of the services available from Pankaj GFX." />
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {featuredServices.map((service, index) => (
              <div key={service.title} className="flex flex-col">
                <ServiceCard {...service} index={index} />
                <a
                  href={whatsappUrl(`Hello Pankaj GFX, I am interested in ${service.title}. Please provide information about the process and charges.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-10 items-center gap-2 self-start rounded-md px-2 text-sm font-semibold text-emerald-800 transition-colors hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  <MessageCircle size={17} aria-hidden="true" /> Ask on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="steps-heading" title="How It Works" subtitle="A simple process for clear and comfortable service." />
          <ol className="relative grid gap-4 before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-amber-200 lg:grid-cols-4 lg:gap-5 lg:before:hidden lg:after:absolute lg:after:left-[12.5%] lg:after:right-[12.5%] lg:after:top-5 lg:after:h-px lg:after:bg-amber-200">
            {steps.map(([step, title, text]) => (
              <li key={step} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3 lg:flex lg:flex-col">
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-[#0F172A] font-heading font-bold text-amber-300 ring-4 ring-slate-50">{step}</span>
                <article className="h-full rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="font-heading font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-amber-700">A LITTLE BIT OF EVERYTHING, CLOSE TO HOME</p>
            <h2 id="why-heading" className="mt-3 font-heading text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">Why Choose Pankaj GFX?</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
              Get practical local assistance and creative support in one place, with a clear conversation about what you need and what comes next.
            </p>
            <ul className="mt-7 grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-600" size={19} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/10 sm:p-9">
            <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border-[24px] border-white/[0.04]" aria-hidden="true" />
            <div className="relative">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400 text-[#0F172A]"><MessageCircle size={22} aria-hidden="true" /></span>
              <h3 className="mt-5 font-heading text-2xl font-bold">Need help with a service?</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">Tell us what you need and we will explain the process and availability.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-bold text-[#0F172A] transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
                  <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
                </a>
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-amber-300 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
                  Contact & Location <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading id="faq-heading" title="Frequently Asked Questions" subtitle="A few helpful details before you get in touch." />
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-5 sm:px-7">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-4">
                <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-[#0F172A] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-200 text-amber-700 transition-transform group-open:rotate-45" aria-hidden="true">
                    <span className="text-xl font-normal leading-none">+</span>
                  </span>
                </summary>
                <p className="max-w-2xl pb-1 pr-9 pt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur-md md:hidden" aria-label="Quick actions">
        <div className="grid grid-cols-4">
          {[["Home", "/", "Home"], ["Services", "/services", "Services"], ["Gallery", "/portfolio", "Gallery"], ["WhatsApp", whatsappUrl(), "WhatsApp"]].map(([label, href, key]) => (
            <a key={key} href={href} target={key === "WhatsApp" ? "_blank" : undefined} rel={key === "WhatsApp" ? "noopener noreferrer" : undefined} className="flex min-h-10 flex-col items-center justify-center rounded-md py-1 text-xs font-semibold text-slate-700 transition-colors hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-amber-500">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
