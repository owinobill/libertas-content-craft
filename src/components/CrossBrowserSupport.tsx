import { useEffect } from 'react';

export const CrossBrowserSupport = () => {
  useEffect(() => {
    // Polyfills and compatibility checks
    const addPolyfills = () => {
      // CSS custom properties fallback for older browsers
      if (!CSS.supports('color', 'var(--test)')) {
        console.warn('CSS custom properties not supported, consider adding polyfill');
      }

      // Intersection Observer polyfill check
      if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported');
      }

      // ResizeObserver polyfill check
      if (!('ResizeObserver' in window)) {
        console.warn('ResizeObserver not supported');
      }

      // Smooth scrolling fallback
      if (!CSS.supports('scroll-behavior', 'smooth')) {
        // Add smooth scrolling polyfill behavior
        const smoothScrollPolyfill = () => {
          const links = document.querySelectorAll('a[href^="#"]');
          links.forEach(link => {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              const target = document.querySelector(link.getAttribute('href') || '');
              if (target) {
                target.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });
        };
        smoothScrollPolyfill();
      }

      // Backdrop filter support check
      if (!CSS.supports('backdrop-filter', 'blur(10px)')) {
        console.warn('Backdrop filter not supported, using fallback styles');
        document.documentElement.classList.add('no-backdrop-filter');
      }

      // Grid layout support
      if (!CSS.supports('display', 'grid')) {
        console.warn('CSS Grid not supported');
        document.documentElement.classList.add('no-grid');
      }

      // Flexbox gap support
      if (!CSS.supports('gap', '1rem')) {
        console.warn('Flexbox gap not supported');
        document.documentElement.classList.add('no-gap');
      }

      // Check for reduced motion preference
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduce-motion');
      }

      // Touch device detection
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (isTouchDevice) {
        document.documentElement.classList.add('touch-device');
      }

      // High contrast mode detection
      if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      }

      // Dark mode preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('prefers-dark');
      }
    };

    // Browser compatibility checks
    const runCompatibilityChecks = () => {
      const issues: string[] = [];

      // Check for essential features
      if (!window.fetch) issues.push('Fetch API not supported');
      if (!window.Promise) issues.push('Promises not supported');
      if (!Array.prototype.includes) issues.push('Array.includes not supported');
      if (!Object.assign) issues.push('Object.assign not supported');

      // Check for modern JavaScript features
      try {
        new Function('const test = () => {}; test();')();
      } catch {
        issues.push('Arrow functions not supported');
      }

      try {
        new Function('const {test} = {test: 1};')();
      } catch {
        issues.push('Destructuring not supported');
      }

      // Log compatibility issues
      if (issues.length > 0 && process.env.NODE_ENV !== 'production') {
        console.group('🔧 Browser Compatibility Issues:');
        issues.forEach(issue => console.warn(`- ${issue}`));
        console.groupEnd();
      }
    };

    addPolyfills();
    runCompatibilityChecks();

    // Listen for orientation changes
    const handleOrientationChange = () => {
      // Fix viewport height on mobile after orientation change
      setTimeout(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    // Initial viewport height calculation
    handleOrientationChange();

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return null;
};