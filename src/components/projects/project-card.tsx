import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/types/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-cyan-300/40 dark:hover:shadow-cyan-950/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
            {project.label}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
            {project.title}
          </h3>
        </div>
        {project.status ? (
          <span className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            {project.status}
          </span>
        ) : null}
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <TechBadge key={technology}>{technology}</TechBadge>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 dark:text-white dark:hover:text-cyan-300"
          href={`/projects/${project.slug}`}
        >
          Case Study
          <ArrowUpRight aria-hidden className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        {project.links?.github ? (
          <a
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            href={project.links.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        ) : null}
        {project.links?.demo ? (
          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            href={project.links.demo}
            rel="noreferrer"
            target="_blank"
          >
            Demo
            <ExternalLink aria-hidden className="size-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
