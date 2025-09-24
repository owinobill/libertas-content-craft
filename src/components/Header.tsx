import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const location = useLocation();

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
              <Link to="/" onClick={closeMenu} className="flex items-center">
                <img 
                  src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" 
                  alt="Libertas Africa" 
                  className="h-12 w-auto transition-transform duration-200 hover:scale-105" 
                  loading="lazy" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className={`nav-item ${isActive("/") ? "text-primary" : ""}`}>Home</Link>
              <Link to="/#about" className="nav-item">About</Link>
              
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
                    <Link 
                      to="/solutions/detailed#npl-sales-advisory" 
                      className="dropdown-item"
                    >
                      NPL Sales Advisory (for Lenders)
                    </Link>
                    <Link 
                      to="/solutions/detailed#npl-investment-advisory" 
                      className="dropdown-item"
                    >
                      NPL Investment Advisory (for Investors)
                    </Link>
                    <Link 
                      to="/solutions/detailed#project-finance" 
                      className="dropdown-item"
                    >
                      Project Finance & Cross-Border Credit
                    </Link>
                    <Link 
                      to="/solutions/detailed#policy-advisory" 
                      className="dropdown-item"
                    >
                      Policy & Regulatory Advisory
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/#case-studies" className="nav-item">Case Studies</Link>
              <Link to="/#insights" className="nav-item">Insights</Link>
              <Link to="/#contact" className="nav-item">Contact</Link>
            </nav>

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
              <Link to="/#about" className="mobile-nav-item" onClick={closeMenu}>
                About
              </Link>
              
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
                    <Link 
                      to="/solutions/detailed#npl-sales-advisory" 
                      className="mobile-sub-nav-item"
                      onClick={closeMenu}
                    >
                      NPL Sales Advisory (for Lenders)
                    </Link>
                    <Link 
                      to="/solutions/detailed#npl-investment-advisory" 
                      className="mobile-sub-nav-item"
                      onClick={closeMenu}
                    >
                      NPL Investment Advisory (for Investors)
                    </Link>
                    <Link 
                      to="/solutions/detailed#project-finance" 
                      className="mobile-sub-nav-item"
                      onClick={closeMenu}
                    >
                      Project Finance & Cross-Border Credit
                    </Link>
                    <Link 
                      to="/solutions/detailed#policy-advisory" 
                      className="mobile-sub-nav-item"
                      onClick={closeMenu}
                    >
                      Policy & Regulatory Advisory
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/#case-studies" className="mobile-nav-item" onClick={closeMenu}>
                Case Studies
              </Link>
              <Link to="/#insights" className="mobile-nav-item" onClick={closeMenu}>
                Insights
              </Link>
              <Link to="/#contact" className="mobile-nav-item" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;