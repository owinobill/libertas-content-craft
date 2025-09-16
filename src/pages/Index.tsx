import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Mail, Phone, MapPin, TrendingUp, Shield, Users, Target, Briefcase, PieChart, FileText, ArrowRight } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" alt="Libertas Africa" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="nav-item">About</a>
              <a href="#services" className="nav-item">Services</a>
              <a href="#solutions" className="nav-item">Solutions</a>
              <a href="#case-studies" className="nav-item">Case Studies</a>
              <a href="#contact" className="nav-item">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Geni-inspired design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-40" style={{
        animationDelay: '2s'
      }}></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              <span className="text-gradient">Unchaining Capital.</span>
              <br />
              Unlocking Potential.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Libertas Africa provides strategic consulting and advisory solutions in the financial sector. This includes advisory to lenders and investors for Non-performing loan portfolio sales, deal origination and investment solutions for private and structured credit transactions. Leveraging local market insights and global expertise, we bridge strategic investment opportunities with international and regional financiers, driving sustainable financial recovery and growth across key sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-border hover:bg-secondary/50">
                Explore Our Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about" className="relative py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-primary font-medium text-lg tracking-wide uppercase">Our Approach</p>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Strategic consulting and 
                    <span className="text-gradient"> financial advisory</span>
                    <br />that unlocks value.
                  </h2>
                  <div className="w-16 h-1 bg-gradient-accent rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our expertise spans Non-performing loan portfolio advisory, deal origination, and investment solutions for private and structured credit transactions across Africa's most dynamic markets.
                  </p>
                  <p>
                    By combining local market insights with global expertise, we bridge strategic investment opportunities with international and regional financiers, creating sustainable pathways for financial recovery and growth.
                  </p>
                  <p className="text-foreground font-medium">
                    At Libertas Africa, we're committed to freeing capital and unlocking potential across key sectors.
                  </p>
                </div>
                
                <Button className="text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90">
                  Let's explore together
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="card-elevated rounded-2xl p-8 h-96">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Target className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">Mission</h4>
                          <p className="text-sm text-muted-foreground">Strategic excellence</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-accent" />
                        <div>
                          <h4 className="font-semibold">Expert Team</h4>
                          <p className="text-sm text-muted-foreground">Industry leaders</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">Vision</h4>
                          <p className="text-sm text-muted-foreground">Market leadership</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-accent" />
                        <div>
                          <h4 className="font-semibold">Results</h4>
                          <p className="text-sm text-muted-foreground">Proven track record</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Solutions</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Four pillars. One purpose:
                <br />
                <span className="text-gradient">unlock capital and confidence.</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Libertas Africa delivers four integrated solutions that turn debt friction into financial freedom—helping lenders clean balance sheets, investors deploy with confidence, projects secure long-tenor capital, and policymakers build resilient markets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {[{
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
            }].map((service, index) => <Card key={index} className="card-elevated border-border/50 hover:shadow-elevated smooth-transition group">
                  <CardHeader className="pb-4">
                    <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 smooth-transition" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="text-sm px-6 py-2 rounded-full bg-primary hover:bg-primary/90" asChild>
                      <a href={service.anchor}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>

            {/* Detailed Sections */}
            <div className="space-y-16">
              <div id="npl-sales-advisory" className="card-elevated rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">NPL Sales Advisory (for Lenders)</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We help banks, digital lenders, MFIs, and telcos turn non-performing loans into liquidity by preparing portfolios with clean data, accurate valuations, and transparent analytics. Our process ensures investor-ready packages that align with market appetite, reduce regulatory pressure, and maximize sale proceeds. The result: capital freed for new lending and stronger balance sheets.
                </p>
              </div>

              <div id="npl-investment-advisory" className="card-elevated rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">NPL Investment Advisory (for Investors)</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We connect global and regional NPL investors with high-quality, carefully prepared portfolios that fit their mandate and return objectives. From deal sourcing and due diligence to negotiations and servicer onboarding, we support every step to ensure execution certainty. Post-close, we deliver governance and monthly performance reviews that protect capital and enhance recoveries.
                </p>
              </div>

              <div id="project-finance" className="card-elevated rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Project Finance & Cross-Border Credit</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We originate and structure projects in energy, infrastructure, agriculture, manufacturing, and logistics—aligning them with ECA, DFI, and private credit to unlock long-tenor and competitively priced financing. Our approach addresses bankability gaps, builds robust financial models, and coordinates investor engagement through to close. By de-risking capital structures, we attract blended finance and crowd-in private investment.
                </p>
              </div>

              <div id="policy-advisory" className="card-elevated rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Policy & Regulatory Advisory</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We partner with governments, regulators, and development partners to design frameworks that make Africa's credit markets more liquid, ethical, and investable. Our work covers secondary loan sale guidelines, ethical collections codes, credit infrastructure upgrades, and sandbox pilots for innovative solutions. By building the right market rules and rails, we foster investor confidence and accelerate balance-sheet repair at a systemic level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="relative py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Case Studies</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Proven results across 
                <span className="text-gradient"> diverse transactions</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              title: "NPL Portfolio Sale",
              amount: "KES 8 Billion",
              description: "Facilitated a major East African bank's disposal of a digital loan portfolio, achieving optimal pricing and streamlined execution.",
              category: "Banking",
              impact: "Optimal pricing achieved"
            }, {
              title: "Renewable Energy Financing",
              amount: "Large-scale Project",
              description: "Advised international investor's successful entry into renewable energy through structured debt financing via DFI/ECA backing.",
              category: "Energy",
              impact: "DFI/ECA financing secured"
            }, {
              title: "Policy Framework Development",
              amount: "National Impact",
              description: "Successfully guided Central Bank in establishing effective national NPL resolution framework, reducing systemic NPL levels.",
              category: "Policy",
              impact: "Systemic NPL reduction"
            }].map((study, index) => <Card key={index} className="card-elevated border-border/50 hover:shadow-elevated smooth-transition group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {study.category}
                      </Badge>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Value</p>
                        <p className="font-semibold text-primary">$23 Million</p>
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
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-30"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Connect</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your strategic partner for 
              <span className="text-gradient"> impactful financial solutions</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[{
              icon: Mail,
              label: "Email",
              value: "connect@libertasafrica.com"
            }, {
              icon: Phone,
              label: "Phone",
              value: "+254 20 5253963"
            }, {
              icon: MapPin,
              label: "Office",
              value: "[Your Office Address]"
            }].map((contact, index) => <Card key={index} className="card-elevated border-border/50 hover:shadow-elevated smooth-transition">
                  <CardContent className="pt-8 text-center">
                    <contact.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{contact.label}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </CardContent>
                </Card>)}
            </div>
            
            <Button size="lg" className="text-lg px-12 py-4 rounded-full bg-primary hover:bg-primary/90 shadow-elegant">
              Let's Connect Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <img src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" alt="Libertas Africa" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Strategic consulting and advisory solutions in the financial sector, 
              driving sustainable financial recovery and growth across key sectors.
            </p>
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">© 2024 Libertas Advisory Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;