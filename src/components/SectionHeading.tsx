"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
}

export default function SectionHeading({ title, subtitle, centered = true, id }: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="type-h2 mb-3 font-bold text-[#0F172A]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
