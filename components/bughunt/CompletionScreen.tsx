"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Lightbulb, SkipForward, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

interface CompletionScreenProps {
  startTime: number;
  completedAt: number;
  solvedCount: number;
  skippedCount: number;
  totalHints: number;
  onReset: () => void;
}

export function CompletionScreen({ startTime, completedAt, solvedCount, skippedCount, totalHints, onReset }: CompletionScreenProps) {
  const totalTime = Math.round((completedAt - startTime) / 1000);
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  useEffect(() => {
    // Big celebration
    const duration = 2000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#00e639', '#ffb000', '#00e5ff'] });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#00e639', '#ffb000', '#a855f7'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="rounded-lg border border-primary/40 bg-card p-8 md:p-12 text-center border-glow-green"
    >
      <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary text-glow-green mb-2">
        All Bugs Fixed!
      </h2>
      <p className="text-muted-foreground mb-8">
        {solvedCount === 4
          ? "Perfect score! You're a debugging master. 🏆"
          : `You completed all challenges. ${skippedCount} skipped, ${solvedCount} solved.`}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
        <div className="rounded border border-border p-4 bg-muted/30">
          <Clock className="w-5 h-5 text-secondary mx-auto mb-1" />
          <p className="text-2xl font-mono font-bold text-foreground">{minutes}:{seconds.toString().padStart(2, '0')}</p>
          <p className="text-xs text-muted-foreground">Time</p>
        </div>
        <div className="rounded border border-border p-4 bg-muted/30">
          <Lightbulb className="w-5 h-5 text-secondary mx-auto mb-1" />
          <p className="text-2xl font-mono font-bold text-foreground">{totalHints}</p>
          <p className="text-xs text-muted-foreground">Hints</p>
        </div>
        <div className="rounded border border-border p-4 bg-muted/30">
          <SkipForward className="w-5 h-5 text-secondary mx-auto mb-1" />
          <p className="text-2xl font-mono font-bold text-foreground">{skippedCount}</p>
          <p className="text-xs text-muted-foreground">Skips</p>
        </div>
      </div>

      {/* Certificate */}
      <div className="rounded border border-dashed border-primary/30 p-6 mb-6 bg-primary/5 max-w-sm mx-auto">
        <p className="font-mono text-xs text-muted-foreground mb-1">CERTIFICATE OF DEBUGGING</p>
        <p className="font-bold text-lg text-primary">🎓 Bug Hunter</p>
        <p className="text-sm text-muted-foreground mt-1">
          Successfully debugged Portfolio.exe in {minutes}m {seconds}s
        </p>
      </div>

      <Button onClick={onReset} variant="outline" className="font-mono text-xs">
        <RotateCcw className="w-3 h-3 mr-1" /> Reset & Play Again
      </Button>
    </motion.div>
  );
}
