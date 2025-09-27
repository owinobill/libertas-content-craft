import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DynamicBreadcrumb } from "@/components/DynamicBreadcrumb";
import { SEOHead } from "@/components/SEOHead";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { HeaderSkeleton, FooterSkeleton } from "@/components/ui/skeleton-variants";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
  structuredData?: any[];
  canonical?: string;
  showBreadcrumb?: boolean;
  breadcrumbClassName?: string;
}

export const PageLayout = ({
  children,
  title,
  description,
  keywords,
  structuredData,
  canonical,
  showBreadcrumb = true,
  breadcrumbClassName = "container mx-auto px-6 py-4",
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        structuredData={structuredData}
        canonical={canonical}
      />
      <PerformanceOptimizations />
      
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      
      {showBreadcrumb && (
        <DynamicBreadcrumb className={breadcrumbClassName} />
      )}
      
      <main id="main-content" className="flex-1">
        {children}
      </main>
      
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};