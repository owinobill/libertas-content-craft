import { useEffect } from 'react';

export const DeferredCSS = () => {
  useEffect(() => {
    // Defer loading of main CSS bundle
    const loadCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/src/index.css'; // This will be bundled by Vite
      (link as any).media = 'print';
      link.onload = function() {
        (this as any).media = 'all';
      };
      document.head.appendChild(link);
      
      // Fallback for older browsers
      const noscript = document.createElement('noscript');
      const fallbackLink = document.createElement('link');
      fallbackLink.rel = 'stylesheet';
      fallbackLink.href = '/src/index.css';
      noscript.appendChild(fallbackLink);
      document.head.appendChild(noscript);
    };

    // Load CSS after initial render
    if (document.readyState === 'complete') {
      loadCSS();
    } else {
      window.addEventListener('load', loadCSS);
    }

    return () => {
      window.removeEventListener('load', loadCSS);
    };
  }, []);

  return null;
};