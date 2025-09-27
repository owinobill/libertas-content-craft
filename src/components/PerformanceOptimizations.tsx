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
      
      {/* Defer non-critical scripts and enable animations after initial paint */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Optimize LCP by deferring non-critical animations
            window.addEventListener('load', function() {
              // Enable animations after page load
              requestAnimationFrame(() => {
                const orbs = document.querySelectorAll('.absolute.top-20, .absolute.bottom-20');
                orbs.forEach(orb => {
                  orb.style.animation = 'float 6s ease-in-out infinite';
                });
              });
              
              // Load non-critical scripts here
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }
            });
            
            // Define float animation
            const style = document.createElement('style');
            style.textContent = \`
              @keyframes float {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-20px) scale(1.05); }
              }
            \`;
            document.head.appendChild(style);
          `
        }}
      />
    </Helmet>
  );
};