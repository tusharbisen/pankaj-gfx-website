"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedButton from "@/components/AnimatedButton";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let&apos;s discuss how we can help your business grow." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6">
                Thanks for reaching out! We&apos;ll get back to you shortly.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <AnimatedButton type="submit" variant="primary" className="w-full h-12">
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                )}
              </AnimatedButton>
            </form>
          </motion.div>

          {/* Contact Info & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-effect p-6 rounded-2xl border border-gray-800">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">Call Us</h4>
                <p className="text-gray-400">+1 (234) 567-8900</p>
                <p className="text-gray-400">Mon-Fri, 9am-6pm</p>
              </div>
              
              <div className="glass-effect p-6 rounded-2xl border border-gray-800">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">Email Us</h4>
                <p className="text-gray-400">hello@pankajgfx.com</p>
                <p className="text-gray-400">support@pankajgfx.com</p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl border border-gray-800">
                <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">Visit Studio</h4>
                <p className="text-gray-400">123 Digital Avenue, Tech District<br/>City, State 10001</p>
            </div>

            {/* Simulated Map */}
            <div className="flex-grow min-h-[200px] glass-effect rounded-2xl border border-gray-800 flex items-center justify-center">
              <p className="text-gray-500 font-medium">[ Interactive Map Integration Go Here ]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
