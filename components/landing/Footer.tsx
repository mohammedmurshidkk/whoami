import { Mail, Linkedin, Phone } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold text-foreground mb-2">
          Three portfolios, one story.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Built with React, TypeScript & Tailwind CSS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a
            href={SOCIAL_LINKS.email}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={16} />
            {CONTACT_INFO.email}
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={16} />
            {CONTACT_INFO.linkedin.replace("https://", "")}
          </a>
          <a
            href={SOCIAL_LINKS.tel}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone size={16} />
            {CONTACT_INFO.phone}
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {CONTACT_INFO.name}. Built with ☕ and AI agents.
        </p>
      </div>
    </footer>
  );
}
