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
  metadataBase: new URL("https://m5growth.in"),
  title: {
    default: "M5 Digital Growth | Digital Marketing Agency in Kerala",
    template: "%s | M5 Digital Growth",
  },
  description: "M5 Digital Growth is a Kerala-based digital marketing agency specializing in performance marketing, SEO, social media, branding, websites, apps and growth strategy.",
  keywords: [
    "M5 Digital Growth",
    "M5 Growth",
    "Digital Marketing Agency Kerala",
    "Digital Marketing Agency Alappuzha",
    "Social Media Marketing",
    "SEO Agency Kerala",
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
    "Growth Strategy",
  ],
  authors: [{ name: "M5 Digital Growth", url: "https://m5growth.in" }],
  creator: "M5 Digital Growth",
  publisher: "M5 Digital Growth",
  category: "Digital Marketing Agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "M5 Digital Growth | Digital Marketing Agency in Kerala",
    description: "M5 Digital Growth is a Kerala-based digital marketing agency specializing in performance marketing, SEO, social media, branding, websites, apps and growth strategy.",
    url: "https://m5growth.in/",
    siteName: "M5 Digital Growth",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M5 Digital Growth | Digital Marketing Agency in Kerala",
    description: "M5 Digital Growth is a Kerala-based digital marketing agency specializing in performance marketing, SEO, social media, branding, websites, apps and growth strategy.",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://m5growth.in/#organization",
      "name": "M5 Digital Growth",
      "legalName": "M5 Digital Growth Agency",
      "url": "https://m5growth.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://m5growth.in/logo.png",
        "width": 1024,
        "height": 1024
      },
      "image": "https://m5growth.in/logo.png",
      "description": "M5 Digital Growth is a Kerala-based digital marketing agency specializing in performance marketing, SEO, social media, branding, websites, apps and growth strategy.",
      "telephone": "+919778252136",
      "email": "growth@m5growth.in",
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
      "@id": "https://m5growth.in/#website",
      "url": "https://m5growth.in/",
      "name": "M5 Digital Growth",
      "publisher": {
        "@id": "https://m5growth.in/#organization"
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
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
