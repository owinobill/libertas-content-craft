import { useEffect, useState } from 'react';

interface PageLoadMetrics {
  isLoading: boolean;
  loadTime: number;
  error: Error | null;
}

export const usePageLoad = () => {
  const [metrics, setMetrics] = useState<PageLoadMetrics>({
    isLoading: true,
    loadTime: 0,
    error: null
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      setMetrics({
        isLoading: false,
        loadTime,
        error: null
      });

      // Report performance metrics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_load_time', {
          'custom_parameter': Math.round(loadTime)
        });
      }
    };

    const handleError = (error: ErrorEvent) => {
      setMetrics(prev => ({
        ...prev,
        isLoading: false,
        error: new Error(error.message)
      }));
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      window.addEventListener('error', handleError);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return metrics;
};