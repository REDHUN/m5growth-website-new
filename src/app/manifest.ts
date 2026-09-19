import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M5 Growth | Digital Marketing & Growth Agency",
    short_name: "M5 Growth",
    description: "Accelerate Brand Trajectory Beyond Limits. Full-Stack Performance Marketing, Next.js Web Engineering, SEO, Branding & Commercial Production.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
