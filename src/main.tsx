import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ProductionReadyApp } from '@/components/ProductionReadyApp';
import App from './App.tsx';
import './index.css';

// Performance monitoring
if (typeof window !== 'undefined') {
  // Report Web Vitals
  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
    onCLS(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
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
