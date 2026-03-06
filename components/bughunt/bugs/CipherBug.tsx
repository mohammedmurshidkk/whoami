"use client";

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { fireConfetti } from '../BugSection';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

interface CipherBugProps {
  onSolve: () => void;
}

function rot(text: string, shift: number): string {
  return text.replace(/[a-zA-Z]/g, (c) => {
    const base = c >= 'a' ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
  });
}

const ORIGINAL_TEXT = "Thanks for debugging my portfolio! If you made it here, you've got problem-solving skills I respect. Now let's talk about working together.";
const ORIGINAL_EMAIL = CONTACT_INFO.email;
const ENCODED_TEXT = rot(ORIGINAL_TEXT, 13);
const ENCODED_EMAIL = rot(ORIGINAL_EMAIL, 13);

export function CipherBugLocked({ onSolve }: CipherBugProps) {
  const [shift, setShift] = useState(0);
  const decoded = rot(ENCODED_TEXT, shift);
  const decodedEmail = rot(ENCODED_EMAIL, shift);
  const isSolved = shift === 13;

  const handleSolve = () => {
    if (isSolved) {
      fireConfetti();
      onSolve();
    }
  };

  return (
    <div className="space-y-4">
      {/* Scrambled preview */}
      <div className="rounded border border-border p-6 bg-muted/30 text-center">
        <p className="text-xl font-mono break-all" style={{ letterSpacing: '2px' }}>
          {decoded}
        </p>
        <p className="text-sm font-mono text-muted-foreground mt-2 break-all">
          📧 {decodedEmail}
        </p>
      </div>

      {/* Decoder */}
      <div className="code-editor p-4 space-y-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono border-b border-border pb-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-secondary/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span>Cipher Decoder — ROT-N</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm font-mono">
            <span className="text-muted-foreground">Shift value:</span>
            <span className={`font-bold ${isSolved ? 'text-primary text-glow-green' : 'text-foreground'}`}>{shift}</span>
          </div>
          <Slider
            value={[shift]}
            onValueChange={([v]) => setShift(v)}
            min={0}
            max={25}
            step={1}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            <span>0</span>
            <span>25</span>
          </div>
        </div>

        <Button
          onClick={handleSolve}
          size="sm"
          disabled={!isSolved}
          className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/80 w-full"
        >
          {isSolved ? '🔓 Decode ▶' : '🔒 Keep shifting...'}
        </Button>
      </div>
    </div>
  );
}

