import { useEffect } from 'react';

export const DeferredCSS = () => {
  useEffect(() => {
    // Simple CSS optimization - just hide skeleton
    const skeleton = document.getElementById('fcp-skeleton');
    if (skeleton) {
      skeleton.style.display = 'none';
    }
  }, []);

  return null;
};