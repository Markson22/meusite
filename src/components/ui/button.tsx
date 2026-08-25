import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-cyan-300 text-slate-950 shadow-[0_0_24px_rgba(103,232,249,0.22)] hover:bg-cyan-200",
        secondary:
          "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-white/12 dark:bg-white/[0.04] dark:text-slate-100 dark:hover:border-white/22 dark:hover:bg-white/[0.08]",
        ghost:
          "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
