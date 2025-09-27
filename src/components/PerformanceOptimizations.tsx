import { Helmet } from "react-helmet-async";

export const PerformanceOptimizations = () => {
  return (
    <Helmet>
      {/* Resource Hints for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://zznubsevogfqoxgkdnzg.supabase.co" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" as="image" />
      <link rel="preload" href="/libertas-logo.png" as="image" />
      
      {/* Defer non-critical scripts and load fonts asynchronously */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Async load Google Fonts to prevent render blocking
            (function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
              link.media = 'print';
              link.onload = function() { this.media = 'all'; };
              document.head.appendChild(link);
            })();
            
            // Defer non-critical JavaScript
            window.addEventListener('load', function() {
              // Load non-critical scripts here
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }
            });
          `
        }}
      />
    </Helmet>
  );
};