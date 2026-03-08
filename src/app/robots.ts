import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://jimwoodswrites.com/sitemap.xml",
    host: "https://jimwoodswrites.com",
  };
}
