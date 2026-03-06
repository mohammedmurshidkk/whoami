"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

interface TerminalCommand {
  command: string;
  output: string[];
}

const commands: TerminalCommand[] = [
  {
    command: "$ cat about.txt",
    output: [
      "🔭 Currently building: RELAYET - AI-powered ordering & appointment automation",
      "🏢 Day job: Senior Frontend Architect at Information Kerala Mission (15M+ users)",
      "🤖 Superpower: AI-augmented development (3-5x faster shipping)",
      "💼 Experience: 4+ years building scalable systems across government, enterprise, retail",
      "🎯 Focus: Building products that generate revenue, not just GitHub stars",
      "🌱 Currently learning: Business development, fundraising, go-to-market strategies",
      `📫 Reach me: ${CONTACT_INFO.email}`,
    ],
  },
  {
    command: "$ ls projects/",
    output: [
      "drwxr-xr-x  relayet/             -- AI-powered business automation for cafes, salons, clinics",
      "drwxr-xr-x  ksmart/              -- Digital governance platform (15M+ users)",
      "-rw-r--r--  README.md            -- You are here!",
    ],
  },
  {
    command: '$ curl -X GET /api/contact',
    output: [
      "{",
      `  "email": "${CONTACT_INFO.email}",`,
      `  "github": "${CONTACT_INFO.github.replace("https://", "")}",`,
      `  "linkedin": "${CONTACT_INFO.linkedin.replace("https://", "")}",`,
      `  "whatsapp": "${CONTACT_INFO.phone}",`,
      '  "status": 200,',
      '  "message": "Scaling RELAYET, let\'s connect!"',
      "}",
    ],
  },
];

const TerminalBlock = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [animatingLines, setAnimatingLines] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);

  const runCommand = useCallback((index: number) => {
    if (isAnimating) return;
    if (activeIndex === index) {
      setActiveIndex(null);
      setAnimatingLines([]);
      return;
    }
    setActiveIndex(index);
    setAnimatingLines([]);
    setIsAnimating(true);

    const lines = commands[index].output;
    lines.forEach((line, i) => {
      setTimeout(() => {
        setAnimatingLines((prev) => [...prev, line]);
        if (i === lines.length - 1) setIsAnimating(false);
      }, (i + 1) * 80);
    });
  }, [activeIndex, isAnimating]);

  const copyCommand = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = commands[index].output.join("\n");
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="terminal" className="mt-6">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        🖥️ Quick Commands
      </h2>
      <div className="space-y-2">
        {commands.map((cmd, i) => (
          <div key={i}>
            <div
              className="relative group rounded-md bg-gh-code overflow-hidden cursor-pointer"
              onClick={() => runCommand(i)}
            >
              <pre className="p-4 font-mono text-sm text-foreground select-none">
                <code>{cmd.command}</code>
              </pre>
              <button
                onClick={(e) => copyCommand(i, e)}
                className="absolute top-2 right-2 p-1.5 rounded-md bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Copy output"
              >
                {copied === i ? (
                  <Check className="h-3.5 w-3.5 text-gh-success" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </button>
            </div>
            {activeIndex === i && animatingLines.length > 0 && (
              <div className="bg-gh-code rounded-b-md border-t border-border px-4 pb-4 pt-2 font-mono text-sm">
                {animatingLines.map((line, j) => (
                  <div key={j} className="text-gh-success" style={{ color: "hsl(var(--gh-success))" }}>
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TerminalBlock;
