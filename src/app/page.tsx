"use client";

import Link from "next/link";
import {
  Camera, FileText, Printer, Palette, Landmark, Package,
  CheckCircle2, MessageCircle, MapPin
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { whatsappUrl } from "@/config/business";

const quickServices = [
  { title: "Photography", description: "Weddings, events, portraits and occasions", icon: Camera, href: "/services/photography" },
  { title: "Government & Online", description: "Form and digital service assistance", icon: Landmark, href: "/services/online-form-filling" },
  { title: "Graphic Design", description: "Posters, cards, banners and social designs", icon: Palette, href: "/services/video-making" },
  { title: "Photo & Documents", description: "Passport photos, editing and album work", icon: FileText, href: "/services/photography" },
  { title: "Printing", description: "Printing, scanning, copying and lamination", icon: Printer, href: "/services/banner-printing" },
  { title: "Thermocol & Events", description: "Name boards and decorative event designs", icon: Package, href: "/services/video-making" },
];

const featuredServices = [
  { title: "Photography & Videography", description: "Capture weddings, birthdays, portraits and special events.", icon: <Camera size={28} />, slug: "photography" },
  { title: "Banner & Poster Printing", description: "Printed banners, posters and custom promotional materials.", icon: <Printer size={28} />, slug: "banner-printing" },
  { title: "Online Form Assistance", description: "Help with eligible government and online application forms.", icon: <FileText size={28} />, slug: "online-form-filling" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-bold tracking-wide mb-4">Pankaj GFX - Gidhadi, Gondia</p>
            <h1 className="type-h1 font-bold text-white">
              Your Moments. Your Documents. <span className="text-amber-400">Your Digital Solutions.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mt-6 max-w-2xl leading-relaxed">
              Photography, creative design, printing and digital service assistance - everything you need in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/services" className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-amber-500 text-[#0F172A] font-bold">
                Explore Services
              </Link>
              <a href={whatsappUrl("Hello Pankaj GFX, I would like to know about your services.")} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-lg border border-slate-500 text-white font-bold hover:bg-white/10">
                <MessageCircle size={20} /> Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Find a Service" subtitle="Choose what you need. We will help you with the next step." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
            {quickServices.map(({ title, description, icon: Icon, href }) => (
              <Link key={title} href={href} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 min-h-44 hover:border-amber-400 hover:shadow-lg transition">
                <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4"><Icon size={23} /></div>
                <h3 className="font-bold text-[#0F172A]">{title}</h3>
                <p className="text-base text-slate-600 mt-2 leading-relaxed">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Popular Services" subtitle="View details and ask about availability or required documents." />
          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <div key={service.title}>
                <ServiceCard {...service} index={index} />
                <a href={whatsappUrl(`Hello Pankaj GFX, I am interested in ${service.title}. Please provide information about the process and charges.`)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-green-700 font-bold">
                  <MessageCircle size={18} /> Ask on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How It Works" subtitle="A simple process for clear and comfortable service." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["1", "Choose a service", "Find the service you need."],
              ["2", "Contact Pankaj GFX", "Call or send a WhatsApp message."],
              ["3", "Share details", "Provide only the information needed."],
              ["4", "Confirm and receive", "Confirm the process, time and charges."],
            ].map(([step, title, text]) => (
              <div key={step} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold mb-4">{step}</div>
                <h3 className="font-bold text-[#0F172A]">{title}</h3>
                <p className="text-slate-600 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading title="Why Choose Pankaj GFX?" centered={false} />
            <div className="grid sm:grid-cols-2 gap-4">
              {["Multiple services in one place", "Convenient local assistance", "Clear personal guidance", "Easy WhatsApp communication", "Creative design support", "Transparent inquiry process"].map(item => (
                <div key={item} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={20} /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <div className="bg-[#0F172A] text-white rounded-2xl p-7 sm:p-9">
            <h3 className="text-2xl font-bold">Need help with a service?</h3>
            <p className="text-slate-300 mt-3">Tell us what you need and we will explain the process and availability.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-bold text-[#0F172A]"><MessageCircle size={19} /> WhatsApp Us</a>
              <Link href="/contact" className="inline-flex justify-center items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 font-bold"><MapPin size={19} /> Contact & Location</Link>
            </div>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 px-2 py-2" aria-label="Quick actions">
        <div className="grid grid-cols-4">
          {[["Home", "/", "Home"], ["Services", "/services", "Services"], ["Gallery", "/portfolio", "Gallery"], ["WhatsApp", whatsappUrl(), "WhatsApp"]].map(([label, href, key]) => (
            <a key={key} href={href} target={key === "WhatsApp" ? "_blank" : undefined} rel={key === "WhatsApp" ? "noopener noreferrer" : undefined} className="flex flex-col items-center text-xs font-bold text-slate-700 py-1">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
