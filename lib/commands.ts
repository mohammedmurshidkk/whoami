import { CONTACT_INFO } from "./constants";

export interface Project {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  details: string;
  link?: string;
  github?: string;
}

export const OWNER_NAME = CONTACT_INFO.name;
export const OWNER_HANDLE = CONTACT_INFO.handle;
export const OWNER_TITLE = CONTACT_INFO.title;

export const THEMES: Record<string, { primary: string; name: string }> = {
  purple: { primary: "#bf40ff", name: "Purple Haze" },
  green: { primary: "#00ff00", name: "Classic Green" },
  amber: { primary: "#ffb000", name: "Amber Glow" },
  matrix: { primary: "#00ff41", name: "Matrix" },
  cyan: { primary: "#00ffff", name: "Cyan Wave" },
};

export const PROJECTS: Project[] = [
  {
    name: "RELAYET",
    slug: "relayet",
    description: "AI-powered business automation platform for local businesses",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "React", "Tailwind", "OpenAI", "Google Gemini"],
    details: `AI automation that handles orders & bookings via WhatsApp, Instagram, Telegram, and web.
Live in production: Okkashi Cake Cafe (all outlets)
Processing 20+ orders monthly
24/7 automated operations
Multi-language: Malayalam, English, Arabic, Hindi
Image recognition for cakes → weight/pricing
Automated invoice generation
Status: Fundraising for scale`,
    link: "https://relayet.app",
  },
  {
    name: "Kiework HRMS",
    slug: "kiework",
    description: "AI-powered HR management system for hospitals",
    tech: ["Next.js", "Redux Toolkit", "OpenAI API", "WebSockets", "PostgreSQL"],
    details: `Enterprise HR platform serving 300+ staff across 5 hospitals
AI assistant for natural language queries
Mobile-first app with remote approvals
Attendance tracking and payroll integration
Real-time synchronization
Technologies: Next.js, Redux Toolkit, OpenAI API, WebSockets`,
  },
  {
    name: "TORCAP POS",
    slug: "torcap",
    description: "Enterprise point-of-sale system for retail",
    tech: ["Next.js", "Redux Toolkit", "Real-time sync", "PostgreSQL"],
    details: `5000+ daily transactions across 15+ Saudi locations
Bilingual (Arabic/English) - 45% adoption increase
Offline-first architecture with auto-sync
High performance and reliability at scale
Integrated inventory and sales analytics`,
  },
  {
    name: "AJJANAMANE Booking",
    slug: "ajjanamane",
    description: "Homestay booking platform with SSR optimization",
    tech: ["Next.js", "Material UI", "SEO", "PostgreSQL"],
    details: `1000+ monthly visitors
Optimized page load: 3.2s → 1.3s
70% reduction in API calls via caching
Server-side rendering for performance
Search and booking features`,
  },
];


export const SKILLS = {
  "AI-Powered Products": ["Natural language interfaces", "GPT-4 & Gemini", "Multi-channel automation", "Image recognition", "Voice-to-text systems"],
  "Scalable Web Apps": ["15M+ user systems", "Real-time WebSockets", "SSR & performance", "Microfrontend architecture", "Offline-first apps"],
  "Business Automation": ["Ordering systems", "Appointment booking", "CRM integrations", "Payment processing", "Invoice automation"],
  "Full-Stack": ["React, Next.js, TypeScript", "Node.js, Express", "PostgreSQL, Redis", "OpenAI API, Claude", "Docker, AWS, Vercel"],
};

export const EXPERIENCE = [
  {
    company: "Information Kerala Mission",
    role: "Senior Frontend Architect",
    duration: "2025 — Present",
    achievement: "Built microfrontend architecture serving 15M+ citizens across Kerala. 200+ government services, Module Federation, React microservices.",
  },
  {
    company: "RELAYET",
    role: "Founder & Product Engineer",
    duration: "2024 — Present",
    achievement: "Building AI automation for local businesses. Live in production. Scaling to multiple industries.",
  },
];

