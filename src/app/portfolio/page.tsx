"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

// Mock portfolio data
const portfolioItems = [
  { id: 1, category: "Photography", title: "Wedding Shoot", imgBg: "bg-purple-900/40" },
  { id: 2, category: "Design", title: "Corporate Branding", imgBg: "bg-blue-900/40" },
  { id: 3, category: "Video", title: "Product Promo", imgBg: "bg-pink-900/40" },
  { id: 4, category: "Photography", title: "Nature Capture", imgBg: "bg-green-900/40" },
  { id: 5, category: "Design", title: "Event Banners", imgBg: "bg-yellow-900/40" },
  { id: 6, category: "Web", title: "GidhadiGramConnect-Website", imgBg: "bg-indigo-900/40", image: "/GidhadiGramConnect.png" }
];

const categories = ["All", "Photography", "Design", "Video", "Web"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Portfolio"
          subtitle="Explore our latest highly-crafted projects across multiple disciplines."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === category
                ? "bg-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                : "bg-surface text-gray-400 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-surface border border-gray-800"
              >
                {/* Simulated Image Background */}
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className={`absolute inset-0 group-hover:scale-110 transition-transform duration-500 bg-cover bg-center ${item.imgBg}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary text-sm font-medium mb-1">{item.category}</p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
