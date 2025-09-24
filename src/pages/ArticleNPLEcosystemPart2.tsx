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
  const title = "Strategies for Building a Collaborative NPL Ecosystem in Africa – Part 2";
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
                <p className="mb-8 text-lg leading-relaxed">
                  Having established the rationale and global precedent for a collaborative NPL resolution approach, we now turn to the strategic building blocks required to create a thriving NPL ecosystem in Africa. The goal is to foster an environment where banks, investors, and regulators work in concert to rapidly dispose of or restructure bad loans, thereby freeing up capital for new lending and supporting economic recovery. Key strategies include strengthening the enabling framework, developing market infrastructure, mobilizing capital and expertise, and fostering partnerships and trust among stakeholders.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">1. Strengthen the Enabling Framework (Legal & Regulatory)</h2>
                
                <p className="mb-8">
                  A robust legal and regulatory foundation is the bedrock of any NPL ecosystem. Investors and buyers will engage in distressed debt markets only if they have confidence in the rules of the game – namely, that contracts will be enforced and creditors can realistically recover value from collateral or restructurings. Many African countries still face hurdles in this regard, such as slow judicial processes for debt enforcement, outdated insolvency laws, or regulations that make it cumbersome for banks to write off or sell bad loans.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">2. Develop Market Infrastructure and Servicing Capacity</h2>
                
                <p className="mb-8">
                  A collaborative ecosystem requires a marketplace where NPLs can change hands efficiently and specialists can maximize recovery on distressed assets. This involves both platforms for NPL transactions and the servicing infrastructure to manage loan workouts. On the transaction side, African countries may consider setting up NPL trading platforms or centralized auction mechanisms that pool and offer NPL portfolios from multiple banks to qualified investors. Equally important is the development of local servicing and recovery expertise.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">3. Mobilize Capital and Expertise (Local and International)</h2>
                
                <p className="mb-8">
                  An NPL ecosystem will only thrive if there is sufficient capital flow to purchase or refinance the distressed assets. African banks cannot solve the NPL problem alone – they will need the participation of NPL investors, which might include specialized distressed asset funds, private equity firms, development finance institutions, and even other banks. Global programs like IFC's DARP can play a catalytic role here by co-investing alongside local institutions, demonstrating successful deal closures and thereby crowding in other investors.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">4. Foster Public-Private Collaboration and Confidence</h2>
                
                <p className="mb-8">
                  Perhaps the most important ingredient is less tangible: a spirit of collaboration and mutual confidence among lenders, investors, and regulators. This can be cultivated through formal structures – for example, establishing a national NPL resolution steering committee or task force that meets regularly. Such a body could set NPL reduction targets, monitor progress, and troubleshoot obstacles in real time.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Conclusion</h2>
                
                <p className="mb-12">
                  Building a collaborative NPL ecosystem in Africa is an ambitious but achievable undertaking. By focusing on the four strategic pillars – robust legal frameworks, market infrastructure and servicers, mobilization of capital, and stakeholder collaboration – African countries can create the conditions for a virtuous cycle where NPLs are proactively managed and resolved. The benefits of success are significant: banks with healthier balance sheets, investors finding opportunities in African markets, and regulators achieving more resilient financial systems.
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