export const CONTACT = {
  email: CONTACT_INFO.email,
  linkedin: CONTACT_INFO.linkedin,
  whatsapp: CONTACT_INFO.phone,
  location: CONTACT_INFO.location,
};

export const ASCII_BANNER = `
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║  ███╗   ███╗ ██████╗ ██╗  ██╗ █████╗ ███╗   ███╗███╗   ███╗███████╗        ║
║  ████╗ ████║██╔═══██╗██║  ██║██╔══██╗████╗ ████║████╗ ████║██╔════╝        ║
║  ██╔████╔██║██║   ██║███████║███████║██╔████╔██║██╔████╔██║█████╗          ║
║  ██║╚██╔╝██║██║   ██║██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝          ║
║  ██║ ╚═╝ ██║╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗        ║
║  ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝        ║
║                                                                            ║
║  ███╗   ███╗██╗   ██╗██████╗ ███████╗██╗  ██╗██╗██████╗                    ║
║  ████╗ ████║██║   ██║██╔══██╗██╔════╝██║  ██║██║██╔══██╗                   ║
║  ██╔████╔██║██║   ██║██████╔╝███████╗███████║██║██║  ██║                   ║
║  ██║╚██╔╝██║██║   ██║██╔══██╗╚════██║██╔══██║██║██║  ██║                   ║
║  ██║ ╚═╝ ██║╚██████╔╝██║  ██║███████║██║  ██║██║██████╔╝                   ║
║  ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═════╝                    ║
║                                                                            ║
║                                                                            ║
║              Product Engineer & Entrepreneur                               ║
║                                                                            ║
║         Building AI-powered products that solve real problems              ║
║              (not just beautiful code that compiles)                       ║
║                                                                            ║
║  Currently: Scaling RELAYET (AI automation for local businesses)           ║
║  Previously: Built systems for 15M+ government users                       ║
║  Superpower: Shipping products 3-5x faster with AI agents                  ║
║  Type 'help' to get started                                                ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
`;

export const COMMAND_LIST = [
  "help",
  "whoami",
  "about",
  "relayet",
  "experience",
  "skills",
  "philosophy",
  "ai",
  "contact",
  "resume",
  "clear",
  "theme",
  "sudo",
];

function timestamp(): string {
  return new Date().toLocaleTimeString("en-US", { hour12: false });
}

export interface CommandOutput {
  text: string;
  isHtml?: boolean;
  isError?: boolean;
  timestamp: string;
}

