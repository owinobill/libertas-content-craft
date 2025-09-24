import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img 
              src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" 
              alt="Libertas Africa" 
              className="h-8 w-auto" 
              loading="lazy" 
            />
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Unchaining capital, unlocking potential
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 text-sm">
            <Link to="/#about" className="text-muted-foreground hover:text-primary smooth-transition">
              About
            </Link>
            <Link to="/solutions" className="text-muted-foreground hover:text-primary smooth-transition">
              Solutions
            </Link>
            <Link to="/insights-hub" className="text-muted-foreground hover:text-primary smooth-transition">
              Insights
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary smooth-transition">
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex gap-4 text-sm">
            <a 
              href="mailto:connect@libertasafrica.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">connect@libertasafrica.com</span>
            </a>
            <a 
              href="tel:+254205253963" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+254 20 5253963</span>
            </a>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-6 pt-4 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground/70">
          <span>© 2024 Libertas Advisory Ltd.</span>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary smooth-transition">
              Privacy
            </Link>
            <Link to="/terms-of-use" className="hover:text-primary smooth-transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;