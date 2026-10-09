import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { districts } from "@/lib/districts";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = [
    { url: business.url, priority: 1 },
    { url: `${business.url}/hizmet-bolgeleri`, priority: 0.9 },
    { url: `${business.url}/hizmetler`, priority: 0.9 },
    { url: `${business.url}/galeri`, priority: 0.6 },
    { url: `${business.url}/iletisim`, priority: 0.8 },
    ...services.map(({ slug }) => ({ url: `${business.url}/hizmetler/${slug}`, priority: 0.8 })),
  ];
  const districtPages = districts.map(({ slug }) => ({
    url: `${business.url}/hizmet-bolgeleri/${slug}`,
    priority: 0.7,
  }));
  return [...corePages, ...districtPages].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));
}
