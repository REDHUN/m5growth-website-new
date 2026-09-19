import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M5 Digital Growth | Digital Marketing Agency in Kerala",
    short_name: "M5 Growth",
    description: "M5 Digital Growth is a Kerala-based digital marketing agency specializing in performance marketing, SEO, social media, branding, websites, apps and growth strategy.",
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
