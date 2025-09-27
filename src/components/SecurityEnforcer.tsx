import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const SecurityEnforcer = () => {
  useEffect(() => {
    // CSP violation reporting
    const handleCSPViolation = (event: SecurityPolicyViolationEvent) => {
      logger.error('CSP Violation:', {
        blockedURI: event.blockedURI,
        violatedDirective: event.violatedDirective,
        originalPolicy: event.originalPolicy,
        timestamp: new Date().toISOString()
      });
    };

    // Add CSP violation listener
    document.addEventListener('securitypolicyviolation', handleCSPViolation);

    // Input sanitization checks
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
          const value = input.value;
          
          // Check for XSS attempts
          const xssPatterns = [
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            /javascript:/gi,
            /on\w+\s*=/gi,
            /<iframe/gi,
            /<object/gi,
            /<embed/gi
          ];
          
          const hasXSS = xssPatterns.some(pattern => pattern.test(value));
          if (hasXSS) {
            logger.error('Potential XSS attempt detected in input:', {
              element: input.name || input.id || input.className,
              value: value.substring(0, 100),
              timestamp: new Date().toISOString()
            });
            
            // Clear the input
            input.value = '';
            input.style.borderColor = 'red';
            setTimeout(() => {
              input.style.borderColor = '';
            }, 3000);
          }
        }
      });
    };

    // Check inputs on focus out
    document.addEventListener('focusout', (event) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        const value = event.target.value;
        
        // Quick XSS check
        if (value.includes('<script') || value.includes('javascript:') || value.includes('on=')) {
          logger.warn('Suspicious input detected');
          event.target.value = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        }
      }
    });

    // Monitor for suspicious activity
    const monitorSuspiciousActivity = () => {
      let rapidClicks = 0;
      let lastClick = 0;
      
      document.addEventListener('click', () => {
        const now = Date.now();
        if (now - lastClick < 100) {
          rapidClicks++;
          if (rapidClicks > 10) {
            logger.warn('Rapid clicking detected - possible bot activity');
            rapidClicks = 0;
          }
        } else {
          rapidClicks = 0;
        }
        lastClick = now;
      });
    };

    // Check for mixed content
    const checkMixedContent = () => {
      if (location.protocol === 'https:') {
        const httpResources = document.querySelectorAll('[src^="http:"], [href^="http:"]');
        if (httpResources.length > 0) {
          logger.warn('Mixed content detected:', httpResources.length + ' insecure resources');
        }
      }
    };

    // Check external links security
    const checkExternalLinks = () => {
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="libertasafrica.com"])');
      externalLinks.forEach((link) => {
        if (!link.hasAttribute('rel') || !link.getAttribute('rel')?.includes('noopener')) {
          logger.warn('External link missing security attributes:', link.getAttribute('href'));
          // Auto-fix
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    };

    // Initialize security checks
    monitorSuspiciousActivity();
    setTimeout(() => {
      checkMixedContent();
      checkExternalLinks();
    }, 1000);

    return () => {
      document.removeEventListener('securitypolicyviolation', handleCSPViolation);
    };
  }, []);

  return null;
};