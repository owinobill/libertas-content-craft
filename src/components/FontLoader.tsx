import { useEffect } from 'react';

export const FontLoader = () => {
  useEffect(() => {
    // Asynchronously load fonts to prevent render blocking
    const loadFonts = () => {
      // Create and load font CSS asynchronously
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      (link as any).media = 'print';
      link.onload = function() {
        (this as any).media = 'all';
        document.documentElement.classList.add('fonts-loaded');
      };
      
      // Insert with minimal blocking
      const existingLink = document.querySelector('link[href*="fonts.googleapis"]');
      if (!existingLink) {
        document.head.appendChild(link);
      }
      
      // Use CSS Font Loading API if available for better control
      if ('fonts' in document) {
        const font = new FontFace(
          'Inter',
          'url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)',
          { display: 'swap' }
        );
        
        font.load().then(() => {
          document.fonts.add(font);
          document.documentElement.classList.add('fonts-loaded');
        }).catch(() => {
          console.log('Font loading failed, using system fonts');
        });
      }
    };

    // Use requestIdleCallback for non-blocking loading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadFonts);
    } else {
      // Fallback: load after a short delay
      setTimeout(loadFonts, 100);
    }
  }, []);

  return null;
};