export function executeCommand(input: string, currentTheme: string): CommandOutput | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const [cmd, ...args] = trimmed.toLowerCase().split(/\s+/);
  const ts = timestamp();

  switch (cmd) {
    case "help":
      return {
        timestamp: ts,
        text: `
<span class="cmd-highlight">Available commands:</span>

  <span class="cmd-name">whoami</span>      - Quick intro about me
  <span class="cmd-name">about</span>       - My full story
  <span class="cmd-name">relayet</span>     - What I'm building now (my main product)
  <span class="cmd-name">experience</span>  - Past projects & journey
  <span class="cmd-name">skills</span>      - What I can build (not tech list)
  <span class="cmd-name">philosophy</span>  - How I work & think
  <span class="cmd-name">ai</span>          - How I use AI agents
  <span class="cmd-name">contact</span>     - Let's work together
  <span class="cmd-name">resume</span>      - Download traditional resume
  <span class="cmd-name">clear</span>       - Clear terminal
  <span class="cmd-name">theme</span> <span class="cmd-arg">[name]</span>  - Switch theme
  <span class="cmd-name">sudo</span>        - Try it and see 😉

<span class="cmd-arg">Pro tip: Type 'relayet' first - that's my current focus</span>
`,
        isHtml: true,
      };

    case "whoami":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
Mohammed Murshid
Product Engineer & Entrepreneur

🎯 Current Focus: RELAYET - AI-powered automation for local businesses
📍 Location: Kerala, India
💼 Background: 4+ years building scalable systems
🚀 Superpower: Shipping products 3-5x faster with AI agents

I don't just write code - I build products that generate revenue.
Currently scaling my own AI automation startup while architecting
government platforms serving millions.

<span class="cmd-arg">Type 'relayet' to see what I'm building now.</span>
`,
      };

    case "about":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
<span class="cmd-highlight">=== THE PRODUCT ENGINEER WHO SHIPS ===</span>

I'm not your typical developer.
While most engineers optimize for clean code, I optimize for shipping
products that solve real problems and generate revenue.

<span class="cmd-name">🎯 WHAT I'M BUILDING NOW:</span>
RELAYET - AI-powered ordering & appointment automation

Running live in Okkashi Cake Cafe (all outlets)
Handles 20+ orders monthly via WhatsApp, Instagram, Telegram
AI recognizes cake images → suggests weight, pricing, generates invoices
Multi-language support (Malayalam, English, Arabic, Hindi)
24/7 automated ordering - no human needed
Next: Scaling to salons, clinics

<span class="cmd-name">📊 WHAT I'VE BUILT:</span>
• Government digital platform: 15M+ registered users, 200+ services
• Enterprise HRMS: 300+ staff across 5 hospitals with AI assistant
• Multi-location POS: 5000+ daily transactions, 15+ locations
• Booking platforms processing 1000+ monthly visitors

<span class="cmd-name">🤖 MY EDGE:</span>
Early adopter of AI agents (Claude Code, Copilot, Cursor)
Built RELAYET's cafe plugin in just 1 WEEK using AI-augmented workflow
Result: 3-5x faster shipping speed than traditional development

<span class="cmd-name">💡 MY APPROACH:</span>
Framework-agnostic. Product-obsessed. AI-augmented.
React, Node, TypeScript, Python - whatever ships the product fastest.
The tech stack is a tool, not the goal.

<span class="cmd-name">🎓 BACKGROUND:</span>
BCA from University of Calicut
4+ years building scalable systems
Self-taught entrepreneur mindset

<span class="cmd-arg">Current status: Fundraising for RELAYET expansion + seeking co-founder</span>
`,
      };

    case "relayet":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
╔══════════════════════════════════════════════════════════╗
║                       RELAYET                            ║
║        AI-Powered Business Automation Platform           ║
╚══════════════════════════════════════════════════════════╝

<span class="cmd-name">THE PROBLEM:</span>
Local businesses lose customers because:
✗ Can't take orders 24/7
✗ Manual booking is inefficient
✗ Not on customer's preferred channels
✗ Language barriers in local markets

<span class="cmd-name">MY SOLUTION:</span>
AI agents that handle orders & bookings via WhatsApp, Instagram,
Telegram, and web - in customers' native languages.

<span class="cmd-name">📊 CURRENT STATUS:</span>
✅ Live in production: Okkashi Cake Cafe (all outlets)
✅ Processing 20+ orders monthly
✅ 24/7 automated operations
✅ Multi-language: Malayalam, English, Arabic, Hindi
✅ Advanced features: Image recognition for cakes → weight/pricing
✅ Automated invoice generation
🎯 Expanding to: Salons, Clinics (Q2 2025)
💰 Status: Fundraising for scale

<span class="cmd-name">CUSTOMER TESTIMONIAL:</span>
"We are using Relayet across all outlets of Okkashi Cake Cafe to
manage our WhatsApp orders, and it has been extremely helpful. The
system runs 24/7, takes care of displaying our menu to customers, and
even handles invoice printing seamlessly. One of the most impressive
features is its ability to recognize cake elements, weight, and pricing
simply by sharing an image."
— Ashiq Okkashi, Co-founder & Chief Chef, Okkashi Cake Cafe

<span class="cmd-name">TECH STACK:</span>
Node.js, TypeScript, PostgreSQL, Next.js, React, Tailwind
WhatsApp Business API, Instagram Graph API, Telegram Bot API
OpenAI GPT-4, Google Gemini for AI agents

<span class="cmd-name">WHY THIS MATTERS:</span>
This isn't a portfolio project. It's a real business solving real problems.
I'm not building features for someone else's vision - I'm building my
own products that generate revenue.

