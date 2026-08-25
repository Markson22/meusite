import { SocialLinks } from "@/components/layout/social-links";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 text-sm text-slate-600 dark:text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-medium text-slate-900 dark:text-white">
            Built with Next.js, TypeScript & shadcn/ui
          </p>
          <p className="mt-1">© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
        </div>
        <SocialLinks compact />
      </div>
    </footer>
  );
}
