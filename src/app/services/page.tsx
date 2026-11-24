"use client";

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Camera, Printer, FileText, Palette, Package, Landmark } from "lucide-react";
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
    title: "Government & Online Services",
    description: "Assistance with eligible government and online application forms. Official approval and fees are decided only by the relevant authority.",
    icon: <Landmark size={32} />,
    slug: "online-form-filling"
  },
  {
    title: "Graphic Design",
    description: "Wedding invitations, banners, posters, visiting cards and custom social media designs.",
    icon: <Palette size={32} />,
    slug: "video-making"
  },
  {
    title: "Thermocol & Event Designs",
    description: "Custom lettering, name boards and decorative designs for events and celebrations.",
    icon: <Package size={32} />,
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
            title="Our Services" 
            subtitle="Photography, printing, design and practical digital assistance." 
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
