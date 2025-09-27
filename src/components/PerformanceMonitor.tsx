import { useEffect } from 'react';

interface PerformanceMetrics {
  cls: number;
  lcp: number;
  fid: number;
  ttfb: number;
}

export const PerformanceMonitor = () => {
  useEffect(() => {
    let metrics: Partial<PerformanceMetrics> = {};

    // Monitor CLS
    let clsValue = 0;
    let clsEntries: LayoutShift[] = [];
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as LayoutShift[]) {
        if (!entry.hadRecentInput) {
          clsEntries.push(entry);
          clsValue += entry.value;
        }
      }
      metrics.cls = clsValue;
      
      // Log if CLS is poor (> 0.25)
      if (clsValue > 0.25) {
        console.warn('Poor CLS detected:', {
          value: clsValue,
          url: window.location.href,
          entries: clsEntries.length
        });
      }
    });

    // Monitor LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceNavigationTiming;
      const lcpValue = lastEntry.startTime;
      metrics.lcp = lcpValue;
      
      // Log if LCP is poor (> 4000ms)
      if (lcpValue > 4000) {
        console.warn('Poor LCP detected:', {
          value: Math.round(lcpValue),
          url: window.location.href,
          element: (lastEntry as any).element?.tagName || 'unknown'
        });
      }
    });

    // Monitor navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const navEntry = entry as PerformanceNavigationTiming;
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        metrics.ttfb = ttfb;
        
        // Log slow TTFB (> 600ms)
        if (ttfb > 600) {
          console.warn('Slow TTFB detected:', {
            value: Math.round(ttfb),
            url: window.location.href
          });
        }
      }
    });

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      navigationObserver.observe({ type: 'navigation', buffered: true });
    } catch (error) {
      console.debug('Performance observers not fully supported');
    }

    // Check for memory leaks
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / memory.totalJSHeapSize;
        
        // Warn if memory usage is > 90%
        if (memoryUsage > 0.9) {
          console.warn('High memory usage detected:', {
            usage: Math.round(memoryUsage * 100) + '%',
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB'
          });
        }
      }
    };

    // Check memory every 30 seconds
    const memoryInterval = setInterval(checkMemory, 30000);

    return () => {
      clsObserver.disconnect();
      lcpObserver.disconnect();
      navigationObserver.disconnect();
      clearInterval(memoryInterval);
    };
  }, []);

  return null;
};