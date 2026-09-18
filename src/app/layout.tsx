import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://m5growth.com"),
  title: {
    default: "M5 GROWTH | Digital Marketing Agency | Full-Funnel Growth Beyond Limits",
    template: "%s | M5 GROWTH",
  },
  description: "M5 Growth is a premier digital marketing & performance agency specializing in Meta Ads, SEO, Next.js Web Development, 4K Commercial Video Production, 3D CGI, Branding, and GA4 Analytics.",
  keywords: [
    "M5 Growth",
    "Digital Marketing Agency",
    "Meta Ads Agency",
    "SEO Services",
    "Next.js Web Development Agency",
    "Commercial Video Production",
    "3D Product CGI Renders",
    "Performance Marketing",
    "Social Media Marketing Agency",
    "Luxury Brand Architecture",
    "Shopify Plus Developers",
    "Conversion Rate Optimization",
    "Influencer Marketing",
    "Google Analytics 4 Attribution"
  ],
  authors: [{ name: "M5 Growth Agency", url: "https://m5growth.com" }],
  creator: "M5 Growth",
  publisher: "M5 Growth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://m5growth.com",
  },
  openGraph: {
    title: "M5 GROWTH | Digital Marketing Agency | Growth Beyond Limits",
    description: "Accelerate your brand trajectory with full-funnel Meta Ads, Next.js web applications, high-intent SEO, and cinematic 4K video production.",
    url: "https://m5growth.com",
    siteName: "M5 GROWTH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "M5 Growth - Full-Stack Digital Marketing & Growth Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M5 GROWTH | Digital Marketing Agency",
    description: "Strategy Today, Bigger Tomorrow. Full-funnel performance marketing, modern web engineering, and commercial cinema.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"],
    creator: "@m5growth",
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
    icon: "/favicon.ico",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      "@id": "https://m5growth.com/#agency",
      "name": "M5 GROWTH",
      "url": "https://m5growth.com",
      "logo": "https://m5growth.com/logo.png",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "description": "Full-stack digital growth agency delivering performance advertising, custom web engineering, SEO, and commercial video production.",
      "telephone": "+919995551234",
      "email": "growth@m5growth.com",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cyberpark",
        "addressLocality": "Kozhikode",
        "addressRegion": "Kerala",
        "postalCode": "673001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.2588,
        "longitude": 75.7804
      },
      "sameAs": [
        "https://www.instagram.com/m5growth",
        "https://www.linkedin.com/company/m5growth",
        "https://x.com/m5growth"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
              "description": "Strategic content calendars, viral reels, community building, and brand engagement."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimization (SEO)",
              "description": "Dominate Google search rankings for high-intent buyer keywords with technical SEO."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Meta Ads (Facebook & Instagram)",
              "description": "Laser-targeted paid advertising funnels that maximize Return On Ad Spend (ROAS)."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development (Next.js)",
              "description": "High-performance custom web applications built with Next.js, WebGL, and CRO."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Production & Editing",
              "description": "Commercial-grade video production, 3D CGI product renders, and social-first edits."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://m5growth.com/#website",
      "url": "https://m5growth.com",
      "name": "M5 GROWTH",
      "publisher": {
        "@id": "https://m5growth.com/#agency"
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
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#0a0a0a] font-sans antialiased selection:bg-[#88cc00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
