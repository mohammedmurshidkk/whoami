import { useState, useEffect, useCallback } from 'react';

export type BugStatus = 'locked' | 'unlocked' | 'skipped';

export interface BugState {
  status: BugStatus;
  hintsUsed: number;
  solvedAt?: number;
}

export interface ProgressState {
  bugs: Record<number, BugState>;
  startTime: number;
  completedAt?: number;
}

const STORAGE_KEY = 'bug-hunt-progress';

const defaultState: ProgressState = {
  bugs: {
    1: { status: 'locked', hintsUsed: 0 },
    2: { status: 'locked', hintsUsed: 0 },
    3: { status: 'locked', hintsUsed: 0 },
    4: { status: 'locked', hintsUsed: 0 },
  },
  startTime: 0, // Will be set on first load
};

export function useBugProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === 'undefined') return { ...defaultState, startTime: Date.now() };
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    // Only set startTime on first load (new session)
    return { ...defaultState, startTime: Date.now() };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress]);

  const solveBug = useCallback((bugId: number) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        bugs: {
          ...prev.bugs,
          [bugId]: { ...prev.bugs[bugId], status: 'unlocked' as BugStatus, solvedAt: Date.now() },
        },
      };
      const allDone = Object.values(updated.bugs).every(b => b.status !== 'locked');
      if (allDone && !prev.completedAt) updated.completedAt = Date.now();
      return updated;
    });
  }, []);

  const skipBug = useCallback((bugId: number) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        bugs: {
          ...prev.bugs,
          [bugId]: { ...prev.bugs[bugId], status: 'skipped' as BugStatus, solvedAt: Date.now() },
        },
      };
      const allDone = Object.values(updated.bugs).every(b => b.status !== 'locked');
      if (allDone && !prev.completedAt) updated.completedAt = Date.now();
      return updated;
    });
  }, []);

  const useHint = useCallback((bugId: number) => {
    setProgress(prev => ({
      ...prev,
      bugs: {
        ...prev.bugs,
        [bugId]: { ...prev.bugs[bugId], hintsUsed: prev.bugs[bugId].hintsUsed + 1 },
      },
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultState, startTime: Date.now() });
  }, []);

  const solvedCount = Object.values(progress.bugs).filter(b => b.status === 'unlocked').length;
  const skippedCount = Object.values(progress.bugs).filter(b => b.status === 'skipped').length;
  const totalHints = Object.values(progress.bugs).reduce((sum, b) => sum + b.hintsUsed, 0);
  const allComplete = Object.values(progress.bugs).every(b => b.status !== 'locked');

  return {
    progress,
    solveBug,
    skipBug,
    useHint,
    resetProgress,
    solvedCount,
    skippedCount,
    totalHints,
    allComplete,
  };
}
