import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Bug, FileText, Clock, ArrowRight, ExternalLink } from "lucide-react";

const experiences = [
  {
    to: "/terminal",
    emoji: "🖥️",
    title: "Terminal",
    description: "CLI-style exploration of my work and skills.",
    time: "5–10 min",
    external: true,
  },
  {
    to: "/bughunt",
    emoji: "🐛",
    title: "Bug Hunt",
    description: "Fix bugs to unlock my story interactively.",
    time: "3–7 min",
    external: true,
  },
  {
    to: "/readme",
    emoji: "📄",
    title: "README",
    description: "Clean, scannable GitHub-style documentation.",
    time: "2–5 min",
    external: true,
  },
];

export function Hero() {
  return (
    <section className="relative h-full flex flex-col items-center justify-center overflow-hidden pt-14">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 flex flex-col items-center">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
            Product Engineer & Entrepreneur
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-4">
            Mohammed Murshid
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Building{" "}
            <a
              // href="https://relayet.com"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              RELAYET
              <ExternalLink size={12} />
            </a>{" "}
            — AI automation for businesses.
            Previously built systems serving 15M+ government users.
            Ships 3–5× faster with AI-augmented workflow.
          </p>
        </motion.div>

        {/* Experience picker label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-xs text-muted-foreground mb-4 font-medium"
        >
          Choose how you'd like to explore ↓
        </motion.p>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full"
        >
          {experiences.map((exp) => (
            exp.external ? (
              <a
                key={exp.to}
                href={exp.to}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="text-2xl mb-2">{exp.emoji}</div>
                <h2 className="text-base font-bold text-foreground mb-1">
                  {exp.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock size={10} />
                    {exp.time}
                  </span>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Go <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            ) : (
              <Link
                key={exp.to}
                href={exp.to}
                className="group relative rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
              <div className="text-2xl mb-2">{exp.emoji}</div>
              <h2 className="text-base font-bold text-foreground mb-1">
                {exp.title}
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {exp.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock size={10} />
                  {exp.time}
                </span>
                <span className="flex items-center gap-0.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Go <ArrowRight size={12} />
                </span>
              </div>
              </Link>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
}
