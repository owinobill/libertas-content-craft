import { Helmet } from "react-helmet-async";

export const CriticalCSS = () => {
  return (
    <Helmet>
      <style type="text/css">
        {`
          /* Comprehensive critical above-the-fold styles */
          * {
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            font-display: swap;
            background: hsl(220, 30%, 6%);
            color: hsl(210, 40%, 95%);
            font-feature-settings: "rlig" 1, "calt" 1;
          }
          
          /* Critical layout styles */
          .min-h-screen {
            min-height: 100vh;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          /* Header critical styles */
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
          
          /* Logo styles */
          .logo {
            height: 3rem;
            width: auto;
            transition: transform 0.2s;
          }
          
          .logo:hover {
            transform: scale(1.05);
          }
          
          /* Typography critical styles */
          h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
          }
          
          h1 {
            font-size: 3rem;
            font-weight: 700;
          }
          
          /* Hero section critical styles */
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
          
          /* Button critical styles */
          .btn {
            display: inline-flex;
            align-items: center;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            font-size: 1rem;
          }
          
          .btn-primary {
            background: hsl(142, 76%, 45%);
            color: hsl(220, 30%, 6%);
          }
          
          .btn-primary:hover {
            background: hsl(142, 76%, 40%);
          }
          
          .btn-outline {
            background: transparent;
            color: hsl(210, 40%, 95%);
            border: 1px solid hsl(220, 15%, 20%);
          }
          
          .btn-outline:hover {
            background: hsl(220, 20%, 15%);
          }
          
          /* Skip link critical styles */
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: hsl(142, 76%, 45%);
            color: hsl(220, 30%, 6%);
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 100;
          }
          
          .skip-link:focus {
            top: 6px;
          }
          
          /* Navigation critical styles */
          .nav-item {
            position: relative;
            color: hsl(215, 20%, 65%);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.875rem;
            transition: color 0.3s;
          }
          
          .nav-item:hover {
            color: hsl(210, 40%, 95%);
          }
          
          /* Mobile hidden/shown */
          .md-hidden {
            display: none;
          }
          
          .md-flex {
            display: flex;
          }
          
          @media (min-width: 768px) {
            .md-hidden {
              display: block;
            }
            
            .md-flex {
              display: flex;
            }
            
            h1 {
              font-size: 4.5rem;
            }
          }
          
          /* Loading animation critical */
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          
          /* Gradient text critical */
          .text-gradient {
            background: linear-gradient(135deg, hsl(142, 76%, 45%) 0%, hsl(178, 84%, 32%) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Flex utilities critical */
          .flex {
            display: flex;
          }
          
          .items-center {
            align-items: center;
          }
          
          .justify-between {
            justify-content: space-between;
          }
          
          .gap-6 {
            gap: 1.5rem;
          }
          
          /* Spacing utilities critical */
          .mb-8 {
            margin-bottom: 2rem;
          }
          
          .mb-12 {
            margin-bottom: 3rem;
          }
          
          .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        `}
      </style>
    </Helmet>
  );
};