import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "M5 GROWTH | Digital Marketing Agency | Growth Beyond Limits",
  description: "We help businesses grow with creative ideas, data-driven strategies and result-oriented digital solutions. Social Media Marketing, SEO, Meta Ads, Next.js Web Development, Mobile Apps, Video Production, and Influencer Marketing.",
  keywords: [
    "M5 Growth",
    "Digital Marketing Agency",
    "Social Media Marketing",
    "SEO agency",
    "Meta Ads Facebook Instagram",
    "Website Development Next.js",
    "Mobile App Development",
    "Video Production and Editing",
    "Graphic Design & Branding",
    "Influencer Marketing",
    "Analytics and Reporting",
  ],
  openGraph: {
    title: "M5 GROWTH | Digital Marketing Agency",
    description: "Strategy Today, Bigger Tomorrow. Growth Beyond Limits.",
    url: "https://m5growth.com",
    siteName: "M5 GROWTH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen bg-white text-[#0a0a0a] font-sans antialiased selection:bg-[#88cc00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
