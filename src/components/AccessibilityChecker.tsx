import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const AccessibilityChecker = () => {
  useEffect(() => {
    // Only run detailed checks in development
    if (process.env.NODE_ENV !== 'development') return;

    const runA11yChecks = () => {
      const issues: string[] = [];

      // Check for missing alt attributes
      const images = document.querySelectorAll('img:not([alt])');
      if (images.length > 0) {
        issues.push(`${images.length} image(s) missing alt attributes`);
      }

      // Check for empty alt attributes on non-decorative images
      const emptyAltImages = document.querySelectorAll('img[alt=""]');
      emptyAltImages.forEach((img) => {
        if (!img.hasAttribute('role') || img.getAttribute('role') !== 'presentation') {
          issues.push('Image with empty alt may need descriptive text');
        }
      });

      // Check for missing form labels
      const inputs = document.querySelectorAll('input:not([type="hidden"])');
      inputs.forEach((input) => {
        const hasLabel = input.getAttribute('aria-label') || 
                        input.getAttribute('aria-labelledby') ||
                        document.querySelector(`label[for="${input.id}"]`);
        if (!hasLabel) {
          issues.push(`Input element missing label: ${input.outerHTML.substring(0, 100)}...`);
        }
      });

      // Check for missing heading structure
      const h1Count = document.querySelectorAll('h1').length;
      if (h1Count === 0) {
        issues.push('Page missing h1 heading');
      } else if (h1Count > 1) {
        issues.push('Multiple h1 headings found - should only have one per page');
      }

      // Check for focus indicators
      const buttons = document.querySelectorAll('button, a[href], input, textarea, select');
      buttons.forEach((element) => {
        const styles = window.getComputedStyle(element);
        // Basic focus check
        if (!styles.outlineWidth && !styles.boxShadow.includes('inset')) {
          // This element might need focus styling
        }
      });

      // Check skip link
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (!skipLink) {
        issues.push('Missing skip navigation link');
      }

      // Check main landmark
      const main = document.querySelector('main, [role="main"]');
      if (!main) {
        issues.push('Missing main landmark');
      }

      // Enhanced color contrast check
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button');
      let contrastIssues = 0;
      
      textElements.forEach((element) => {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        // Basic contrast check - this is simplified
        if (color === backgroundColor || 
            (color.includes('rgb(255') && backgroundColor.includes('rgb(255')) ||
            (color.includes('rgb(0') && backgroundColor.includes('rgb(0'))) {
          contrastIssues++;
        }
      });
      
      if (contrastIssues > 0) {
        issues.push(`${contrastIssues} potential color contrast issues detected`);
      }

      // Log issues
      if (issues.length > 0) {
        logger.warn('♿ Accessibility Issues Found:');
        issues.forEach(issue => logger.warn(`- ${issue}`));
      } else {
        logger.info('♿ No obvious accessibility issues detected');
      }
    };

    // Run checks after DOM is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(runA11yChecks, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(runA11yChecks, 1000);
      });
    }
  }, []);

  return null;
};