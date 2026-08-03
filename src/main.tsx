import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ProductionReadyApp } from '@/components/ProductionReadyApp';
import App from './App.tsx';
import './index.css';

// Performance monitoring (skipped during react-snap prerendering)
const isPrerendering =
  typeof navigator !== 'undefined' && /ReactSnap/i.test(navigator.userAgent);

if (typeof window !== 'undefined' && !isPrerendering) {
  // Report Web Vitals
  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
    onCLS(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
  });
}

const rootElement = document.getElementById("root")!;

const tree = (
  <StrictMode>
    <HelmetProvider>
      <ProductionReadyApp>
        <App />
      </ProductionReadyApp>
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  // Prerendered by react-snap — hydrate instead of re-rendering
  hydrateRoot(rootElement, tree);
} else {
  createRoot(rootElement).render(tree);
}
