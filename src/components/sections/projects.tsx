import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/40" id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Projetos apresentados como pequenos cases: problema, solução, pipeline, tecnologias e resultados reais quando documentados."
          eyebrow="Projetos"
          title="Cases de IA, dados, APIs e automação."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
