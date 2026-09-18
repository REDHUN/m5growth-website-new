import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M5 GROWTH | Digital Marketing Agency",
    short_name: "M5 Growth",
    description: "Strategy Today, Bigger Tomorrow. Full-funnel performance marketing, modern web engineering, and commercial cinema.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
