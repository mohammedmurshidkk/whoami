export type Lang = "en" | "ar" | "fr";

export const languages: { code: Lang; label: string; path: string }[] = [
  { code: "en", label: "EN", path: "/" },
  { code: "ar", label: "عربي", path: "/ar/" },
  { code: "fr", label: "FR", path: "/fr/" },
];

type Item = { title: string; text: string };
type Work = { tag: string; title: string; text: string; mark: string };
type Live = Work & { url: string; stack: string };

export type Content = {
  dir: "ltr" | "rtl";
  meta: { title: string; description: string };
  announce: string;
  nav: { work: string; services: string; process: string; faq: string; contact: string; hire: string };
  hero: { eyebrow: string; title: string; text: string; primary: string; secondary: string; motto: [string, string, string] };
  perks: Item[];
  services: { title: string; items: Item[]; cta: string };
  process: { title: string; steps: Item[] };
  work: { title: string; live: string; view: string; featured: Live[]; items: Work[] };
  building: {
    eyebrow: string;
    title: string;
    text: string;
    link: string;
    side: { eyebrow: string; title: string; text: string; link: string };
  };
  record: { title: string; stats: { value: number; suffix: string; label: string }[] };
  stack: { title: string };
  faq: { title: string; items: { q: string; a: string }[] };
  about: { title: string; text: string; cta: string };
  footer: { tagline: string; quick: string; servicesTitle: string; contact: string; chat: string; location: string; rights: string };
};

const en: Content = {
  dir: "ltr",
  meta: {
    title: "Mohammed Murshid | Freelance Software Engineer",
    description:
      "I build products, AI solutions and software for businesses. Web apps, SaaS, AI and automation. Think it. Build it. Ship it.",
  },
  announce: "Available for new projects · Think it. Build it. Ship it.",
  nav: { work: "Work", services: "Services", process: "Process", faq: "FAQ", contact: "Contact", hire: "Hire me" },
  hero: {
    eyebrow: "Freelance Software Engineer",
    title: "I build products and AI solutions for businesses.",
    text: "Building my own products and helping businesses turn ideas into working software.",
    primary: "Start a project",
    secondary: "Chat on WhatsApp",
    motto: ["Think it.", "Build it.", "Ship it."],
  },
  perks: [
    { title: "Web Apps", text: "Fast, modern and built to scale" },
    { title: "SaaS", text: "From idea to paying users" },
    { title: "AI", text: "Smart features that save time" },
    { title: "Automation", text: "Less manual work, fewer errors" },
  ],
  services: {
    title: "What I Build",
    cta: "Discuss your project",
    items: [
      { title: "Web Applications", text: "Dashboards, portals and business tools with React, Next.js and Node.js." },
      { title: "SaaS Products", text: "MVPs and full products with accounts, payments and admin panels." },
      { title: "AI Solutions", text: "Chatbots, assistants and AI features built into your product." },
      { title: "Automation", text: "WhatsApp flows, invoicing, bookings and integrations between your tools." },
    ],
  },
  process: {
    title: "How We Work Together",
    steps: [
      { title: "Think it", text: "We talk through the idea, the users and the goal. You get a clear plan, scope and timeline." },
      { title: "Build it", text: "I design and develop in small steps and share progress so you can see it take shape." },
      { title: "Ship it", text: "Launch, handover and support. Your product goes live and keeps working." },
    ],
  },
  work: {
    title: "Selected Work",
    live: "Live",
    view: "View live",
    featured: [
      { tag: "Online store", title: "Kenz Perfumes", text: "Perfume storefront with WhatsApp ordering, filters by collection and offers, and an admin panel for products, prices and reviews.", mark: "Kenz", url: "https://kenz-world.vercel.app/", stack: "Next.js · GSAP · Supabase" },
      { tag: "Own product · SaaS", title: "Zentivo POS", text: "Restaurant POS for the UAE: cashier desktop app, waiter tablets, kitchen ticket printing and VAT invoices, running offline on the shop's own network.", mark: "Zentivo", url: "https://zentivo-pos.relayet.com/en", stack: "Electron · React · Expo · Fastify · SQLite" },
    ],
    items: [
      { tag: "Own product · AI", title: "RELAYET", text: "AI ordering and booking assistant for local businesses on WhatsApp, Instagram and Telegram.", mark: "R" },
      { tag: "Web platform", title: "Government Services Platform", text: "Frontend architecture for a statewide platform used by 15M+ citizens.", mark: "15M" },
      { tag: "Web app · AI", title: "Hospital HR System", text: "HR management for hospitals with AI features built in.", mark: "HR" },
      { tag: "Business software", title: "Retail POS", text: "Point-of-sale system for retail stores.", mark: "POS" },
      { tag: "Website", title: "Homestay Booking", text: "Booking platform with server rendering for search visibility.", mark: "BK" },
      { tag: "Open source", title: "UI Component Library", text: "50+ reusable components published to npm.", mark: "UI" },
    ],
  },
  building: {
    eyebrow: "Building now",
    title: "RELAYET",
    text: "My own product. An AI assistant that takes orders and bookings for local businesses, live with its first café customer.",
    link: "Ask me about it",
    side: {
      eyebrow: "Have an idea?",
      title: "Let's build your product",
      text: "Tell me what you want to make. I'll reply with a plan you can act on.",
      link: "Start a conversation",
    },
  },
  record: {
    title: "Track Record",
    stats: [
      { value: 15, suffix: "M+", label: "citizens served by a platform I architected" },
      { value: 200, suffix: "+", label: "services delivered on one platform" },
      { value: 40, suffix: "%", label: "faster page loads after optimisation" },
      { value: 50, suffix: "+", label: "components in my published UI library" },
    ],
  },
  stack: { title: "Tools I Use" },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { q: "How do we get started?", a: "Send me a message on WhatsApp or email with a short description of your idea. We'll have a quick call and I'll share a plan with scope and timeline." },
      { q: "Can you work through Fiverr or Freelancer?", a: "Yes. We can work through the platform you prefer, or directly." },
      { q: "Do you work with clients outside India?", a: "Yes. I work remotely with clients in any time zone and communicate in English." },
      { q: "What happens after launch?", a: "I help with deployment and handover, and I can stay on for fixes, improvements and new features." },
    ],
  },
  about: {
    title: "About Me",
    text: "I'm Mohammed Murshid, a software engineer from Kerala, India. I've built large-scale web platforms, business software and AI products, and today I work as a freelancer while building my own products. I care about software that is fast, simple to use and actually ships.",
    cta: "Connect on LinkedIn",
  },
  footer: {
    tagline: "I build products, AI solutions and software for businesses.",
    quick: "Quick Links",
    servicesTitle: "Services",
    contact: "Contact",
    chat: "Chat on WhatsApp",
    location: "Kerala, India · Working worldwide",
    rights: "All rights reserved.",
  },
};

