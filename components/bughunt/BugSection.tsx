"use client";

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, CheckCircle2, SkipForward, Lightbulb, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BugStatus } from '@/hooks/useBugProgress';
import confetti from 'canvas-confetti';

interface BugSectionProps {
  bugId: number;
  title: string;
  difficulty: string;
  status: BugStatus;
  hint: string;
  explanation: string;
  onSkip: () => void;
  onUseHint: () => void;
  hintsUsed: number;
  lockedContent: ReactNode;
  unlockedContent: ReactNode;
}

export function BugSection({
  bugId,
  title,
  difficulty,
  status,
  hint,
  explanation,
  onSkip,
  onUseHint,
  hintsUsed,
  lockedContent,
  unlockedContent,
}: BugSectionProps) {
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleHint = () => {
    setShowHint(true);
    onUseHint();
  };

  const isLocked = status === 'locked';
  const isSkipped = status === 'skipped';
  const isUnlocked = status === 'unlocked';

  return (
    <motion.section
      id={`bug-${bugId}`}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: bugId * 0.1 }}
    >
      <div className={`relative rounded-lg border p-6 md:p-8 transition-all duration-500 ${
        isLocked
          ? 'border-destructive/40 bg-card glitch-overlay animate-flicker'
          : isSkipped
          ? 'border-secondary/40 bg-card'
          : 'border-primary/40 bg-card border-glow-green'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            {isLocked ? (
              <Bug className="w-6 h-6 text-destructive animate-pulse" />
            ) : isUnlocked ? (
              <CheckCircle2 className="w-6 h-6 text-primary" />
            ) : (
              <SkipForward className="w-6 h-6 text-secondary" />
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-mono">
                <span className="text-muted-foreground">Bug #{bugId}:</span>{' '}
                <span className={isLocked ? 'text-destructive' : 'text-primary'}>{title}</span>
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                  difficulty === 'Easy'
                    ? 'border-primary/30 text-primary'
                    : difficulty === 'Medium'
                    ? 'border-secondary/30 text-secondary'
                    : 'border-destructive/30 text-destructive'
                }`}>
                  {difficulty}
                </span>
                {isUnlocked && (
                  <span className="text-xs font-mono text-primary">✓ SOLVED</span>
                )}
                {isSkipped && (
                  <span className="text-xs font-mono text-secondary">⏭ SKIPPED</span>
                )}
              </div>
            </div>
          </div>

          {isLocked && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleHint}
                className="font-mono text-xs border-secondary/30 text-secondary hover:bg-secondary/10"
              >
                <Lightbulb className="w-3 h-3 mr-1" />
                Hint
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onSkip}
                className="font-mono text-xs border-muted-foreground/30 text-muted-foreground hover:bg-muted"
              >
                Skip
              </Button>
            </div>
          )}
        </div>

        {/* Hint */}
        <AnimatePresence>
          {showHint && isLocked && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="flex items-start gap-2 mb-4 p-3 rounded border border-secondary/20 bg-secondary/5">
                <Lightbulb className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <p className="text-sm font-mono text-secondary">{hint}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <AnimatePresence mode="wait">
          {isLocked ? (
            <motion.div key="locked" exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
              {lockedContent}
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Explanation */}
              {!isSkipped && (
                <div className="mb-6 p-3 rounded border border-primary/20 bg-primary/5">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="flex items-center gap-2 text-sm font-mono text-primary w-full text-left"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    What was the bug?
                    <span className="ml-auto text-xs">{showExplanation ? '▲' : '▼'}</span>
                  </button>
                  <AnimatePresence>
                    {showExplanation && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-sm text-muted-foreground mt-2 overflow-hidden"
                      >
                        {explanation}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              )}
              {unlockedContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export function fireConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#00e639', '#ffb000', '#00e5ff', '#a855f7'],
  });
}
