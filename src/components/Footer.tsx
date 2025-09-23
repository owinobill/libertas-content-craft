import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" alt="Libertas Africa" className="h-12 w-auto" />
              </div>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Strategic consulting and advisory solutions in the financial sector, 
                driving sustainable financial recovery and growth across key sectors.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#about" className="text-muted-foreground hover:text-primary smooth-transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-muted-foreground hover:text-primary smooth-transition">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/#case-studies" className="text-muted-foreground hover:text-primary smooth-transition">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-muted-foreground hover:text-primary smooth-transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary smooth-transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="text-muted-foreground hover:text-primary smooth-transition">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">© 2024 Libertas Advisory Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;