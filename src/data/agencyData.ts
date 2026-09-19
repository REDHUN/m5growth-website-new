export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "Branding" | "Meta Ads & Growth" | "Web & App" | "Video & Content" | "SEO & Marketing";
  year: string;
  impact: string;
  coverImage: string;
  videoUrl?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
  gallery: string[];
  clientWebsite?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  metric: string;
  tag: string;
  featuredMedia: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  companyUrl: string;
  avatar: string;
  metrics: string;
}

export const AGENCY_STATS = [
  { value: "150+", label: "Brands Scaled", desc: "Across India, UAE, US & Europe" },
  { value: "10x", label: "Average Client ROI", desc: "Data-driven performance campaigns" },
  { value: "18+", label: "Industry Awards", desc: "Recognized for creative excellence" },
  { value: "98.8%", label: "Client Retention Rate", desc: "Long-term growth partnerships" },
];

export const CLIENT_LOGOS = [
  { name: "MYWORK CO", tag: "Tech & Coworking" },
  { name: "DESIGN DIALECTS", tag: "Architecture" },
  { name: "BALENI LUXURY", tag: "Fashion & Retail" },
  { name: "MCK KUTTY", tag: "Industrial Group" },
  { name: "VELVET AURA", tag: "D2C Cosmetics" },
  { name: "KOZHI BOTANICALS", tag: "Organic Skincare" },
  { name: "NEXUS MOBILITY", tag: "EV Tech" },
  { name: "URBAN HEARTH", tag: "Hospitality" },
  { name: "AETHEL TIMEPIECES", tag: "Horology" },
  { name: "NOVVA CAPITAL", tag: "Fintech" },
];

