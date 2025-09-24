import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Logo and Company Info */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" 
                  alt="Libertas Africa" 
                  className="h-12 w-auto" 
                  loading="lazy" 
                />
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                Strategic consulting and advisory solutions in the financial sector. 
                <span className="block mt-2 font-medium text-foreground/90">
                  Unchaining capital, unlocking potential.
                </span>
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-foreground text-lg mb-6">Quick Links</h4>
              <nav className="space-y-4">
                <Link 
                  to="/#about" 
                  className="block text-muted-foreground hover:text-primary smooth-transition hover:translate-x-1"
                >
                  About
                </Link>
                <Link 
                  to="/solutions" 
                  className="block text-muted-foreground hover:text-primary smooth-transition hover:translate-x-1"
                >
                  Solutions
                </Link>
                <Link 
                  to="/insights-hub" 
                  className="block text-muted-foreground hover:text-primary smooth-transition hover:translate-x-1"
                >
                  Insights Hub
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-muted-foreground hover:text-primary smooth-transition hover:translate-x-1"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4">
              <h4 className="font-semibold text-foreground text-lg mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:connect@libertasafrica.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 smooth-transition" />
                  <span>connect@libertasafrica.com</span>
                </a>
                <a 
                  href="tel:+254205253963" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 smooth-transition" />
                  <span>+254 20 5253963</span>
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Eaton+Place%2C+Market+Rd%2C+Gigiri%2C+Nairobi%2C+Kenya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary smooth-transition group"
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 smooth-transition" />
                  <span className="leading-relaxed">
                    Eaton Place, Market Rd<br />
                    Gigiri, Nairobi, Kenya
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground/80">
                © 2024 Libertas Advisory Ltd. All rights reserved.
              </p>
              <div className="flex gap-8">
                <Link 
                  to="/privacy-policy" 
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-of-use" 
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;