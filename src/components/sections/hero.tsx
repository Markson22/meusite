import { ArrowDown, Download, GitBranch, Network } from "lucide-react";
import Image from "next/image";

import { SocialLinks } from "@/components/layout/social-links";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.02),transparent)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,1))]" />
      <div className="mx-auto grid min-h-[calc(92svh-4rem)] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-base font-medium text-cyan-700 dark:text-cyan-300">
            Olá, eu sou
          </p>
          <h1 className="mt-4 text-5xl font-semibold text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-slate-800 dark:text-slate-100 sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-sm font-medium text-slate-500 dark:text-slate-400">
            {profile.stackLine}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className={cn(buttonVariants({ variant: "primary" }))} href="#projects">
              Ver projetos
              <ArrowDown aria-hidden className="size-4" />
            </a>
            <a
              className={cn(buttonVariants({ variant: "secondary" }))}
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <GitBranch aria-hidden className="size-4" />
              GitHub
            </a>
            <a
              className={cn(buttonVariants({ variant: "secondary" }))}
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Network aria-hidden className="size-4" />
              LinkedIn
            </a>
            {profile.resume ? (
              <a className={cn(buttonVariants({ variant: "secondary" }))} href={profile.resume}>
                <Download aria-hidden className="size-4" />
                Baixar currículo
              </a>
            ) : null}
          </div>

          <div className="mt-9">
            <SocialLinks />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 blur-2xl" />
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-cyan-950/20">
            <Image
              alt="Retrato de Markson César"
              className="aspect-[709/945] h-auto w-full object-cover"
              height={945}
              priority
              src="/images/markson.jpeg"
              width={709}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="font-medium text-slate-950 dark:text-white">Foco atual</p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">IA aplicada e integração</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="font-medium text-slate-950 dark:text-white">Base técnica</p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">Python, dados e APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
