import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { ArrowLeft } from "lucide-react";
import TerminalPage from "@/components/terminal/TerminalPage";
import BugHuntPage from "@/components/bughunt/BugHuntPage";
import ReadmePage from "@/components/readme/ReadmePage";
import { CONTACT_INFO, SEO_CONFIG } from "@/lib/constants";

const titles: Record<string, string> = {
  terminal: "Terminal Experience",
  bughunt: "Bug Hunt Experience",
  readme: "README Experience",
  resume: "Resume",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = titles[slug] || "Coming Soon";
  
  const descriptions: Record<string, string> = {
    terminal: "Experience my professional journey through an interactive Linux-style terminal. Command-line portfolio of Mohammed Murshid.",
    bughunt: "Help me debug my portfolio! An interactive game-like experience to explore my skills and projects.",
    readme: "A professional, GitHub-style README portfolio detailing my experience architecting 15M+ user systems.",
  };

  const metadata: Metadata = {
    title: title,
    description: descriptions[slug] || SEO_CONFIG.description,
    openGraph: {
      title: `${title} | ${CONTACT_INFO.name}`,
      description: descriptions[slug] || SEO_CONFIG.description,
      type: "website",
    },
  };

  if (slug === "terminal") {
    metadata.icons = {
      icon: "/favicon-terminal.svg",
    };
  } else if (slug === "bughunt") {
    metadata.icons = {
      icon: "/favicon-bughunt.ico",
    };
  } else if (slug === "readme") {
    metadata.icons = {
      icon: "/favicon-readme.ico",
    };
  }

  return metadata;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (slug === "terminal") {
    return <TerminalPage />;
  }

  if (slug === "bughunt") {
    return <BugHuntPage />;
  }

  if (slug === "readme") {
    return <ReadmePage />;
  }

  console.log('##### params', slug)
  const title = titles[slug] || "Coming Soon";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground">Coming soon.</p>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-primary hover:underline mt-4"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </div>
  );
}
