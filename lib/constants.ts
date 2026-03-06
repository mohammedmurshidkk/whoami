export const CONTACT_INFO = {
  name: "Mohammed Murshid",
  handle: "mohammed_murshid",
  title: "Product Engineer & Entrepreneur",
  email: "muhammedmurshid43@gmail.com",
  phone: "+91-9562195579",
  whatsapp: "https://wa.me/919562195579",
  linkedin: "https://linkedin.com/in/murshidkk",
  github: "https://github.com/murshidkk",
  githubHandle: "murshidkk",
  location: "Kerala, India",
};

export const SEO_CONFIG = {
  title: "Mohammed Murshid | Product Engineer & Entrepreneur",
  description: "Portfolio of Mohammed Murshid (murshidkk). Product Engineer building AI-powered automation (RELAYET) and architecting 15M+ user systems.",
  keywords: [
    "Mohammed Murshid",
    "Murshid",
    "murshidkk",
    "mohammedmurshidkk",
    "Murshid Mohammed",
    "Product Engineer",
    "Entrepreneur",
    "RELAYET",
    "Software Engineer Kerala",
    "AI Automation Expert",
    "Frontend Architect",
  ],
  url: "https://murshid.dev", // Replace with your actual domain
  ogImage: "/og-image.png", // Make sure to add an OG image to public/
};

export const SOCIAL_LINKS = {
  linkedin: CONTACT_INFO.linkedin,
  github: CONTACT_INFO.github,
  whatsapp: CONTACT_INFO.whatsapp,
  email: `mailto:${CONTACT_INFO.email}`,
  tel: `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`,
};
