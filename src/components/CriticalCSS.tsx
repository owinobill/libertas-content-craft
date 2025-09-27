import { Helmet } from "react-helmet-async";

export const CriticalCSS = () => {
  return (
    <Helmet>
      <style type="text/css">
        {`
          /* Hide skeleton once React content loads */
          #fcp-skeleton {
            display: none;
          }
          
          #root:empty + #fcp-skeleton {
            display: block;
          }
          
          /* CRITICAL CSS ONLY - Above-the-fold content */
          /* Reset and base styles */
          * {
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            background: hsl(220, 30%, 6%);
            color: hsl(210, 40%, 95%);
          }
          
          /* CRITICAL: Header and navigation only */
          header {
            position: sticky;
            top: 0;
            z-index: 50;
            background: rgba(14, 16, 26, 0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
            height: 4rem;
          }
          
          /* CRITICAL: Hero section only */
          .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: linear-gradient(135deg, hsl(220, 30%, 6%) 0%, hsl(195, 25%, 15%) 40%, hsl(162, 45%, 20%) 100%);
          }
          
          .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            max-width: 80rem;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          /* CRITICAL: Typography for above-the-fold only */
          h1 {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.1;
            margin: 0 0 2rem 0;
          }
          
          p {
            margin: 0;
          }
          
          .text-xl {
            font-size: 1.25rem;
          }
          
          .text-muted-foreground {
            color: hsl(215, 20%, 65%);
          }
          
          /* CRITICAL: Minimal button styles for hero CTAs */
          .btn-primary {
            background: hsl(142, 76%, 45%);
            color: hsl(220, 30%, 6%);
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            border: none;
            font-weight: 500;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
          }
          
          .btn-outline {
            background: transparent;
            color: hsl(210, 40%, 95%);
            border: 1px solid hsl(220, 15%, 20%);
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
          }
          
          /* CRITICAL: Basic layout utilities for above-the-fold */
          .flex {
            display: flex;
          }
          
          .items-center {
            align-items: center;
          }
          
          .justify-center {
            justify-content: center;
          }
          
          .gap-6 {
            gap: 1.5rem;
          }
          
          .mb-12 {
            margin-bottom: 3rem;
          }
          
          .max-w-4xl {
            max-width: 56rem;
          }
          
          .mx-auto {
            margin-left: auto;
            margin-right: auto;
          }
          
          .leading-relaxed {
            line-height: 1.625;
          }
          
          /* CRITICAL: Gradient text effect for hero */
          .text-gradient {
            background: linear-gradient(135deg, hsl(142, 76%, 45%) 0%, hsl(178, 84%, 32%) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* CRITICAL: Responsive text sizes */
          @media (min-width: 768px) {
            h1 {
              font-size: 4.5rem;
            }
            
            .text-xl {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </Helmet>
  );
};