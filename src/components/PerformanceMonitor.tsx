import { useEffect } from 'react';
import { logger, memoryUtils } from '@/utils/logger';

interface PerformanceMetrics {
  cls: number;
  lcp: number;
  fid: number;
  ttfb: number;
}

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Reduce monitoring frequency in production
    const isProduction = process.env.NODE_ENV === 'production';
    
    let metrics: Partial<PerformanceMetrics> = {};

    // Monitor CLS - less aggressive in production
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as LayoutShift[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      metrics.cls = clsValue;
      
      // Only log poor CLS
      if (clsValue > 0.25) {
        logger.performance('Poor CLS detected', {
          value: clsValue,
          url: window.location.href
        });
      }
    });

    // Monitor LCP - critical for user experience
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceNavigationTiming;
      const lcpValue = lastEntry.startTime;
      metrics.lcp = lcpValue;
      
      // Log poor LCP
      if (lcpValue > 4000) {
        logger.performance('Poor LCP detected', {
          value: Math.round(lcpValue),
          url: window.location.href
        });
      }
    });

    // Monitor navigation timing - reduced frequency
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const navEntry = entry as PerformanceNavigationTiming;
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        metrics.ttfb = ttfb;
        
        // Only log slow TTFB
        if (ttfb > 800) {
          logger.performance('Slow TTFB detected', {
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
      logger.debug('Performance observers not fully supported');
    }

    // Memory check - less frequent in production
    const memoryInterval = setInterval(() => {
      if (!memoryUtils.checkMemory()) {
        // Try to cleanup memory
        memoryUtils.cleanup();
      }
    }, isProduction ? 60000 : 30000); // 1 min in prod, 30s in dev

    return () => {
      clsObserver.disconnect();
      lcpObserver.disconnect();
      navigationObserver.disconnect();
      clearInterval(memoryInterval);
    };
  }, []);

  return null;
};