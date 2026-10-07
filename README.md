# Murshid · portfolio

One-page portfolio in English, Arabic (right-to-left) and French, built with Astro, GSAP and Lenis.
The look follows the Maison Élan storefront: white ground, Jost, near-black ink and a bronze accent.

```bash
npm install
npm run dev      # http://localhost:4321  (Arabic at /ar/, French at /fr/)
npm run build    # static site in dist/, deploy anywhere (Vercel, Netlify, Cloudflare Pages)
```

- Links (WhatsApp, email, Fiverr, Freelancer, Upwork) live in `src/data/site.ts`. Empty links are hidden.
- All text for the three languages lives in `src/i18n/content.ts`.
- Layout: `src/components/Page.astro`. Styles: `src/styles/global.css`. Animation: `src/scripts/story.ts`.
- Respects `prefers-reduced-motion`: everything is shown without animation.
