import type { Metadata } from "next";

/** Shared site metadata defaults. Public pages can extend these with unique metadata. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pankaj GFX | Graphic Design & Creative Studio",
    template: "%s | Pankaj GFX",
  },
  description:
    "Creative graphic design for YouTube thumbnails, logos, banners, and social media content by Pankaj GFX.",
  applicationName: "Pankaj GFX",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Pankaj GFX",
    title: "Pankaj GFX | Graphic Design & Creative Studio",
    description:
      "Creative graphic design for YouTube thumbnails, logos, banners, and social media content.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj GFX | Graphic Design & Creative Studio",
    description:
      "Creative graphic design for YouTube thumbnails, logos, banners, and social media content.",
  },
};

/** Build consistent page metadata while keeping titles and descriptions page-specific. */
export function createPageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
