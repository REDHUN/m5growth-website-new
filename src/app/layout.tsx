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
  metadataBase: new URL("https://m5growth.com"),
  title: {
    default: "M5 GROWTH | Full-Stack Digital Marketing & Growth Agency",
    template: "%s | M5 GROWTH",
  },
  description: "M5 Growth is a premier full-stack digital growth agency based in Kerala, India. We engineer predictable revenue scale via Meta Ads, SEO, Next.js Web & Mobile App Development, Brand Architecture, and Commercial Video Production.",
  keywords: [
    "M5 Growth",
    "Digital Marketing Agency Kerala",
    "Digital Marketing Agency Alappuzha",
    "Social Media Marketing",
    "SEO agency India",
    "Meta Ads Agency",
    "Facebook Instagram Ads",
    "Next.js Web Development",
    "Mobile App Development",
    "Commercial Video Production",
    "Graphic Design Branding",
    "Influencer Marketing",
    "Google Ads Search Marketing",
    "Performance Marketing Agency",
  ],
  authors: [{ name: "M5 Growth", url: "https://m5growth.com" }],
  creator: "M5 Growth",
  publisher: "M5 Growth",
  category: "Digital Marketing Agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "M5 GROWTH | Full-Stack Digital Marketing Agency",
    description: "Strategy Today, Bigger Tomorrow. Growth Beyond Limits. We scale brands through high-performance advertising, Next.js web engineering, and commercial video production.",
    url: "https://m5growth.com",
    siteName: "M5 GROWTH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M5 GROWTH | Digital Marketing & Growth Agency",
    description: "Strategy Today, Bigger Tomorrow. Growth Beyond Limits.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://m5growth.com/#organization",
      "name": "M5 Growth",
      "legalName": "M5 Growth Digital Marketing Agency",
      "url": "https://m5growth.com",
      "logo": "https://m5growth.com/favicon.ico",
      "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=75&w=800&auto=format&fit=crop",
      "description": "Full-stack digital growth agency delivering performance Meta advertising, technical SEO, high-speed Next.js web development, and commercial video production.",
      "telephone": "+919778252136",
      "email": "growth@m5growth.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Muhamma",
        "addressRegion": "Alappuzha, Kerala",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.6067",
        "longitude": "76.3570"
      },
      "sameAs": [
        "https://www.instagram.com/m5_growth?stkn=MWN1ZXM2amN4MnhqZA%3D%3D&utm_source=qr"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Growth Marketing & Tech Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads (Facebook & Instagram)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design & Branding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing & Copywriting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production & Editing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Analytics & Reporting" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://m5growth.com/#website",
      "url": "https://m5growth.com",
      "name": "M5 Growth",
      "publisher": {
        "@id": "https://m5growth.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-white text-[#0a0a0a] font-sans antialiased selection:bg-[#88cc00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
