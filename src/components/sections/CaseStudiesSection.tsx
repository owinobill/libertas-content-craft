import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [{
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
  }];

  return (
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
            {caseStudies.map((study, studyIndex) => (
              <Card key={studyIndex} className="card-elevated border-border/50 hover:shadow-elevated smooth-transition group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {study.category}
                    </Badge>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Value</p>
                      <p className="font-semibold text-primary">{study.amount}</p>
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;