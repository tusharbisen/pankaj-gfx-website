"use client";

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Camera, Printer, FileText, Monitor, Share2, Video } from "lucide-react";
import { motion } from "framer-motion";

const allServices = [
  {
    title: "Photography",
    description: "Professional photoshoots, event coverage, and product photography that captures the essence of your brand. We use high-end equipment to deliver crisp, beautiful imagery.",
    icon: <Camera size={32} />,
    slug: "photography"
  },
  {
    title: "Banner Printing",
    description: "High-quality, durable banners and marketing materials designed to make your business stand out. From flex printing to vinyl and cloth banners, we do it all.",
    icon: <Printer size={32} />,
    slug: "banner-printing"
  },
  {
    title: "Online Form Filling",
    description: "Accurate and timely assistance with government, educational, and business online form submissions. Don't let confusing websites delay your applications.",
    icon: <FileText size={32} />,
    slug: "online-form-filling"
  },
  {
    title: "Website Development",
    description: "Custom, responsive, and blazing fast websites tailored for your specific business requirements. We build landing pages, corporate sites, and full eCommerce solutions.",
    icon: <Monitor size={32} />,
    slug: "web-development"
  },
  {
    title: "Social Media Management",
    description: "Strategic content creation and management to aggressively grow your digital footprint. We handle posting schedules, engagement, and organic growth.",
    icon: <Share2 size={32} />,
    slug: "social-media"
  },
  {
    title: "Video & Poster Making",
    description: "Engaging promotional videos and eye-catching posters guaranteed to capture your audience's attention. Perfect for ad campaigns and social sharing.",
    icon: <Video size={32} />,
    slug: "video-making"
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <SectionHeading 
            title="Our Digital Services" 
            subtitle="Comprehensive solutions designed to elevate your brand and drive results." 
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
