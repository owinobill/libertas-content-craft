import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AnalyticsProvider } from "@/components/Analytics";
import { SecurityHeaders } from "@/components/SecurityHeaders";
import { A11ySkipLink } from "@/components/A11ySkipLink";
import { UpdateNotification } from "@/components/UpdateNotification";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const Solutions = lazy(() => import("./pages/Solutions"));
const DevTools = lazy(() => import("./pages/DevTools"));
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
              <Route path="/dev-tools" element={<DevTools />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
        <UpdateNotification />
        <PWAInstallPrompt />
      </ErrorBoundary>
    </AnalyticsProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <SecurityHeaders />
        <A11ySkipLink />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
