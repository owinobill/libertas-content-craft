import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fcp?: number;
  cls?: number;
  fid?: number;
  ttfb?: number;
}

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Only run performance monitoring in production
    if (process.env.NODE_ENV !== 'production') return;

    let hasLogged = false;

    // Monitor LCP
    const lcpObserver = new PerformanceObserver((list) => {
      if (hasLogged) return;
      
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry.startTime > 2500) { // Only log if LCP > 2.5s
        console.warn('⚠️ Poor LCP Performance:', {
          lcp: Math.round(lastEntry.startTime),
          target: '< 2.5s',
          url: window.location.pathname
        });
        hasLogged = true;
      }

      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });

    // Monitor CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      if (hasLogged) return;
      
      for (const entry of list.getEntries() as LayoutShift[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      
      if (clsValue > 0.1) { // Only log if CLS > 0.1
        console.warn('⚠️ Poor CLS Performance:', {
          cls: clsValue.toFixed(3),
          target: '< 0.1',
          url: window.location.pathname
        });
        hasLogged = true;
      }

      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      
      // Auto-disconnect after 10 seconds
      setTimeout(() => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
      }, 10000);
    } catch (error) {
      // Performance observers not supported
    }

    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Don't render anything
  return null;
};

// Export hook for accessing metrics
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Get navigation timing
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (nav) {
      setMetrics(prev => ({
        ...prev,
        ttfb: nav.responseStart - nav.requestStart,
        fcp: nav.domContentLoadedEventEnd - nav.fetchStart
      }));
    }
  }, []);

  return metrics;
};