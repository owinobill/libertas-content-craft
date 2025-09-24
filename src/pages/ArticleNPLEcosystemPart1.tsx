import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nplEcosystemPart1Hero from "@/assets/npl-ecosystem-part1-hero.jpg";

const ArticleNPLEcosystemPart1 = () => {
  const shareUrl = window.location.href;
  const title = "Building a Collaborative NPL Ecosystem in Africa – Part 1";
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
                    <span>9 min read</span>
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
                  src={nplEcosystemPart1Hero} 
                  alt="African financial district showing collaborative banking systems and NPL ecosystem development"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-8 text-lg leading-relaxed">
                  Non-Performing Loans (NPLs) pose a significant challenge across many African banking systems, tying up capital and stifling new lending. High NPL levels lock in bank resources that could otherwise support fresh credit, creating a negative feedback loop where debt overhang suppresses investment and consumption. In several African countries, NPL ratios have exceeded prudential norms – for example, Ghana and Nigeria have each seen NPLs above 10% of total loans in recent years (compared to 5–6% in Kenya and Egypt). Such burdens not only weaken banks' balance sheets but also weigh on economic growth and financial stability. Addressing this issue is essential for unlocking credit to households and businesses, thereby fueling economic recovery and growth.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Global Lessons on NPL Resolution</h2>
                
                <p className="mb-6">
                  Experience from other regions shows that decisive and collaborative action on NPLs can restore financial sector health and confidence. In Europe, for instance, countries hit by financial crises have systematically tackled NPL stockpiles with success. Spain's response is often cited: in the wake of a deep recession, the government (with EU support) set up a centralized asset management company to absorb bad loans from banks and sell them over time. This strategy strengthened Spanish banks and helped catalyze an impressive economic recovery post-2015. The Spanish "bad bank" model also created a more liquid distressed debt market by providing clear pricing benchmarks and economies of scale in loan workouts. The key takeaway is that resolute actions to remove toxic assets can turn an economy's fortunes around, especially when paired with structural reforms like improved insolvency processes and market transparency.
                </p>
                
                <p className="mb-8">
                  Other regions have similarly benefited from coordinated NPL resolution efforts. Global initiatives like the International Finance Corporation's Distressed Asset Recovery Program (DARP) have supported NPL resolution in markets such as Eastern Europe and Latin America, illustrating the value of a collaborative approach. DARP, launched in 2009 after the global financial crisis, is an example of a program that brings together development finance, investor capital, and local banks to tackle distressed assets. It has expanded from its origin in Latin America to operate across Eastern Europe and Asia, demonstrating that emerging markets can attract investment to clean up bank balance sheets when the right framework is in place.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">The Case for a Collaborative Ecosystem</h2>
                
                <p className="mb-6">
                  Unlike ad-hoc or isolated efforts, a collaborative NPL ecosystem implies a coordinated strategy among key stakeholders – banks (lenders), specialized NPL investors, loan servicers, and regulators – to jointly resolve bad debts. In practical terms, this means banks actively identifying and preparing NPL portfolios for resolution, investors providing liquidity and technical know-how to purchase or manage those loans, professional servicing firms handling recoveries, and regulators creating an enabling environment that facilitates these activities.
                </p>
                
                <p className="mb-8">
                  Encouragingly, Africa is not starting from zero. Past initiatives on the continent hint at the gains from a coordinated approach. In Nigeria, for example, authorities established the Asset Management Corporation of Nigeria (AMCON) in 2010 as a centralized vehicle to purchase NPLs from banks and manage recoveries. Within two years of AMCON's intervention, NPL ratios in Nigerian banks fell from a peak of over 37% to around 5%, an extraordinary improvement in banking sector health.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Conclusion</h2>
                
                <p className="mb-12">
                  In summary, Part 1 has outlined why Africa needs a collaborative NPL resolution ecosystem and how global and local experiences validate this approach. Unresolved NPLs are a drag on growth, but international precedents (Spain's AMC, IFC's DARP, etc.) and African examples (Nigeria's AMCON) prove that proactive resolution can rejuvenate credit markets and strengthen financial stability. The next step is translating these lessons into concrete strategies for African markets. In Part 2, we will explore the practical steps to build and sustain a collaborative NPL ecosystem in Africa – focusing on the necessary legal reforms, market infrastructure, investor participation, and regulatory support to make it work.
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                          How Lenders in East Africa Can Unlock the Benefits of Debt Sales and Debt Assignments for Non-Performing Loan Portfolios
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                          Non-performing loans (NPLs) have been a challenge for banks in East Africa and across the world. Discover how debt sales and assignments can help manage distressed loan portfolios effectively.
                        </p>
                        <Link to="/insights-hub/debt-sales-assignments">
                          <Button variant="outline" size="sm">
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
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                          Understanding the Dynamics of Debt Sales: A Guide for Lenders in East Africa
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                          A practical guide for East African lenders on navigating debt sales. From regulatory frameworks and synthetic debt sales to valuation, pricing, and reputational risk management.
                        </p>
                        <Link to="/insights-hub/debt-sales-dynamics">
                          <Button variant="outline" size="sm">
                            Read Article
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Article 3 - Part 2 */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="w-full">
                        <img 
                          src="/src/assets/npl-ecosystem-hero.jpg" 
                          alt="NPL ecosystem collaboration strategies"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-sm text-muted-foreground">
                            September 25, 2025 • 10 min read
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                          Strategies for Building a Collaborative NPL Ecosystem in Africa – Part 2
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                          Four strategic pillars — legal frameworks, market infrastructure, capital mobilization, and collaboration — to create a thriving African NPL ecosystem.
                        </p>
                        <Link to="/insights-hub/npl-ecosystem-part-2">
                          <Button variant="outline" size="sm">
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

export default ArticleNPLEcosystemPart1;