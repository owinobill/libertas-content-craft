import { useEffect } from 'react';

export const LCPOptimizer = () => {
  useEffect(() => {
    // Immediate LCP optimization on React mount
    const optimizeLCP = () => {
      // Ensure LCP element is visible immediately
      const lcpCandidates = document.querySelectorAll('p.text-xl, h1, .hero-content p');
      lcpCandidates.forEach(element => {
        if (element) {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.visibility = 'visible';
        }
      });

      // Hide skeleton immediately when React content mounts
      const skeleton = document.getElementById('fcp-skeleton');
      if (skeleton) {
        // Use requestAnimationFrame for optimal timing
        requestAnimationFrame(() => {
          skeleton.style.opacity = '0';
          skeleton.style.pointerEvents = 'none';
          
          // Remove from DOM after fade
          setTimeout(() => {
            skeleton.style.display = 'none';
          }, 150);
        });
      }
    };

    // Run immediately on mount
    optimizeLCP();

    // Also run on next frame to ensure styling is applied
    requestAnimationFrame(optimizeLCP);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};