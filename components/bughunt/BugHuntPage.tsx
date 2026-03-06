"use client";

import { motion } from 'framer-motion';
import { Terminal, Bug } from 'lucide-react';
import { useBugProgress } from '@/hooks/useBugProgress';
import { ProgressTracker } from './ProgressTracker';
import { BugSection } from './BugSection';
import { CSSBugLocked, CSSBugUnlocked } from './bugs/CSSBug';
import { JSBugLocked, JSBugUnlocked } from './bugs/JSBug';
import { APIBugLocked, APIBugUnlocked } from './bugs/APIBug';
import { CipherBugLocked, CipherBugUnlocked } from './bugs/CipherBug';
import { CompletionScreen } from './CompletionScreen';

const BugHuntPage = () => {
  const {
    progress,
    solveBug,
    skipBug,
    useHint,
    resetProgress,
    solvedCount,
    skippedCount,
    totalHints,
    allComplete,
  } = useBugProgress();

  return (
    <div className="min-h-screen bg-background text-foreground bughunt-container">
      <ProgressTracker bugs={progress.bugs} solvedCount={solvedCount} />

      <div className="max-w-4xl mx-auto px-4 pt-20 pb-16 space-y-12">
        {/* Hero */}
        <motion.header
          className="text-center py-12 md:py-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">v1.0.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4">
            <span className="text-primary text-glow-green">Portfolio</span>
            <span className="text-destructive">.exe</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            has encountered{' '}
            <span className="text-destructive font-mono font-bold">
              {4 - solvedCount - skippedCount} error{4 - solvedCount - skippedCount !== 1 ? 's' : ''}
            </span>
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mt-4">
            Hey! My portfolio has some bugs <Bug className="w-4 h-4 inline text-destructive" />{' '}
            Think you can fix them and unlock my info?
          </p>
        </motion.header>

        {/* Bug Sections */}
        <BugSection
          bugId={1}
          title="About Me & What I'm Building"
          difficulty="Easy"
          status={progress.bugs[1].status}
          hint="The text is there… you just can't see it 👀"
          explanation="This is a classic CSS visibility bug — white text on a white background. In real projects, this can happen with incorrect theme tokens, inherited colors, or missing contrast checks."
          onSkip={() => skipBug(1)}
          onUseHint={() => useHint(1)}
          hintsUsed={progress.bugs[1].hintsUsed}
          lockedContent={<CSSBugLocked onSolve={() => solveBug(1)} />}
          unlockedContent={<CSSBugUnlocked />}
        />

        <BugSection
          bugId={2}
          title="My Current Product (RELAYET)"
          difficulty="Medium"
          status={progress.bugs[2].status}
          hint="Check the console… something's not quite equal 🤔"
          explanation="Using = (assignment) instead of === (strict equality) in a conditional is one of the most common JavaScript bugs. It always evaluates to truthy, breaking filter logic."
          onSkip={() => skipBug(2)}
          onUseHint={() => useHint(2)}
          hintsUsed={progress.bugs[2].hintsUsed}
          lockedContent={<JSBugLocked onSolve={() => solveBug(2)} />}
          unlockedContent={<JSBugUnlocked />}
        />

        <BugSection
          bugId={3}
          title="Past Projects & Journey"
          difficulty="Medium"
          status={progress.bugs[3].status}
          hint="404 Not Found… look closely at the URL spelling 👀"
          explanation="A simple typo in an API endpoint (/api/experiance vs /api/experience) causes a 404. One character is wrong. In production, typos in URLs remain a surprisingly common source of bugs."
          onSkip={() => skipBug(3)}
          onUseHint={() => useHint(3)}
          hintsUsed={progress.bugs[3].hintsUsed}
          lockedContent={<APIBugLocked onSolve={() => solveBug(3)} />}
          unlockedContent={<APIBugUnlocked />}
        />

        <BugSection
          bugId={4}
          title="Contact & Opportunities"
          difficulty="Hard"
          status={progress.bugs[4].status}
          hint="Sometimes the answer is right in front of you… just shifted 🔐"
          explanation="ROT13 is a simple letter substitution cipher that shifts each letter 13 positions. It's commonly used to obscure spoilers online and is a fun introduction to cryptography."
          onSkip={() => skipBug(4)}
          onUseHint={() => useHint(4)}
          hintsUsed={progress.bugs[4].hintsUsed}
          lockedContent={<CipherBugLocked onSolve={() => solveBug(4)} />}
          unlockedContent={<CipherBugUnlocked />}
        />

        {/* Completion */}
        {allComplete && progress.completedAt && (
          <CompletionScreen
            startTime={progress.startTime}
            completedAt={progress.completedAt}
            solvedCount={solvedCount}
            skippedCount={skippedCount}
            totalHints={totalHints}
            onReset={resetProgress}
          />
        )}

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-xs font-mono text-muted-foreground">
            <span className="text-primary">$</span> Built with bugs, on purpose. © {new Date().getFullYear()}
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

        .bughunt-container {
          --background: 220 20% 4%;
          --foreground: 120 10% 85%;
          --card: 220 18% 8%;
          --card-foreground: 120 10% 85%;
          --popover: 220 18% 8%;
          --popover-foreground: 120 10% 85%;
          --primary: 142 100% 45%;
          --primary-foreground: 220 20% 4%;
          --secondary: 40 100% 50%;
          --secondary-foreground: 220 20% 4%;
          --muted: 220 15% 15%;
          --muted-foreground: 220 10% 50%;
          --accent: 40 100% 50%;
          --accent-foreground: 220 20% 4%;
          --destructive: 0 80% 55%;
          --destructive-foreground: 0 0% 100%;
          --border: 220 15% 18%;
          --input: 220 15% 18%;
          --ring: 142 100% 45%;
          --terminal-green: 142 100% 45%;
          --terminal-amber: 40 100% 50%;
          --terminal-red: 0 80% 55%;
          --terminal-cyan: 185 100% 50%;
          --terminal-purple: 270 80% 65%;
          
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          font-family: 'Space Grotesk', sans-serif;
        }

        .bughunt-container code, 
        .bughunt-container pre, 
        .bughunt-container .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .text-glow-green {
          text-shadow: 0 0 10px hsl(142 100% 45% / 0.6), 0 0 30px hsl(142 100% 45% / 0.3);
        }
        .text-glow-amber {
          text-shadow: 0 0 10px hsl(40 100% 50% / 0.6), 0 0 30px hsl(40 100% 50% / 0.3);
        }
        .border-glow-green {
          box-shadow: 0 0 8px hsl(142 100% 45% / 0.3), inset 0 0 8px hsl(142 100% 45% / 0.05);
        }
        .border-glow-amber {
          box-shadow: 0 0 8px hsl(40 100% 50% / 0.3), inset 0 0 8px hsl(40 100% 50% / 0.05);
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.8; }
          94% { opacity: 1; }
          96% { opacity: 0.6; }
          97% { opacity: 1; }
        }

        .animate-flicker {
          animation: flicker 4s ease-in-out infinite;
        }

        .glitch-overlay {
          position: relative;
          overflow: hidden;
        }

        .glitch-overlay::after {
          content: '';
          position: absolute;
          top: -10%;
          left: 0;
          width: 100%;
          height: 5px;
          background: hsl(142 100% 45% / 0.15);
          animation: scanline 3s linear infinite;
          pointer-events: none;
        }

        .code-editor {
          background: hsl(220 20% 6%);
          border: 1px solid hsl(220 15% 20%);
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          line-height: 1.6;
        }

        .code-editor textarea {
          background: transparent;
          color: hsl(120 10% 85%);
          caret-color: hsl(142 100% 45%);
          resize: none;
          outline: none;
          width: 100%;
          padding: 16px;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          border: none;
          tab-size: 2;
        }

        .text-terminal-cyan { color: hsl(185 100% 50%); }
        .text-terminal-purple { color: hsl(270 80% 65%); }
        
        /* Custom scrollbar */
        .bughunt-container ::-webkit-scrollbar {
          width: 6px;
        }
        .bughunt-container ::-webkit-scrollbar-track {
          background: hsl(220 20% 6%);
        }
        .bughunt-container ::-webkit-scrollbar-thumb {
          background: hsl(220 15% 25%);
          border-radius: 3px;
        }
        .bughunt-container ::-webkit-scrollbar-thumb:hover {
          background: hsl(142 100% 45% / 0.5);
        }
      `}</style>
    </div>
  );
};

export default BugHuntPage;
