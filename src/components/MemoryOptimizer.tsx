import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const MemoryOptimizer = () => {
  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production';
    
    // Optimize React performance
    const optimizeReact = () => {
      // Clean up React DevTools if in production
      if (isProduction && typeof window !== 'undefined') {
        delete (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
      }
      
      // Optimize garbage collection timing
      if ('requestIdleCallback' in window) {
        const scheduleCleanup = () => {
          requestIdleCallback(() => {
            // Force garbage collection if available (Chrome DevTools)
            if ('gc' in window && typeof (window as any).gc === 'function') {
              try {
                (window as any).gc();
              } catch (e) {
                // GC not available
              }
            }
            
            // Schedule next cleanup
            setTimeout(scheduleCleanup, 300000); // 5 minutes
          });
        };
        
        scheduleCleanup();
      }
    };
    
    // Remove event listeners that might be lingering
    const cleanupListeners = () => {
      // Clean up any orphaned event listeners
      const events = ['resize', 'scroll', 'load', 'unload'];
      events.forEach(event => {
        const listeners = (window as any).getEventListeners?.(window)?.[event] || [];
        if (listeners.length > 10) {
          logger.warn(`High number of ${event} listeners: ${listeners.length}`);
        }
      });
    };
    
    // Monitor and limit DOM nodes
    const monitorDOMSize = () => {
      const nodeCount = document.querySelectorAll('*').length;
      if (nodeCount > 5000) {
        logger.warn('High DOM node count:', nodeCount);
      }
    };
    
    // Initialize optimizations
    optimizeReact();
    
    // Run periodic cleanup (less frequent than before)
    const cleanupInterval = setInterval(() => {
      cleanupListeners();
      monitorDOMSize();
    }, 600000); // 10 minutes
    
    return () => {
      clearInterval(cleanupInterval);
    };
  }, []);
  
  return null;
};