<span class="cmd-name">LOOKING FOR:</span>
✅ Funding partners
✅ Co-founder (sales/business development)
✅ Early customers in salons/clinics

<span class="cmd-arg">Type 'contact' to discuss partnerships</span>
`,
      };

    case "experience":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
<span class="cmd-highlight">=== PRODUCT JOURNEY ===</span>

<span class="cmd-name">[2025 - Present] Senior Frontend Architect | Information Kerala Mission</span>
Government Digital Services Platform
Built microfrontend architecture serving 15M+ citizens across Kerala
India's largest state digital platform (200+ government services)
Led architecture for 8+ independent development teams
Module Federation, React microservices, RTK Query
Impact: Millions of citizens accessing services digitally

Key Learning: Mastered building systems at scale. Realized I wanted to
build my own products, not just architect for others.

<span class="cmd-name">[2022 - Present] Senior Frontend Developer | Kiebot Learning Solutions</span>
Multiple Product Lines
Built enterprise products across domains:

Kiework HRMS - AI-Powered HR Platform
• 300+ staff across 5 hospitals
• Built AI assistant using OpenAI API for natural language queries
• Mobile-first app with remote approvals, attendance tracking
• Technologies: Next.js, Redux Toolkit, OpenAI API, WebSockets

TORCAP - Enterprise POS System
• 5000+ daily transactions across 15+ Saudi locations
• Bilingual (Arabic/English) - 45% adoption increase
• Offline-first architecture with auto-sync
• Technologies: Next.js, Redux Toolkit, Real-time sync

Homestay Booking Platform (AJJANAMANE)
• 1000+ monthly visitors
• SSR optimization: 3.2s → 1.3s load time
• 70% reduction in API calls via caching
• Technologies: Next.js, Material UI, SEO optimization

Key Learning: Gained expertise across HR, retail, hospitality. Learned
how different industries solve similar problems differently.

<span class="cmd-name">[2024 - Present] Founder & Product Engineer | RELAYET</span>
My Own AI-Powered Product
Building AI automation for local businesses. Bootstrapped. Scaling now.
Type 'relayet' for details.

<span class="cmd-name">[2018 - 2021] Bachelor's Degree in Computer Applications</span>
University of Calicut
`,
      };

    case "skills": {
      let out = `
<span class="cmd-highlight">=== WHAT I CAN BUILD (Not a tech stack list) ===</span>
`;
      
      out += `
<span class="cmd-name">🤖 AI-POWERED PRODUCTS</span>
`;
      out += `✅ Natural language interfaces (GPT-4, Gemini)
`;
      out += `✅ Multi-channel automation (WhatsApp, Instagram, Telegram)
`;
      out += `✅ AI agents for business workflows
`;
      out += `✅ Image recognition & processing
`;
      out += `✅ Voice-to-text ordering systems
`;
      
      out += `
<span class="cmd-name">🏗️ SCALABLE WEB APPLICATIONS</span>
`;
      out += `✅ Systems handling 15M+ users
`;
      out += `✅ Real-time data with WebSockets
`;
      out += `✅ Server-side rendering for performance
`;
      out += `✅ Microfrontend architectures
`;
      out += `✅ Offline-first applications
`;
      
      out += `
<span class="cmd-name">💼 BUSINESS AUTOMATION</span>
`;
      out += `✅ Ordering systems
`;
      out += `✅ Appointment booking
`;
      out += `✅ CRM integrations
`;
      out += `✅ Payment processing
`;
      out += `✅ Invoice automation
`;
      
      out += `
<span class="cmd-name">⚡ FULL-STACK DEVELOPMENT</span>
`;
      out += `Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux
`;
      out += `Backend: Node.js, Express, PostgreSQL, REST APIs
`;
      out += `AI: OpenAI API, Google Gemini, Claude
`;
      out += `Tools: Git, Docker, AWS, Vercel
`;
      
      out += `
<span class="cmd-name">🎯 MY COMPETITIVE ADVANTAGE:</span>
`;
      out += `I use AI agents (Claude Code, Copilot, Cursor) to 3-5x my productivity.
`;
      out += `Example: Built RELAYET's cafe plugin in 1 WEEK using AI-augmented workflow.
`;
      out += `Traditional approach would take 3-4 weeks.
`;
      out += `While others code line-by-line, I architect, delegate to AI, and ship faster.
`;
      out += `<span class="cmd-arg">Type 'ai' to learn about my AI-augmented workflow</span>
`;
      
      return { timestamp: ts, text: out, isHtml: true };
    }

    case "philosophy":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
