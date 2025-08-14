import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Users, 
  TrendingUp, 
  Shield, 
  BarChart3,
  Globe,
  ChevronLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent"></div>
              <h1 className="text-2xl font-bold text-foreground tracking-tight">Libertas Africa</h1>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground smooth-transition">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 border-primary/30 text-primary bg-primary/10 text-lg px-6 py-2">
              About Libertas Africa
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              <span className="text-gradient">Freedom</span> is at the heart
              <br />
              of everything we do.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              In Latin, Libertas means freedom — and at Libertas Africa, we free up capital trapped in distressed assets, 
              release institutions from the weight of non-performing loans, and open new pathways for investors to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-primary font-medium text-lg tracking-wide uppercase">Our Purpose</p>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Transforming 
                    <span className="text-gradient"> complexity into clarity</span>
                  </h2>
                  <div className="w-16 h-1 bg-gradient-accent rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our work transforms complexity into clarity, risk into opportunity, and financial constraints into strategic advantage. 
                    With deep market insight, strong networks, and unwavering integrity, Libertas Africa delivers the freedom to recover, 
                    the freedom to invest, and the freedom to thrive.
                  </p>
                  <p>
                    Established by industry leaders, Libertas Africa brings extensive experience in credit management, financial restructuring, 
                    and international project finance. We serve as trusted advisors to banks, financial institutions, investors, 
                    Development Finance Institutions (DFIs), Export Credit Agencies (ECAs), and policymakers.
                  </p>
                  <p className="text-foreground font-medium">
                    Our commitment to excellence, ethical practice, and innovation positions us uniquely in the East African financial advisory landscape.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="card-elevated rounded-2xl p-8 h-96">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">Integrity</h4>
                          <p className="text-sm text-muted-foreground">Ethical excellence</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-8 w-8 text-accent" />
                        <div>
                          <h4 className="font-semibold">Global Reach</h4>
                          <p className="text-sm text-muted-foreground">Local insights</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">Innovation</h4>
                          <p className="text-sm text-muted-foreground">Future-focused</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-accent" />
                        <div>
                          <h4 className="font-semibold">Excellence</h4>
                          <p className="text-sm text-muted-foreground">Proven results</p>
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

      {/* Mission & Vision */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Empowering clients with strategic financial solutions and advisory excellence 
                    to foster sustainable economic growth and recovery.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the most respected advisory firm in debt financing and NPL transactions in Africa, 
                    distinguished by innovation, integrity, and impactful results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="relative py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Competitive Advantage</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                What sets us 
                <span className="text-gradient">apart</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Advisory Team",
                  description: "Extensive financial sector experience with proven track record"
                },
                {
                  icon: Globe,
                  title: "Local Market Knowledge",
                  description: "Deep understanding of regulatory frameworks and market dynamics"
                },
                {
                  icon: BarChart3,
                  title: "Data-Driven Analytics",
                  description: "Robust analytical methodologies for informed decision making"
                },
                {
                  icon: Shield,
                  title: "Strategic Alliances",
                  description: "Proven track record of successful transactions and partnerships"
                }
              ].map((advantage, index) => (
                <Card key={index} className="card-elevated border-border/50 hover:shadow-elevated smooth-transition group text-center">
                  <CardContent className="p-8">
                    <advantage.icon className="h-12 w-12 text-primary mx-auto mb-6 group-hover:scale-110 smooth-transition" />
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-30"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to unlock your 
              <span className="text-gradient">financial potential?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how Libertas Africa can provide the strategic solutions you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-12 py-4 rounded-full bg-primary hover:bg-primary/90 shadow-elegant">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg" className="text-lg px-12 py-4 rounded-full border-border hover:bg-secondary/50">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent"></div>
              <h3 className="text-2xl font-bold">Libertas Africa</h3>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Freeing Capital. Unlocking Potential.
            </p>
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                © 2024 Libertas Africa. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;