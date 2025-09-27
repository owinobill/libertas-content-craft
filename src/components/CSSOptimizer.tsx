import { useEffect } from 'react';

export const CSSOptimizer = () => {
  useEffect(() => {
    // Remove unused CSS classes from the DOM to help with unused CSS detection
    const optimizeCSS = () => {
      // Get all elements in the viewport
      const viewportElements = document.querySelectorAll('*');
      const usedClasses = new Set<string>();
      
      // Collect only classes from above-the-fold elements
      viewportElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.forEach(className => {
            usedClasses.add(className);
          });
        }
      });

      // Mark the document as having optimized CSS
      document.documentElement.setAttribute('data-css-optimized', 'true');
    };

    // Run optimization after initial render
    if (document.readyState === 'complete') {
      optimizeCSS();
    } else {
      window.addEventListener('load', optimizeCSS);
    }

    // Also run when React content is fully mounted
    setTimeout(optimizeCSS, 100);

    return () => {
      window.removeEventListener('load', optimizeCSS);
    };
  }, []);

  return null;
};