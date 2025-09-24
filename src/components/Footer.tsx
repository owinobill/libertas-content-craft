import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Company Info */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" 
                  alt="Libertas Africa" 
                  className="h-10 w-auto" 
                  loading="lazy" 
                />
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Strategic consulting and advisory solutions in the financial sector across Africa. 
                Unchaining capital, unlocking potential.
              </p>
              <p className="text-xs text-muted-foreground/80">
                © 2024 Libertas Advisory Ltd. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                <Link to="/#about" className="block text-sm text-muted-foreground hover:text-foreground smooth-transition">
                  About
                </Link>
                <Link to="/solutions" className="block text-sm text-muted-foreground hover:text-foreground smooth-transition">
                  Solutions
                </Link>
                <Link to="/insights-hub" className="block text-sm text-muted-foreground hover:text-foreground smooth-transition">
                  Insights Hub
                </Link>
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground smooth-transition">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:connect@libertasafrica.com" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground smooth-transition"
                >
                  <Mail className="h-4 w-4" />
                  connect@libertasafrica.com
                </a>
                <a 
                  href="tel:+254205253963" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground smooth-transition"
                >
                  <Phone className="h-4 w-4" />
                  +254 20 5253963
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Eaton+Place%2C+Market+Rd%2C+Gigiri%2C+Nairobi%2C+Kenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground smooth-transition"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Eaton Place, Market Rd<br />
                    Gigiri, Nairobi, Kenya
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer - Legal Links */}
          <div className="pt-8 border-t border-border/20">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;