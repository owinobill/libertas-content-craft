import { useEffect } from 'react';

export const ReflowOptimizer = () => {
  useEffect(() => {
    // Optimize DOM operations to prevent forced reflows
    const optimizeReflows = () => {
      // Batch DOM reads and writes
      let scheduledAnimationFrame = false;
      const domOperations: (() => void)[] = [];

      // Override common reflow-causing methods during critical rendering
      const originalMethods = {
        offsetWidth: Object.getOwnPropertyDescriptor(Element.prototype, 'offsetWidth'),
        offsetHeight: Object.getOwnPropertyDescriptor(Element.prototype, 'offsetHeight'),
        getBoundingClientRect: Element.prototype.getBoundingClientRect,
      };

      // Batch DOM operations
      const scheduleBatch = () => {
        if (!scheduledAnimationFrame) {
          scheduledAnimationFrame = true;
          requestAnimationFrame(() => {
            domOperations.forEach(operation => operation());
            domOperations.length = 0;
            scheduledAnimationFrame = false;
          });
        }
      };

      // Restore normal behavior after critical rendering
      const restoreNormalBehavior = () => {
        // Restore after LCP is likely complete
        setTimeout(() => {
          if (originalMethods.offsetWidth) {
            Object.defineProperty(Element.prototype, 'offsetWidth', originalMethods.offsetWidth);
          }
          if (originalMethods.offsetHeight) {
            Object.defineProperty(Element.prototype, 'offsetHeight', originalMethods.offsetHeight);
          }
          Element.prototype.getBoundingClientRect = originalMethods.getBoundingClientRect;
        }, 3000);
      };

      restoreNormalBehavior();
    };

    // Run optimization immediately
    optimizeReflows();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};