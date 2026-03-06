import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/terminal', '/bughunt', '/readme'].map((route) => ({
    url: `${SEO_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
