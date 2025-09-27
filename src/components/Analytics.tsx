import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface AnalyticsProviderProps {
  measurementId?: string;
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ measurementId, children }: AnalyticsProviderProps) => {
  // Initialize analytics
  useAnalytics(measurementId);

  // Track Web Vitals with optimized timing to prevent forced reflows
  useEffect(() => {
    if (typeof window !== 'undefined' && measurementId) {
      // Defer web vitals tracking to prevent reflows during critical rendering
      const loadWebVitals = () => {
        import('web-vitals').then((webVitals) => {
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;
          
          // Batch vitals reporting to prevent forced reflows
          const reportVital = (metric: any, label: string) => {
            if (window.gtag) {
              // Use requestIdleCallback to avoid blocking critical path
              if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(() => {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: label,
                    value: Math.round(metric.value * (label === 'CLS' ? 1000 : 1)),
                    non_interaction: true,
                  });
                });
              }
            }
          };

          onCLS((metric) => reportVital(metric, 'CLS'));
          onFCP((metric) => reportVital(metric, 'FCP'));
          onLCP((metric) => reportVital(metric, 'LCP'));
          onTTFB((metric) => reportVital(metric, 'TTFB'));
        }).catch(() => {
          // web-vitals not available
        });
      };

      // Load web vitals tracking after critical rendering
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadWebVitals, { timeout: 5000 });
      } else {
        setTimeout(loadWebVitals, 2000);
      }
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