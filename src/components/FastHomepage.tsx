import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { createOrganizationSchema, createWebsiteSchema } from "@/utils/structuredData";
import { useAnalytics } from "@/hooks/useAnalytics";

// Lazy load ALL non-critical sections including lower hero content
const HeroAnimations = lazy(() => import("./sections/HeroAnimations"));
const VisionSection = lazy(() => import("./sections/VisionSection"));
const SolutionsSection = lazy(() => import("./sections/SolutionsSection"));
const CaseStudiesSection = lazy(() => import("./sections/CaseStudiesSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

const FastHomepage = () => {
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
        {/* Ultra-fast critical hero section - minimal CSS, immediate paint */}
        <section className="relative min-h-screen flex items-center justify-center bg-background">
          {/* Lazy load animations to avoid blocking FCP */}
          <Suspense fallback={null}>
            <HeroAnimations />
          </Suspense>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                <span className="text-primary">Unchaining Capital.</span>
                <br />
                Unlocking Potential.
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
                Libertas Africa provides strategic consulting and advisory solutions in the financial sector. This includes advisory to lenders and investors for Non-performing loan portfolio sales, deal origination and investment solutions for private and structured credit transactions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-full"
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
                  className="text-lg px-8 py-4 rounded-full"
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

        {/* All other sections lazy loaded */}
        <Suspense fallback={<div className="h-32 bg-secondary/20 animate-pulse" />}>
          <VisionSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-secondary/20 animate-pulse" />}>
          <SolutionsSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-secondary/20 animate-pulse" />}>
          <CaseStudiesSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-secondary/20 animate-pulse" />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default FastHomepage;