import { Helmet } from "react-helmet-async";

export const CriticalCSS = () => {
  return (
    <Helmet>
      <style type="text/css">
        {`
          /* Critical above-the-fold styles */
          body {
            font-family: Inter, system-ui, -apple-system, sans-serif;
            margin: 0;
            line-height: 1.6;
          }
          
          /* Header styles */
          header {
            position: sticky;
            top: 0;
            z-index: 50;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
            color: #1e40af;
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