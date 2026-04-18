"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "12" }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering brands through <span className="bg-clip-text text-transparent bg-brand-gradient">Creative Design</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At Pankaj GFx, we believe that great design and cutting-edge technology are the cornerstones of modern business success. What started as a small photography studio has evolved into a full-scale digital agency.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our mission is to help local and global brands communicate their unique stories, capture their audience&apos;s attention, and drive meaningful results through comprehensive digital solutions.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Premium Quality Standard", "Timely Delivery", "Dedicated Support"].map((item, id) => (
                <li key={id} className="flex items-center text-gray-300">
                  <CheckCircle className="text-primary mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
            <AnimatedButton href="/contact">Say Hello</AnimatedButton>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Geometric decorations */}
            <div className="absolute -inset-4 bg-brand-gradient opacity-20 blur-2xl rounded-full" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 glass-effect p-8 flex items-center justify-center">
               <div className="text-center">
                 <h3 className="text-3xl font-bold text-white mb-2">Pankaj GFx</h3>
                 <p className="text-primary tracking-widest uppercase">Creative Agency</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl glass-effect border border-gray-800"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-brand-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
