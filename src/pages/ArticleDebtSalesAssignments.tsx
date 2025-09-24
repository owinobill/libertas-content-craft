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
        {/* Back Navigation */}
        <div className="container mx-auto px-6 py-4">
          <Link to="/insights-hub">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights Hub
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  NPLs
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <span>By {author}</span>
                  <span>•</span>
                  <span>{date}</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                
                {/* Social Share Buttons */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="gap-2"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('email')}
                    className="gap-2"
                  >
                    <Mail className="h-4 w-4" />
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
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <h2>Introduction</h2>
                <p>
                  Non-performing loans (NPLs) have been a challenge for banks in East Africa and across the world. Banks are often left with limited options to address these issues, including default management, loan restructuring, and debt collection. However, there are other options for managing NPLs and distressed loan portfolios, such as debt sale and debt assignment.
                </p>

                <h2>Debt Sale and Debt Assignment Explained</h2>
                <p>
                  Debt sale and debt assignment are financial instruments that allow banks to transfer their debt obligations to third parties, such as asset management companies, distressed asset investors, or other financial institutions. The debt obligations are sold or assigned to a third party by the originating bank during this process. The third party is then responsible for collecting the debt from the borrower.
                </p>
                <p>
                  Debt sales and debt assignments can be used by banks to manage distressed loan portfolios and NPLs in a more efficient and cost-effective manner. These instruments provide banks with the flexibility to manage their loan portfolios and reduce the risk associated with NPLs. They also have the potential to generate revenue from the sale or assignment of written-off loans, freeing up capital that can be used to grow the bank's business.
                </p>

                <h2>What Is the Difference Between a Debt Sale and a Debt Assignment?</h2>
                <p><strong>Debt Sale:</strong> Transfer of legal ownership of the debt from the bank to a third party. The buyer becomes the legal owner and assumes all rights and responsibilities.</p>
                <p><strong>Debt Assignment:</strong> Transfer of servicing rights only. The bank remains the legal owner but a third party manages the debt and collections.</p>

                <h2>Benefits of Debt Sale and Debt Assignment</h2>
                <ul>
                  <li><strong>Revenue Generation:</strong> Banks can generate revenue from the transfer of NPLs.</li>
                  <li><strong>Capital Efficiency:</strong> Freeing up capital tied in distressed assets allows reinvestment in growth.</li>
                  <li><strong>Risk Reduction:</strong> Reduces exposure to default risk and portfolio drag.</li>
                  <li><strong>Restructuring Options:</strong> Enables creative restructuring to help borrowers while still creating value for investors.</li>
                  <li><strong>Operational Focus:</strong> Allows banks to refocus on core business activities.</li>
                </ul>

                <h2>Enabling Debt Forgiveness</h2>
                <p>
                  Through partnerships with asset management companies and distressed asset investors, debt sales and assignments can also support borrower relief — including partial forgiveness, flexible repayment terms, or restructuring, especially when coupled with government or international support programs.
                </p>

                <h2>Challenges in Implementation</h2>
                <ul>
                  <li>Lack of transparency and trust between borrowers and lenders.</li>
                  <li>Complex regulatory environments in many African jurisdictions.</li>
                  <li>Difficulties in valuing distressed loans due to poor data quality.</li>
                  <li>Limited resources and expertise among local banks.</li>
                </ul>

                <h2>Case Studies from Other Markets</h2>
                <p><strong>Europe:</strong> European banks have reduced systemic NPL risk through structured secondary markets encouraged by the ECB.</p>
                <p><strong>India:</strong> Asset Reconstruction Companies (ARCs) under the RBI framework have helped banks resolve distressed assets and reduce NPL ratios.</p>

                <h2>The Role of Asset Management Companies and Investors</h2>
                <p>
                  AMCs and distressed asset investors provide valuation expertise, assume risk, and improve borrower outcomes through restructuring and fair treatment practices. Their involvement deepens market liquidity and supports the stability of the financial system.
                </p>

                <h2>Consumer Protection and Data Privacy</h2>
                <p>Implementing debt sales requires careful attention to:</p>
                <ul>
                  <li>Borrower rights and transparency.</li>
                  <li>Data protection laws (e.g., GDPR, local data privacy regulations).</li>
                  <li>Clear borrower consent and proper data-sharing agreements.</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Debt sales and debt assignments provide East African banks with powerful tools to manage NPLs, free up capital, and strengthen balance sheets. To maximize benefits, banks must build capacity in valuation, ensure robust data, and engage with ethical investors. With the right structures and frameworks, debt sales can improve both institutional resilience and financial inclusion.
                </p>

                <h3>Related Reading</h3>
                <p>Next article in this series: "Understanding the Dynamics of Debt Sales: A Guide for Lenders in East Africa" (March 2023).</p>
              </article>

              {/* Bottom Social Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Share this article:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="gap-2"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('email')}
                    className="gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        NPLs
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      NPL Market Trends in East Africa: 2024 Analysis
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      An in-depth look at non-performing loan markets across East African countries...
                    </p>
                    <Link to="/insights-hub">
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-sm">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        Policy & Regulation
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      Policy Changes Impacting Debt Recovery in West Africa
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Recent policy developments and their implications for debt collection...
                    </p>
                    <Link to="/insights-hub">
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-sm">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        Case Studies
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      Case Study: Successful NPL Portfolio Acquisition in Nigeria
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      A detailed analysis of a recent successful NPL portfolio transaction...
                    </p>
                    <Link to="/insights-hub">
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-sm">
                        Read More
                      </Button>
                    </Link>
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