import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return <footer className="border-t border-border/20 bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <OptimizedImage src="/icon-512.png" alt="Libertas Africa" className="h-8 w-auto" />
            
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 text-sm">
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  navigate('/', { replace: false });
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }
              }}
              className="text-muted-foreground hover:text-primary smooth-transition"
            >
              About
            </button>
            <Link to="/solutions" className="text-muted-foreground hover:text-primary smooth-transition">
              Solutions
            </Link>
            <Link to="/insights-hub" className="text-muted-foreground hover:text-primary smooth-transition">
              Insights
            </Link>
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  navigate('/', { replace: false });
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }
              }}
              className="text-muted-foreground hover:text-primary smooth-transition"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="flex gap-4 text-sm">
            <a href="mailto:connect@libertasafrica.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">connect@libertasafrica.com</span>
            </a>
            <a href="tel:+254205253963" className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition" aria-label="Call Libertas Africa">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+254 20 5253963</span>
            </a>
            <a href="https://www.linkedin.com/company/libertas-africa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition" aria-label="Follow Libertas Africa on LinkedIn">
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-6 pt-4 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground/70">
          <span>© 2025 Libertas Advisory Ltd.</span>
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
    </footer>;
};
export default Footer;