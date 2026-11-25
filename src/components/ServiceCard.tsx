"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const MotionLink = motion(Link);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon, slug, index = 0 }: ServiceCardProps) {
  return (
    <MotionLink
      href={`/services/${slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:border-amber-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
    >
      <span className="mb-5 inline-flex w-fit rounded-xl bg-amber-50 p-3 text-amber-700 transition-colors group-hover:bg-amber-100">
        {icon}
      </span>
      <span className="mb-3 font-heading text-lg font-bold text-[#0F172A]">{title}</span>
      <span className="mb-6 flex-grow text-sm leading-relaxed text-slate-600">
        {description}
      </span>
      <span className="mt-auto inline-flex w-fit items-center font-bold text-amber-700">
        Learn more
        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </MotionLink>
  );
}
