import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { business, whatsappUrl } from "@/config/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[#0F172A] pb-24 pt-14 md:mt-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Pankaj <span className="text-amber-400">GFX</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creative design, photography, printing and local online service assistance in Gidhadi.
            </p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 font-semibold text-slate-200 transition hover:border-amber-400 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">
              WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/youtube-thumbnails" className="text-gray-400 hover:text-white transition-colors">YouTube Thumbnails</Link>
              </li>
              <li>
                <Link href="/services/logo-design" className="text-gray-400 hover:text-white transition-colors">Logo Design</Link>
              </li>
              <li>
                <Link href="/services/banner-design" className="text-gray-400 hover:text-white transition-colors">Banner Design</Link>
              </li>
              <li>
                <Link href="/services/social-media-design" className="text-gray-400 hover:text-white transition-colors">Social Media Design</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="mt-1 shrink-0 text-amber-400" />
                <Link href="/contact" className="transition-colors hover:text-white">{business.address}</Link>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="shrink-0 text-amber-400" />
                <a href={`tel:+${business.phone}`} className="transition-colors hover:text-white">{business.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="shrink-0 text-amber-400" />
                <a href={`mailto:${business.email}`} className="break-all transition-colors hover:text-white">{business.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-base">
            &copy; {currentYear} Pankaj GFx. All rights reserved.
          </p>
          <div className="flex gap-6 text-base text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
