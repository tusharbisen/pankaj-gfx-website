export const portfolioCategories = [
  "All",
  "Banner Design",
  "Social Media",
  "Print Design",
  "Branding",
  "Video Editing",
  "Web Design",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];
export type PortfolioArtwork =
  | "podcast"
  | "festival"
  | "social"
  | "brand"
  | "event"
  | "print"
  | "video";

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  description: string;
  kindLabel: string;
  visual: PortfolioArtwork;
  image?: string;
  imageAlt?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "gidhadi-gram-connect",
    title: "Gidhadi Gram Connect",
    category: "Web Design",
    description: "Website visual already included in the existing portfolio.",
    kindLabel: "Existing portfolio item",
    visual: "brand",
    image: "/GidhadiGramConnect.png",
    imageAlt: "Gidhadi Gram Connect website visual previously shown in the portfolio",
  },
  {
    id: "podcast-promo",
    title: "Podcast Live Show",
    category: "Banner Design",
    description: "Illustrative event banner concept with a bold audio theme.",
    kindLabel: "Illustrative example",
    visual: "podcast",
  },
  {
    id: "festival-greeting",
    title: "Festival Greeting",
    category: "Banner Design",
    description: "Illustrative seasonal greeting concept using warm festive colours.",
    kindLabel: "Illustrative example",
    visual: "festival",
  },
  {
    id: "social-launch",
    title: "Social Campaign",
    category: "Social Media",
    description: "Illustrative social campaign direction for a new announcement.",
    kindLabel: "Illustrative example",
    visual: "social",
  },
  {
    id: "identity-direction",
    title: "Brand Identity Direction",
    category: "Branding",
    description: "Illustrative identity concept exploring a clear, memorable visual mark.",
    kindLabel: "Illustrative example",
    visual: "brand",
  },
  {
    id: "community-event",
    title: "Community Event Poster",
    category: "Print Design",
    description: "Illustrative event poster layout with a simple information hierarchy.",
    kindLabel: "Illustrative example",
    visual: "event",
  },
  {
    id: "local-flyer",
    title: "Local Announcement Flyer",
    category: "Print Design",
    description: "Illustrative print concept with a compact, readable layout.",
    kindLabel: "Illustrative example",
    visual: "print",
  },
  {
    id: "video-cover",
    title: "Video Cover Concept",
    category: "Video Editing",
    description: "Illustrative thumbnail-style cover concept for a digital video.",
    kindLabel: "Illustrative example",
    visual: "video",
  },
];
