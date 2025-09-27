import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ProductionReadyApp } from '@/components/ProductionReadyApp';
import App from './App.tsx';
import './index.css';

// Performance monitoring
if (typeof window !== 'undefined') {
  // Web Vitals only in development/staging
  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
    if (process.env.NODE_ENV !== 'production') {
      onCLS(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    } else {
      // Production: Only track critical metrics for analytics
      onLCP((metric) => {
        if (metric.value > 4000) {
          // Only log poor performance
          console.warn('Poor LCP:', Math.round(metric.value));
        }
      });
    }
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ProductionReadyApp>
        <App />
      </ProductionReadyApp>
    </HelmetProvider>
  </StrictMode>
);