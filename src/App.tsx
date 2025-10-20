import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AnalyticsProvider } from "@/components/Analytics";
import { SecurityHeaders } from "@/components/SecurityHeaders";
import { A11ySkipLink } from "@/components/A11ySkipLink";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { CriticalCSS } from "@/components/CriticalCSS";
import { EnhancedSEO } from "@/components/EnhancedSEO";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import DevTools from "./pages/DevTools";
import ContactFormDiagnostics from "./pages/ContactFormDiagnostics";

import InsightsHub from "./pages/InsightsHub";
import ArticleDebtSalesAssignments from "./pages/ArticleDebtSalesAssignments";
import ArticleDebtSalesDynamics from "./pages/ArticleDebtSalesDynamics";
import ArticleNPLEcosystemPart1 from "./pages/ArticleNPLEcosystemPart1";
import ArticleNPLEcosystemPart2 from "./pages/ArticleNPLEcosystemPart2";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <AnalyticsProvider measurementId={process.env.NODE_ENV === 'production' ? 'G-WSYGGNY21N' : undefined}>
      <ErrorBoundary>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Index />} />
            
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/detailed" element={<Solutions />} />
            <Route path="/insights-hub" element={<InsightsHub />} />
            <Route path="/insights-hub/debt-sales-assignments" element={<ArticleDebtSalesAssignments />} />
            <Route path="/insights-hub/debt-sales-dynamics" element={<ArticleDebtSalesDynamics />} />
            <Route path="/insights-hub/npl-ecosystem-part-1" element={<ArticleNPLEcosystemPart1 />} />
            <Route path="/insights-hub/npl-ecosystem-part-2" element={<ArticleNPLEcosystemPart2 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/dev-tools" element={<DevTools />} />
            <Route path="/contact-form-diagnostics" element={<ContactFormDiagnostics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        <PWAInstallPrompt />
      </ErrorBoundary>
    </AnalyticsProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
          
          {/* Preload Critical Resources */}
          <link rel="preload" href="/icon-512.png" as="image" />
          <link rel="preload" href="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" as="image" />
          
          {/* Performance and Security */}
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://zznubsevogfqoxgkdnzg.supabase.co https://www.google-analytics.com; frame-ancestors 'none';" />
        </Helmet>
        
        <CriticalCSS />
        <EnhancedSEO />
        <SecurityHeaders />
        <A11ySkipLink />
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
