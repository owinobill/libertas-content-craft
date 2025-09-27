import { useEffect } from 'react';

export const FontLoader = () => {
  useEffect(() => {
    // Asynchronously load fonts to prevent render blocking
    const loadFonts = () => {
      if ('fonts' in document) {
        // Use CSS Font Loading API if available
        const font = new FontFace(
          'Inter',
          'url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)',
          { display: 'swap' }
        );
        
        font.load().then(() => {
          document.fonts.add(font);
          document.documentElement.classList.add('fonts-loaded');
        }).catch(() => {
          // Fallback to system fonts if font loading fails
          console.log('Font loading failed, using system fonts');
        });
      }
    };

    // Load fonts after initial render
    if (document.readyState === 'complete') {
      loadFonts();
    } else {
      window.addEventListener('load', loadFonts);
    }

    return () => {
      window.removeEventListener('load', loadFonts);
    };
  }, []);

  return null;
};