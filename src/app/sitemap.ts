import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${profile.website}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  return [
    {
      url: profile.website,
      lastModified: new Date()
    },
    ...projectRoutes
  ];
}
