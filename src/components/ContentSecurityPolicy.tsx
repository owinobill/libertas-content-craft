import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const ContentSecurityPolicy = () => {
  useEffect(() => {
    // Enhanced CSP implementation
    const enforceCSP = () => {
      // Check if CSP is properly configured
      const metaCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!metaCSP) {
        logger.warn('Content Security Policy not found in meta tags');
      }

      // Monitor for CSP violations
      document.addEventListener('securitypolicyviolation', (e) => {
        logger.error('CSP Violation:', {
          blockedURI: e.blockedURI,
          violatedDirective: e.violatedDirective,
          originalPolicy: e.originalPolicy,
          timestamp: new Date().toISOString(),
          url: window.location.href
        });
      });

      // Check for inline styles and scripts (CSP violations)
      const inlineScripts = document.querySelectorAll('script:not([src])');
      const inlineStyles = document.querySelectorAll('style');
      
      if (inlineScripts.length > 2) { // Allow some for critical functionality
        logger.warn(`Found ${inlineScripts.length} inline scripts - consider external files`);
      }

      if (inlineStyles.length > 1) {
        logger.warn(`Found ${inlineStyles.length} inline styles - consider external CSS`);
      }

      // Check for unsafe inline event handlers
      const elementsWithInlineHandlers = document.querySelectorAll('[onclick], [onload], [onerror], [onmouseover]');
      if (elementsWithInlineHandlers.length > 0) {
        logger.error(`Found ${elementsWithInlineHandlers.length} elements with inline event handlers - CSP violation risk`);
      }

      // Validate external resource domains
      const externalResources = document.querySelectorAll('[src], [href]');
      const allowedDomains = [
        'libertasafrica.com',
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.googletagmanager.com',
        'www.google-analytics.com',
        'zznubsevogfqoxgkdnzg.supabase.co'
      ];

      externalResources.forEach((element) => {
        const url = element.getAttribute('src') || element.getAttribute('href');
        if (url && url.startsWith('http')) {
          try {
            const domain = new URL(url).hostname;
            if (!allowedDomains.some(allowed => domain.includes(allowed))) {
              logger.warn('External resource from unallowed domain:', {
                domain,
                url: url.substring(0, 100),
                element: element.tagName
              });
            }
          } catch (error) {
            logger.error('Invalid URL found:', url);
          }
        }
      });
    };

    // Apply strict CSP headers via meta tag if not already present
    const addCSPMeta = () => {
      const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!existingCSP) {
        const cspMeta = document.createElement('meta');
        cspMeta.httpEquiv = 'Content-Security-Policy';
        cspMeta.content = `
          default-src 'self';
          script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: https: blob:;
          connect-src 'self' https://zznubsevogfqoxgkdnzg.supabase.co https://www.google-analytics.com;
          frame-ancestors 'none';
          base-uri 'self';
          form-action 'self';
        `.replace(/\s+/g, ' ').trim();
        
        document.head.appendChild(cspMeta);
        logger.info('CSP meta tag added');
      }
    };

    // Initialize CSP enforcement
    addCSPMeta();
    setTimeout(enforceCSP, 1000);

    // Additional security headers via meta tags
    const addSecurityHeaders = () => {
      const securityHeaders = [
        ['X-Content-Type-Options', 'nosniff'],
        ['X-Frame-Options', 'DENY'],
        ['X-XSS-Protection', '1; mode=block'],
        ['Referrer-Policy', 'strict-origin-when-cross-origin']
      ];

      securityHeaders.forEach(([name, content]) => {
        if (!document.querySelector(`meta[http-equiv="${name}"]`)) {
          const meta = document.createElement('meta');
          meta.httpEquiv = name;
          meta.content = content;
          document.head.appendChild(meta);
        }
      });
    };

    addSecurityHeaders();
  }, []);

  return null;
};