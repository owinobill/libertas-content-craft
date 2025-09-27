import { useEffect } from 'react';

export const FCPOptimizer = () => {
  useEffect(() => {
    // Hide skeleton as soon as React content is ready
    const hideSkeleton = () => {
      const skeleton = document.getElementById('fcp-skeleton');
      if (skeleton) {
        skeleton.style.display = 'none';
      }
    };

    // Hide skeleton immediately when component mounts
    hideSkeleton();

    // Also hide on window load as fallback
    if (document.readyState === 'complete') {
      hideSkeleton();
    } else {
      window.addEventListener('load', hideSkeleton);
    }

    return () => {
      window.removeEventListener('load', hideSkeleton);
    };
  }, []);

  return null;
};