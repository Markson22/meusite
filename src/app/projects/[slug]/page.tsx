import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import { getProjectBySlug, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${profile.website}/projects/${project.slug}`
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${profile.website}/projects/${project.slug}`
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-10")}
          href="/#projects"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Voltar aos projetos
        </Link>

        <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
          {project.label}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>

        {project.links?.demo ? (
          <div className="mt-8">
            <a
              className={cn(buttonVariants({ variant: "primary" }))}
              href={project.links.demo}
              rel="noreferrer"
              target="_blank"
            >
              Abrir projeto publicado
              <ExternalLink aria-hidden className="size-4" />
            </a>
          </div>
        ) : null}

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <CaseBlock title="Problema" value={project.problem} />
          <CaseBlock title="Solução" value={project.solution} />
        </div>

        <section className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            Pipeline
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.pipeline.map((step) => (
              <span
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                key={step}
              >
                {step}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <ListBlock items={project.results} title="Resultados" />
          <ListBlock
            items={project.metrics?.length ? project.metrics : ["Métricas adicionais serão adicionadas apenas quando houver documentação real."]}
            title="Métricas"
          />
        </section>
      </section>
    </main>
  );
}

function CaseBlock({ title, value }: { title: string; value: string }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
      <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{value}</p>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
      <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-cyan-600 dark:text-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
