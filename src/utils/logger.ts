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
  
  // Check memory usage
  checkMemory: () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usage = memory.usedJSHeapSize / memory.totalJSHeapSize;
      
      if (usage > 0.8) {
        logger.warn('High memory usage:', {
          usage: Math.round(usage * 100) + '%',
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB'
        });
        return false;
      }
      return true;
    }
    return true;
  }
};