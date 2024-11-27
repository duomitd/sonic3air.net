import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sonic3air.net",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://sonic3air.net/sonic-3-air-android-guide",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // 添加更多 URL
  ];
}
