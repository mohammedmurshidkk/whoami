"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fireConfetti } from '../BugSection';

interface CSSBugProps {
  onSolve: () => void;
}

export function CSSBugLocked({ onSolve }: CSSBugProps) {
  const [showEditor, setShowEditor] = useState(false);
  const [colorValue, setColorValue] = useState('');
  const [error, setError] = useState('');

  const isValidDarkColor = (val: string): boolean => {
    const v = val.trim().toLowerCase();
    // Accept common dark colors, hex codes, named colors
    const lightColors = ['white', '#fff', '#ffffff', 'rgb(255,255,255)', '#fefefe'];
    if (lightColors.some(c => v.replace(/\s/g, '') === c.replace(/\s/g, ''))) return false;
    if (v.length === 0) return false;
    // Accept anything that's not white-ish
    return true;
  };

  const handleFix = () => {
    if (isValidDarkColor(colorValue)) {
      fireConfetti();
      onSolve();
    } else {
      setError('That color is still not visible! Try a darker color.');
    }
  };

  return (
    <div className="space-y-4">
      {/* Broken preview */}
      <div className="rounded border border-border p-6 bg-[hsl(0,0%,100%)]">
        <h3 className="text-2xl font-bold" style={{ color: 'white' }}>About Me</h3>
        <p className="mt-2" style={{ color: 'white' }}>
          I'm a passionate developer who loves solving problems and building things that matter.
          My journey started with curiosity about how things work under the hood...
        </p>
        <p className="mt-2" style={{ color: 'white' }}>
          Fun fact: I once spent 6 hours debugging only to find a missing semicolon.
        </p>
      </div>

      {!showEditor ? (
        <Button
          onClick={() => setShowEditor(true)}
          className="font-mono text-sm bg-destructive/20 border border-destructive/40 text-destructive hover:bg-destructive/30"
        >
          🔧 Fix This Bug
        </Button>
      ) : (
        <div className="code-editor p-4 space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono border-b border-border pb-2 mb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-secondary/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <span>DevTools — Styles</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <p className="text-muted-foreground">/* The text is invisible! */</p>
            <p><span className="text-terminal-cyan">.about-section</span> {'{'}</p>
            <div className="pl-4 flex items-center gap-2 flex-wrap">
              <span className="text-terminal-purple">color</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-destructive line-through">white</span>
              <span className="text-muted-foreground">→</span>
              <Input
                value={colorValue}
                onChange={e => { setColorValue(e.target.value); setError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleFix()}
                placeholder="#000000"
                className="w-32 h-7 text-sm font-mono bg-background border-primary/30 text-primary"
              />
              <span className="text-muted-foreground">;</span>
            </div>
            <p>{'}'}</p>
          </div>
          {error && <p className="text-xs text-destructive font-mono">{error}</p>}
          <Button
            onClick={handleFix}
            size="sm"
            className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/80"
          >
            Apply Fix ▶
          </Button>
        </div>
      )}
    </div>
  );
}

export function CSSBugUnlocked() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-primary font-mono">{'>'} whoami</h3>
        <div className="space-y-3 text-foreground">
          <p className="leading-relaxed">
            I'm not your typical developer. While most engineers optimize for clean code, I optimize for <span className="text-primary font-bold">shipping products that solve real problems and generate revenue</span>.
          </p>
          <p className="text-base font-bold text-secondary">🎯 CURRENT FOCUS: RELAYET</p>
          <p className="leading-relaxed text-sm">
            AI-powered ordering & appointment automation for local businesses
          </p>
          <ul className="space-y-1 text-sm font-mono ml-4">
            <li>• Live in production: <span className="text-primary">Okkashi Cake Cafe</span></li>
            <li>• Processing orders 24/7 via WhatsApp, Instagram, Telegram</li>
            <li>• AI recognizes images → pricing → invoice generation</li>
            <li>• Multi-language: Malayalam, English, Arabic, Hindi</li>
            <li>• Expanding to: Salons, Clinics (Q2 2025)</li>
            <li>• Status: Fundraising + seeking co-founder</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-secondary font-mono">📊 TRACK RECORD</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">→</span>
            <span><span className="font-bold">Government platform:</span> 15M+ users, 200+ services</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">→</span>
            <span><span className="font-bold">Enterprise HRMS:</span> 300+ staff, 5 hospitals, AI assistant</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">→</span>
            <span><span className="font-bold">Multi-location POS:</span> 5000+ daily transactions, 15+ locations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">→</span>
            <span><span className="font-bold">Booking platforms:</span> 1000+ monthly visitors</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-primary font-mono">🤖 MY SECRET WEAPON</h3>
        <p className="text-sm leading-relaxed">
          AI-augmented development using <span className="font-mono bg-muted px-1">Claude Code</span>, <span className="font-mono bg-muted px-1">Copilot</span>, <span className="font-mono bg-muted px-1">Cursor</span>
        </p>
        <p className="text-sm font-bold text-secondary">Result: Built RELAYET cafe plugin in 1 WEEK (normally 3-4 weeks)</p>
        <p className="text-sm">Ship products <span className="text-destructive font-bold">3-5x faster</span> than traditional development</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-terminal-cyan font-mono">💡 PHILOSOPHY</h3>
        <p className="text-sm leading-relaxed">
          <span className="font-bold">Framework-agnostic, product-obsessed, AI-augmented</span>
        </p>
        <p className="text-sm">React, Node, TypeScript — whatever ships the product fastest. The tech stack is a tool, not the goal.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-secondary font-mono">🎓 BACKGROUND</h3>
        <ul className="space-y-1 text-sm">
          <li>• 4+ years building scalable systems</li>
          <li>• BCA from University of Calicut</li>
          <li>• Self-taught entrepreneur mindset</li>
        </ul>
      </div>
    </div>
  );
}
