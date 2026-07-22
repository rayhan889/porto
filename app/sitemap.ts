import type { MetadataRoute } from "next";
import { posts } from "@/.velite";
import { siteUrl } from "@/lib/site";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "yearly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects/tale-of-samurai", changeFrequency: "yearly", priority: 0.5 },
  { path: "/tools", changeFrequency: "yearly", priority: 0.5 },
  { path: "/writings", changeFrequency: "weekly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const published = posts.filter((post) => post.published);

  const lastPostDate = published.reduce<Date | undefined>((latest, post) => {
    const date = new Date(post.date);
    return !latest || date > latest ? date : latest;
  }, undefined);

  const now = new Date();

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}${path}`,
      // /writings is only as fresh as the newest post; everything else is
      // whatever the current deploy shipped.
      lastModified: path === "/writings" ? (lastPostDate ?? now) : now,
      changeFrequency,
      priority,
    })),
    ...published.map((post) => ({
      url: `${siteUrl}/writings/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
