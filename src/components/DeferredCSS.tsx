import { useEffect } from 'react';

export const DeferredCSS = () => {
  useEffect(() => {
    // Aggressively defer all non-critical CSS
    const loadNonCriticalCSS = () => {
      // Load the main CSS bundle after critical rendering
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/src/index.css'; // Will be bundled by Vite
      link.media = 'print';
      link.onload = function() {
        (this as any).media = 'all';
        // Remove critical CSS once full styles load
        document.documentElement.classList.add('full-styles-loaded');
      };
      
      // Only load if not already present
      const existingLink = document.querySelector('link[href*="index"][href*=".css"]');
      if (!existingLink) {
        document.head.appendChild(link);
      }
    };

    // Use requestIdleCallback for minimal performance impact
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadNonCriticalCSS, { timeout: 2000 });
    } else {
      // Fallback: load after hero is visible
      setTimeout(loadNonCriticalCSS, 500);
    }

    // Backup: Ensure styles load within reasonable time
    setTimeout(() => {
      if (!document.documentElement.classList.contains('full-styles-loaded')) {
        loadNonCriticalCSS();
      }
    }, 3000);
  }, []);

  return null;
};