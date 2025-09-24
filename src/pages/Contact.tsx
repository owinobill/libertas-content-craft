import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Libertas Africa</title>
        <meta name="description" content="Get in touch with Libertas Africa for strategic financial advisory, NPL solutions, and investment opportunities across Africa." />
        <meta property="og:title" content="Contact Us | Libertas Africa" />
        <meta property="og:description" content="Get in touch with Libertas Africa for strategic financial advisory, NPL solutions, and investment opportunities across Africa." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Your strategic partner for impactful financial solutions across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Email Card */}
                <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition cursor-pointer group">
                  <a href="mailto:connect@libertasafrica.com?subject=Enquiry%20via%20Libertas%20Africa%20Website" className="block">
                    <CardContent className="pt-8 pb-8 text-center">
                      <Mail className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                      <h3 className="font-semibold mb-2 group-hover:text-primary smooth-transition text-lg">Email</h3>
                      <div className="text-muted-foreground group-hover:text-foreground smooth-transition">
                        connect@libertasafrica.com
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Click to send us an email
                      </p>
                    </CardContent>
                  </a>
                </Card>
                
                {/* Phone Card */}
                <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition cursor-pointer group">
                  <a href="tel:+254205253963" className="block">
                    <CardContent className="pt-8 pb-8 text-center">
                      <Phone className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                      <h3 className="font-semibold mb-2 group-hover:text-primary smooth-transition text-lg">Phone</h3>
                      <div className="text-muted-foreground group-hover:text-foreground smooth-transition">
                        +254 20 5253963
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Click to call us directly
                      </p>
                    </CardContent>
                  </a>
                </Card>
                
                {/* Office Card */}
                <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition cursor-pointer group">
                  <a href="https://www.google.com/maps/search/?api=1&query=Eaton+Place%2C+Market+Rd%2C+Gigiri%2C+Nairobi%2C+Kenya" target="_blank" rel="noopener noreferrer" className="block">
                    <CardContent className="pt-8 pb-8 text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                      <h3 className="font-semibold mb-2 group-hover:text-primary smooth-transition text-lg">Office</h3>
                      <div className="text-muted-foreground group-hover:text-foreground smooth-transition">
                        Eaton Place<br />
                        Market Rd, Gigiri<br />
                        Nairobi, Kenya
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Click to view on map
                      </p>
                    </CardContent>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Ready to Unlock Your Financial Potential?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a lender looking to optimize NPL portfolios, an investor seeking opportunities, 
                or need strategic advisory on complex financial structures, our team is ready to help.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">For Lenders & Banks</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• NPL Portfolio Sales Advisory</li>
                    <li>• Asset Valuation & Due Diligence</li>
                    <li>• Regulatory Compliance Support</li>
                    <li>• Market Intelligence & Pricing</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">For Investors & DFIs</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• NPL Investment Opportunities</li>
                    <li>• Project Finance Structuring</li>
                    <li>• Cross-Border Credit Solutions</li>
                    <li>• Policy & Regulatory Advisory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;