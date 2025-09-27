import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Target, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsSection = () => {
  const solutions = [{
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
  }];

  return (
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
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Libertas Africa delivers four integrated solutions that transform debt and credit management friction into financial agility. We help lenders clean their books, NPL investors achieve sustainable returns, projects access patient cross-border financing, and policymakers design credit markets that attract global investments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {solutions.map((service, serviceIndex) => (
              <Card key={serviceIndex} className="card-elevated border-border/50 hover:shadow-elevated smooth-transition group">
                <CardHeader className="pb-4">
                  <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 smooth-transition" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="text-sm px-6 py-2 rounded-full bg-primary hover:bg-primary/90" asChild>
                    <Link to={`/solutions/detailed${service.anchor}`}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;