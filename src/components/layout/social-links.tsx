import { GitBranch, Mail, Network } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  {
    href: profile.github,
    label: "GitHub",
    icon: GitBranch
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: Network
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: Mail
  }
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            aria-label={link.label}
            className={cn(
              buttonVariants({ variant: "secondary", size: compact ? "icon" : "sm" }),
              compact ? "px-0" : ""
            )}
            href={link.href}
            key={link.label}
            rel="noreferrer"
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          >
            <Icon aria-hidden className="size-4" />
            {compact ? null : link.label}
          </a>
        );
      })}
    </div>
  );
}
