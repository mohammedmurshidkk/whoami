import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";
import "./globals.css";
import { CONTACT_INFO, SEO_CONFIG } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "./providers";

export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": CONTACT_INFO.name,
    "url": SEO_CONFIG.url,
    "jobTitle": CONTACT_INFO.title,
    "sameAs": [
      CONTACT_INFO.linkedin,
      CONTACT_INFO.github,
    ],
    "description": SEO_CONFIG.description,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
