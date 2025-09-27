import { useEffect } from 'react';

export const MobileOptimizer = () => {
  useEffect(() => {
    // Mobile-specific optimizations
    const optimizeForMobile = () => {
      // Prevent zoom on focus for iOS
      const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
      if (viewport) {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover';
        }
      }

      // Add iOS specific classes
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.documentElement.classList.add('ios');
        
        // iOS Safari viewport height fix
        const setIOSViewportHeight = () => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        setIOSViewportHeight();
        window.addEventListener('orientationchange', () => {
          setTimeout(setIOSViewportHeight, 500);
        });
      }

      // Android specific optimizations
      if (/Android/.test(navigator.userAgent)) {
        document.documentElement.classList.add('android');
      }

      // Touch device optimizations
      if ('ontouchstart' in window) {
        document.documentElement.classList.add('touch');
        
        // Improve touch responsiveness
        document.addEventListener('touchstart', () => {}, { passive: true });
        
        // Prevent double-tap zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
          const now = (new Date()).getTime();
          if (now - lastTouchEnd <= 300) {
            event.preventDefault();
          }
          lastTouchEnd = now;
        }, { passive: false });
      }

      // Reduce animations on low-powered devices
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        document.documentElement.classList.add('low-performance');
      }

      // Handle safe area insets for devices with notches
      if (CSS.supports('padding-top: env(safe-area-inset-top)')) {
        document.documentElement.classList.add('safe-area-insets');
      }

      // Optimize for slow connections
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
          document.documentElement.classList.add('slow-connection');
          console.warn('Slow connection detected, reducing resource usage');
        }
      }

      // Battery optimization
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          if (battery.level < 0.2) {
            document.documentElement.classList.add('low-battery');
            console.warn('Low battery detected, reducing animations');
          }
        });
      }

      // Keyboard handling for mobile
      let initialViewportHeight = window.innerHeight;
      
      const handleResize = () => {
        const currentHeight = window.innerHeight;
        const heightDiff = initialViewportHeight - currentHeight;
        
        // If height reduced significantly, keyboard is likely open
        if (heightDiff > 150) {
          document.documentElement.classList.add('keyboard-open');
        } else {
          document.documentElement.classList.remove('keyboard-open');
        }
      };

      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    const cleanup = optimizeForMobile();
    
    return cleanup;
  }, []);

  return null;
};