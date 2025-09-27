import { Helmet } from "react-helmet-async";

export const PerformanceOptimizations = () => {
  return (
    <Helmet>
      {/* Resource Hints for Performance */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://zznubsevogfqoxgkdnzg.supabase.co" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" as="image" />
      <link rel="preload" href="/libertas-logo.png" as="image" />
      
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