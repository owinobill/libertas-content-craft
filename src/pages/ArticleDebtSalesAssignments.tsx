import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import debtSalesHero from "@/assets/debt-sales-hero.jpg";

const ArticleDebtSalesAssignments = () => {
  const shareUrl = window.location.href;
  const title = "How Lenders in East Africa Can Unlock the Benefits of Debt Sales and Debt Assignments for Non-Performing Loan Portfolios";
  const author = "Billy Owino";
  const date = "May 24, 2025";

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
                    <span>8 min read</span>
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
                  src={debtSalesHero} 
                  alt="Financial documents and charts representing debt sales and NPL management in East African banking"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 mt-12">Introduction</h2>
                
                <p className="mb-6">
                  Non-performing loans (NPLs) have been a challenge for banks in East Africa and across the world. Banks are often left with limited options to address these issues, including default management, loan restructuring, and debt collection. However, there are other options for managing NPLs and distressed loan portfolios, such as debt sale and debt assignment.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Debt Sale and Debt Assignment Explained</h2>
                
                <p className="mb-6">
                  Debt sale and debt assignment are financial instruments that allow banks to transfer their debt obligations to third parties, such as asset management companies, distressed asset investors, or other financial institutions. The debt obligations are sold or assigned to a third party by the originating bank during this process. The third party is then responsible for collecting the debt from the borrower.
                </p>
                
                <p className="mb-12">
                  Debt sales and debt assignments can be used by banks to manage distressed loan portfolios and NPLs in a more efficient and cost-effective manner. These instruments provide banks with the flexibility to manage their loan portfolios and reduce the risk associated with NPLs. They also have the potential to generate revenue from the sale or assignment of written-off loans, freeing up capital that can be used to grow the bank's business.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">What Is the Difference Between a Debt Sale and a Debt Assignment?</h2>
                
                <p className="mb-6">
                  <strong>Debt Sale:</strong> Transfer of legal ownership of the debt from the bank to a third party. The buyer becomes the legal owner and assumes all rights and responsibilities.
                </p>
                
                <p className="mb-12">
                  <strong>Debt Assignment:</strong> Transfer of servicing rights only. The bank remains the legal owner but a third party manages the debt and collections.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Benefits of Debt Sale and Debt Assignment</h2>
                
                <ul className="list-disc list-inside space-y-4 mb-12 ml-4">
                  <li><strong>Revenue Generation:</strong> Banks can generate revenue from the transfer of NPLs.</li>
                  <li><strong>Capital Efficiency:</strong> Freeing up capital tied in distressed assets allows reinvestment in growth.</li>
                  <li><strong>Risk Reduction:</strong> Reduces exposure to default risk and portfolio drag.</li>
                  <li><strong>Restructuring Options:</strong> Enables creative restructuring to help borrowers while still creating value for investors.</li>
                  <li><strong>Operational Focus:</strong> Allows banks to refocus on core business activities.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">Enabling Debt Forgiveness</h2>
                
                <p className="mb-12">
                  Through partnerships with asset management companies and distressed asset investors, debt sales and assignments can also support borrower relief — including partial forgiveness, flexible repayment terms, or restructuring, especially when coupled with government or international support programs.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Challenges in Implementation</h2>
                
                <ul className="list-disc list-inside space-y-4 mb-12 ml-4">
                  <li>Lack of transparency and trust between borrowers and lenders.</li>
                  <li>Complex regulatory environments in many African jurisdictions.</li>
                  <li>Difficulties in valuing distressed loans due to poor data quality.</li>
                  <li>Limited resources and expertise among local banks.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">Case Studies from Other Markets</h2>
                
                <p className="mb-6">
                  <strong>Europe:</strong> European banks have reduced systemic NPL risk through structured secondary markets encouraged by the ECB.
                </p>
                
                <p className="mb-12">
                  <strong>India:</strong> Asset Reconstruction Companies (ARCs) under the RBI framework have helped banks resolve distressed assets and reduce NPL ratios.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">The Role of Asset Management Companies and Investors</h2>
                
                <p className="mb-12">
                  AMCs and distressed asset investors provide valuation expertise, assume risk, and improve borrower outcomes through restructuring and fair treatment practices. Their involvement deepens market liquidity and supports the stability of the financial system.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Consumer Protection and Data Privacy</h2>
                
                <p className="mb-6">
                  Implementing debt sales requires careful attention to:
                </p>
                
                <ul className="list-disc list-inside space-y-4 mb-12 ml-4">
                  <li>Borrower rights and transparency.</li>
                  <li>Data protection laws (e.g., GDPR, local data privacy regulations).</li>
                  <li>Clear borrower consent and proper data-sharing agreements.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">Conclusion</h2>
                
                <p className="mb-12">
                  Debt sales and debt assignments provide East African banks with powerful tools to manage NPLs, free up capital, and strengthen balance sheets. To maximize benefits, banks must build capacity in valuation, ensure robust data, and engage with ethical investors. With the right structures and frameworks, debt sales can improve both institutional resilience and financial inclusion.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Related Reading</h2>
                
                <p className="mb-12">
                  Next article in this series: "Understanding the Dynamics of Debt Sales: A Guide for Lenders in East Africa" (June 2025).
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
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src="/src/assets/debt-sales-dynamics-hero.jpg" 
                          alt="Understanding debt sales dynamics"
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="mb-2">
                          <span className="text-sm text-muted-foreground">
                            June 30, 2025 • 12 min read
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          Understanding the Dynamics of Debt Sales: A Guide for Lenders in East Africa
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          A practical guide for East African lenders on navigating debt sales. From regulatory frameworks and synthetic debt sales to valuation, pricing, and reputational risk management — here's how to turn NPL challenges into opportunity.
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

export default ArticleDebtSalesAssignments;