<span class="cmd-highlight">=== HOW I WORK ===</span>

<span class="cmd-name">🎯 PRODUCT-FIRST MINDSET</span>
The goal isn't beautiful code. It's products that solve real problems
and generate revenue. Everything else is secondary.
Code is a means to an end, not the end itself.

<span class="cmd-name">🤖 AI-AUGMENTED DEVELOPMENT</span>
I've been using AI agents since early days (Claude Code, Copilot, Cursor).
Not just ChatGPT for documentation - full workflow integration.
Result: 3-5x faster shipping speed. This is my competitive advantage.

<span class="cmd-name">🛠️ FRAMEWORK AGNOSTIC</span>
React, Vue, Svelte, vanilla JS - I don't care. I use whatever ships
the product fastest. The tool serves the goal, not vice versa.
I'm not a "React developer" - I'm a product engineer who uses React
when it makes sense.

<span class="cmd-name">🚀 0-TO-1 SPECIALIST</span>
I thrive in ambiguity. Give me an idea and I'll ship an MVP in weeks,
not months. Iteration beats perfection every time.
Best environment: Early-stage, high-autonomy, product-focused.

<span class="cmd-name">💰 BUSINESS-AWARE ENGINEER</span>
I understand CAC, LTV, churn, conversion rates. I build features that
move business metrics, not just satisfy technical curiosity.
Every line of code should serve a business goal.

<span class="cmd-name">📚 CONTINUOUS LEARNER</span>
I learn new technologies as needed, not for resume padding.
Currently learning: Advanced AI agent workflows, business development,
fundraising processes.
`,
      };

    case "ai":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
<span class="cmd-highlight">=== MY AI-AUGMENTED WORKFLOW ===</span>

I've been using AI agents as core development tools since early days.
This isn't just using ChatGPT for documentation - this is full workflow
integration that makes me 3-5x faster.

<span class="cmd-name">🛠️ TOOLS I USE DAILY:</span>

<span class="cmd-name">Claude Code</span>
• Agentic coding assistant
• Handles complex refactoring
• Generates boilerplate code
• My primary AI pair programmer

<span class="cmd-name">GitHub Copilot</span>
• Real-time code suggestions
• Autocompletes patterns
• Speeds up repetitive coding

<span class="cmd-name">Cursor</span>
• AI-powered IDE
• Context-aware code generation
• Intelligent code editing

<span class="cmd-name">📊 REAL IMPACT:</span>
<span class="cmd-highlight">Example: RELAYET Cafe Plugin</span>
• Traditional timeline: 3-4 weeks
• My timeline with AI: 1 WEEK
• 3-4x speed improvement

How I did it:
✓ Architected the system (human thinking)
✓ Used Claude Code to generate core modules
✓ Copilot for boilerplate and patterns
✓ Cursor for rapid iteration and bug fixes
✓ Human review and business logic refinement

Result: Production-ready code in 1/4 the time.

<span class="cmd-name">💡 MY PHILOSOPHY:</span>
AI doesn't replace thinking - it replaces typing.
I focus on architecture, business logic, and user experience.
AI handles the mechanical coding work.

This is why I can run a startup while also architecting government
platforms - AI agents multiply my output.

<span class="cmd-name">🚀 COMPETITIVE ADVANTAGE:</span>
Most developers still code everything manually.
I architect and orchestrate AI agents.
In 2025, this gap will separate builders from typists.

<span class="cmd-arg">Want to see this in action? Check out RELAYET - built with AI-augmented workflow from day one.</span>
`,
      };

    case "contact":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
