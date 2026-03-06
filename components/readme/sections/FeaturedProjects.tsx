"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  demo?: string;
  source?: string;
}

const projects: Project[] = [
  {
    name: "RELAYET",
    tagline: "AI-Powered Business Automation Platform",
    description: "AI agents handling orders & appointments automatically across WhatsApp, Instagram, Telegram in native languages. Live in production with Okkashi Cake Cafe, processing 20+ orders monthly 24/7 with AI image recognition for products and auto invoicing.",
    tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "OpenAI GPT-4", "Google Gemini", "WhatsApp Business API"],
    features: [
      "Multi-Channel: WhatsApp, Instagram, Telegram, Web — all in one",
      "AI Image Recognition: Share photo → AI suggests weight, pricing",
      "Auto Invoicing: Generate & send PDF invoices automatically",
      "Multi-Language: Malayalam, English, Arabic, Hindi support",
      "24/7 Automation: No human intervention needed",
    ],
    demo: SOCIAL_LINKS.whatsapp,
    source: CONTACT_INFO.github,
  },
  {
    name: "Kerala Government Digital Platform",
    tagline: "India's Largest Citizen Services Ecosystem (15M+ users)",
    description: "Led architecture and development for Kerala's digital governance initiatives serving 15M+ citizens with 200+ government services. Built scalable microfrontend architecture enabling 8+ teams to deploy independently, supporting 10,000+ concurrent users across government offices.",
    tech: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Module Federation", "Microservices", "AWS"],
    features: [
      "15M+ registered citizens accessing 200+ government services",
      "Microfrontend architecture with Module Federation for 8+ independent teams",
      "10,000+ concurrent users across government offices",
      "40% performance improvement (3.2s → 1.9s page loads)",
      "70% reduction in API calls via intelligent caching",
      "60% reduction in coupling via microservices",
      "Published NPM component library with 50+ components enabling 25% faster delivery",
    ],
    source: CONTACT_INFO.github,
  },
];

const FeaturedProjects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        📁 Featured Projects
      </h2>
      <div className="space-y-2">
        {projects.map((project, i) => (
          <div key={project.name} className="border border-border rounded-md">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-center gap-2 w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors rounded-md"
            >
              <ChevronRight
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${openIndex === i ? "rotate-90" : ""}`}
              />
              <strong className="text-foreground">{project.name}</strong>
              <span className="text-muted-foreground">— {project.tagline}</span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 pt-0 border-t border-border">
                <h3 className="text-foreground" style={{ fontSize: "1.25em", fontWeight: 600, marginTop: "16px", marginBottom: "8px" }}>
                  Overview
                </h3>
                <p className="mb-4 text-foreground">{project.description}</p>

                <h3 className="text-foreground" style={{ fontSize: "1.25em", fontWeight: 600, marginBottom: "8px" }}>
                  Tech Stack
                </h3>
                <p className="mb-4">
                  {project.tech.map((t) => (
                    <code key={t} className="font-mono text-sm px-1.5 py-0.5 rounded-md bg-gh-code mr-1 text-foreground">
                      {t}
                    </code>
                  ))}
                </p>

                <h3 className="text-foreground" style={{ fontSize: "1.25em", fontWeight: 600, marginBottom: "8px" }}>
                  Key Features
                </h3>
                <ul style={{ paddingLeft: "2em", marginBottom: "16px" }}>
                  {project.features.map((f) => (
                    <li key={f} className="text-foreground" style={{ marginTop: "0.25em" }}>{f}</li>
                  ))}
                </ul>

                <h3 className="text-foreground" style={{ fontSize: "1.25em", fontWeight: 600, marginBottom: "8px" }}>
                  Links
                </h3>
                <p>
                  {project.demo && (
                    <a href={project.demo} className="text-primary hover:underline mr-4">🔗 Learn More</a>
                  )}
                  {project.source && (
                    <a href={project.source} className="text-primary hover:underline">📂 GitHub</a>
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
