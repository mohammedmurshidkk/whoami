interface TOCItem {
  id: string;
  label: string;
}

const items: TOCItem[] = [
  { id: "header", label: "Introduction" },
  { id: "about", label: "About Me" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Featured Projects" },
  { id: "experience", label: "Experience" },
  { id: "github-stats", label: "GitHub Stats" },
  { id: "contributions", label: "Contribution Graph" },
  { id: "terminal", label: "Quick Commands" },
  { id: "blog", label: "Blog Posts" },
  { id: "connect", label: "Let's Connect" },
];

const TableOfContents = () => {
  return (
    <details className="border border-border rounded-md mb-6" open>
      <summary className="px-4 py-3 cursor-pointer text-foreground font-semibold text-sm select-none hover:bg-accent/50 transition-colors">
        📑 Table of Contents
      </summary>
      <nav className="px-4 pb-3">
        <ul style={{ paddingLeft: "1.5em", margin: 0 }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginTop: "4px" }}>
              <a
                href={`#${item.id}`}
                className="text-primary hover:underline text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
};

export default TableOfContents;
