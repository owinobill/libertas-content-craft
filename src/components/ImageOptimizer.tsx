import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const ImageOptimizer = () => {
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      let optimizationIssues = 0;

      images.forEach((img, index) => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute('loading') && index > 2) {
          img.setAttribute('loading', 'lazy');
        }

        // Add fetchpriority="high" to hero images
        if (index < 2 && !img.hasAttribute('fetchpriority')) {
          img.setAttribute('fetchpriority', 'high');
        }

        // Check for missing alt attributes
        if (!img.hasAttribute('alt')) {
          logger.warn('Image missing alt attribute:', img.src);
          optimizationIssues++;
        }

        // Check for oversized images
        img.onload = () => {
          const naturalWidth = img.naturalWidth;
          const displayWidth = img.offsetWidth;
          
          if (naturalWidth > displayWidth * 2) {
            logger.warn('Image possibly oversized:', {
              src: img.src,
              natural: naturalWidth,
              display: displayWidth,
              waste: Math.round((naturalWidth - displayWidth) / naturalWidth * 100) + '%'
            });
            optimizationIssues++;
          }
        };

        // Add error handling
        if (!img.onerror) {
          img.onerror = () => {
            logger.error('Image failed to load:', img.src);
            
            // Provide fallback
            if (!img.dataset.fallbackSet) {
              img.dataset.fallbackSet = 'true';
              const fallback = '/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png';
              if (img.src !== fallback) {
                img.src = fallback;
              }
            }
          };
        }
      });

      // Report optimization status
      if (optimizationIssues === 0) {
        logger.debug('✅ All images optimized');
      } else {
        logger.warn(`📸 ${optimizationIssues} image optimization issues found`);
      }
    };

    // Optimize images after load
    if (document.readyState === 'complete') {
      optimizeImages();
    } else {
      window.addEventListener('load', optimizeImages);
    }

    // Lazy load intersection observer for better performance
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            lazyImageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });

    // Observe lazy images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => lazyImageObserver.observe(img));

    return () => {
      lazyImageObserver.disconnect();
    };
  }, []);

  return null;
};