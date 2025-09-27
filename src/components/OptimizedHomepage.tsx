import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { createOrganizationSchema, createWebsiteSchema } from "@/utils/structuredData";
import { useAnalytics } from "@/hooks/useAnalytics";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical sections
const VisionSection = lazy(() => import("./sections/VisionSection"));
const SolutionsSection = lazy(() => import("./sections/SolutionsSection"));
const CaseStudiesSection = lazy(() => import("./sections/CaseStudiesSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

const SectionSkeleton = () => (
  <div className="py-32">
    <div className="container mx-auto px-6">
      <Skeleton className="h-12 w-3/4 mx-auto mb-8" />
      <Skeleton className="h-6 w-full mb-4" />
      <Skeleton className="h-6 w-2/3 mb-8" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
      </div>
    </div>
  </div>
);

const OptimizedHomepage = () => {
  const analytics = useAnalytics();
  
  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebsiteSchema();
  const combinedSchema = [organizationSchema, websiteSchema];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Libertas Africa | NPL Advisory & Financial Solutions"
        description="Strategic consulting in NPL portfolio sales, investment advisory, project finance, and policy advisory across Africa."
        keywords="NPL portfolio sales, investment advisory, project finance, policy advisory, Africa financial services, debt advisory, non-performing loans, structured credit, DFI financing"
        structuredData={combinedSchema}
        canonical="https://libertasafrica.com/"
      />
      
      <Header />

      <main role="main">
        {/* Critical Hero Section - Above the fold */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-40" style={{
            animationDelay: '2s'
          }}></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                <span className="text-gradient">Unchaining Capital.</span>
                <br />
                Unlocking Potential.
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
                Libertas Africa provides strategic consulting and advisory solutions in the financial sector. This includes advisory to lenders and investors for Non-performing loan portfolio sales, deal origination and investment solutions for private and structured credit transactions. Leveraging local market insights and global expertise, we bridge strategic investment opportunities with international and regional financiers, driving sustainable financial recovery and growth across key sectors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                  onClick={() => {
                    analytics.trackBusinessEvent('cta_click', { button_text: 'Let\'s Connect', location: 'hero' });
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-full border-border hover:bg-secondary/50"
                  onClick={() => {
                    analytics.trackBusinessEvent('cta_click', { button_text: 'Explore Our Solutions', location: 'hero' });
                    const solutionsSection = document.getElementById('solutions');
                    if (solutionsSection) {
                      solutionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Explore Our Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Lazy loaded sections */}
        <Suspense fallback={<SectionSkeleton />}>
          <VisionSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <SolutionsSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <CaseStudiesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default OptimizedHomepage;