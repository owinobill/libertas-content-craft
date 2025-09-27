import { memo } from "react";

// Zero-dependency hero content with minimal inline styles for instant LCP
const HeroContent = memo(() => (
  <section 
    className="relative min-h-screen flex items-center justify-center"
    style={{
      background: 'linear-gradient(135deg, hsl(220, 30%, 6%) 0%, hsl(195, 25%, 15%) 40%, hsl(162, 45%, 20%) 100%)'
    }}
  >
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="max-w-5xl mx-auto">
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 4.5rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '2rem',
          color: 'hsl(210, 40%, 95%)'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, hsl(142, 76%, 45%) 0%, hsl(178, 84%, 32%) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Unchaining Capital.
          </span>
          <br />
          Unlocking Potential.
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          lineHeight: '1.6',
          color: 'hsl(215, 20%, 65%)',
          marginBottom: '3rem',
          maxWidth: '64rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Libertas Africa provides strategic consulting and advisory solutions in the financial sector. This includes advisory to lenders and investors for Non-performing loan portfolio sales, deal origination and investment solutions for private and structured credit transactions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full transition-colors"
            style={{
              background: 'hsl(142, 76%, 45%)',
              color: 'hsl(220, 30%, 6%)'
            }}
          >
            Let's Connect
          </a>
          <a 
            href="#solutions"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full transition-colors"
            style={{
              background: 'transparent',
              color: 'hsl(210, 40%, 95%)',
              border: '1px solid hsl(220, 15%, 20%)'
            }}
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </div>
  </section>
));

HeroContent.displayName = "HeroContent";

// Minimal header component
const MinimalHeader = memo(() => (
  <header className="sticky top-0 z-50 border-b" style={{
    background: 'rgba(14, 16, 26, 0.95)',
    backdropFilter: 'blur(12px)',
    borderColor: 'rgba(255, 255, 255, 0.1)'
  }}>
    <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl h-16">
      <div className="flex items-center h-12">
        <img 
          src="/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png" 
          alt="Libertas Africa" 
          className="h-12 w-auto"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#vision" className="text-foreground/80 hover:text-foreground transition-colors">Vision</a>
        <a href="#solutions" className="text-foreground/80 hover:text-foreground transition-colors">Solutions</a>
        <a href="#insights" className="text-foreground/80 hover:text-foreground transition-colors">Insights</a>
        <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
      </div>
    </nav>
  </header>
));

MinimalHeader.displayName = "MinimalHeader";

// Ultra-minimal footer
const MinimalFooter = memo(() => (
  <footer className="py-12" style={{ background: 'hsl(220, 30%, 6%)' }}>
    <div className="container mx-auto px-6 text-center">
      <p style={{ color: 'hsl(215, 20%, 65%)' }}>
        © 2024 Libertas Africa. All rights reserved.
      </p>
    </div>
  </footer>
));

MinimalFooter.displayName = "MinimalFooter";

// Main component with zero lazy loading, zero Suspense
const UltraFastHomepage = () => {
  return (
    <div className="min-h-screen" style={{ 
      background: 'hsl(220, 30%, 6%)', 
      color: 'hsl(210, 40%, 95%)' 
    }}>
      <MinimalHeader />
      <main role="main">
        <HeroContent />
      </main>
      <MinimalFooter />
    </div>
  );
};

export default UltraFastHomepage;