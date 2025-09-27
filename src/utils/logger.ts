// Production-optimized logger
const isDev = process.env.NODE_ENV !== 'production';

export const logger = {
  debug: (...args: any[]) => {
    if (isDev) console.debug(...args);
  },
  
  info: (...args: any[]) => {
    if (isDev) console.info(...args);
  },
  
  warn: (...args: any[]) => {
    console.warn(...args); // Always show warnings
  },
  
  error: (...args: any[]) => {
    console.error(...args); // Always show errors
  },
  
  // Analytics logging - only in production for real metrics
  analytics: (...args: any[]) => {
    if (!isDev) {
      // Send to analytics service instead of console
      // console.log(...args);
    }
  },
  
  // Performance logging - critical issues only in production
  performance: (message: string, data?: any) => {
    if (isDev) {
      console.log(`⚡ ${message}`, data);
    } else if (data?.value > 4000 || data?.rating === 'poor') {
      console.warn(`⚡ ${message}`, data);
    }
  }
};

// Memory management utilities
export const memoryUtils = {
  // Clean up unused objects
  cleanup: () => {
    if (typeof window !== 'undefined' && 'gc' in window) {
      (window as any).gc();
    }
  },
  
  // Check memory usage with throttling
  checkMemory: (() => {
    let lastWarning = 0;
    const THROTTLE_MS = 300000; // 5 minutes between warnings
    
    return () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usage = memory.usedJSHeapSize / memory.totalJSHeapSize;
        const now = Date.now();
        
        if (usage > 0.85 && (now - lastWarning) > THROTTLE_MS) {
          logger.warn('High memory usage detected:', {
            usage: Math.round(usage * 100) + '%',
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB'
          });
          lastWarning = now;
          return false;
        }
        return usage < 0.9; // Only return false if critically high
      }
      return true;
    };
  })()
};