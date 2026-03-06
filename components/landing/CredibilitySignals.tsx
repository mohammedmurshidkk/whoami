import { motion } from "framer-motion";

const stats = [
  { icon: "📊", value: "15M+", label: "Users served" },
  { icon: "🤖", value: "AI", label: "Augmented workflow" },
  { icon: "🏛️", value: "Gov", label: "Scale systems" },
  { icon: "⚡", value: "3–5×", label: "Faster shipping" },
  { icon: "💼", value: "4+", label: "Years experience" },
  { icon: "🚀", value: "Live", label: "Product (RELAYET)" },
];

export function CredibilitySignals() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 max-w-xl mx-auto text-center"
          >
            <p className="text-muted-foreground italic leading-relaxed">
              "One of the most impressive features is its ability to recognize cake elements,
              weight, and pricing simply by sharing an image."
            </p>
            <footer className="mt-4 text-sm text-foreground font-medium">
              — Ashiq Okkashi,{" "}
              <span className="text-muted-foreground font-normal">
                Co-founder & Chief Chef, Okkashi Cake Cafe
              </span>
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
