import { motion } from "framer-motion";

export function Hook() {
  return (
    <section id="hook" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            I built 3 different portfolios.{" "}
            <span className="text-primary">Here's why.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Different audiences need different experiences. Developers want terminal
            interfaces. Recruiters want quick scans. Some people want to explore
            interactively.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            So instead of one generic portfolio, I built three tailored experiences.{" "}
            <span className="text-foreground font-medium">Pick the one that fits you.</span>
          </p>
          <p className="mt-6 text-sm font-mono text-primary/70 tracking-wide">
            ( This is product thinking in action. )
          </p>
        </motion.div>
      </div>
    </section>
  );
}
