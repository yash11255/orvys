import { MetadataRoute } from 'next';
import { caseStudiesData } from '@/data/caseStudies';
import { insightsData } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orvys.in';

  // Core Pages
  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/bihar-csr',
    '/bihar-csr-projects',
    '/insights',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.includes('bihar-csr') ? 0.9 : 0.8,
  }));

  // Case Studies URLs
  const caseStudyUrls = caseStudiesData.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Insights URLs
  const insightUrls = insightsData.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...caseStudyUrls, ...insightUrls];
}
