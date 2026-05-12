import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { ArrowLeft, FileText, FileDown, Award, ExternalLink } from "lucide-react";
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

  if (slug === "resume") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Resume & Certifications</h1>
              <p className="text-muted-foreground">Download my latest resume or view professional recognitions.</p>
            </div>

            <div className="grid gap-6">
              <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all group">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <FileText size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Professional Resume</h3>
                      <p className="text-sm text-muted-foreground">Latest version • PDF format</p>
                    </div>
                  </div>
                  <a
                    href="/resume.pdf"
                    download="Mohammed_Murshid_Resume.pdf"
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
                  >
                    <FileDown size={18} />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all group">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                      <Award size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Employee Recognition</h3>
                      <p className="text-sm text-muted-foreground">Kiebot Learning Solutions</p>
                    </div>
                  </div>
                  <Link
                    href="/certificates/employee-recognition"
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-semibold"
                  >
                    <ExternalLink size={18} />
                    View Certificate
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} /> Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