const ar: Content = {
  dir: "rtl",
  meta: {
    title: "محمد مرشد | مهندس برمجيات مستقل",
    description: "أبني منتجات وحلول ذكاء اصطناعي وبرمجيات للشركات. تطبيقات ويب، منصات SaaS، ذكاء اصطناعي وأتمتة.",
  },
  announce: "متاح لمشاريع جديدة · فكّر. ابنِ. أطلِق.",
  nav: { work: "أعمالي", services: "الخدمات", process: "طريقة العمل", faq: "الأسئلة", contact: "تواصل", hire: "اطلب خدمتي" },
  hero: {
    eyebrow: "مهندس برمجيات مستقل",
    title: "أبني منتجات وحلول ذكاء اصطناعي للشركات.",
    text: "أطوّر منتجاتي الخاصة، وأساعد الشركات على تحويل أفكارها إلى برمجيات تعمل فعلاً.",
    primary: "ابدأ مشروعك",
    secondary: "تواصل عبر واتساب",
    motto: ["فكّر.", "ابنِ.", "أطلِق."],
  },
  perks: [
    { title: "تطبيقات الويب", text: "سريعة وحديثة وقابلة للتوسع" },
    { title: "منصات SaaS", text: "من الفكرة إلى أول عميل" },
    { title: "الذكاء الاصطناعي", text: "مزايا ذكية توفّر الوقت" },
    { title: "الأتمتة", text: "عمل يدوي أقل وأخطاء أقل" },
  ],
  services: {
    title: "ماذا أبني",
    cta: "ناقش مشروعك",
    items: [
      { title: "تطبيقات الويب", text: "لوحات تحكم وبوابات وأدوات أعمال باستخدام React وNext.js وNode.js." },
      { title: "منتجات SaaS", text: "نسخ أولية ومنتجات كاملة مع الحسابات والمدفوعات ولوحات الإدارة." },
      { title: "حلول الذكاء الاصطناعي", text: "روبوتات محادثة ومساعدات ذكية ومزايا ذكاء اصطناعي داخل منتجك." },
      { title: "الأتمتة", text: "مسارات واتساب والفواتير والحجوزات وربط الأدوات التي تستخدمها." },
    ],
  },
  process: {
    title: "كيف نعمل معاً",
    steps: [
      { title: "فكّر", text: "نناقش الفكرة والمستخدمين والهدف، وتحصل على خطة واضحة بالنطاق والجدول الزمني." },
      { title: "ابنِ", text: "أصمّم وأطوّر على مراحل صغيرة وأشاركك التقدّم لترى منتجك يتشكّل." },
      { title: "أطلِق", text: "الإطلاق والتسليم والدعم. منتجك يعمل على الإنترنت ويستمر في العمل." },
    ],
  },
  work: {
    title: "أعمال مختارة",
    live: "مباشر",
    view: "شاهد الموقع",
    featured: [
      { tag: "متجر إلكتروني", title: "Kenz Perfumes", text: "متجر عطور بطلب مباشر عبر واتساب، وتصفية حسب المجموعات والعروض، ولوحة تحكم لإدارة المنتجات والأسعار والتقييمات.", mark: "Kenz", url: "https://kenz-world.vercel.app/", stack: "Next.js · GSAP · Supabase" },
      { tag: "منتجي الخاص · SaaS", title: "Zentivo POS", text: "نظام نقاط بيع للمطاعم في الإمارات: تطبيق للكاشير، وأجهزة لوحية للنُدُل، وطباعة طلبات المطبخ، وفواتير ضريبية، ويعمل دون إنترنت على شبكة المطعم.", mark: "Zentivo", url: "https://zentivo-pos.relayet.com/en", stack: "Electron · React · Expo · Fastify · SQLite" },
    ],
    items: [
      { tag: "منتجي الخاص · ذكاء اصطناعي", title: "RELAYET", text: "مساعد ذكي لاستقبال الطلبات والحجوزات للمتاجر المحلية عبر واتساب وإنستغرام وتيليغرام.", mark: "R" },
      { tag: "منصة ويب", title: "منصة خدمات حكومية", text: "هندسة الواجهة الأمامية لمنصة على مستوى ولاية يستخدمها أكثر من 15 مليون مواطن.", mark: "15M" },
      { tag: "تطبيق ويب · ذكاء اصطناعي", title: "نظام موارد بشرية للمستشفيات", text: "إدارة الموارد البشرية للمستشفيات مع مزايا ذكاء اصطناعي.", mark: "HR" },
      { tag: "برمجيات أعمال", title: "نظام نقاط بيع", text: "نظام نقاط بيع لمتاجر التجزئة.", mark: "POS" },
      { tag: "موقع إلكتروني", title: "منصة حجز بيوت الضيافة", text: "منصة حجز بعرض من جهة الخادم لظهور أفضل في محركات البحث.", mark: "BK" },
      { tag: "مفتوح المصدر", title: "مكتبة مكوّنات واجهة", text: "أكثر من 50 مكوّناً قابلاً لإعادة الاستخدام منشورة على npm.", mark: "UI" },
    ],
  },
  building: {
    eyebrow: "أعمل عليه الآن",
    title: "RELAYET",
    text: "منتجي الخاص: مساعد ذكي يستقبل الطلبات والحجوزات للمتاجر المحلية، ويعمل حالياً مع أول مقهى من عملائه.",
    link: "اسألني عنه",
    side: {
      eyebrow: "لديك فكرة؟",
      title: "لنبنِ منتجك معاً",
      text: "أخبرني بما تريد بناءه، وسأرد عليك بخطة واضحة قابلة للتنفيذ.",
      link: "ابدأ المحادثة",
    },
  },
  record: {
    title: "سجل الإنجازات",
    stats: [
      { value: 15, suffix: "M+", label: "مواطن يخدمهم نظام صمّمت هندسته" },
      { value: 200, suffix: "+", label: "خدمة على منصة واحدة" },
      { value: 40, suffix: "%", label: "تحميل أسرع للصفحات بعد التحسين" },
      { value: 50, suffix: "+", label: "مكوّناً في مكتبتي المنشورة" },
    ],
  },
  stack: { title: "الأدوات التي أستخدمها" },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      { q: "كيف نبدأ؟", a: "أرسل لي رسالة على واتساب أو البريد الإلكتروني مع وصف مختصر لفكرتك. نتحدث سريعاً ثم أشاركك خطة بالنطاق والجدول الزمني." },
      { q: "هل يمكنك العمل عبر Fiverr أو Freelancer؟", a: "نعم. يمكننا العمل عبر المنصة التي تفضّلها أو بشكل مباشر." },
      { q: "هل تعمل مع عملاء خارج الهند؟", a: "نعم. أعمل عن بُعد مع عملاء في أي منطقة زمنية." },
      { q: "ماذا يحدث بعد الإطلاق؟", a: "أساعدك في النشر والتسليم، ويمكنني الاستمرار في الإصلاحات والتحسينات والمزايا الجديدة." },
    ],
  },
  about: {
    title: "نبذة عني",
    text: "أنا محمد مرشد، مهندس برمجيات من ولاية كيرالا في الهند. بنيت منصات ويب واسعة النطاق وبرمجيات أعمال ومنتجات ذكاء اصطناعي، وأعمل اليوم مستقلاً بالتوازي مع بناء منتجاتي الخاصة. يهمني أن تكون البرمجيات سريعة وسهلة الاستخدام وأن تصل فعلاً إلى المستخدمين.",
    cta: "تواصل على LinkedIn",
  },
  footer: {
    tagline: "أبني منتجات وحلول ذكاء اصطناعي وبرمجيات للشركات.",
    quick: "روابط سريعة",
    servicesTitle: "الخدمات",
    contact: "تواصل",
    chat: "تواصل عبر واتساب",
    location: "كيرالا، الهند · أعمل مع عملاء حول العالم",
    rights: "جميع الحقوق محفوظة.",
  },
};

