import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AnalyticsProvider } from "@/components/Analytics";
import { SecurityHeaders } from "@/components/SecurityHeaders";
import { A11ySkipLink } from "@/components/A11ySkipLink";
import { UpdateNotification } from "@/components/UpdateNotification";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { FontLoader } from "@/components/FontLoader";
import { DeferredCSS } from "@/components/DeferredCSS";
import { FCPOptimizer } from "@/components/FCPOptimizer";
import { LCPOptimizer } from "@/components/LCPOptimizer";
import { CSSOptimizer } from "@/components/CSSOptimizer";
import { ReflowOptimizer } from "@/components/ReflowOptimizer";
import { NetworkOptimizer } from "@/components/NetworkOptimizer";
import { ProductionQuality } from "@/components/ProductionQuality";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { AccessibilityChecker } from "@/components/AccessibilityChecker";
import { SEOOptimizer } from "@/components/SEOOptimizer";
import { CrossBrowserSupport } from "@/components/CrossBrowserSupport";
import { MobileOptimizer } from "@/components/MobileOptimizer";
import { QualityReport } from "@/components/QualityReport";
import { SecurityEnforcer } from "@/components/SecurityEnforcer";
import { ImageOptimizer } from "@/components/ImageOptimizer";
import { FormValidator } from "@/components/FormValidator";
import { ContentSecurityPolicy } from "@/components/ContentSecurityPolicy";
import { BundleOptimizer } from "@/components/BundleOptimizer";
import { FinalQualityCheck } from "@/components/FinalQualityCheck";
import { MemoryOptimizer } from "@/components/MemoryOptimizer";
import { CriticalPerformance } from "@/components/CriticalPerformance";
import { NavigationTester } from "@/components/NavigationTester";
import { ProductionReadinessValidator } from "@/components/ProductionReadinessValidator";
import { ComprehensiveQA } from "@/components/ComprehensiveQA";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Solutions = lazy(() => import("./pages/Solutions"));
const InsightsHub = lazy(() => import("./pages/InsightsHub"));
const ArticleDebtSalesAssignments = lazy(() => import("./pages/ArticleDebtSalesAssignments"));
const ArticleDebtSalesDynamics = lazy(() => import("./pages/ArticleDebtSalesDynamics"));
const ArticleNPLEcosystemPart1 = lazy(() => import("./pages/ArticleNPLEcosystemPart1"));
const ArticleNPLEcosystemPart2 = lazy(() => import("./pages/ArticleNPLEcosystemPart2"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <AnalyticsProvider measurementId={process.env.NODE_ENV === 'production' ? 'G-WSYGGNY21N' : undefined}>
      {/* Critical performance components only */}
      <FCPOptimizer />
      <LCPOptimizer />
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
        <UpdateNotification />
        <PWAInstallPrompt />
        <FontLoader />
        <DeferredCSS />
        {/* Core optimizers - reduced for performance */}
        <SEOOptimizer />
        <ImageOptimizer />
        
        {/* Development QA Suite */}
        {process.env.NODE_ENV === 'development' && (
          <>
            <ComprehensiveQA />
          </>
        )}
        
        {/* Production-only components */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <CriticalPerformance />
          </>
        )}
      </ErrorBoundary>
    </AnalyticsProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <TooltipProvider>
        <SecurityHeaders />
        <ProductionQuality />
        <ContentSecurityPolicy />
        <A11ySkipLink />
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
