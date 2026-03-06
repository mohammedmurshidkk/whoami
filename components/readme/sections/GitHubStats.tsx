const GitHubStats = () => {
  const stats = [
    { label: "Total Stars Earned", value: "1,247" },
    { label: "Total Commits (2025)", value: "892" },
    { label: "Total PRs", value: "156" },
    { label: "Total Issues", value: "43" },
    { label: "Contributed to", value: "28" },
  ];

  const languages = [
    { name: "TypeScript", pct: 42, color: "#3178C6" },
    { name: "JavaScript", pct: 25, color: "#F7DF1E" },
    { name: "Python", pct: 15, color: "#3776AB" },
    { name: "Go", pct: 10, color: "#00ADD8" },
    { name: "Other", pct: 8, color: "#8B8B8B" },
  ];

  return (
    <section id="github-stats">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        📊 GitHub Stats
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Stats card */}
        <div className="border border-border rounded-md p-4">
          <h3 className="text-foreground font-semibold mb-3 text-sm">GitHub Stats</h3>
          {stats.map((s) => (
            <div key={s.label} className="flex justify-between text-sm py-1">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="text-foreground font-semibold">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Languages card */}
        <div className="border border-border rounded-md p-4">
          <h3 className="text-foreground font-semibold mb-3 text-sm">Most Used Languages</h3>
          <div className="flex rounded-full overflow-hidden h-2 mb-3">
            {languages.map((l) => (
              <div key={l.name} style={{ width: `${l.pct}%`, backgroundColor: l.color }} />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-1.5 text-xs">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: l.color }} />
                <span className="text-foreground">{l.name}</span>
                <span className="text-muted-foreground">{l.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Streak card */}
      <div className="border border-border rounded-md p-4">
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-foreground">892</div>
            <div className="text-xs text-muted-foreground">Total Contributions</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-foreground">🔥 47</div>
            <div className="text-xs text-muted-foreground">Current Streak</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-foreground">112</div>
            <div className="text-xs text-muted-foreground">Longest Streak</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
