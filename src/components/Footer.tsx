import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo centered */}
          <div className="text-center mb-8">
            <img src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" alt="Libertas Africa" className="h-10 w-auto mx-auto" />
          </div>
          
          {/* Navigation links in a clean row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
              About
            </Link>
            <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
              Solutions
            </Link>
            <Link to="/#case-studies" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
              Case Studies
            </Link>
            <Link to="/#contact" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
              Contact
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
              Terms of Use
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground/80">© 2024 Libertas Advisory Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;