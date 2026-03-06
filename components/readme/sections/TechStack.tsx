import ShieldBadge from "../ShieldBadge";

const techData = {
  "Frontend": [
    { label: "React", color: "#61DAFB", proficiency: "Expert — 4+ years" },
    { label: "Next.js", color: "#000000", proficiency: "Expert — 3+ years" },
    { label: "TypeScript", color: "#3178C6", proficiency: "Expert — 4+ years" },
    { label: "Redux Toolkit", color: "#764ABC", proficiency: "Expert — 3+ years" },
    { label: "TailwindCSS", color: "#06B6D4", proficiency: "Expert — 3+ years" },
  ],
  "Backend": [
    { label: "Node.js", color: "#339933", proficiency: "Expert — 5+ years" },
    { label: "Express", color: "#000000", proficiency: "Expert — 4+ years" },
    { label: "PostgreSQL", color: "#4169E1", proficiency: "Expert — 4+ years" },
    { label: "TypeScript", color: "#3178C6", proficiency: "Expert — 4+ years" },
    { label: "REST API", color: "#FF6C37", proficiency: "Expert" },
  ],
  "AI & Tools": [
    { label: "OpenAI", color: "#412991", proficiency: "Expert" },
    { label: "Claude Code", color: "#8B5CF6", proficiency: "Expert" },
    { label: "GitHub Copilot", color: "#000000", proficiency: "Expert" },
    { label: "Cursor IDE", color: "#000000", proficiency: "Advanced" },
  ],
  "Infrastructure": [
    { label: "AWS", color: "#FF9900", proficiency: "Advanced" },
    { label: "Docker", color: "#2496ED", proficiency: "Advanced" },
    { label: "Git", color: "#F05032", proficiency: "Expert" },
    { label: "GitHub Actions", color: "#2088FF", proficiency: "Advanced" },
  ],
};

const TechStack = () => {
  return (
    <section id="tech-stack">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        🛠️ Tech Stack
      </h2>
      {Object.entries(techData).map(([category, badges]) => (
        <div key={category} className="mb-4">
          <p className="mb-2"><strong>{category}</strong></p>
          <p className="flex flex-wrap">
            {badges.map((b) => (
              <ShieldBadge key={b.label} label={b.label} color={b.color} proficiency={b.proficiency} />
            ))}
          </p>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
