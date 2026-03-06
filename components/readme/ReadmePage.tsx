"use client";

import { useTheme } from "next-themes";
import useScrollProgress from "@/hooks/readme/useScrollProgress";
import ThemeToggle from "./ThemeToggle";
import ForkRibbon from "./ForkRibbon";
import TableOfContents from "./TableOfContents";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import TechStack from "./sections/TechStack";
import FeaturedProjects from "./sections/FeaturedProjects";
import Experience from "./sections/Experience";
import GitHubStats from "./sections/GitHubStats";
import ContributionGraph from "./sections/ContributionGraph";
import TerminalBlock from "./sections/TerminalBlock";
import Footer from "./sections/Footer";

const ReadmePage = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");
  const scrollProgress = useScrollProgress();

  return (
    <div className="readme-container min-h-screen bg-background text-foreground">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <ThemeToggle isDark={isDark} toggle={toggle} />
      <ForkRibbon />

      <article className="markdown-body max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <TableOfContents />
        <Header />
        <AboutMe />
        <TechStack />
        <FeaturedProjects />
        <Experience />
        <GitHubStats />
        <ContributionGraph />
        <TerminalBlock />
        <Footer />
      </article>

      <style jsx global>{`
        .readme-container {
          --gh-code-bg: 210 17% 97%;
          --gh-link: 212 92% 45%;
          --gh-border: 214 20% 84%;
          --gh-badge-bg: 210 17% 95%;
          --gh-header-bg: 210 17% 98%;
          --gh-success: 137 55% 36%;
          --gh-warning: 40 94% 50%;
          --gh-scroll-progress: 212 92% 45%;
        }

        .dark .readme-container {
          --gh-code-bg: 215 25% 10%;
          --gh-link: 212 100% 67%;
          --gh-border: 215 19% 18%;
          --gh-badge-bg: 215 19% 15%;
          --gh-header-bg: 215 25% 10%;
          --gh-success: 137 55% 45%;
          --gh-warning: 40 94% 60%;
          --gh-scroll-progress: 212 100% 67%;
        }

        .markdown-body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        }

        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: hsl(var(--gh-scroll-progress));
          z-index: 9999;
          transition: width 0.1s linear;
        }

        .markdown-body pre {
          background-color: hsl(var(--gh-code-bg));
        }
        
        .markdown-body code {
          background-color: hsl(var(--gh-code-bg));
        }
      `}</style>
    </div>
  );
};

export default ReadmePage;