const fr: Content = {
  dir: "ltr",
  meta: {
    title: "Mohammed Murshid | Ingénieur logiciel freelance",
    description:
      "Je crée des produits, des solutions d'IA et des logiciels pour les entreprises. Applications web, SaaS, IA et automatisation.",
  },
  announce: "Disponible pour de nouveaux projets · Imaginer. Construire. Livrer.",
  nav: { work: "Projets", services: "Services", process: "Méthode", faq: "FAQ", contact: "Contact", hire: "Me contacter" },
  hero: {
    eyebrow: "Ingénieur logiciel freelance",
    title: "Je crée des produits et des solutions d'IA pour les entreprises.",
    text: "Je développe mes propres produits et j'aide les entreprises à transformer leurs idées en logiciels qui fonctionnent.",
    primary: "Lancer un projet",
    secondary: "Écrire sur WhatsApp",
    motto: ["Imaginer.", "Construire.", "Livrer."],
  },
  perks: [
    { title: "Applications web", text: "Rapides, modernes et évolutives" },
    { title: "SaaS", text: "De l'idée aux premiers clients" },
    { title: "IA", text: "Des fonctions intelligentes qui font gagner du temps" },
    { title: "Automatisation", text: "Moins de tâches manuelles, moins d'erreurs" },
  ],
  services: {
    title: "Ce que je crée",
    cta: "Parler de votre projet",
    items: [
      { title: "Applications web", text: "Tableaux de bord, portails et outils métier avec React, Next.js et Node.js." },
      { title: "Produits SaaS", text: "MVP et produits complets avec comptes, paiements et espace d'administration." },
      { title: "Solutions d'IA", text: "Chatbots, assistants et fonctions d'IA intégrés à votre produit." },
      { title: "Automatisation", text: "Parcours WhatsApp, facturation, réservations et connexions entre vos outils." },
    ],
  },
  process: {
    title: "Comment nous travaillons",
    steps: [
      { title: "Imaginer", text: "Nous parlons de l'idée, des utilisateurs et de l'objectif. Vous recevez un plan clair avec périmètre et délais." },
      { title: "Construire", text: "Je conçois et développe par petites étapes, et je partage l'avancement pour que vous voyiez le produit prendre forme." },
      { title: "Livrer", text: "Mise en ligne, passation et support. Votre produit est en ligne et continue de fonctionner." },
    ],
  },
  work: {
    title: "Projets choisis",
    live: "En ligne",
    view: "Voir le site",
    featured: [
      { tag: "Boutique en ligne", title: "Kenz Perfumes", text: "Boutique de parfums avec commande par WhatsApp, filtres par collection et promotions, et un back-office pour les produits, les prix et les avis.", mark: "Kenz", url: "https://kenz-world.vercel.app/", stack: "Next.js · GSAP · Supabase" },
      { tag: "Mon produit · SaaS", title: "Zentivo POS", text: "Caisse pour restaurants aux Émirats : application de caisse, tablettes pour les serveurs, impression des bons cuisine et factures TVA, le tout hors ligne sur le réseau du restaurant.", mark: "Zentivo", url: "https://zentivo-pos.relayet.com/en", stack: "Electron · React · Expo · Fastify · SQLite" },
    ],
    items: [
      { tag: "Mon produit · IA", title: "RELAYET", text: "Assistant IA de commandes et de réservations pour commerces locaux sur WhatsApp, Instagram et Telegram.", mark: "R" },
      { tag: "Plateforme web", title: "Plateforme de services publics", text: "Architecture frontend d'une plateforme régionale utilisée par plus de 15 M de citoyens.", mark: "15M" },
      { tag: "Application web · IA", title: "SIRH pour hôpitaux", text: "Gestion des ressources humaines pour hôpitaux, avec des fonctions d'IA.", mark: "HR" },
      { tag: "Logiciel métier", title: "Caisse pour commerces", text: "Système de point de vente pour le commerce de détail.", mark: "POS" },
      { tag: "Site web", title: "Réservation de maisons d'hôtes", text: "Plateforme de réservation avec rendu serveur pour un meilleur référencement.", mark: "BK" },
      { tag: "Open source", title: "Bibliothèque de composants", text: "Plus de 50 composants réutilisables publiés sur npm.", mark: "UI" },
    ],
  },
  building: {
    eyebrow: "En cours",
    title: "RELAYET",
    text: "Mon propre produit : un assistant IA qui prend les commandes et les réservations des commerces locaux, déjà en service chez un premier café.",
    link: "M'en parler",
    side: {
      eyebrow: "Vous avez une idée ?",
      title: "Construisons votre produit",
      text: "Dites-moi ce que vous voulez créer. Je vous réponds avec un plan concret.",
      link: "Démarrer la conversation",
    },
  },
  record: {
    title: "Références",
    stats: [
      { value: 15, suffix: "M+", label: "citoyens servis par une plateforme que j'ai architecturée" },
      { value: 200, suffix: "+", label: "services réunis sur une seule plateforme" },
      { value: 40, suffix: "%", label: "de chargement plus rapide après optimisation" },
      { value: 50, suffix: "+", label: "composants dans ma bibliothèque publiée" },
    ],
  },
  stack: { title: "Mes outils" },
  faq: {
    title: "Questions fréquentes",
    items: [
      { q: "Comment commencer ?", a: "Envoyez-moi un message sur WhatsApp ou par e-mail avec une courte description de votre idée. Après un bref appel, je vous envoie un plan avec périmètre et délais." },
      { q: "Peut-on travailler via Fiverr ou Freelancer ?", a: "Oui. Nous pouvons passer par la plateforme de votre choix, ou travailler directement." },
      { q: "Travaillez-vous avec des clients hors d'Inde ?", a: "Oui. Je travaille à distance avec des clients de tous les fuseaux horaires." },
      { q: "Que se passe-t-il après la mise en ligne ?", a: "Je m'occupe du déploiement et de la passation, et je peux continuer pour les corrections, améliorations et nouvelles fonctions." },
    ],
  },
  about: {
    title: "À propos",
    text: "Je suis Mohammed Murshid, ingénieur logiciel au Kerala, en Inde. J'ai conçu des plateformes web à grande échelle, des logiciels métier et des produits d'IA. Aujourd'hui, je travaille en freelance tout en développant mes propres produits. Je tiens à des logiciels rapides, simples à utiliser et réellement livrés.",
    cta: "Me suivre sur LinkedIn",
  },
  footer: {
    tagline: "Je crée des produits, des solutions d'IA et des logiciels pour les entreprises.",
    quick: "Liens rapides",
    servicesTitle: "Services",
    contact: "Contact",
    chat: "Écrire sur WhatsApp",
    location: "Kerala, Inde · Clients dans le monde entier",
    rights: "Tous droits réservés.",
  },
};

export const content: Record<Lang, Content> = { en, ar, fr };
