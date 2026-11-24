"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon, slug, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Animated gradient border glow on hover */}
      <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <div className="mb-5 inline-flex p-3 rounded-xl bg-amber-50 text-amber-600">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-[#0F172A] mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <Link 
        href={`/services/${slug}`}
        className="inline-flex items-center text-amber-600 font-bold mt-auto w-fit"
      >
        Learn more 
        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
