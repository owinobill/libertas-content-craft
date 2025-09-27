import { Helmet } from "react-helmet-async";
import { CriticalCSS } from "@/components/CriticalCSS";
import { EnhancedSEO } from "@/components/EnhancedSEO";

interface ProductionReadyAppProps {
  children: React.ReactNode;
}

export const ProductionReadyApp = ({ children }: ProductionReadyAppProps) => {
  return (
    <>
      <Helmet>
        {/* Critical Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//zznubsevogfqoxgkdnzg.supabase.co" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" type="image/png" />
        <link rel="apple-touch-icon" href="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" as="image" />
        
        {/* Performance and Security */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://zznubsevogfqoxgkdnzg.supabase.co https://www.google-analytics.com; frame-ancestors 'none';" />
      </Helmet>
      
      <CriticalCSS />
      <EnhancedSEO />
      
      {children}
    </>
  );
};