import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, targetId: string | Date, config?: any) => void;
    dataLayer: any[];
  }
}

interface AnalyticsEvent {
  event_name: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export const useAnalytics = (trackingId?: string) => {
  const location = useLocation();

  useEffect(() => {
    if (trackingId && typeof window !== 'undefined') {
      // Defer analytics loading to prevent forced reflows during critical rendering
      const loadAnalytics = () => {
        // Check if already loaded
        if (window.gtag) return;

        // Initialize Google Analytics with minimal reflow impact
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        
        // Load analytics after critical rendering
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function() {
            window.dataLayer.push(arguments);
          };

          // Use requestAnimationFrame to avoid blocking critical path
          requestAnimationFrame(() => {
            window.gtag('js', new Date());
            window.gtag('config', trackingId, {
              page_title: document.title,
              page_location: window.location.href,
              page_path: location.pathname,
              // Disable automatic pageview tracking to prevent forced reflows
              send_page_view: false,
            });
          });
        };

        document.head.appendChild(script);
      };

      // Use requestIdleCallback to load analytics when browser is idle
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadAnalytics, { timeout: 3000 });
      } else {
        // Fallback: load after critical rendering
        setTimeout(loadAnalytics, 1000);
      }
    }
  }, [trackingId]);

  // Track page views
  useEffect(() => {
    if (trackingId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });

      // Custom page view tracking
      trackEvent({
        event_name: 'page_view',
        event_category: 'engagement',
        custom_parameters: {
          page_path: location.pathname,
          page_title: document.title,
        }
      });
    }
  }, [location, trackingId]);

  const trackEvent = (eventData: AnalyticsEvent) => {
    // Batch analytics calls to prevent forced reflows
    if (typeof window !== 'undefined' && window.gtag) {
      // Use requestAnimationFrame to batch DOM reads/writes
      requestAnimationFrame(() => {
        window.gtag('event', eventData.event_name, {
          event_category: eventData.event_category,
          event_label: eventData.event_label,
          value: eventData.value,
          ...eventData.custom_parameters,
        });
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventData);
    }
  };

  const trackConversion = (conversionLabel: string, value?: number) => {
    trackEvent({
      event_name: 'conversion',
      event_category: 'goal',
      event_label: conversionLabel,
      value,
    });
  };

  const trackBusinessEvent = (eventType: 'contact_form' | 'cta_click' | 'article_read' | 'solution_view', metadata?: Record<string, any>) => {
    trackEvent({
      event_name: eventType,
      event_category: 'business',
      custom_parameters: {
        timestamp: new Date().toISOString(),
        ...metadata,
      }
    });
  };

  return {
    trackEvent,
    trackConversion,
    trackBusinessEvent,
  };
};

// Hook for performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Observer not supported
      }

      return () => observer.disconnect();
    }
  }, []);
};