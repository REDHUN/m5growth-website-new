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
    featuredMedia: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=75&w=800&auto=format&fit=crop",
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
    featuredMedia: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=800&auto=format&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=75&w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=75&w=800&auto=format&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=75&w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=75&w=800&auto=format&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=75&w=800&auto=format&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=75&w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547996160-71dfabbce5ed?q=75&w=800&auto=format&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=75&w=800&auto=format&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=75&w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=75&w=800&auto=format&fit=crop",
    ],
    clientWebsite: "https://velvetaura.store",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    quote: "Hands down the most visionary creative and growth agency we've ever partnered with. Their blend of striking aesthetics and ruthless data execution drove an immediate 320% jump in our revenue.",
    author: "Haroon Rasheed",
    role: "Founder & CEO",
    company: "MyWork Company",
    companyUrl: "https://mywork.company",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    metrics: "+320% Revenue Scale",
  },
  {
    id: "2",
    quote: "Their out-of-the-box creative direction and high-octane Meta campaigns made our brand stand out instantly in a crowded luxury space. The level of detail and craftsmanship is world-class.",
    author: "Neshma Abdurrahman",
    role: "Principal Architect",
    company: "Design Dialects",
    companyUrl: "https://designdialects.com",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    metrics: "Awwwards Nominee",
  },
  {
    id: "3",
    quote: "Exceptional execution from brand identity to our high-performance Next.js flagship. They don't just deliver files; they operate as true growth partners invested in your business milestones.",
    author: "MC Nasar",
    role: "Managing Director",
    company: "MCKKutty Group",
    companyUrl: "https://mckkutty.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    metrics: "12,000+ Pre-orders",
  },
  {
    id: "4",
    quote: "The video production and performance ad creatives they engineered transformed our D2C brand into an overnight sensation. Unboxing videos exploded organically across TikTok and Reels.",
    author: "Arshad Al-Mansoor",
    role: "Creative Director & Co-Founder",
    company: "Baleni Luxury",
    companyUrl: "https://baleni.in",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    metrics: "$2.4M Sold Out",
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