<span class="cmd-highlight">=== LET'S WORK TOGETHER ===</span>

I'm interested in:

<span class="cmd-name">✅ FUNDING PARTNERS</span>
Looking to scale RELAYET into salons, clinics, and beyond.
Early-stage fundraising open now.

<span class="cmd-name">✅ CO-FOUNDER OPPORTUNITIES</span>
Seeking: Sales/Business Development co-founder for RELAYET
Bring: Technical execution, product development, AI integration

<span class="cmd-name">✅ PRODUCT ENGINEERING ROLES</span>
Startups building 0→1 products with creative freedom
(Not interested in pure frontend maintenance work)

<span class="cmd-name">✅ CONSULTING / FRACTIONAL CTO</span>
AI integration, rapid MVP development, architecture design

<span class="cmd-name">✅ PARTNERSHIP OPPORTUNITIES</span>
Businesses in salons/clinics space for RELAYET pilot programs

<span class="cmd-name">NOT interested in:</span>
❌ Pure frontend developer roles (I'm a product engineer)
❌ Large enterprise maintenance work (I build new products)
❌ Roles where I just execute specs (I need creative freedom)

<span class="cmd-name">📞 CONTACT INFO:</span>

📧 Email: <a href="mailto:${CONTACT_INFO.email}">${CONTACT_INFO.email}</a>
💼 LinkedIn: <a href="${CONTACT_INFO.linkedin}" target="_blank" rel="noopener">${CONTACT_INFO.linkedin.replace("https://", "")}</a>
📱 WhatsApp: <a href="${CONTACT_INFO.whatsapp}" target="_blank" rel="noopener">${CONTACT_INFO.phone}</a>
🏠 Location: ${CONTACT_INFO.location}

<span class="cmd-arg">Want to see RELAYET in action?</span>
<span class="cmd-arg">Interested in partnership/investment?</span>
<span class="cmd-arg">Have a product idea to discuss?</span>
<span class="cmd-arg">Reach out - I respond fast ⚡</span>
`,
      };

    case "resume":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
<span class="cmd-highlight">Resume</span>

Downloading traditional resume...
████████████████████████████████ 100%
✅ Download complete!

<a href="/resume.pdf" target="_blank" rel="noopener">[Download Resume PDF]</a>

<span class="cmd-arg">Note: This resume shows my traditional "developer" background.</span>
<span class="cmd-arg">For the full story of what I'm building now (RELAYET) and my</span>
<span class="cmd-arg">entrepreneurial journey, explore this terminal portfolio.</span>

<span class="cmd-arg">Type 'relayet' to see my current focus</span>
<span class="cmd-arg">Type 'about' for my full story</span>
`,
      };

    case "clear":
      return null; // handled externally

    case "theme": {
      const themeName = args[0];
      if (!themeName || !THEMES[themeName]) {
        return {
          timestamp: ts,
          isHtml: true,
          text: `Usage: theme [name]
Available themes: ${Object.entries(THEMES).map(([k, v]) => `<span class="cmd-name">${k}</span> (${v.name})`).join(", ")}`,
          isError: !themeName ? true : true,
        };
      }
      return {
        timestamp: ts,
        isHtml: true,
        text: `Theme switched to <span class="cmd-name">${THEMES[themeName].name}</span>`,
      };
    }

    case "sudo":
      return {
        timestamp: ts,
        isHtml: true,
        text: `
<span class="cmd-error">[sudo] password for visitor:</span>

Nice try! 😄

But seriously - if you're looking for the "make me rich" command,
the answer is: Build products people want to pay for.
That's why I'm building RELAYET instead of just applying to jobs.

<span class="cmd-arg">Type 'relayet' to see what I'm working on</span>
<span class="cmd-arg">Type 'philosophy' to understand how I think</span>

Pro tip: There's no sudo command for success. Just shipping, iteration,
and solving real problems.
`,
      };

    default:
      return {
        timestamp: ts,
        text: `command not found: ${cmd}. Type 'help' for available commands.`,
        isError: true,
      };
  }
}
