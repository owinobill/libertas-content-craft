import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Target, TrendingUp, Shield } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { createBreadcrumbSchema } from "@/utils/structuredData";

const Solutions = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const breadcrumbs = [
    { name: "Home", url: "https://libertasafrica.com" },
    { name: "Solutions", url: "https://libertasafrica.com/solutions" }
  ];

  const structuredData = [createBreadcrumbSchema(breadcrumbs)];

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle anchor scrolling when component loads or hash changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]); // Listen to hash changes

  return (
    <PageLayout
      title="Solutions | NPL Advisory & Financial Services | Libertas Africa"
      description="Comprehensive financial solutions: NPL sales & investment advisory, project finance, cross-border credit, and policy & regulatory advisory across Africa."
      keywords="NPL advisory, investment advisory, project finance, cross-border credit, policy advisory, financial solutions"
      canonical="https://libertasafrica.com/solutions"
      structuredData={structuredData}
    >

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
            <p className="text-2xl text-muted-foreground mb-8">How we turn credit and debt friction into financial freedom.</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our four solution pillars in depth: who they're for, how they work, and why they deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Section 1: NPL Sales Advisory */}
            <div id="npl-sales-advisory" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">NPL Sales Advisory (for Lenders)</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For banks, MFIs, telcos, and digital lenders, non-performing loans (NPLs) create capital drag, reputational risk, and regulatory pressure. NPL sales convert illiquid assets into cash by transferring them to specialized investors.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Our Process:</h3>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground">
                <li><strong>Portfolio Preparation</strong> — audit & clean data tapes, digitize records, borrower segmentation.</li>
                <li><strong>Valuation & Analytics</strong> — recovery modeling, cashflow projections, market benchmarks.</li>
                <li><strong>Sale Structuring</strong> — pool design, auction vs. bilateral, reserve pricing.</li>
                <li><strong>Investor Marketing</strong> — data rooms, teasers, targeted investor outreach, Q&A.</li>
                <li><strong>Execution & Closing</strong> — bid evaluation, SPA/APA support, clean handover & audit trail.</li>
              </ol>

              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-2">Example:</h4>
                <p className="text-muted-foreground">
                  A lender held a $13M digital loan portfolio written off its books. After Libertas Africa's preparation and competitive investor outreach, multiple offers were secured and the sale closed at ~7% of book value, generating liquidity and improving capital adequacy.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Liquidity creation & stronger capital ratios</li>
                <li>Faster regulatory compliance on NPL reduction</li>
                <li>Reduced burden on internal collections teams</li>
                <li>Market credibility as a proactive lender</li>
              </ul>

              <Button 
                className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90"
                onClick={handleContactClick}
              >
                Talk to Sell-Side Advisor
              </Button>
            </div>

            {/* Section 2: NPL Investment Advisory */}
            <div id="npl-investment-advisory" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">NPL Investment Advisory (for Investors)</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Investing in NPLs can deliver double-digit IRRs—yet without strong local insight, execution risks are high. We bridge this gap, sourcing portfolios and ensuring investors acquire assets aligned to mandate and capable of delivering modeled returns.
              </p>

              <h3 className="text-xl font-bold mb-4">Our Process:</h3>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground">
                <li><strong>Deal Flow & Sourcing</strong> — access to vetted, off-market portfolios.</li>
                <li><strong>Due Diligence</strong> — sampling, segmentation, recovery forecasting, stress-tested models.</li>
                <li><strong>Transaction Support</strong> — bid strategy, negotiation, legal coordination.</li>
                <li><strong>Servicer Management</strong> — agency selection, SLA/KPI design, collections governance.</li>
                <li><strong>Performance Oversight</strong> — monthly portfolio reviews, dashboards, strategy resets.</li>
              </ol>

              <h3 className="text-xl font-bold mb-4">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Quality deal flow aligned to mandates</li>
                <li>Certainty in execution and faster closing</li>
                <li>Oversight of servicers to protect IRRs</li>
                <li>Independent, transparent reporting</li>
              </ul>

              <Button 
                className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90"
                onClick={handleContactClick}
              >
                Discuss Buy-Side Pipeline
              </Button>
            </div>

            {/* Section 3: Project Finance */}
            <div id="project-finance" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">Project Finance & Cross-Border Credit</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Africa's infrastructure and growth sectors require billions in capital, yet local commercial loans are short-tenor and expensive. We structure projects with ECAs, DFIs, and private credit funds to unlock longer, cheaper, and de-risked financing.
              </p>

              <h3 className="text-xl font-bold mb-4">Our Process:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Originate and qualify impactful projects</li>
                <li>Fix bankability gaps (financial models, ESG, permits, governance)</li>
                <li>Structure blended finance stacks (ECA cover, DFI A/B loans, guarantees, PRI, local currency/hedging)</li>
                <li>Engage targeted financiers and coordinate diligence</li>
                <li>Negotiate and manage closing</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Lower borrowing costs via concessional financing</li>
                <li>Longer repayment aligned with project lifecycles</li>
                <li>Risk-sharing through guarantees and political risk insurance</li>
                <li>Greater investor confidence and co-investment attraction</li>
              </ul>

              <Button 
                className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90"
                onClick={handleContactClick}
              >
                Explore Project Finance
              </Button>
            </div>

            {/* Section 4: Policy Advisory */}
            <div id="policy-advisory" className="card-elevated rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">Policy & Regulatory Advisory</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Robust financial markets require strong rules and infrastructure. In Africa's emerging credit markets, regulators must enable innovation (NPL sales, private credit) while protecting consumers. We support governments, central banks, and development partners in designing frameworks that balance stability and growth.
              </p>

              <h3 className="text-xl font-bold mb-4">Our Work Includes:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Share best practices for NPL sale frameworks, data standards, and template docs</li>
                <li>Establishing ethical collection codes and borrower protection frameworks</li>
                <li>Strengthening linkages to credit bureaus and other data sources to enable a 360-degree view of the portfolio</li>
                <li>Designing regulatory sandboxes for fintech and debt innovations e.g. NPL tokenization</li>
                <li>Convening educational forums for stakeholders across finance and policy on new instruments like debt sale and NPL securitization</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Lower systemic NPL ratios</li>
                <li>Liquidity and capital recycling for lenders</li>
                <li>Increased global investor confidence</li>
                <li>Balanced consumer protection</li>
              </ul>

              <Button 
                className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90"
                onClick={handleContactClick}
              >
                Engage on Policy & Markets
              </Button>
            </div>

          </div>
        </div>
      </section>
      
    </PageLayout>
  );
};

export default Solutions;