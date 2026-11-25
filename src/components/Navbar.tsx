"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/config/business";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 z-50 w-full border-b border-slate-200/80 transition-all duration-300 ${
        scrolled ? "bg-white/90 py-3 shadow-md shadow-slate-900/[0.06] backdrop-blur-xl" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="Pankaj GFX home" className="shrink-0">
            <Image
              src="/PANKAJGFX.png"
              alt="Pankaj GFX graphic design studio"
              width={1077}
              height={214}
              priority
              sizes="(max-width: 640px) 160px, 220px"
              className="h-auto w-40 sm:w-48 lg:w-56"
            />
          </Link>

          <div className="hidden items-center space-x-5 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`group relative py-2 font-medium transition-colors hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 ${
                  pathname === link.href ? "text-[#0F172A]" : "text-slate-600"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber-500 transition-all duration-200 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 font-bold text-[#0F172A] transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-11 w-11 place-items-center rounded-lg text-[#0F172A] transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-100 bg-white shadow-xl xl:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 pb-6 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    pathname === link.href ? "bg-amber-50 text-[#0F172A]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 font-bold text-[#0F172A] transition hover:bg-amber-300"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
