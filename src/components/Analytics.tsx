import { useEffect } from 'react';
import { useAnalytics, usePerformanceMonitoring } from '@/hooks/useAnalytics';

interface AnalyticsProviderProps {
  measurementId?: string;
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ measurementId, children }: AnalyticsProviderProps) => {
  // Initialize analytics
  useAnalytics(measurementId);
  
  // Initialize performance monitoring
  usePerformanceMonitoring();

  // Track Web Vitals
  useEffect(() => {
    if (typeof window !== 'undefined' && measurementId) {
      import('web-vitals').then((webVitals) => {
        const { onCLS, onFCP, onLCP, onTTFB } = webVitals;
        
        onCLS((metric) => {
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'CLS',
              value: Math.round(metric.value * 1000),
              non_interaction: true,
            });
          }
        });

        onFCP((metric) => {
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'FCP',
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        });

        onLCP((metric) => {
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'LCP',
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        });

        onTTFB((metric) => {
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'TTFB',
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        });
      }).catch(() => {
        // web-vitals not available
      });
    }
  }, [measurementId]);

  return <>{children}</>;
};

// Enhanced Contact Form wrapper with analytics
export const withAnalytics = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const analytics = useAnalytics();
    
    return <Component {...props} analytics={analytics} />;
  };
};