"use client";

import { GitBranch, Menu, Network, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/#about", label: "Sobre" },
  { href: "/#projects", label: "Projetos" },
  { href: "/#experience", label: "Experiência" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contato" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/78 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/76">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="text-sm font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 dark:text-white"
          href="/"
        >
          Markson César
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            aria-label="GitHub"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            <GitBranch aria-hidden className="size-4" />
          </a>
          <a
            aria-label="LinkedIn"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Network aria-hidden className="size-4" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            aria-expanded={open}
            aria-label="Abrir navegação"
            onClick={() => setOpen((value) => !value)}
            size="icon"
            type="button"
            variant="ghost"
          >
            {open ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-slate-950 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/[0.06]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