// The 10 Official Services from M5 Growth
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Engage. Grow. Convert.",
    shortDesc: "Strategic content calendars, viral reels, community building, and brand engagement that turns followers into paying customers.",
    fullDesc: "We build and execute tailored social media strategies across Instagram, LinkedIn, YouTube, and X. From high-retention short-form video content to influencer collaborations, we foster vibrant digital communities that actively purchase.",
    iconName: "Megaphone",
    deliverables: ["Social Media Strategy & Audits", "Viral Content Creation & Reels", "Community Management & Engagement", "Growth Hacking & Viral Loops", "Monthly Performance Roadmaps"],
    metric: "4.8M+ Monthly Reach",
    tag: "Social & Community",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_25_55_PM.png",
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    tagline: "Rank Higher. Get Found.",
    shortDesc: "Dominate Google search rankings for high-intent buyer keywords with technical SEO, authority building, and content optimization.",
    fullDesc: "Our data-driven SEO framework captures high-intent organic traffic that converts. We implement deep technical audits, schema architecture, authoritative backlink acquisition, and programmatic keyword clustering.",
    iconName: "Search",
    deliverables: ["Technical SEO & Core Web Vitals", "High-Intent Keyword Strategy", "On-Page & Semantic Optimization", "High-Authority Link Acquisition", "Local SEO & Google Maps Dominance"],
    metric: "+340% Organic Traffic",
    tag: "Search & Visibility",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    tagline: "Target. Reach. Get Results.",
    shortDesc: "Laser-targeted paid advertising funnels that maximize Return On Ad Spend (ROAS) and scale revenue profitably.",
    fullDesc: "We manage six-figure ad budgets with ruthless ROAS focus. Using AI-driven predictive audience modeling, dynamic creative testing (DCT), and frictionless conversion funnels, we scale e-commerce brands and lead generation engines.",
    iconName: "Infinity",
    deliverables: ["Full-Funnel Meta Ad Architecture", "Dynamic Creative Testing (DCT)", "Lookalike & Retargeting Engines", "High-Converting Ad Copy & Visuals", "Attribution & Pixel Tracking"],
    metric: "8.4x Average ROAS",
    tag: "Paid Advertising",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    tagline: "Stories that Sell.",
    shortDesc: "Compelling copywriting, narrative brand storytelling, and thought leadership articles that establish deep industry authority.",
    fullDesc: "Content that resonates, educates, and persuades. We produce persuasive editorial content, case studies, whitepapers, email newsletters, and conversion-focused copy that moves prospects smoothly through the sales funnel.",
    iconName: "FileEdit",
    deliverables: ["Brand Narrative & Copywriting", "Editorial & Blog Strategy", "High-Converting Email Sequences", "Whitepapers & Case Studies", "Lead Magnets & eBooks"],
    metric: "+180% Engagement Rate",
    tag: "Storytelling & Copy",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_32_29_PM.png",
  },
  {
    id: "graphic-design-branding",
    title: "Graphic Design & Branding",
    tagline: "A Visual Identity that Stands Out.",
    shortDesc: "Iconic visual identity design, logo suites, color palettes, typography, and marketing collateral that commands luxury market positioning.",
    fullDesc: "We craft unforgettable brand systems from the ground up. From core positioning, naming, and brand archetypes to complete typography suites, guidelines, and tactile print collateral.",
    iconName: "Palette",
    deliverables: ["Complete Brand Identity Systems", "Logo & Typography Suites", "Brand Guidelines & Design Tokens", "Marketing Collateral & Pitch Decks", "Custom Vector Illustrations & Icons"],
    metric: "100% Bespoke Craft",
    tag: "Brand & Creative",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_32_29_PM.png",
  },
  {
    id: "website-development",
    title: "Website Development",
    tagline: "Modern. Fast. Conversion Focused.",
    shortDesc: "High-performance custom web applications built with Next.js, immersive micro-interactions, and frictionless checkout flows.",
    fullDesc: "Your website is your ultimate growth flagship. We engineer hyper-optimized Next.js web applications with smooth motion design, instant loading times (under 0.5s), custom CMS architecture, and conversion rate optimization (CRO).",
    iconName: "Monitor",
    deliverables: ["Custom Next.js & React Web Apps", "E-Commerce Flagships (Shopify Plus & Headless)", "Conversion Rate Optimization (CRO)", "Interactive 3D WebGL Experiences", "Core Web Vitals 99+ Performance"],
    metric: "0.4s Ultra-Fast Load",
    tag: "Web Engineering",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_30_07_PM.png",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Ideas into Powerful Apps.",
    shortDesc: "Native iOS & Android and cross-platform Flutter/React Native mobile applications that deliver buttery smooth UX.",
    fullDesc: "We transform ambitious product ideas into high-retention mobile applications. From user journey wireframing, polished mobile UI/UX, to robust backend APIs, push notifications, and App Store Optimization (ASO).",
    iconName: "Smartphone",
    deliverables: ["iOS & Android App Engineering", "Cross-Platform React Native & Flutter", "Mobile UI/UX Design Systems", "API Integration & Real-Time Sync", "App Store Optimization (ASO)"],
    metric: "4.9★ App Store Rating",
    tag: "App Engineering",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_30_07_PM.png",
  },
  {
    id: "video-production-editing",
    title: "Video Production & Editing",
    tagline: "Impactful Videos that Perform.",
    shortDesc: "High-octane commercial video production, 3D CGI product renders, and social-first viral edits that stop thumbs.",
    fullDesc: "Cinematic commercial production meets performance video marketing. Our in-house production crew handles scripting, directing, 4K camera production, drone cinematography, color grading, sound design, and 3D product motion graphics.",
    iconName: "Video",
    deliverables: ["Brand Commercials & Launch Films", "3D Product CGI & Motion Graphics", "Short-Form TikTok & Reel Edits", "Cinematic Sound Design & Audio", "Art Direction & Lookbooks"],
    metric: "12M+ Organic Views",
    tag: "Production & Video",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_25_55_PM.png",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "Real People. Real Results.",
    shortDesc: "Vetted creator partnerships, micro & macro influencer campaigns that build authentic trust and massive social proof.",
    fullDesc: "We connect your brand with the right creators who genuinely resonate with your target demographics. We manage end-to-end creator scouting, contract negotiation, creative briefs, tracking links, and ROI analytics.",
    iconName: "UserCheck",
    deliverables: ["Creator Scouting & Vetting", "Campaign Briefs & Creative Direction", "Contract & Usage Rights Negotiation", "Affiliate & Whitelisted Ad Funnels", "Campaign Performance Analytics"],
    metric: "5.2x ROI on Creator Spend",
    tag: "Creators & Influence",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_13_PM.png",
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    tagline: "Measure. Improve. Grow.",
    shortDesc: "Transparent real-time dashboards, multi-touch attribution modeling, and actionable business intelligence.",
    fullDesc: "Eliminate the guesswork from your growth strategy. We set up Google Analytics 4 (GA4), custom BigQuery pipelines, Looker Studio real-time dashboards, heatmaps, and weekly executive growth reports.",
    iconName: "BarChart3",
    deliverables: ["GA4 & Server-Side Tracking Setup", "Custom Real-Time Looker Dashboards", "Multi-Touch Attribution Modeling", "Cohort & Customer LTV Analysis", "Weekly Executive Growth Reports"],
    metric: "100% Data Transparency",
    tag: "Data & Intelligence",
    featuredMedia: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "baleni-luxury",
    title: "Baleni Studio: Redefining High-Fashion Elegance",
    client: "Baleni Luxury",
    category: "Branding",
    year: "2025",
    impact: "+320% Revenue Scale",
    coverImage: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_32_29_PM.png",
    summary: "Complete brand transformation from an emerging boutique into an international luxury pret-a-porter label with bespoke digital presence.",
    challenge: "Baleni needed to transition from regional retail to high-ticket international e-commerce without losing its artisanal heritage.",
    solution: "We engineered a monolithic serif typography identity, cinematic editorial campaigns, and a lightning-fast headless Next.js shopping portal.",
    results: [
      "320% year-on-year e-commerce revenue growth",
      "Average order value increased from $140 to $390",
      "Featured across leading global fashion publications",
    ],
    deliverables: ["Visual Identity System", "Art Direction & Lookbook", "E-Commerce Platform", "Packaging Architecture"],
    gallery: [
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_32_29_PM.png",
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
    ],
    clientWebsite: "https://baleni.in",
  },
  {
    id: "nexus-mobility",
    title: "Nexus EV: Scaling India's Next Urban Mobility Icon",
    client: "Nexus Electric",
    category: "Meta Ads & Growth",
    year: "2025",
    impact: "12,000+ Pre-Orders in 30 Days",
    coverImage: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
    summary: "Full-funnel digital launch campaign generating over 12,000 pre-orders for India's smartest connected electric two-wheeler.",
    challenge: "Entering a hyper-competitive EV market dominated by legacy manufacturers with massive marketing budgets.",
    solution: "Deployed hyper-targeted Meta & YouTube video funnels highlighting kinetic tech, paired with an interactive 3D configurator web landing page.",
    results: [
      "12,400+ paid pre-orders secured within the launch month",
      "Cost per acquisition was 42% lower than industry benchmark",
      "Over 18 Million total impressions with 82% brand favorability",
    ],
    deliverables: ["Performance Marketing Funnel", "Interactive 3D Configurator", "Launch Film Production", "Social Hype Campaign"],
    gallery: [
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_30_07_PM.png",
    ],
    clientWebsite: "https://nexusmobility.tech",
  },
  {
    id: "design-dialects",
    title: "Design Dialects: Architectural Storytelling in 3D",
    client: "Design Dialects Architecture",
    category: "Web & App",
    year: "2024",
    impact: "Awwwards Site of the Day Winner",
    coverImage: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_30_07_PM.png",
    summary: "An immersive, gallery-grade digital portfolio celebrating luxury architectural and interior masterpieces with fluid WebGL transitions.",
    challenge: "Traditional architect portfolios felt flat and failed to convey the spatial emotion of physical luxury villas.",
    solution: "Crafted a custom Next.js experience with smooth cursor physics, split-screen project narratives, and 4K architectural flythroughs.",
    results: [
      "Winner of international design awards (Awwwards & FWA nominee)",
      "High-value client inquiry conversion rate increased by 185%",
      "Average session duration elevated from 45s to 4m 12s",
    ],
    deliverables: ["Interactive Next.js Portfolio", "Architectural Film Direction", "Spatial UI/UX", "Brand Monograph"],
    gallery: [
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_30_07_PM.png",
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_04_PM.png",
    ],
    clientWebsite: "https://designdialects.com",
  },
  {
    id: "aethel-horology",
    title: "Aethel Watches: 3D CGI Commercial & Global Launch",
    client: "Aethel Timepieces",
    category: "Video & Content",
    year: "2025",
    impact: "$2.4M Sold Out in 48 Hours",
    coverImage: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_04_PM.png",
    summary: "High-octane 3D mechanical watch breakdown film revealing the intricate 28-jewel automatic movement in microscopic photorealism.",
    challenge: "The physical prototype was still in Swiss fabrication while pre-orders needed to open globally.",
    solution: "Constructed sub-millimeter accurate 3D CAD models and rendered a cinematic 60-second commercial with custom orchestral scoring.",
    results: [
      "Limited edition run of 500 watches sold out within 48 hours",
      "Generated over $2.4M in immediate upfront capitalization",
      "Film achieved over 450,000 views on YouTube with zero ad spend",
    ],
    deliverables: ["3D CGI Product Animation", "Cinematic Sound Design", "Teaser Campaign", "High-Resolution Product Stills"],
    gallery: [
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_04_PM.png",
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_25_55_PM.png",
    ],
    clientWebsite: "https://aetheltimepieces.com",
  },
  {
    id: "mywork-coworking",
    title: "MyWork: Dynamic Workspace Branding & Growth",
    client: "MyWork Company",
    category: "Branding",
    year: "2024",
    impact: "96% Space Occupancy in 60 Days",
    coverImage: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_25_55_PM.png",
    summary: "Complete visual identity, environmental signage, and localized digital demand generation for premium coworking hubs.",
    challenge: "Attracting high-growth startups and enterprise tech teams to newly opened multi-floor spaces.",
    solution: "Formulated vibrant neon-accented spatial branding, interactive floor booking portal, and hyper-targeted B2B LinkedIn campaigns.",
    results: [
      "Achieved 96% desk and private cabin occupancy within 60 days of launch",
      "Built a thriving tech community of 800+ members",
      "Reduced member acquisition cost by 38%",
    ],
    deliverables: ["Environmental Signage & Wayfinding", "Brand Strategy", "Member Portal App UI", "B2B Performance Marketing"],
    gallery: [
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_25_55_PM.png",
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_13_PM.png",
    ],
    clientWebsite: "https://mywork.company",
  },
  {
    id: "velvet-aura-seo",
    title: "Velvet Aura: Omnichannel SEO & Organic Domination",
    client: "Velvet Aura Cosmetics",
    category: "SEO & Marketing",
    year: "2025",
    impact: "+480% Organic Revenue",
    coverImage: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_13_PM.png",
    summary: "High-intent organic keyword takeover strategy across 250+ beauty and skincare terms.",
    challenge: "High cost-per-click on paid ads demanded a profitable organic acquisition channel.",
    solution: "Executed programmatic technical SEO, ingredient dictionary indexing, and high-tier lifestyle publication backlinks.",
    results: [
      "Ranked #1 for 85 high-volume search queries",
      "Generated 220,000+ monthly organic visitors",
      "Organic e-commerce revenue expanded by 480%",
    ],
    deliverables: ["Programmatic Technical SEO", "Editorial Beauty Content", "Backlink Acquisition", "Conversion CRO"],
    gallery: [
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_13_PM.png",
      "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_32_29_PM.png",
    ],
    clientWebsite: "https://velvetaura.store",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    quote: "M5 Growth completely restructured our paid acquisition strategy. Their Meta ad creatives and continuous funnel optimization scaled our online sales by over 300% in under 90 days.",
    author: "Alex Rivera",
    role: "Founder & CEO",
    company: "Nexus Retail Brands",
    companyUrl: "#services",
    avatar: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_32_29_PM.png",
    metrics: "+310% Revenue Scale",
  },
  {
    id: "2",
    quote: "The branding and Next.js web application built by M5 Growth gave our brand an unforgettable digital presence. Super fast, stunning aesthetics, and flawless mobile experience.",
    author: "Sophia Chen",
    role: "Creative Director",
    company: "Aura Studio Living",
    companyUrl: "#services",
    avatar: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
    metrics: "0.4s Ultra-Fast Web",
  },
  {
    id: "3",
    quote: "Their search engine optimization and programmatic content strategy pushed us straight to Google's #1 page for our most lucrative buyer keywords. Inbound qualified leads doubled rapidly.",
    author: "Marcus Vance",
    role: "Head of Growth",
    company: "Vanguard Tech",
    companyUrl: "#services",
    avatar: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_30_07_PM.png",
    metrics: "+240% Inbound Leads",
  },
  {
    id: "4",
    quote: "The commercial video production and high-converting social reels engineered by the M5 Growth team generated massive viral traction and lowered our customer acquisition cost significantly.",
    author: "Elena Rostova",
    role: "D2C Brand Manager",
    company: "Lumina Essentials",
    companyUrl: "#services",
    avatar: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_04_PM.png",
    metrics: "4.2x ROAS on Ads",
  },
];

export const AGENCY_PROCESS = [
  {
    step: "01",
    title: "Discovery & Deep Audit",
    desc: "We dissect your business model, target demographics, competitive landscape, and current funnels to uncover asymmetric growth levers.",
  },
  {
    step: "02",
    title: "Strategy & Creative Architecture",
    desc: "We formulate an unforgettable visual identity, high-conversion messaging frameworks, and bespoke motion guidelines that set you apart.",
  },
  {
    step: "03",
    title: "Multi-Channel Deployment",
    desc: "We build ultra-fast Next.js digital platforms, set up hyper-targeted ad funnels, and produce cinematic commercial assets.",
  },
  {
    step: "04",
    title: "Rapid Scaling & Analytics",
    desc: "We deploy continuous A/B testing, cohort analysis, and ROAS optimization engines to aggressively scale revenue and market share.",
  },
];
