import { Helmet } from "react-helmet-async";

export const CriticalCSS = () => {
  return (
    <Helmet>
      <style type="text/css">
        {`
          /* Inline Inter font face declarations to eliminate render blocking */
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(data:font/woff2;base64,d09GMgABAAAAABQ4AA0AAAAAIBwAABPaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIBwqBmAAgTIIIAl0EQgKo2ilPAsqAAE2AiQDUgQgBYM+ByAbjxwVG+kE2c4Kt9ceLKjhWYcNqOA2o4r4H/Zv7ty7+83sJJOJJNIIzUP0y3QQJRKJZBrBu5t/7vr/P5XdSmqkHX17rKzlgUlKLd2OLXJ3t12/aW3Yfz/fGf4iDxBAUFVQVdE/3K/3+///5zsHkJm5m5mBiT1S7GRGZMYKS0VRbEUCECLJIQhiDJJIYgKSJAhiDJLIAgKCBMsgJCAgyCFIgCCQBNqOhU3/9z/99mY/mQ==) format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(data:font/woff2;base64,d09GMgABAAAAABDgAA0AAAAAIBwAABCLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIBwqBmAAgTIIIAl0EQgKpViehQsqAAE2AiQDUgQgBYM+ByAbgRcVG+kE2c4Kt7ceTY3hWYdNKOA2o4r4H/Zv7ty7+83sJJOJJNIIzUP0y3QQJRKJZBrBu5t/7vr/P5XdSmqkHX17rKzlgUlKLd2OLXJ3t12/aW3Yfz/fGf4iDxBAUFVQVdE/3K/3+///5zsHkJm5m5mBiT1S7GRGZMYKS0VRbEUCECLJIQhiDJJIYgKSJAhiDJLIAgKCBMsgJCAgyCFIgCCQBJaOhU3/9z/99mY/mQ==) format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(data:font/woff2;base64,d09GMgABAAAAABDgAA0AAAAAIBwAABCLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIBwqBmAAgTIIIAl0EQgKpViehQsqAAE2AiQDUgQgBYM+ByAbgRcVG+kE2c4Kt7ceTY3hWYdNKOA2o4r4H/Zv7ty7+83sJJOJJNIIzUP0y3QQJRKJZBrBu5t/7vr/P5XdSmqkHX17rKzlgUlKLd2OLXJ3t12/aW3Yfz/fGf4iDxBAUFVQVdE/3K/3+///5zsHkJm5m5mBiT1S7GRGZMYKS0VRbEUCECLJIQhiDJJIYgKSJAhiDJLIAgKCBMsgJCAgyCFIgCCQBJaOhU3/9z/99mY/mQ==) format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(data:font/woff2;base64,d09GMgABAAAAABDgAA0AAAAAIBwAABCLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIBwqBmAAgTIIIAl0EQgKpViehQsqAAE2AiQDUgQgBYM+ByAbgRcVG+kE2c4Kt7ceTY3hWYdNKOA2o4r4H/Zv7ty7+83sJJOJJNIIzUP0y3QQJRKJZBrBu5t/7vr/P5XdSmqkHX17rKzlgUlKLd2OLXJ3t12/aW3Yfz/fGf4iDxBAUFVQVdE/3K/3+///5zsHkJm5m5mBiT1S7GRGZMYKS0VRbEUCECLJIQhiDJJIYgKSJAhiDJLIAgKCBMsgJCAgyCFIgCCQBJaOhU3/9z/99mY/mQ==) format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(data:font/woff2;base64,d09GMgABAAAAABDgAA0AAAAAIBwAABCLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIBwqBmAAgTIIIAl0EQgKpViehQsqAAE2AiQDUgQgBYM+ByAbgRcVG+kE2c4Kt7ceTY3hWYdNKOA2o4r4H/Zv7ty7+83sJJOJJNIIzUP0y3QQJRKJZBrBu5t/7vr/P5XdSmqkHX17rKzlgUlKLd2OLXJ3t12/aW3Yfz/fGf4iDxBAUFVQVdE/3K/3+///5zsHkJm5m5mBiT1S7GRGZMYKS0VRbEUCECLJIQhiDJJIYgKSJAhiDJLIAgKCBMsgJCAgyCFIgCCQBJaOhU3/9z/99mY/mQ==) format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(data:font/woff2;base64,d09GMgABAAAAABDgAA0AAAAAIBwAABCLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIBwqBmAAgTIIIAl0EQgKpViehQsqAAE2AiQDUgQgBYM+ByAbgRcVG+kE2c4Kt7ceTY3hWYdNKOA2o4r4H/Zv7ty7+83sJJOJJNIIzUP0y3QQJRKJZBrBu5t/7vr/P5XdSmqkHX17rKzlgUlKLd2OLXJ3t12/aW3Yfz/fGf4iDxBAUFVQVdE/3K/3+///5zsHkJm5m5mBiT1S7GRGZMYKS0VRbEUCECLJIQhiDJJIYgKSJAhiDJLIAgKCBMsgJCAgyCFIgCCQBJaOhU3/9z/99mY/mQ==) format('woff2');
          }
          /* Critical above-the-fold styles with fallback fonts */
          * {
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            margin: 0;
            line-height: 1.6;
            background: #0a0a0a;
            color: #fafafa;
          }
          
          /* Root container */
          #root {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          /* Header styles */
          header {
            position: sticky;
            top: 0;
            z-index: 50;
            background: rgba(10, 10, 10, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          /* Navigation styles */
          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          /* Logo styles */
          .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #60a5fa;
          }
          
          /* Primary button styles */
          .btn-primary {
            background: #1e40af;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          
          .btn-primary:hover {
            background: #1d4ed8;
          }
          
          /* Hero section styles for faster LCP */
          .hero {
            padding: 4rem 1.5rem;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .hero-content {
            position: relative;
            z-index: 10;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 2rem;
            color: #fafafa;
          }
          
          .hero-description {
            font-size: 1.25rem;
            line-height: 1.6;
            color: #a1a1aa;
            margin-bottom: 3rem;
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            align-items: center;
          }
          
          /* Main content area */
          main {
            flex: 1;
          }
          
          /* Container styles */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          /* Background gradient */
          .hero-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
          }
          
          /* Responsive hero title */
          @media (min-width: 768px) {
            .hero-title {
              font-size: 4.5rem;
            }
            .hero-description {
              font-size: 1.5rem;
            }
            .hero-buttons {
              flex-direction: row;
            }
          }
          
          /* Skip link styles */
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #1e40af;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 100;
          }
          
          .skip-link:focus {
            top: 6px;
          }
          
          /* Loading animation */
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          
          .animate-spin {
            animation: spin 1s linear infinite;
          }
        `}
      </style>
    </Helmet>
  );
};