import { useEffect, useState } from 'react';

interface QualityMetrics {
  performance: number;
  accessibility: number;
  seo: number;
  security: number;
  pwa: number;
}

export const QualityReport = () => {
  const [metrics, setMetrics] = useState<QualityMetrics | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    const generateQualityReport = async () => {
      const report: QualityMetrics = {
        performance: 0,
        accessibility: 0,
        seo: 0,
        security: 0,
        pwa: 0
      };

      // Performance checks
      const performanceChecks = await runPerformanceChecks();
      report.performance = performanceChecks;

      // Accessibility checks
      const a11yChecks = runAccessibilityChecks();
      report.accessibility = a11yChecks;

      // SEO checks
      const seoChecks = runSEOChecks();
      report.seo = seoChecks;

      // Security checks
      const securityChecks = runSecurityChecks();
      report.security = securityChecks;

      // PWA checks
      const pwaChecks = runPWAChecks();
      report.pwa = pwaChecks;

      setMetrics(report);

      // Log comprehensive report
      console.group('🎯 Production Quality Report');
      console.log(`Performance: ${report.performance}%`);
      console.log(`Accessibility: ${report.accessibility}%`);
      console.log(`SEO: ${report.seo}%`);
      console.log(`Security: ${report.security}%`);
      console.log(`PWA: ${report.pwa}%`);
      
      const overall = Math.round(
        (report.performance + report.accessibility + report.seo + report.security + report.pwa) / 5
      );
      console.log(`Overall Score: ${overall}%`);
      
      if (overall < 90) {
        console.warn('🚨 Quality score below 90% - review needed');
      } else {
        console.log('✅ High quality score - production ready');
      }
      console.groupEnd();
    };

    setTimeout(generateQualityReport, 2000);
  }, []);

  const runPerformanceChecks = async (): Promise<number> => {
    let score = 100;
    
    // Check for performance issues
    if (window.performance && window.performance.navigation) {
      const navTiming = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navTiming.loadEventEnd - navTiming.fetchStart > 3000) score -= 20;
      if (navTiming.domContentLoadedEventEnd - navTiming.fetchStart > 1500) score -= 10;
    }

    // Check for large bundle size
    const scripts = document.querySelectorAll('script[src]');
    if (scripts.length > 10) score -= 10;

    // Check for unoptimized images
    const images = document.querySelectorAll('img:not([loading="lazy"])');
    if (images.length > 5) score -= 10;

    return Math.max(0, score);
  };

  const runAccessibilityChecks = (): number => {
    let score = 100;
    
    // Check for missing alt attributes
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    score -= imagesWithoutAlt.length * 5;

    // Check for heading structure
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count !== 1) score -= 15;

    // Check for form labels
    const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    score -= inputsWithoutLabels.length * 10;

    // Check for skip link
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (!skipLink) score -= 10;

    // Check for main landmark
    const main = document.querySelector('main, [role="main"]');
    if (!main) score -= 10;

    return Math.max(0, score);
  };

  const runSEOChecks = (): number => {
    let score = 100;
    
    // Check title
    const title = document.title;
    if (!title) score -= 20;
    else if (title.length > 60 || title.length < 30) score -= 10;

    // Check meta description
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc || !metaDesc.content) score -= 20;
    else if (metaDesc.content.length > 160 || metaDesc.content.length < 120) score -= 10;

    // Check structured data
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    if (structuredData.length === 0) score -= 15;

    // Check canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) score -= 10;

    return Math.max(0, score);
  };

  const runSecurityChecks = (): number => {
    let score = 100;
    
    // Check for HTTPS
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') score -= 30;

    // Check for security headers
    const hasCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!hasCSP) score -= 20;

    // Check for mixed content
    const httpResources = document.querySelectorAll('[src^="http:"], [href^="http:"]');
    if (httpResources.length > 0 && location.protocol === 'https:') score -= 20;

    // Check for external links without rel attributes
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="libertasafrica.com"]):not([rel])');
    score -= externalLinks.length * 2;

    return Math.max(0, score);
  };

  const runPWAChecks = (): number => {
    let score = 100;
    
    // Check for manifest
    const manifest = document.querySelector('link[rel="manifest"]');
    if (!manifest) score -= 25;

    // Check for service worker
    if (!('serviceWorker' in navigator)) score -= 25;

    // Check for viewport meta
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) score -= 15;

    // Check for theme color
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) score -= 10;

    // Check for icons
    const icons = document.querySelectorAll('link[rel*="icon"]');
    if (icons.length === 0) score -= 15;

    return Math.max(0, score);
  };

  return null;
};