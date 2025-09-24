import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nplEcosystemHero from "@/assets/npl-ecosystem-hero.jpg";

const ArticleNPLEcosystemPart2 = () => {
  const shareUrl = window.location.href;
  const title = "Part 2: Strategies for Building a Collaborative NPL Ecosystem in African Countries";
  const date = "September 25, 2025";

  const handleShare = (platform: string) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Back Navigation */}
              <div className="mb-8">
                <Link to="/insights-hub">
                  <Button variant="ghost" className="p-0 h-auto font-medium hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Insights Hub
                  </Button>
                </Link>
              </div>

              {/* Article Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="text-muted-foreground">
                    <span>{date}</span>
                    <span className="mx-2">•</span>
                    <span>10 min read</span>
                  </div>
                </div>

                {/* Social Share Buttons */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Share:</span>
                  <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('email')}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="mb-12">
                <img 
                  src={nplEcosystemHero} 
                  alt="African business professionals collaborating on NPL ecosystem development and financial frameworks"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 mt-8">Introduction: From Problem to Opportunity</h2>
                
                <p className="mb-6">
                  In Part 1, we established why unresolved non-performing loans (NPLs) are a critical drag on African countries' economies and how global precedents—from Spain to Nigeria—show that collaboration between banks, investors, and regulators can transform this challenge into opportunity.
                </p>
                
                <p className="mb-6">
                  The next step is to move from "why" to "how." What concrete strategies can African countries adopt to build thriving secondary markets for NPLs? How can they design ecosystems that not only clean up bad loans but also strengthen financial stability, attract investor capital, and protect borrowers?
                </p>
                
                <p className="mb-8">
                  This part of the series lays out a strategic roadmap: the four pillars that can support African countries in their journey from isolated NPL sales to full-fledged ecosystems that drive growth.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">1. Strengthen the Enabling Framework</h2>
                
                <p className="mb-6">
                  The foundation of any NPL market is the legal and regulatory environment. Without clear rules, investors hesitate, banks delay sales, and transactions stall.
                </p>
                
                <p className="mb-6">
                  Many African countries face well-known hurdles: slow court processes, outdated insolvency regimes, conflicting tax treatment, or requirements that make it difficult to transfer loans. Each of these obstacles weakens investor appetite and prolongs banks' balance sheet stress.
                </p>
                
                <p className="mb-6">
                  The solution is twofold:
                </p>
                
                <p className="mb-4">
                  <strong>Legal Reform:</strong> Modernize insolvency and creditor rights laws, streamline foreclosure processes, and establish specialized commercial courts. Morocco's recent moves to simplify loan transfer rules and develop a legal framework for secondary markets are an encouraging precedent.
                </p>
                
                <p className="mb-8">
                  <strong>Regulatory Clarity:</strong> Banks need clear guidance on provisioning, accounting treatment of NPL sales, and borrower consent requirements. Regulators in several European countries accelerated NPL resolution by setting deadlines for recognition and disposal—African regulators can adapt similar tools.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">2. Build Market Infrastructure and Servicing Capacity</h2>
                
                <p className="mb-6">
                  A thriving NPL ecosystem requires more than willing buyers and sellers—it needs infrastructure to connect them and professionals to manage the assets.
                </p>
                
                <p className="mb-4">
                  <strong>Market Platforms:</strong> Centralized NPL trading platforms or auction mechanisms can aggregate portfolios from multiple banks, offering investors scale and diversification.
                </p>
                
                <p className="mb-4">
                  <strong>Servicing Ecosystem:</strong> Professional servicers and asset managers must be developed or attracted to manage workouts efficiently and fairly.
                </p>
                
                <p className="mb-8">
                  <strong>Digital Tools:</strong> Borrower segmentation, recovery forecasting, and digital data rooms can help leapfrog traditional inefficiencies and increase investor confidence.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">3. Mobilize Capital and Expertise</h2>
                
                <p className="mb-6">
                  Capital is the fuel that powers NPL markets.
                </p>
                
                <p className="mb-4">
                  <strong>International Investors:</strong> Global distressed asset funds and DFIs bring scale and know-how. Programs like DARP have shown that with co-investment and deal structuring, even frontier markets can attract capital.
                </p>
                
                <p className="mb-4">
                  <strong>Local Capital Pools:</strong> Pension funds, insurers, and asset managers in African countries can be mobilized through securitizations or dedicated funds. Morocco's 2024 securitization of NPLs showed what's possible.
                </p>
                
                <p className="mb-8">
                  <strong>Risk-Sharing Structures:</strong> Early deals may require guarantees or first-loss buffers from development partners to crowd in private capital.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">4. Foster Public-Private Collaboration and Confidence</h2>
                
                <p className="mb-6">
                  Trust is the glue of an NPL ecosystem.
                </p>
                
                <p className="mb-4">
                  <strong>National Task Forces:</strong> Cross-sector NPL resolution committees can set targets and troubleshoot barriers in real time.
                </p>
                
                <p className="mb-4">
                  <strong>Transparent Communication:</strong> Regulators and banks must emphasize that NPL sales are about revitalizing credit markets, not punishing borrowers.
                </p>
                
                <p className="mb-8">
                  <strong>Ethical Recovery Practices:</strong> Regulators should set borrower protection standards, ensuring NPL buyers operate fairly and transparently.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">The Vision: From Burden to Resilience</h2>
                
                <p className="mb-6">
                  If African countries embrace these four pillars—framework, infrastructure, capital, and collaboration—the results could be transformative:
                </p>
                
                <p className="mb-2">Banks gain renewed lending capacity.</p>
                <p className="mb-2">Investors access an attractive asset class.</p>
                <p className="mb-2">Borrowers receive structured pathways to repayment.</p>
                <p className="mb-8">Regulators oversee more stable and resilient financial systems.</p>
                
                <p className="mb-8">
                  Global initiatives and experiences from Europe, Latin America, and Asia show that even challenging markets can unlock these benefits. The same can be true for African countries.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Conclusion: A Call to Action</h2>
                
                <p className="mb-6">
                  African countries stand at a crossroads. NPLs need not be a chronic problem—they can be a catalyst for innovation, collaboration, and growth.
                </p>
                
                <p className="mb-6">
                  The roadmap is clear:
                </p>
                
                <p className="mb-2">Regulators must enable and supervise.</p>
                <p className="mb-2">Banks must prepare and sell.</p>
                <p className="mb-2">Investors must commit capital and expertise.</p>
                <p className="mb-8">Servicers must execute ethically and effectively.</p>
                
                <p className="mb-12">
                  The opportunity is enormous: cleaner bank balance sheets, deeper capital markets, renewed credit flow, and stronger resilience against crises. With determination and partnership, African countries can transform the weight of distressed debt into a foundation for financial stability and shared prosperity.
                </p>

                {/* Social Share Buttons - Bottom */}
                <div className="flex items-center gap-3 py-8 border-t border-border/20">
                  <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                  <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('email')}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Article 1 */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="w-full">
                        <img 
                          src="/src/assets/debt-sales-hero.jpg" 
                          alt="Debt sales and assignments for NPL management"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-sm text-muted-foreground">
                            May 24, 2025 • 8 min read
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          How Lenders in East Africa Can Unlock the Benefits of Debt Sales and Debt Assignments for Non-Performing Loan Portfolios
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          Non-performing loans (NPLs) have been a challenge for banks in East Africa and across the world. Discover how debt sales and assignments can help manage distressed loan portfolios effectively.
                        </p>
                        <Link to="/insights-hub/debt-sales-assignments">
                          <Button variant="outline">
                            Read Article
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Article 2 */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="w-full">
                        <img 
                          src="/src/assets/debt-sales-dynamics-hero.jpg" 
                          alt="Understanding debt sales dynamics"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-sm text-muted-foreground">
                            June 30, 2025 • 12 min read
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          Understanding the Dynamics of Debt Sales: A Guide for Lenders in East Africa
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          A practical guide for East African lenders on navigating debt sales. From regulatory frameworks and synthetic debt sales to valuation, pricing, and reputational risk management.
                        </p>
                        <Link to="/insights-hub/debt-sales-dynamics">
                          <Button variant="outline">
                            Read Article
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleNPLEcosystemPart2;