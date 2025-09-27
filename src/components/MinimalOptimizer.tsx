import { useEffect } from 'react';

export const MinimalOptimizer = () => {
  useEffect(() => {
    // Remove skeleton after React content loads
    const hideSkeleton = () => {
      const skeleton = document.getElementById('fcp-skeleton');
      if (skeleton) {
        skeleton.style.display = 'none';
      }
    };

    // Hide skeleton immediately
    hideSkeleton();
    
    // Fallback on window load
    if (document.readyState === 'complete') {
      hideSkeleton();
    } else {
      window.addEventListener('load', hideSkeleton);
      return () => window.removeEventListener('load', hideSkeleton);
    }
  }, []);

  return null;
};