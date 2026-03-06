const experiences = [
  {
    role: "Senior Frontend Architect",
    company: "Information Kerala Mission",
    duration: "Jan 2025 — Present",
    achievements: [
      "Architected microfrontend system using Module Federation enabling 8+ teams to deploy independently",
      "Supporting 10,000+ concurrent users across government offices",
      "Leading KSmart Digital Governance Platform serving 15M+ citizens with 200+ government services",
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "Module Federation", "RTK Query"],
  },
  {
    role: "Founder",
    company: "RELAYET",
    duration: "2025 — Present",
    achievements: [
      "Live in production with Okkashi Cake Cafe processing 20+ orders monthly 24/7 automated",
      "AI-powered ordering & appointment automation across WhatsApp, Instagram, Telegram",
      "Expanding to salons and clinics (Q2 2025)",
    ],
    tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Next.js", "OpenAI GPT-4"],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        💼 Experience
      </h2>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-foreground" style={{ fontSize: "1.25em", fontWeight: 600, marginBottom: "4px" }}>
            {exp.role} @ {exp.company}
          </h3>
          <p className="text-muted-foreground mb-2">
            <strong>Duration:</strong> {exp.duration}
          </p>
          <ul style={{ paddingLeft: "2em", marginBottom: "8px" }}>
            {exp.achievements.map((a, j) => (
              <li key={j} className="text-foreground" style={{ marginTop: "0.25em" }}>{a}</li>
            ))}
          </ul>
          <p>
            <span className="text-muted-foreground">Technologies: </span>
            {exp.tech.map((t) => (
              <code key={t} className="font-mono text-sm px-1.5 py-0.5 rounded-md bg-gh-code mr-1 text-foreground">
                {t}
              </code>
            ))}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
