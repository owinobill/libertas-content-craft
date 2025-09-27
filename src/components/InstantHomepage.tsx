import { lazy, Suspense, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

// Aggressively lazy load EVERYTHING except critical hero content
const VisionSection = lazy(() => import("./sections/VisionSection"));
const SolutionsSection = lazy(() => import("./sections/SolutionsSection"));
const CaseStudiesSection = lazy(() => import("./sections/CaseStudiesSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

// Simple invisible fallback to prevent any layout shift
const InvisibleFallback = () => <div className="opacity-0 pointer-events-none" />;

const InstantHomepage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal SEO - defer structured data to avoid blocking */}
      <SEOHead
        title="Libertas Africa | NPL Advisory & Financial Solutions"
        description="Strategic consulting in NPL portfolio sales, investment advisory, project finance, and policy advisory across Africa."
        keywords="NPL portfolio sales, investment advisory, project finance, policy advisory"
      />
      
      <Header />

      <main role="main">
        {/* INSTANT HERO - Zero dependencies, immediate paint */}
        <section className="relative min-h-screen flex items-center justify-center" style={{
          background: 'hsl(220, 30%, 6%)'
        }}>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Critical text with inline styles for instant render */}
              <h1 style={{
                fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '2rem',
                color: 'hsl(210, 40%, 95%)'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, hsl(142, 76%, 45%) 0%, hsl(178, 84%, 32%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Unchaining Capital.
                </span>
                <br />
                Unlocking Potential.
              </h1>
              
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: 'hsl(215, 20%, 65%)',
                marginBottom: '3rem',
                maxWidth: '64rem',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Libertas Africa provides strategic consulting and advisory solutions in the financial sector. This includes advisory to lenders and investors for Non-performing loan portfolio sales, deal origination and investment solutions for private and structured credit transactions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-full"
                  onClick={() => {
                    startTransition(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    });
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
                    startTransition(() => {
                      const solutionsSection = document.getElementById('solutions');
                      if (solutionsSection) {
                        solutionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    });
                  }}
                >
                  Explore Our Solutions
                </Button>
              </div>
            </div>
          </div>
          
          {/* Defer background effects completely */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, hsl(220, 30%, 6%) 0%, hsl(195, 25%, 15%) 40%, hsl(162, 45%, 20%) 100%)',
              zIndex: '-1'
            }}
          />
        </section>

        {/* All other sections aggressively lazy loaded */}
        <Suspense fallback={<InvisibleFallback />}>
          <div className="py-32 bg-gradient-subtle">
            <VisionSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<InvisibleFallback />}>
          <div className="py-32">
            <SolutionsSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<InvisibleFallback />}>
          <div className="py-32 bg-gradient-subtle">
            <CaseStudiesSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<InvisibleFallback />}>
          <div className="py-32">
            <ContactSection />
          </div>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstantHomepage;