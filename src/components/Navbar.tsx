"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg py-3 border-b border-slate-100" : "bg-white py-4 border-b border-slate-100"
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-[#0F172A] font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-amber-500 text-[#0F172A] font-bold inline-flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F172A] focus:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 font-bold text-[#0F172A]"
              >
                <MessageCircle size={18} /> WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
