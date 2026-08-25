import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/40" id="stack">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Sem barras de porcentagem: a stack fica organizada por domínio para mostrar onde cada tecnologia entra na construção de soluções."
          eyebrow="Stack"
          title="Tecnologias por área de atuação."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035]"
              key={group.title}
            >
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
