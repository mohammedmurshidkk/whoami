import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Bug, FileText, Clock, ArrowRight } from "lucide-react";

const experiences = [
  {
    to: "/terminal",
    icon: Terminal,
    emoji: "🖥️",
    title: "Terminal",
    description: "Command-line style. Type commands to explore my work, skills, and projects.",
    audience: ["Developers", "CLI enthusiasts", "Terminal lovers"],
    time: "5–10 min",
    accent: "primary" as const,
  },
  {
    to: "/bughunt",
    icon: Bug,
    emoji: "🐛",
    title: "Bug Hunt",
    description: "Interactive game. Fix bugs to unlock my story, skills, and experience.",
    audience: ["Recruiters", "Interactive folks", "Problem solvers"],
    time: "3–7 min",
    accent: "secondary" as const,
  },
  {
    to: "/readme",
    icon: FileText,
    emoji: "📄",
    title: "README",
    description: "GitHub README style. Clean, scannable documentation of everything.",
    audience: ["Quick overview", "Easy scanning", "Familiar format"],
    time: "2–5 min",
    accent: "accent" as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ExperienceCards() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
        >
          Choose your experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.to} variants={cardVariants}>
              <Link
                href={exp.to}
                className="group block h-full rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="text-4xl mb-4">{exp.emoji}</div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {exp.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Best for
                  </p>
                  <ul className="space-y-1">
                    {exp.audience.map((a) => (
                      <li key={a} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={14} />
                    {exp.time}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Launch <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
