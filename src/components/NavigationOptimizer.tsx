import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const NavigationOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // Critical navigation optimizations
    const optimizeNavigation = () => {
      // 1. Preload critical routes
      const criticalRoutes = ['/solutions', '/insights-hub'];
      criticalRoutes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });

      // 2. Optimize images for faster loading
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });

      // 3. Remove animation delays on navigation
      const navElements = document.querySelectorAll('nav *, header *');
      navElements.forEach((el: any) => {
        if (el.style) {
          el.style.transitionDuration = '0.15s';
        }
      });

      // 4. Ensure smooth scrolling performance
      document.documentElement.style.scrollBehavior = 'smooth';

      // 5. Log optimization completion
      console.warn('✅ Navigation optimized for', location.pathname);
    };

    // Run immediately
    optimizeNavigation();

    // Also run after component updates
    const timer = setTimeout(optimizeNavigation, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};