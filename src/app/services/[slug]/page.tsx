import { notFound } from "next/navigation";
import AnimatedButton from "@/components/AnimatedButton";
import SectionHeading from "@/components/SectionHeading";
import { whatsappUrl } from "@/config/business";

// Valid slugs for static generation
const serviceSlugs = [
  "photography",
  "banner-printing",
  "online-form-filling",
  "web-development",
  "social-media",
  "video-making"
];

// This normally would come from a database or CMS.
const serviceData: Record<string, { title: string, description: string, details: string, features: string[] }> = {
  "photography": {
    title: "Photography & Videography",
    description: "Photography for weddings, engagements, birthdays and events.",
    details: "Discuss the occasion, location, schedule and required deliverables. Final coverage, editing and turnaround are confirmed before booking.",
    features: ["Event coverage", "Portrait sessions", "Photo editing", "Album assistance"]
  },
  "banner-printing": {
    title: "Banner & Flex Printing",
    description: "Stand out locally with high-quality printed materials.",
    details: "Using state-of-the-art printers, we produce visually striking banners, posters, and hoardings that grab attention immediately.",
    features: ["Vinyl Banners", "Cloth Printing", "Custom Sizes"]
  },
  "online-form-filling": {
    title: "Online Form Filling",
    description: "Hassle-free application handling.",
    details: "From government documents to college applications, we ensure your forms are filled accurately and uploaded before deadlines without errors.",
    features: ["Fast Processing", "Error-Free Drafts", "Payment Handling"]
  },
  "web-development": {
    title: "Government & Online Service Assistance",
    description: "Guided assistance with eligible government and online forms.",
    details: "Pankaj GFX is not a government office. We can explain generally required information and assist with authorized online processes. Approval is decided by the relevant authority.",
    features: ["PM-Kisan-related assistance", "General online forms", "Document assistance", "Official website guidance"]
  },
  "social-media": {
    title: "Social Media Management",
    description: "Build an engaged community online.",
    details: "Let us handle your Instagram, Facebook, and LinkedIn. We create daily posts, engage with followers, and run targeted ad campaigns.",
    features: ["Content Calendar", "Analytics Reporting", "Ad Campaigns"]
  },
  "video-making": {
    title: "Video & Poster Making",
    description: "Dynamic media for a dynamic audience.",
    details: "Whether it's a promotional reel for Instagram or a corporate overview video, we direct, shoot, and edit stunning visual content.",
    features: ["Color Grading", "Motion Graphics", "Royalty-Free Audio"]
  }
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default function IndividualServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={service.title} subtitle={service.description} centered={false} />
        
        <div className="prose prose-invert prose-lg mt-12 mb-16">
          <p className="text-gray-300 leading-relaxed mb-8">
            {service.details}
          </p>
          
          <h3 className="text-white text-2xl font-bold mb-4">What&apos;s Included</h3>
          <ul className="space-y-3 text-gray-400 list-disc list-inside">
            {service.features.map((feature: string, idx: number) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-[#0F172A] mb-2">Ready to ask?</h4>
            <p className="text-slate-600">Contact us to discuss availability, requirements and charges.</p>
          </div>
          <AnimatedButton href={whatsappUrl(`Hello Pankaj GFX, I am interested in ${service.title}. Please provide information about the process and charges.`)} variant="primary">
            Ask on WhatsApp
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
