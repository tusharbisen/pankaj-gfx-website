"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Camera, Printer, FileText, Monitor, Share2, Video, Star } from "lucide-react";

const featuredServices = [
  {
    title: "Photography",
    description: "Professional photoshoots, event coverage, and product photography that captures the essence of your brand.",
    icon: <Camera size={32} />,
    slug: "photography"
  },
  {
    title: "Banner Printing",
    description: "High-quality, durable banners and marketing materials designed to make your business stand out.",
    icon: <Printer size={32} />,
    slug: "banner-printing"
  },
  {
    title: "Online Form Filling",
    description: "Accurate and timely assistance with government, educational, and business online form submissions.",
    icon: <FileText size={32} />,
    slug: "online-form-filling"
  },
  {
    title: "Website Development",
    description: "Custom, responsive, and blazing fast websites tailored for your specific business requirements.",
    icon: <Monitor size={32} />,
    slug: "web-development"
  },
  {
    title: "Social Media",
    description: "Strategic content creation and management to aggressively grow your digital footprint.",
    icon: <Share2 size={32} />,
    slug: "social-media"
  },
  {
    title: "Video & Poster",
    description: "Engaging promotional videos and eye-catching posters guaranteed to capture your audience's attention.",
    icon: <Video size={32} />,
    slug: "video-making"
  }
];

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Local Business Owner",
    content: "Pankaj GFx completely transformed our business presence. The new website is simply stunning."
  },
  {
    name: "Sneha Patel",
    role: "Event Organizer",
    content: "The photography and video editing for our latest festival were top-tier. Highly professional team."
  },
  {
    name: "Amit Kumar",
    role: "Startup Founder",
    content: "Excellent social media management. Their strategies brought us genuine leads within weeks."
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-surface border border-gray-800 text-primary font-medium text-sm mb-6">
              Welcome to Pankaj GFx
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-balance">
              Creative Digital Solutions for Your <br className="hidden md:block"/>
              <span className="bg-clip-text text-transparent bg-brand-gradient">Business Growth</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto text-balance">
              We bring your ideas to life with stunning designs, powerful websites, and compelling digital media. Stand out from the crowd today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton href="/contact" variant="primary">
                Get Started
              </AnimatedButton>
              <AnimatedButton href="/portfolio" variant="secondary">
                View Our Work
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Premium Services" 
            subtitle="Everything you need to establish a dominant online and offline presence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <ServiceCard key={service.title} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Featured Work" 
            subtitle="A glimpse into some of our recent creative projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder Image Blocks */}
            {[1, 2, 3, 4].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-surface border border-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                  <AnimatedButton href="/portfolio" variant="outline">View Details</AnimatedButton>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <AnimatedButton href="/portfolio" variant="secondary">All Projects</AnimatedButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Client Testimonials" subtitle="Don't just take our word for it." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl glass-effect border border-gray-800"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to elevate your brand?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s create something extraordinary together. Contact us today for a free consultation.
            </p>
            <AnimatedButton href="/contact" variant="primary">
              Start Your Project
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
