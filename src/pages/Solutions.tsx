import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Target, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" alt="Libertas Africa" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/#about" className="nav-item">About</Link>
              <Link to="/#services" className="nav-item">Services</Link>
              <Link to="/solutions" className="nav-item">Solutions</Link>
              <Link to="/#case-studies" className="nav-item">Case Studies</Link>
              <Link to="/#contact" className="nav-item">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back to Home Button */}
      <section className="py-8 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <Button variant="outline" asChild className="rounded-full">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Four pillars. One purpose: unlock capital and confidence.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Libertas Africa delivers four integrated solutions that turn debt friction into financial freedom—helping lenders clean balance sheets, investors deploy with confidence, projects secure long-tenor capital, and policymakers build resilient markets.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div id="npl-sales-advisory" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">NPL Sales Advisory (for Lenders)</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help banks, digital lenders, MFIs, and telcos turn non-performing loans into liquidity by preparing portfolios with clean data, accurate valuations, and transparent analytics. Our process ensures investor-ready packages that align with market appetite, reduce regulatory pressure, and maximize sale proceeds. The result: capital freed for new lending and stronger balance sheets.
              </p>
            </div>

            <div id="npl-investment-advisory" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">NPL Investment Advisory (for Investors)</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We connect global and regional NPL investors with high-quality, carefully prepared portfolios that fit their mandate and return objectives. From deal sourcing and due diligence to negotiations and servicer onboarding, we support every step to ensure execution certainty. Post-close, we deliver governance and monthly performance reviews that protect capital and enhance recoveries.
              </p>
            </div>

            <div id="project-finance" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">Project Finance & Cross-Border Credit</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We originate and structure projects in energy, infrastructure, agriculture, manufacturing, and logistics—aligning them with ECA, DFI, and private credit to unlock long-tenor and competitively priced financing. Our approach addresses bankability gaps, builds robust financial models, and coordinates investor engagement through to close. By de-risking capital structures, we attract blended finance and crowd-in private investment.
              </p>
            </div>

            <div id="policy-advisory" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">Policy & Regulatory Advisory</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with governments, regulators, and development partners to design frameworks that make Africa's credit markets more liquid, ethical, and investable. Our work covers secondary loan sale guidelines, ethical collections codes, credit infrastructure upgrades, and sandbox pilots for innovative solutions. By building the right market rules and rails, we foster investor confidence and accelerate balance-sheet repair at a systemic level.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">Ready to unlock your potential?</h3>
              <p className="text-muted-foreground mb-8">Let's discuss how our solutions can help your organization.</p>
              <Button size="lg" className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90" asChild>
                <Link to="/#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;