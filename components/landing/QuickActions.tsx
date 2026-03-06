import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const actions = [
  { label: "See what I'm building now", sub: "RELAYET — my startup", to: "/readme" },
  { label: "View my experience", sub: "15M user systems + more", to: "/readme" },
  { label: "Download resume", sub: "Traditional PDF format", to: "/resume" },
  { label: "Contact me", sub: "Let's talk", href: SOCIAL_LINKS.email },
];

export function QuickActions() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-muted-foreground text-center mb-8">
            Not sure which to pick? Jump to:
          </p>
          <div className="space-y-3">
            {actions.map((action) => {
              const className =
                "group flex items-center justify-between px-5 py-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all";

              const inner = (
                <>
                  <div>
                    <span className="text-sm font-medium text-foreground">{action.label}</span>
                    <span className="text-xs text-muted-foreground ml-2">— {action.sub}</span>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </>
              );

              return action.href ? (
                <a key={action.label} href={action.href} className={className}>
                  {inner}
                </a>
              ) : (
                <Link key={action.label} href={action.to!} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
