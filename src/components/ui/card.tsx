import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200/70 bg-white p-6 shadow-sm transition dark:border-white/10 dark:bg-white/[0.035]",
        className
      )}
      {...props}
    />
  );
}
