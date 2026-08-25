import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { education, experiences } from "@/data/experience";

export function Experience() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="experience">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Experiências reais migradas do portfólio anterior, com foco no impacto técnico e nas tecnologias usadas."
          eyebrow="Experiência"
          title="Trabalho aplicado em dados, APIs e cloud."
        />

        <div className="mt-12 grid gap-5">
          {experiences.map((experience) => (
            <article
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]"
              key={`${experience.company}-${experience.role}`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-md bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300">
                    <BriefcaseBusiness aria-hidden className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {experience.period}
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {experience.summary}
              </p>

              <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300 md:grid-cols-2">
                {experience.responsibilities.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {experience.results?.length ? (
                <div className="mt-5 rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm font-medium text-cyan-900 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                  {experience.results.join(" ")}
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <TechBadge key={technology}>{technology}</TechBadge>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
          <div className="flex gap-4">
            <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-200">
              <GraduationCap aria-hidden className="size-5" />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {education.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">
                {education.course}
              </h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                {education.institution}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {education.summary}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
