import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useAnalytics } from "@/hooks/useAnalytics";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { trackBusinessEvent } = useAnalytics();

  const handleLogoClick = () => {
    trackBusinessEvent('cta_click', { element: 'logo', location: 'header' });
  };

  const handleAnchorClick = (href: string) => {
    const [path, hash] = href.split('#');
    
    if (location.pathname === path || (path === '' && location.pathname === '/')) {
      // Same page, just scroll to anchor
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Update URL hash
        window.history.pushState(null, '', href);
      }
    } else {
      // Different page, navigate and then scroll to anchor
      if (hash) {
        // Navigate to the page first
        navigate(path || '/');
        // Use setTimeout to ensure the page loads before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Just navigate without anchor
        navigate(href);
      }
    }
    closeMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Header */}
      <header className="relative z-50 border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" onClick={() => { closeMenu(); handleLogoClick(); }} className="flex items-center">
                <OptimizedImage 
                  src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" 
                  alt="Libertas Africa" 
                  className="h-12 w-auto transition-transform duration-200 hover:scale-105" 
                  priority={true}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className={`nav-item ${isActive("/") ? "text-primary" : ""}`}>Home</Link>
              <button 
                onClick={() => handleAnchorClick('/#about')}
                className="nav-item"
              >
                About
              </button>
              
              {/* Solutions Dropdown */}
              <div className="relative group">
                <Link 
                  to="/solutions" 
                  className={`nav-item flex items-center gap-1 ${isActive("/solutions") ? "text-primary" : ""}`}
                >
                  Solutions
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#npl-sales-advisory')}
                      className="dropdown-item text-left w-full"
                    >
                      NPL Sales Advisory (for Lenders)
                    </button>
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#npl-investment-advisory')}
                      className="dropdown-item text-left w-full"
                    >
                      NPL Investment Advisory (for Investors)
                    </button>
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#project-finance')}
                      className="dropdown-item text-left w-full"
                    >
                      Project Finance & Cross-Border Credit
                    </button>
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#policy-advisory')}
                      className="dropdown-item text-left w-full"
                    >
                      Policy & Regulatory Advisory
                    </button>
                  </div>
                </div>
              </div>

              <Link to="/insights-hub" className={`nav-item ${isActive("/insights-hub") ? "text-primary" : ""}`}>Insights Hub</Link>
              <button 
                onClick={() => handleAnchorClick('/#case-studies')}
                className="nav-item"
              >
                Case Studies
              </button>
              <button 
                onClick={() => handleAnchorClick('/#contact')}
                className="nav-item"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <Link to="/" className="mobile-nav-item" onClick={closeMenu}>
                Home
              </Link>
              <button 
                onClick={() => handleAnchorClick('/#about')}
                className="mobile-nav-item text-left w-full"
              >
                About
              </button>
              
              {/* Mobile Solutions with Dropdown */}
              <div className="border-b border-border/20">
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="mobile-nav-item flex items-center justify-between w-full"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileSolutionsOpen && (
                  <div className="pl-4 pb-2">
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#npl-sales-advisory')}
                      className="mobile-sub-nav-item text-left w-full"
                    >
                      NPL Sales Advisory (for Lenders)
                    </button>
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#npl-investment-advisory')}
                      className="mobile-sub-nav-item text-left w-full"
                    >
                      NPL Investment Advisory (for Investors)
                    </button>
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#project-finance')}
                      className="mobile-sub-nav-item text-left w-full"
                    >
                      Project Finance & Cross-Border Credit
                    </button>
                    <button 
                      onClick={() => handleAnchorClick('/solutions/detailed#policy-advisory')}
                      className="mobile-sub-nav-item text-left w-full"
                    >
                      Policy & Regulatory Advisory
                    </button>
                  </div>
                )}
              </div>

              <Link to="/insights-hub" className="mobile-nav-item" onClick={closeMenu}>
                Insights Hub
              </Link>
              <button 
                onClick={() => handleAnchorClick('/#case-studies')}
                className="mobile-nav-item text-left w-full"
              >
                Case Studies
              </button>
              <button 
                onClick={() => handleAnchorClick('/#contact')}
                className="mobile-nav-item text-left w-full"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;