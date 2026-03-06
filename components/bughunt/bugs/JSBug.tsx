"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { fireConfetti } from '../BugSection';

interface JSBugProps {
  onSolve: () => void;
}

const INITIAL_CODE = `function filterProjects(projects, category) {
  return projects.filter(project => {
    if (project.category = category) {
      return true;
    }
    return false;
  });
}`;

export function JSBugLocked({ onSolve }: JSBugProps) {
  const [code, setCode] = useState(INITIAL_CODE);
  const [error, setError] = useState('');
  const [showConsole, setShowConsole] = useState(true);

  const handleFix = () => {
    // Check if they changed = to === or ==
    if (code.includes('===') || (code.includes('==') && !code.includes('= category'))) {
      fireConfetti();
      onSolve();
    } else {
      setError('⚠ Bug still present. The filter is using assignment instead of comparison.');
    }
  };

  return (
    <div className="space-y-4">
      {/* Console error */}
      {showConsole && (
        <div className="rounded border border-destructive/30 bg-destructive/5 p-3 font-mono text-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-destructive">⚠ Console</span>
            <button onClick={() => setShowConsole(false)} className="text-muted-foreground hover:text-foreground">✕</button>
          </div>
          <p className="text-destructive">TypeError: Assignment in conditional expression</p>
          <p className="text-muted-foreground">at filterProjects (projects.js:3:25)</p>
          <p className="text-secondary mt-1">Hint: Did you mean to use === instead of =?</p>
        </div>
      )}

      {/* Code editor */}
      <div className="code-editor">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono border-b border-border px-4 py-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-secondary/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span>projects.js — Fix the bug</span>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 w-8 text-right pr-2 pt-4 font-mono text-xs text-muted-foreground select-none leading-[1.6]">
            {code.split('\n').map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <textarea
            value={code}
            onChange={e => { setCode(e.target.value); setError(''); }}
            className="pl-10 min-h-[150px] w-full"
            rows={code.split('\n').length + 1}
            spellCheck={false}
          />
        </div>
      </div>

      {error && <p className="text-xs text-destructive font-mono">{error}</p>}

      <Button
        onClick={handleFix}
        size="sm"
        className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/80"
      >
        Run Tests ▶
      </Button>
    </div>
  );
}

const projects = [
  {
    name: 'RELAYET',
    category: 'AI-Powered Automation',
    desc: 'AI-powered ordering & appointment automation for local businesses. Live in production at Okkashi Cake Cafe.',
    features: ['Multi-channel (WhatsApp, Instagram, Telegram, Web)', 'AI Image Recognition', 'Multi-language support', 'Auto Invoice Generation', 'Menu Management', 'Order Tracking'],
    tech: ['Node.js', 'TypeScript', 'Next.js', 'React', 'PostgreSQL', 'OpenAI GPT-4', 'Google Gemini'],
    github: '#',
    live: '#',
    status: 'LIVE IN PRODUCTION',
  },
];

export function JSBugUnlocked() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-primary font-mono">{'>'} RELAYET: MY CURRENT PRODUCT</h3>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-bold text-secondary mb-2">THE PROBLEM I'M SOLVING:</h4>
            <p className="text-sm leading-relaxed">
              Local businesses (cafes, salons, clinics) lose customers because they can't take orders/bookings 24/7, manual processes are slow and error-prone, and they're not on customer's preferred channels.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-primary mb-2">MY SOLUTION:</h4>
            <p className="text-sm leading-relaxed">
              AI agents that handle orders & bookings automatically via WhatsApp, Instagram, Telegram, and web — in customers' native languages.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-terminal-cyan mb-2">📊 CURRENT STATUS: ✅ LIVE IN PRODUCTION</h4>
            <ul className="space-y-1 text-sm font-mono">
              <li>• Customer: <span className="text-primary">Okkashi Cake Cafe</span> (all outlets)</li>
              <li>• Processing: 20+ orders monthly</li>
              <li>• Uptime: 24/7 automated operations</li>
              <li>• Zero human intervention needed</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-secondary mb-2">✅ ADVANCED FEATURES</h4>
            <ul className="space-y-1 text-sm">
              <li>• <span className="font-bold">Multi-channel:</span> WhatsApp, Instagram, Telegram, Web</li>
              <li>• <span className="font-bold">Multi-language:</span> Malayalam, English, Arabic, Hindi</li>
              <li>• <span className="font-bold">AI Image Recognition:</span> Share cake photo → AI suggests weight, pricing</li>
              <li>• <span className="font-bold">Auto Invoice Generation:</span> PDF invoices sent automatically</li>
              <li>• <span className="font-bold">Menu Management:</span> Dynamic menu updates across all channels</li>
              <li>• <span className="font-bold">Order Tracking:</span> Real-time status updates</li>
            </ul>
          </div>

          <div className="rounded border border-secondary/30 p-3 bg-secondary/5 text-sm">
            <p className="font-bold text-secondary mb-1">💬 REAL CUSTOMER TESTIMONIAL:</p>
            <p className="text-xs leading-relaxed italic">
              "We are using Relayet across all outlets of Okkashi Cake Cafe to manage our WhatsApp orders, and it has been extremely helpful for our business. The system runs 24/7, takes care of displaying our menu to customers, and even handles invoice printing seamlessly. One of the most impressive features is its ability to recognize cake elements, weight, and pricing simply by sharing an image. This feature has saved us a lot of time and made our order process much more efficient. Relayet has truly simplified our operations and enhanced our customer experience."
            </p>
            <p className="text-xs text-muted-foreground mt-2">— Ashiq Okkashi, Co-founder & Chief Chef, Okkashi Cake Cafe</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-primary mb-2">🛠️ TECH STACK:</h4>
            <div className="flex flex-wrap gap-1.5">
              {projects[0].tech.map(t => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-3">
            <p className="text-sm font-bold text-destructive">⚡ BUILT IN 1 WEEK</p>
            <p className="text-xs text-muted-foreground">
              Cafe plugin developed using AI-augmented workflow (Claude Code + Copilot + Cursor). Traditional timeline would be 3-4 weeks.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-bold text-secondary">INTERESTED IN:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">✅</span>
            <div>
              <span className="font-bold">Investment/Partnership opportunities</span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✅</span>
            <div>
              <span className="font-bold">Pilot programs</span> for salons/clinics
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✅</span>
            <div>
              <span className="font-bold">Co-founder discussions</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
