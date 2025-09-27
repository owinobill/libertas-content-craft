import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const ProductionQuality = () => {
  useEffect(() => {
    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navigationEntry = entry as PerformanceNavigationTiming;
          
          // Monitor critical metrics
          if (navigationEntry.loadEventEnd > 0) {
            const loadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
            
            // Log slow pages (> 3s)
            if (loadTime > 3000) {
              console.warn('Slow page load detected:', {
                url: window.location.href,
                loadTime: Math.round(loadTime),
                timestamp: new Date().toISOString()
              });
            }
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      // Fallback for older browsers
      console.debug('Performance observer not supported');
    }

    // Error monitoring
    const handleError = (event: ErrorEvent) => {
      console.error('JavaScript error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', {
        reason: event.reason,
        url: window.location.href,
        timestamp: new Date().toISOString()
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      observer.disconnect();
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <Helmet>
      {/* Production Quality Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Libertas Africa",
          "description": "Strategic consulting and advisory solutions in the financial sector",
          "url": "https://libertasafrica.com",
          "logo": "https://libertasafrica.com/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254-20-5253963",
            "contactType": "customer service",
            "email": "connect@libertasafrica.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Eaton Place, Market Rd, Gigiri",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "sameAs": [
            "https://www.linkedin.com/company/libertas-africa/"
          ]
        })}
      </script>
    </Helmet>
  );
};