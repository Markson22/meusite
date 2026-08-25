import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-medium uppercase text-cyan-600 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
