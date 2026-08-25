import { Mail, MapPin, MessageCircle } from "lucide-react";

import { SocialLinks } from "@/components/layout/social-links";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="contact">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          description="Aberto a conversas sobre IA aplicada, APIs, automação, dados e oportunidades onde engenharia e impacto caminham juntos."
          eyebrow="Contato"
          title="Vamos conversar sobre a próxima solução."
        />

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
          <div className="grid gap-4">
            <div className="flex gap-4">
              <Mail aria-hidden className="mt-1 size-5 text-cyan-600 dark:text-cyan-300" />
              <div>
                <p className="font-medium text-slate-950 dark:text-white">Email</p>
                <a
                  className="mt-1 inline-block text-slate-600 transition hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin aria-hidden className="mt-1 size-5 text-cyan-600 dark:text-cyan-300" />
              <div>
                <p className="font-medium text-slate-950 dark:text-white">Localização</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className={cn(buttonVariants({ variant: "primary" }))}
              href={`mailto:${profile.email}`}
            >
              <MessageCircle aria-hidden className="size-4" />
              Vamos conversar
            </a>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
