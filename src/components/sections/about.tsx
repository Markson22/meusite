import { BrainCircuit, Cloud, Database, Workflow } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

const focusAreas = [
  {
    title: "Inteligência Artificial",
    description: "Construção de soluções que conectam modelos, dados e aplicações.",
    icon: BrainCircuit
  },
  {
    title: "APIs e integração",
    description: "Backend em Python para integrar sistemas e expor capacidades de IA.",
    icon: Workflow
  },
  {
    title: "Dados",
    description: "SQL, BigQuery, Pandas e Power BI para organizar informação útil.",
    icon: Database
  },
  {
    title: "Cloud",
    description: "Uso de GCP e automação para apoiar soluções em produção.",
    icon: Cloud
  }
];

export function About() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="about">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading
          description={profile.about}
          eyebrow="Sobre"
          title="IA com base sólida em backend, dados e automação."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.035]"
                key={area.title}
              >
                <Icon aria-hidden className="size-5 text-cyan-600 dark:text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