export function CipherBugUnlocked() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-foreground leading-relaxed text-center max-w-2xl mx-auto">
        Thanks for debugging my portfolio! If you made it here, you've got problem-solving skills I respect. Now let's talk about working together.
      </p>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-primary font-mono text-center">🤝 I'M INTERESTED IN:</h3>
        
        <div className="space-y-3">
          <div className="rounded border border-primary/30 p-3 bg-primary/5">
            <p className="text-sm font-bold text-primary mb-1">✅ FUNDING PARTNERS</p>
            <p className="text-xs text-muted-foreground">
              Looking to scale RELAYET into salons, clinics, and beyond. Early-stage fundraising open now. Let's talk if you invest in AI/SaaS/automation.
            </p>
          </div>

          <div className="rounded border border-secondary/30 p-3 bg-secondary/5">
            <p className="text-sm font-bold text-secondary mb-1">✅ CO-FOUNDER OPPORTUNITIES</p>
            <p className="text-xs text-muted-foreground">
              Seeking: Sales/Business Development co-founder for RELAYET
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              You bring: Customer acquisition, partnerships, business development
            </p>
            <p className="text-xs text-muted-foreground">
              I bring: Technical execution, product development, AI integration
            </p>
          </div>

          <div className="rounded border border-terminal-cyan/30 p-3 bg-terminal-cyan/5">
            <p className="text-sm font-bold text-terminal-cyan mb-1">✅ PRODUCT ENGINEERING ROLES</p>
            <p className="text-xs text-muted-foreground">
              Startups building 0→1 products with creative freedom and ownership. Early-stage companies where I can shape the product, not just code specs. Equity + competitive salary for the right opportunity.
            </p>
          </div>

          <div className="rounded border border-destructive/30 p-3 bg-destructive/5">
            <p className="text-sm font-bold text-destructive mb-1">✅ CONSULTING / FRACTIONAL CTO</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• AI integration strategies</li>
              <li>• Rapid MVP development (1-2 weeks to launch)</li>
              <li>• Architecture design for scalable systems</li>
              <li>• Team leadership and mentorship</li>
            </ul>
          </div>

          <div className="rounded border border-terminal-purple/30 p-3 bg-terminal-purple/5">
            <p className="text-sm font-bold text-terminal-purple mb-1">✅ PARTNERSHIP OPPORTUNITIES</p>
            <p className="text-xs text-muted-foreground">
              Businesses in salons/clinics/F&B for RELAYET pilot programs. Strategic partnerships for market expansion. Integration opportunities with complementary platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-destructive font-mono">❌ NOT INTERESTED IN:</h3>
        <ul className="space-y-2 text-sm">
          <li>• Pure frontend developer roles (I'm a product engineer, not a React specialist)</li>
          <li>• Large enterprise maintenance work (I build new products, not legacy systems)</li>
          <li>• Roles where I just execute someone else's detailed spec (I need creative freedom)</li>
          <li>• Long hiring processes with 8 rounds of interviews (let's have a real conversation)</li>
        </ul>
      </div>

      <div className="border-t border-border pt-4 space-y-4">
        <h3 className="text-lg font-bold text-terminal-cyan font-mono">📞 LET'S CONNECT:</h3>
        
        <div className="grid gap-3 md:grid-cols-2">
          <a href={SOCIAL_LINKS.email} className="flex items-start gap-2 rounded border border-primary/30 p-3 text-primary hover:bg-primary/10 transition-colors text-xs font-mono">
            <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-bold">📧 Email</div>
              <div className="text-muted-foreground">{CONTACT_INFO.email}</div>
              <div className="text-xs text-muted-foreground">(Partnership, investment, proposals)</div>
            </div>
          </a>
          
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 rounded border border-secondary/30 p-3 text-secondary hover:bg-secondary/10 transition-colors text-xs font-mono">
            <Linkedin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-bold">💼 LinkedIn</div>
              <div className="text-muted-foreground">{CONTACT_INFO.linkedin.replace("https://", "")}</div>
              <div className="text-xs text-muted-foreground">(Professional networking)</div>
            </div>
          </a>

          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 rounded border border-terminal-cyan/30 p-3 text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors text-xs font-mono">
            <Github className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-bold">📱 WhatsApp</div>
              <div className="text-muted-foreground">{CONTACT_INFO.phone}</div>
              <div className="text-xs text-muted-foreground">(Quick chats, RELAYET demos)</div>
            </div>
          </a>

          <div className="flex items-start gap-2 rounded border border-border p-3 text-foreground hover:border-primary/30 transition-colors text-xs font-mono">
            <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-bold">📍 Location</div>
              <div className="text-muted-foreground">{CONTACT_INFO.location}</div>
              <div className="text-xs text-muted-foreground">(Remote, relocation open)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-secondary font-mono">💡 CONVERSATION STARTERS:</h3>
        <ul className="space-y-2 text-sm">
          <li>📌 <span className="font-bold">Interested in RELAYET?</span> Ask me for a live demo</li>
          <li>📌 <span className="font-bold">Want to discuss investment?</span> Let's talk about our roadmap and market opportunity</li>
          <li>📌 <span className="font-bold">Building a product?</span> I can help architect and ship your MVP fast</li>
          <li>📌 <span className="font-bold">Hiring for your startup?</span> Let's discuss how I can add value beyond just coding</li>
          <li className="text-xs text-muted-foreground">Response time: Usually within 24 hours (often much faster)</li>
        </ul>
      </div>

      <p className="text-xs text-muted-foreground font-mono text-center pt-4">
        <span className="text-primary">$</span> Let's build something great together.
      </p>
    </div>
  );
}
