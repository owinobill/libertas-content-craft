import { useEffect } from 'react';

export const FontLoader = () => {
  useEffect(() => {
    // Optimized font loading to break dependency chains
    const loadFonts = () => {
      // Skip if fonts already loading/loaded
      if (document.documentElement.classList.contains('fonts-loading') || 
          document.documentElement.classList.contains('fonts-loaded')) {
        return;
      }

      document.documentElement.classList.add('fonts-loading');

      // Load font CSS in parallel (not chained from main CSS)
      const fontCSS = document.querySelector('link[href*="fonts.googleapis.com"]');
      if (!fontCSS) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        link.onload = () => {
          document.documentElement.classList.add('fonts-loaded');
          document.documentElement.classList.remove('fonts-loading');
        };
        link.onerror = () => {
          document.documentElement.classList.remove('fonts-loading');
        };
        document.head.appendChild(link);
      }

      // Use CSS Font Loading API for better control
      if ('fonts' in document) {
        const font = new FontFace(
          'Inter',
          'url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2)',
          { display: 'swap' }
        );
        
        font.load().then(() => {
          document.fonts.add(font);
          document.documentElement.classList.add('fonts-loaded');
          document.documentElement.classList.remove('fonts-loading');
        }).catch(() => {
          document.documentElement.classList.remove('fonts-loading');
        });
      }
    };

    // Load fonts independently from CSS chain
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadFonts);
    } else {
      // Immediate parallel loading
      setTimeout(loadFonts, 0);
    }
  }, []);

  return null;
};