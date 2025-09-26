import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import nplEcosystemPart1Hero from "@/assets/npl-ecosystem-part1-hero.jpg";
import debtSalesHero from "@/assets/debt-sales-hero.jpg";
import debtSalesDynamicsHero from "@/assets/debt-sales-dynamics-hero.jpg";
import nplEcosystemHero from "@/assets/npl-ecosystem-hero.jpg";

const ArticleNPLEcosystemPart1 = () => {
  const shareUrl = window.location.href;
  const title = "Part 1: Building a Collaborative NPL Ecosystem in African Countries";
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
    <PageLayout
      title={`${title} | Libertas Africa`}
      description="Part 1: Why African countries must tackle NPLs head-on and what global and regional lessons reveal about the value of collaboration."
      keywords="NPL ecosystem, African banking, non-performing loans, collaboration, financial recovery"
      canonical="https://libertasafrica.com/insights-hub/npl-ecosystem-part-1"
    >
      
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
                <h2 className="text-2xl font-bold mb-6 mt-8">Introduction: Why Non-Performing Loans Matter</h2>
                
                <p className="mb-6">
                  Across Africa, non-performing loans (NPLs) continue to be a persistent drag on financial stability and economic growth. When borrowers default, banks are left with loan books clogged by assets that no longer generate income but still demand capital provisions. This ties up liquidity that could otherwise be used to extend fresh credit to households, SMEs, and corporates. The result is a vicious cycle: weak loan recoveries reduce banks' appetite to lend, which in turn constrains investment and growth.
                </p>
                
                <p className="mb-6">
                  In countries like Ghana and Nigeria, NPL ratios have in recent years hovered well above the 10% mark, while Kenya, Uganda, and others have also faced rising levels during economic downturns. These numbers may sound technical, but their implications are very real: every percentage point of NPLs on a balance sheet represents billions in locked-up funds that could have financed schools, factories, mortgages, or small business expansion. Left unchecked, high NPLs erode trust in the banking system, dampen investor confidence, and make economies more vulnerable to shocks.
                </p>
                
                <p className="mb-8">
                  The challenge is not unique to Africa. Around the world, countries have faced similar NPL crises and found ways to turn the problem into an opportunity for renewal. The key lies in collaboration—between lenders who need to offload bad loans, investors who can provide liquidity and recovery expertise, and regulators who ensure the system remains fair, transparent, and stable.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Global Lessons on NPL Resolution</h2>
                
                <p className="mb-6">
                  History shows that when countries act decisively to resolve NPLs, their economies recover faster and more sustainably.
                </p>
                
                <p className="mb-6">
                  <strong>Spain's "Bad Bank" Example:</strong> Following the Eurozone debt crisis, Spanish banks were suffocated by toxic property loans. The government responded by establishing a centralized asset management company that absorbed billions in troubled loans. By aggregating these assets and managing them professionally, Spain not only cleaned up its banking system but also restored confidence, paving the way for a strong economic rebound.
                </p>
                
                <p className="mb-6">
                  <strong>Eastern Europe's Task Forces:</strong> In Central and Eastern Europe, where banks were overwhelmed by bad debt after the global financial crisis, governments, banks, and regulators worked hand-in-hand. They created joint task forces, introduced fast-track insolvency procedures, and invited international distressed asset funds to participate. Within a few years, NPL ratios in several countries had fallen by half, and credit growth resumed.
                </p>
                
                <p className="mb-8">
                  <strong>Latin America's Collaborative Platforms:</strong> In countries like Colombia, banks partnered with specialist investors and servicers to carve out NPL portfolios and manage them externally. This freed banks to focus on new lending, while borrowers benefited from structured repayment programs designed by professional workout teams.
                </p>
                
                <p className="mb-8">
                  Global initiatives, including those spearheaded by international development finance institutions, have played a catalytic role in supporting such solutions. Programs like the Distressed Asset Recovery Program (DARP) have shown that by combining capital with technical expertise, emerging markets can build viable NPL ecosystems. These precedents demonstrate that Africa's situation is far from insurmountable—the tools and models already exist, and they can be adapted to local realities.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">The Case for a Collaborative Ecosystem in Africa</h2>
                
                <p className="mb-6">
                  What Africa needs is not piecemeal, one-off loan sales, but a collaborative ecosystem where all stakeholders work toward the same goal: freeing up bank balance sheets, attracting investor capital, and ensuring borrowers are treated fairly.
                </p>
                
                <p className="mb-6">
                  A collaborative ecosystem is made up of four interlocking pillars:
                </p>
                
                <p className="mb-2">
                  <strong>Lenders</strong> – banks that prepare, segment, and offer NPL portfolios for sale or transfer, recognizing that even discounted recovery today may be better than holding distressed assets indefinitely.
                </p>
                
                <p className="mb-2">
                  <strong>Investors</strong> – local and international funds willing to acquire or co-manage these assets, bringing both liquidity and specialist recovery strategies.
                </p>
                
                <p className="mb-2">
                  <strong>Servicers</strong> – professional agencies that handle collections, restructuring, and asset recovery with the right skills, systems, and borrower engagement practices.
                </p>
                
                <p className="mb-8">
                  <strong>Regulators</strong> – central banks and policymakers who set the rules, safeguard consumer rights, and encourage transparency so that the market develops on solid foundations.
                </p>
                
                <p className="mb-8">
                  When these elements align, the impact is transformative. Banks release capital to support new credit, investors find a profitable and socially impactful asset class, borrowers are given pathways to restructure or settle debts, and regulators see stronger, more resilient financial systems.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Africa's Early Steps and Lessons</h2>
                
                <p className="mb-6">
                  Encouragingly, Africa already has examples that show the potential of collaboration:
                </p>
                
                <p className="mb-6">
                  <strong>Nigeria's AMCON:</strong> In 2010, Nigeria created the Asset Management Corporation of Nigeria (AMCON), a government-backed entity that acquired billions in bad loans from local banks. Within two years, Nigeria's NPL ratio plummeted from over 37% to around 5%. This decisive move stabilized the banking sector, protected depositors, and gave the economy breathing space to recover. While the model came with fiscal costs, it proved that systemic NPL clean-ups are possible when there is political will and a clear institutional mechanism.
                </p>
                
                <p className="mb-8">
                  <strong>Pan-African Platforms Emerging:</strong> In recent years, regional initiatives supported by development partners have started pooling resources to acquire NPL portfolios in multiple African countries. These pilot deals, though modest, have proven that with credible investors at the table, banks are willing to sell, and regulators are open to experimentation.
                </p>
                
                <p className="mb-8">
                  These early steps matter because they build confidence. Every successful NPL transaction in Africa—whether in South Africa, Kenya, or Nigeria—sends a signal to the market that distressed debt can be priced, traded, and resolved. Over time, this builds the momentum for a sustainable secondary NPL market.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Why Collaboration is Critical</h2>
                
                <p className="mb-6">
                  One reason many African banks have been hesitant to sell NPLs is the fear of reputational risk ("What will borrowers think if we sell their loans?") or financial loss ("What if investors underpay for assets we could eventually recover ourselves?"). Investors, on the other hand, often hesitate due to lack of reliable data or concerns about weak legal frameworks. Regulators worry about borrower protection and systemic stability.
                </p>
                
                <p className="mb-8">
                  Collaboration is the antidote to these fears. By designing transparent processes, involving reputable investors and servicers, and ensuring borrowers' rights are protected, all sides can win. The global track record shows that collaboration reduces uncertainty, speeds up resolution, and maximizes overall recovery.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Conclusion: Laying the Groundwork for Africa's NPL Market</h2>
                
                <p className="mb-6">
                  Part 1 has laid out the why and the what: why Africa must tackle NPLs head-on, and what global and regional lessons reveal about the value of collaboration. The message is clear: unresolved NPLs are not just an accounting issue—they are a systemic barrier to growth. But with the right ecosystem, distressed debt can be transformed into opportunity.
                </p>
                
                <p className="mb-6">
                  Spain's recovery, Eastern Europe's task forces, Latin America's platforms, and Africa's own AMCON experience all show that NPL resolution is achievable and transformative. The next step for Africa is to take these lessons and adapt them to local realities.
                </p>
                
                <p className="mb-12">
                  In Part 2, we will move from foundations to strategies—outlining the practical roadmap for Africa: the legal reforms, market infrastructure, investor participation, and regulatory innovation needed to build a thriving, collaborative NPL ecosystem.
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
                          src={debtSalesHero} 
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
                          src={debtSalesDynamicsHero} 
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
                          src={nplEcosystemHero} 
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

    </PageLayout>
  );
};

export default ArticleNPLEcosystemPart1;