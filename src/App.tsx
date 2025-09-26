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
import { UpdateNotification } from "@/components/UpdateNotification";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";

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
    <AnalyticsProvider measurementId={process.env.NODE_ENV === 'production' ? 'G-XXXXXXXXXX' : undefined}>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        <UpdateNotification />
        <PWAInstallPrompt />
      </ErrorBoundary>
    </AnalyticsProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SecurityHeaders />
      <A11ySkipLink />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
