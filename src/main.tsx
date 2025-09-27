import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ProductionReadyApp } from '@/components/ProductionReadyApp';
import App from './App.tsx';
import './index.css';

// Conditional performance monitoring - only load in production and when needed
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // Defer web-vitals loading to reduce initial bundle size
  const loadWebVitals = () => {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    }).catch(() => {
      // web-vitals not available
    });
  };

  // Load only after page is fully loaded
  if (document.readyState === 'complete') {
    setTimeout(loadWebVitals, 1000);
  } else {
    window.addEventListener('load', () => setTimeout(loadWebVitals, 1000), { once: true });
  }
}

console.log('Starting React app render...');

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ProductionReadyApp>
        <App />
      </ProductionReadyApp>
    </HelmetProvider>
  </StrictMode>
);

console.log('React app render completed');
