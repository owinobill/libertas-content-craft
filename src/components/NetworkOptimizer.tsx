import { useEffect } from 'react';

export const NetworkOptimizer = () => {
  useEffect(() => {
    // Optimize network dependency chains
    const optimizeNetworkChains = () => {
      // Preload critical resources to break dependency chains
      const criticalResources = [
        {
          href: 'https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        }
      ];

      criticalResources.forEach(resource => {
        const existingLink = document.querySelector(`link[href="${resource.href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.href;
          link.as = resource.as;
          if (resource.type) link.type = resource.type;
          if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
          document.head.appendChild(link);
        }
      });

      // Establish connections to critical origins in parallel
      const criticalOrigins = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      criticalOrigins.forEach(origin => {
        const existingPreconnect = document.querySelector(`link[rel="preconnect"][href="${origin}"]`);
        if (!existingPreconnect) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = origin;
          if (origin.includes('gstatic')) {
            link.crossOrigin = 'anonymous';
          }
          document.head.appendChild(link);
        }
      });
    };

    // Run immediately to break chains
    optimizeNetworkChains();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};