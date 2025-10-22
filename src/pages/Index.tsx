import { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, TrendingUp, Shield, Users, Target, Briefcase, PieChart, FileText, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { createOrganizationSchema, createWebsiteSchema } from "@/utils/structuredData";
import { useAnalytics } from "@/hooks/useAnalytics";
import { SolutionsGridSkeleton, InsightsGridSkeleton, CaseStudiesSkeleton, ContactSectionSkeleton } from "@/components/ui/content-skeletons";

const ContactForm = lazy(() => import("@/components/ContactForm"));

const Index = () => {
  // Initialize analytics - Add your Google Analytics ID here
  const analytics = useAnalytics(); // Add your GA4 measurement ID: useAnalytics('G-XXXXXXXXXX')

  // Structured data for SEO
  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebsiteSchema();
  const combinedSchema = [organizationSchema, websiteSchema];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Libertas Africa | Strategic Financial Advisory & NPL Solutions"
        description="Strategic consulting and advisory solutions in the financial sector - NPL portfolio sales, investment advisory, project finance, and policy & regulatory advisory across Africa."
        keywords="NPL portfolio sales, investment advisory, project finance, policy advisory, Africa financial services, debt advisory, non-performing loans, structured credit, DFI financing"
        structuredData={combinedSchema}
        canonical="https://libertasafrica.com/"
      />

      <Header />

      {/* Hero Section with Geni-inspired design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Floating gradient orbs */}
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

      {/* Vision Section */}
      <section id="about" className="relative py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-primary font-medium text-lg tracking-wide uppercase">About Us</p>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                     In Latin, Libertas means
                    <span className="text-gradient"> freedom</span>
                    <br />— and this is at the heart of everything we do.
                  </h2>
                  <div className="w-16 h-1 bg-gradient-accent rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Libertas Africa, we unlock the potential of distressed and underutilized capital through bold strategies, intelligent advisory, and deep market expertise. We work with banks, investors, DFIs, ECAs, and governments to reimagine what's possible in finance — freeing up capital trapped in non-performing loans, advising on complex debt and credit structures, and structuring transformative investments across Africa.
                  </p>
                  <p className="text-foreground font-medium text-xl">
                    We don't just consult — we liberate value.
                  </p>
                  <div className="space-y-4 text-base">
                    <p><strong className="text-foreground">Our Competitive Edge:</strong></p>
                    <ul className="space-y-2 ml-4">
                      <li>• Expert team with deep financial sector experience</li>
                      <li>• Local market and regulatory insight</li>
                      <li>• Data-driven valuation and analytics</li>
                      <li>• Proven track record with global investors</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="card-elevated rounded-2xl p-8 h-96">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Target className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">Mission</h4>
                          <p className="text-sm text-muted-foreground">Foster growth, recovery, resilience</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-accent" />
                        <div>
                          <h4 className="font-semibold">Expert Team</h4>
                          <p className="text-sm text-muted-foreground">Deep financial sector experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">Vision</h4>
                          <p className="text-sm text-muted-foreground">Africa's most respected debt advisory</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-accent" />
                        <div>
                          <h4 className="font-semibold">Results</h4>
                          <p className="text-sm text-muted-foreground">Proven track record</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Solutions</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Four pillars. One purpose:
                <br />
                <span className="text-gradient">Unlock capital and potential.</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">Libertas Africa delivers four integrated solutions that transform debt and credit management friction into financial agility. We help lenders clean their books, NPL investors achieve sustainable returns, projects access patient cross-border financing, and policymakers design credit markets that attract global investments.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {[{
              icon: Briefcase,
              title: "NPL Sales Advisory (for Lenders)",
              description: "We guide lenders through portfolio preparation, valuation, and sale—unlocking capital tied up in NPLs, easing regulatory pressure, and freeing resources for new lending.",
              cta: "Maximize Your Exit",
              anchor: "#npl-sales-advisory"
            }, {
              icon: Target,
              title: "NPL Investment Advisory (for Investors)",
              description: "We connect investors to carefully prepared, investment-ready NPL portfolios—delivering strong pipelines, robust due diligence, and performance oversight that ensures capital delivers on IRR targets.",
              cta: "Deploy with Confidence",
              anchor: "#npl-investment-advisory"
            }, {
              icon: TrendingUp,
              title: "Project Finance & Cross-Border Credit",
              description: "We originate and structure bankable projects for sectors like energy, infrastructure, and agriculture—aligning them with ECA and DFI financing to secure long-tenor, affordable, and de-risked capital.",
              cta: "Unlock Long-Tenor Capital",
              anchor: "#project-finance"
            }, {
              icon: Shield,
              title: "Policy & Regulatory Advisory",
              description: "We work with regulators, governments, and development partners to design frameworks that enable NPL sales, strengthen credit infrastructure, and build investor confidence in Africa's financial markets.",
              cta: "Build Better Markets",
              anchor: "#policy-advisory"
            }].map((service, serviceIndex) => <Card key={serviceIndex} className="card-elevated border-border/50 hover-lift group">
                  <CardHeader className="pb-4">
                    <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 smooth-transition" />
                    <CardTitle className="text-xl group-hover:text-primary smooth-transition">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="text-sm px-6 py-2 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 smooth-transition" asChild>
                      <Link to={`/solutions/detailed${service.anchor}`}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="relative py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Case Studies</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Proven results across 
                <span className="text-gradient"> diverse transactions</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              title: "NPL Portfolio Sale",
              amount: "$13 Million",
              description: "A lender held a $13M digital loan portfolio written off its books. After Libertas Africa's preparation and competitive investor outreach, multiple offers were secured and the sale closed at ~7% of book value, generating liquidity and improving capital adequacy.",
              category: "Banking",
              impact: "Optimal pricing achieved"
            }, {
              title: "Solar EPC Project Finance",
              amount: "$11 Million",
              description: "A solar EPC required funding for an $11 million solar project for one of the region's largest retailers. Libertas Africa secured ECA-backed financing, lowering capital costs and aligning repayments with project cash flows. The deal enabled successful project delivery and positioned the EPC for future renewable opportunities.",
              category: "Energy",
              impact: "DFI/ECA financing secured"
            }, {
              title: "NPL Policy Framework Support",
              amount: "National Impact",
              description: "The banking industry association needed a structured approach to engage regulators on NPL sales and securitization. Libertas Africa delivered research, data insights, and global benchmarks, enabling evidence-based dialogue. This work shaped draft policy discussions and positioned the sector for a healthier secondary NPL market.",
              category: "Policy",
              impact: "Systemic NPL reduction"
            }].map((study, studyIndex) => <Card key={studyIndex} className="card-elevated border-border/50 hover-lift group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary group-hover:bg-primary/10 smooth-transition">
                        {study.category}
                      </Badge>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Value</p>
                        <p className="font-semibold text-primary group-hover:scale-110 smooth-transition">{study.amount}</p>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{study.description}</p>
                    <div className="flex items-center text-sm text-primary font-medium">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {study.impact}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-30"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Connect</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Whether you're a lender looking to optimize NPL portfolios, an investor seeking opportunities, or need strategic advisory on complex financing structures, 
              <span className="text-gradient"> our team is ready to help</span>.
            </h2>
            <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-16"></div>
            
          {/* Contact Form */}
          <div className="mb-20">
            <Suspense fallback={<ContactSectionSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>
            
            {/* Contact Information */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">Or reach out directly</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-elevated border-border/50 hover-lift cursor-pointer group">
                  <a 
                    href="mailto:connect@libertasafrica.com?subject=Enquiry%20via%20Libertas%20Africa%20Website" 
                    className="block" 
                    aria-label="Send email to Libertas Africa"
                    onClick={() => analytics.trackBusinessEvent('contact_form', { method: 'email' })}
                  >
                  <CardContent className="pt-8 text-center">
                    <Mail className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                    <h3 className="font-semibold mb-2 group-hover:text-primary smooth-transition">Email</h3>
                    <div className="text-muted-foreground group-hover:text-foreground smooth-transition">connect@libertasafrica.com</div>
                  </CardContent>
                </a>
              </Card>
              
              <Card className="card-elevated border-border/50 hover-lift cursor-pointer group">
                <a href="tel:+254205253963" className="block" aria-label="Call Libertas Africa at +254 20 5253963">
                  <CardContent className="pt-8 text-center">
                    <Phone className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                    <h3 className="font-semibold mb-2 group-hover:text-primary smooth-transition">Phone</h3>
                    <div className="text-muted-foreground group-hover:text-foreground smooth-transition">+254 20 5253963</div>
                  </CardContent>
                </a>
              </Card>
              
              <Card className="card-elevated border-border/50 hover-lift cursor-pointer group">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Eaton+Place%2C+United+Nations+Crescent%2C+Nairobi%2C+Kenya"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                  aria-label="View Libertas Africa office location on Google Maps"
                >
                  <CardContent className="pt-8 text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                    <h3 className="font-semibold mb-2 group-hover:text-primary smooth-transition">Office</h3>
                    <div className="text-muted-foreground group-hover:text-foreground smooth-transition">
                      Eaton Place<br />
                      United Nations Crescent<br />
                      Nairobi, Kenya
                    </div>
                  </CardContent>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;