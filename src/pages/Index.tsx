import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Mail, Phone, MapPin, TrendingUp, Shield, Users, Target, Briefcase, PieChart, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-primary">Libertas Advisory</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#deal-origination" className="text-sm font-medium hover:text-primary transition-colors">Deal Origination</a>
              <a href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">East Africa's Premier Advisory Firm</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Strategic <span className="text-primary">Financial Solutions</span> for East Africa
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Specializing in strategic consulting, deal origination, and investment solutions for debt financing, 
              structured credit, and Non-Performing Loan (NPL) transactions across key sectors including renewable energy, 
              infrastructure, agriculture, manufacturing, transport, and logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Explore Our Services <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Libertas Advisory</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Established by industry leaders with extensive experience in credit management, 
                financial restructuring, and international project finance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Target className="mr-3 h-6 w-6 text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-lg">
                  Empowering clients with strategic financial solutions and advisory excellence 
                  to foster sustainable economic growth and recovery.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-lg">
                  To become the most respected advisory firm in debt financing and NPL transactions 
                  in Africa, distinguished by innovation, integrity, and impactful results.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Extensive financial sector experience</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Local Knowledge</h4>
                  <p className="text-sm text-muted-foreground">Deep market and regulatory insights</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Data-Driven</h4>
                  <p className="text-sm text-muted-foreground">Robust analytical methodologies</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Proven Track Record</h4>
                  <p className="text-sm text-muted-foreground">Successful transactions and alliances</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive advisory solutions tailored to your strategic needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>NPL Portfolio Advisory</CardTitle>
                  <CardDescription>
                    Rigorous portfolio assessment, valuation, and strategic transaction structuring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Portfolio assessment & valuation</li>
                    <li>• Transaction structuring & negotiation</li>
                    <li>• Asset recovery strategies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Deal Origination</CardTitle>
                  <CardDescription>
                    Sourcing investment-ready opportunities for global financiers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Renewable energy projects</li>
                    <li>• Infrastructure development</li>
                    <li>• Agriculture & manufacturing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Regulatory & Compliance</CardTitle>
                  <CardDescription>
                    Expert guidance on compliance frameworks and risk management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Compliance frameworks</li>
                    <li>• Risk management</li>
                    <li>• Policy consultations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <PieChart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Valuation & Analytics</CardTitle>
                  <CardDescription>
                    Advanced financial modeling and predictive analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Financial modeling</li>
                    <li>• Portfolio risk assessment</li>
                    <li>• Scenario analysis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Policy Development</CardTitle>
                  <CardDescription>
                    Supporting effective financial sector policy formulation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Policy recommendations</li>
                    <li>• Asset management frameworks</li>
                    <li>• Stakeholder engagements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Post-Transaction Services</CardTitle>
                  <CardDescription>
                    Ongoing support and value-added services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Collection strategy & reporting</li>
                    <li>• Training programs</li>
                    <li>• Portfolio reviews</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Origination Section */}
      <section id="deal-origination" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Deal Origination for Private Credit</h2>
              <p className="text-xl text-muted-foreground">
                ECA & DFI Financing Solutions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Targeted Investment Sectors</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Energy</Badge>
                    <span className="text-muted-foreground">Solar, wind, geothermal, hydro</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Infrastructure</Badge>
                    <span className="text-muted-foreground">Transport networks, urban utilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Agriculture</Badge>
                    <span className="text-muted-foreground">Agro-processing, farm mechanization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Manufacturing</Badge>
                    <span className="text-muted-foreground">Industrial expansions and modernization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Transport</Badge>
                    <span className="text-muted-foreground">Logistics hubs, fleet modernization</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Structured Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Opportunity Sourcing</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive qualification and assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Investment Memoranda</h4>
                      <p className="text-sm text-muted-foreground">Tailored documentation for international financiers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Market Sounding</h4>
                      <p className="text-sm text-muted-foreground">Securing indicative proposals from ECAs/DFIs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Transaction Execution</h4>
                      <p className="text-sm text-muted-foreground">Global advisory partnerships for seamless delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Advantages of ECA & DFI-backed Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">• Long-term financing with favorable rates</h4>
                    <p className="text-sm text-muted-foreground">Structured repayment plans aligned with project cash flows</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">• Enhanced project credibility</h4>
                    <p className="text-sm text-muted-foreground">Attracting additional private investment through risk mitigation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">• Reduced collateral requirements</h4>
                    <p className="text-sm text-muted-foreground">Leveraging guarantees for improved financing terms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">• Strategic economic impact</h4>
                    <p className="text-sm text-muted-foreground">Infrastructure development and job creation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies & Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Proven results across diverse transactions and advisory engagements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>NPL Portfolio Sale</CardTitle>
                  <CardDescription>KES 8 Billion Digital Loan Portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Facilitated a major East African bank's disposal of a KES 8 billion digital loan portfolio, 
                    achieving optimal pricing and streamlined execution.
                  </p>
                  <Badge variant="outline">Banking</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Renewable Energy Financing</CardTitle>
                  <CardDescription>Large-scale Project Investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Advised an international investor's successful entry into a large-scale renewable energy project, 
                    secured through structured debt financing via DFI/ECA backing.
                  </p>
                  <Badge variant="outline">Energy</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Regulatory Advisory</CardTitle>
                  <CardDescription>National NPL Resolution Framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Successfully guided a Central Bank in establishing an effective national NPL resolution framework, 
                    significantly reducing systemic NPL levels.
                  </p>
                  <Badge variant="outline">Policy</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-xl text-muted-foreground">
                Your strategic partner for impactful financial solutions in East Africa
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@libertasadvisory.com</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">[Your Phone Number]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p className="text-muted-foreground">[Your Office Address]</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="text-lg px-8">
                Get In Touch Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Libertas Advisory</h3>
              <p className="text-muted-foreground mb-4">
                East Africa's premier advisory firm for strategic financial solutions
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 Libertas Advisory. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
