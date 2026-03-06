"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fireConfetti } from '../BugSection';
import { Loader2 } from 'lucide-react';

interface APIBugProps {
  onSolve: () => void;
}

export function APIBugLocked({ onSolve }: APIBugProps) {
  const [url, setUrl] = useState('/api/experiance');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('404 Not Found: /api/experiance');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleFetch = () => {
    const cleaned = url.trim().toLowerCase();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (cleaned === '/api/experience') {
        fireConfetti();
        onSolve();
      } else {
        setLoading(false);
        setError(`404 Not Found: ${url}`);
      }
    }, 800);
  };

  return (
    <div className="space-y-4">
      {/* Loading spinner */}
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <Loader2 className="w-10 h-10 text-muted-foreground animate-spin" />
        <p className="text-sm font-mono text-muted-foreground">Fetching skills data...</p>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded border border-destructive/30 bg-destructive/5 p-3 font-mono text-xs">
          <p className="text-destructive">❌ {error}</p>
          <p className="text-muted-foreground mt-1">GET request failed. Check the endpoint URL.</p>
        </div>
      )}

      {/* Network panel */}
      <div className="code-editor p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono border-b border-border pb-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-secondary/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span>Network — Fix the API endpoint</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-sm flex-wrap">
          <span className="text-terminal-cyan">GET</span>
          <Input
            value={url}
            onChange={e => { setUrl(e.target.value); setError(''); }}
            onKeyDown={e => e.key === 'Enter' && handleFetch()}
            className="flex-1 min-w-[200px] h-8 text-sm font-mono bg-background border-primary/30 text-primary"
          />
          <Button
            onClick={handleFetch}
            size="sm"
            disabled={loading}
            className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/80"
          >
            {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Send ▶'}
          </Button>
        </div>
      </div>
    </div>
  );
}

const experience = [
  {
    period: '2024 - Present',
    title: '🚀 RELAYET Founder & Product Engineer',
    company: '',
    points: [
      'Building AI-powered automation for local businesses',
      'Bootstrapped product from 0→1',
      'Live customers processing real orders',
      'Fundraising for expansion',
      'Seeking co-founder for scale',
    ],
    tech: 'Node.js, Next.js, TypeScript, AI APIs',
    status: 'Scaling to new industries (salons, clinics)',
  },
  {
    period: 'Jan 2025 - Present',
    title: '🏢 Senior Frontend Architect & KSmart Digital Governance',
    company: 'Information Kerala Mission (Government of Kerala)',
    points: [
      'Leading KSuite Microfrontend Architecture for government office workflow platform',
      'Architecting KSmart Digital Governance Platform - India\'s largest citizen services platform',
      '15M+ registered users serving multiple state departments and universities',
      '200+ government services accessible through the platform',
      '8+ teams deploying independently via Module Federation architecture',
      'Led architecture for 3 core modules in KSmart',
      'Published NPM component library (50+ components, 8 teams)',
      '40% performance improvement (3.2s → 1.9s load time)',
      '70% reduction in API calls via intelligent caching',
      '60% reduction in coupling via microservices',
      'Impact: 10,000+ concurrent users across government offices',
    ],
    tech: 'React, Next.js, TypeScript, Redux Toolkit, Microfrontends, Microservices',
    keyLearning: 'Mastered building systems at massive scale for government digital transformation. Realized I wanted to build my own products, not just architect for others.',
  }
];

const education = [
  {
    degree: 'Bachelor\'s Degree in Computer Applications',
    school: 'University of Calicut',
    period: '2018 - 2021',
  },
];

const achievements = [
  '✅ Leading microfrontend architecture for Kerala government\'s digital services',
  '✅ Published NPM library used by 8+ production teams',
  '✅ Built systems serving 15M+ users at scale',
  '✅ AI-augmented workflow: 3-5x faster shipping speed',
  '✅ Employee Recognition Award (Kiebot)',
  '✅ Currently building revenue-generating product (RELAYET)',
];

export function APIBugUnlocked() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-primary font-mono mb-4">🚀 MY JOURNEY</h3>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary/30 pl-4">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-sm text-foreground">{exp.title}</h4>
                <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
              </div>
              {exp.company && (
                <p className="text-xs text-secondary font-mono mb-2">{exp.company}</p>
              )}
              <ul className="space-y-1 mb-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                    • {point}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-mono text-primary/70">
                <span className="font-bold">Stack:</span> {exp.tech}
              </p>
              {exp.keyLearning && (
                <p className="text-xs italic text-secondary mt-2 bg-secondary/10 p-2 rounded">
                  💡 {exp.keyLearning}
                </p>
              )}
              {exp.status && (
                <p className="text-xs text-terminal-cyan mt-2">
                  <span className="font-bold">Status:</span> {exp.status}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-secondary font-mono mb-3">🎓 EDUCATION</h3>
        {education.map((edu, idx) => (
          <div key={idx}>
            <p className="font-bold text-sm">{edu.degree}</p>
            <p className="text-xs text-muted-foreground">{edu.school} | {edu.period}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold text-destructive font-mono mb-3">🏆 KEY ACHIEVEMENTS</h3>
        <ul className="space-y-1">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="text-xs text-foreground">{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border pt-4">
        <h4 className="font-bold text-sm text-primary mb-2">💭 CAREER PHILOSOPHY</h4>
        <p className="text-xs leading-relaxed text-muted-foreground mb-2">
          I've gone from: <span className="font-bold">Junior developer → Senior architect → Entrepreneur</span>
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          The pattern: Each role taught me something, but I kept wanting more ownership, creative freedom, and direct impact. Now I'm building RELAYET while still architecting government platforms. Best of both worlds: stability + entrepreneurial growth.
        </p>
      </div>
    </div>
  );
}
