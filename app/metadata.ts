import type { Metadata } from "next";
import { SEO_CONFIG, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${CONTACT_INFO.name}`,
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: CONTACT_INFO.name }],
  creator: CONTACT_INFO.name,
  metadataBase: new URL(SEO_CONFIG.url),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.url,
    siteName: SEO_CONFIG.title,
    images: [
      {
        url: SEO_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: CONTACT_INFO.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.ogImage],
    creator: `@${CONTACT_INFO.githubHandle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
