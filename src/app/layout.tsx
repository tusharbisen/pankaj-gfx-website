import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteMetadata } from "@/components/Seo";
import { MotionConfig } from "framer-motion";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} font-body antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </MotionConfig>
      </body>
    </html>
  );
}
