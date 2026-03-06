"use client";

import { Bug, CheckCircle2, SkipForward } from 'lucide-react';
import { BugStatus } from '@/hooks/useBugProgress';

interface ProgressTrackerProps {
  bugs: Record<number, { status: BugStatus }>;
  solvedCount: number;
}

export function ProgressTracker({ bugs, solvedCount }: ProgressTrackerProps) {
  const doneCount = Object.values(bugs).filter(b => b.status !== 'locked').length;
  const pct = (doneCount / 4) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
          <span className="text-primary text-glow-green">DEBUG</span> {doneCount}/4
        </span>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
            style={{ width: `${pct}%`, boxShadow: '0 0 12px hsl(142 100% 45% / 0.5)' }}
          />
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(id => {
            const s = bugs[id]?.status;
            return (
              <div key={id} className="relative">
                {s === 'unlocked' ? (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                ) : s === 'skipped' ? (
                  <SkipForward className="w-5 h-5 text-secondary" />
                ) : (
                  <Bug className="w-5 h-5 text-destructive animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
