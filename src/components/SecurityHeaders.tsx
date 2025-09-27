import { Helmet } from "react-helmet-async";

export const SecurityHeaders = () => {
  return (
    <Helmet>
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS prefetch for faster connections */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};