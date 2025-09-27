import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const CriticalPerformance = () => {
  useEffect(() => {
    // Only monitor truly critical performance issues
    const criticalThresholds = {
      LCP: 4000, // 4 seconds
      FID: 300,  // 300ms
      CLS: 0.25  // 0.25
    };
    
    let hasLogged = false;
    
    const observeCriticalMetrics = () => {
      // LCP Observer - only for critical cases
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (lastEntry.startTime > criticalThresholds.LCP && !hasLogged) {
          logger.error('Critical LCP Performance Issue:', {
            value: Math.round(lastEntry.startTime),
            threshold: criticalThresholds.LCP,
            url: window.location.pathname
          });
          hasLogged = true;
        }
      });
      
      // CLS Observer - only for critical layout shifts
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as LayoutShift[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        if (clsValue > criticalThresholds.CLS && !hasLogged) {
          logger.error('Critical CLS Performance Issue:', {
            value: clsValue,
            threshold: criticalThresholds.CLS,
            url: window.location.pathname
          });
          hasLogged = true;
        }
      });
      
      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        
        // Auto-disconnect after 30 seconds to prevent memory leaks
        setTimeout(() => {
          lcpObserver.disconnect();
          clsObserver.disconnect();
        }, 30000);
      } catch (error) {
        logger.debug('Performance observers not supported');
      }
    };
    
    // Only run if performance is critical
    if ('performance' in window) {
      observeCriticalMetrics();
    }
    
    // Monitor only critical resource loading
    const checkCriticalResources = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const slowResources = resources.filter(resource => 
        resource.duration > 5000 && 
        (resource.name.includes('.js') || resource.name.includes('.css'))
      );
      
      if (slowResources.length > 0) {
        logger.error('Critical Resource Loading Issues:', {
          count: slowResources.length,
          resources: slowResources.map(r => ({
            url: r.name.split('/').pop(),
            duration: Math.round(r.duration)
          }))
        });
      }
    };
    
    // Check resources after load
    window.addEventListener('load', () => {
      setTimeout(checkCriticalResources, 2000);
    });
    
  }, []);
  
  return null;
};