"use client";

import { useState, useEffect } from "react";
import ShieldBadge from "../ShieldBadge";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `${CONTACT_INFO.title} | Building AI-powered businesses`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="header">
      <h1 className="text-foreground" style={{ fontSize: "2em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginBottom: "16px" }}>
        Hi there, I'm {CONTACT_INFO.name} 👋
      </h1>

      <p className="mb-4 flex flex-wrap gap-1">
        <ShieldBadge label="LinkedIn" color="#0A66C2" logo="in" href={SOCIAL_LINKS.linkedin} />
        <ShieldBadge label="GitHub" color="#181717" logo="GH" href={SOCIAL_LINKS.github} />
        <ShieldBadge label="Email" color="#EA4335" logo="@" href={SOCIAL_LINKS.email} />
        <ShieldBadge label="WhatsApp" color="#25D366" logo="💬" href={SOCIAL_LINKS.whatsapp} />
      </p>

      <blockquote className="markdown-body" style={{ padding: "0 1em", borderLeft: "0.25em solid hsl(var(--border))", color: "hsl(var(--muted-foreground))", marginBottom: "16px" }}>
        <p className="mb-0" style={{ minHeight: "1.5em" }}>
          {displayText}
          <span className="inline-block w-0.5 h-4 bg-foreground ml-0.5 align-middle animate-blink border-r-2 border-foreground" />
        </p>
      </blockquote>

      <p className="text-foreground">
        I don't just write code — I ship products that generate revenue. Currently scaling <strong>RELAYET</strong> (AI automation for local businesses). Previously architected government platforms serving 15M+ citizens. Framework-agnostic, AI-augmented, product-obsessed.
      </p>
    </section>
  );
};

export default Header;
