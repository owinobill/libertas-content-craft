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
      
      {/* Critical CSS should be inlined, but we can preload fonts */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style" />
      
      {/* Defer non-critical scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
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