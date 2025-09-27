import { Target, Users, TrendingUp, Shield } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="about" className="relative py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-medium text-lg tracking-wide uppercase">About Us</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  In Latin, Libertas means
                  <span className="text-gradient"> freedom</span>
                  <br />— and this is at the heart of everything we do.
                </h2>
                <div className="w-16 h-1 bg-gradient-accent rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Libertas Africa, we unlock the potential of distressed and underutilized capital through bold strategies, intelligent advisory, and deep market expertise. We work with banks, investors, DFIs, ECAs, and governments to reimagine what's possible in finance — freeing up capital trapped in non-performing loans, advising on complex debt and credit structures, and structuring transformative investments across Africa.
                </p>
                <p className="text-foreground font-medium text-xl">
                  We don't just consult — we liberate value.
                </p>
                <div className="space-y-4 text-base">
                  <p><strong className="text-foreground">Our Competitive Edge:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>• Expert team with deep financial sector experience</li>
                    <li>• Local market and regulatory insight</li>
                    <li>• Data-driven valuation and analytics</li>
                    <li>• Proven track record with global investors</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-elevated rounded-2xl p-8 h-96">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Target className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Mission</h4>
                        <p className="text-sm text-muted-foreground">Foster growth, recovery, resilience</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-8 w-8 text-accent" />
                      <div>
                        <h4 className="font-semibold">Expert Team</h4>
                        <p className="text-sm text-muted-foreground">Deep financial sector experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Vision</h4>
                        <p className="text-sm text-muted-foreground">Africa's most respected debt advisory</p>
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
  );
};

export default VisionSection;