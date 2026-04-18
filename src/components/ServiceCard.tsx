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
      className="group relative rounded-2xl glass-effect p-8 flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:border-primary/50"
    >
      {/* Animated gradient border glow on hover */}
      <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <div className="mb-6 inline-flex p-4 rounded-xl bg-surface border border-gray-800 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      
      <Link 
        href={`/services/${slug}`}
        className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors mt-auto w-fit"
      >
        Learn more 
        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
