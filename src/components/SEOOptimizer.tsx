import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SEOOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL when route changes
    const updateCanonical = () => {
      let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.rel = 'canonical';
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = `https://libertasafrica.com${location.pathname}`;
    };

    // SEO health checks
    const runSEOChecks = () => {
      const issues: string[] = [];

      // Check title
      const title = document.title;
      if (!title) {
        issues.push('Missing page title');
      } else if (title.length > 60) {
        issues.push(`Title too long (${title.length} chars, should be < 60)`);
      } else if (title.length < 30) {
        issues.push(`Title too short (${title.length} chars, should be 30-60)`);
      }

      // Check meta description
      const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDesc || !metaDesc.content) {
        issues.push('Missing meta description');
      } else if (metaDesc.content.length > 160) {
        issues.push(`Meta description too long (${metaDesc.content.length} chars, should be < 160)`);
      } else if (metaDesc.content.length < 120) {
        issues.push(`Meta description too short (${metaDesc.content.length} chars, should be 120-160)`);
      }

      // Check H1
      const h1s = document.querySelectorAll('h1');
      if (h1s.length === 0) {
        issues.push('Missing H1 tag');
      } else if (h1s.length > 1) {
        issues.push(`Multiple H1 tags found (${h1s.length}), should have only one`);
      }

      // Check heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > lastLevel + 1 && lastLevel > 0) {
          issues.push(`Heading hierarchy skip: ${heading.tagName} after H${lastLevel}`);
        }
        lastLevel = level;
      });

      // Check images alt attributes
      const images = document.querySelectorAll('img:not([alt])');
      if (images.length > 0) {
        issues.push(`${images.length} image(s) missing alt attributes`);
      }

      // Check internal links
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
      internalLinks.forEach((link) => {
        if (!link.textContent?.trim()) {
          issues.push('Internal link with no text content');
        }
      });

      // Check external links
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="libertasafrica.com"])');
      externalLinks.forEach((link) => {
        if (!link.hasAttribute('rel') || !link.getAttribute('rel')?.includes('noopener')) {
          issues.push('External link missing rel="noopener noreferrer"');
        }
      });

      // Check structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      if (structuredData.length === 0) {
        issues.push('No structured data found');
      }

      // Log SEO issues (only in development)
      if (process.env.NODE_ENV !== 'production' && issues.length > 0) {
        console.group('🔍 SEO Issues Found:');
        issues.forEach(issue => console.warn(`- ${issue}`));
        console.groupEnd();
      }
    };

    updateCanonical();
    
    // Run SEO checks after content loads
    setTimeout(runSEOChecks, 500);
  }, [location.pathname]);

  return null;
};