import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://m5growth.in/",
      lastModified: new Date("2026-03-01"),
    },
  ];
}
