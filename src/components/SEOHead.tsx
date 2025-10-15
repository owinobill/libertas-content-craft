import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: object | object[];
  noIndex?: boolean;
}

export const SEOHead = ({
  title = "Libertas Africa | Strategic Financial Advisory & NPL Solutions",
  description = "Strategic consulting and advisory solutions in the financial sector - NPL portfolio sales, investment advisory, project finance, and policy & regulatory advisory across Africa.",
  keywords = "NPL portfolio sales, investment advisory, project finance, policy advisory, Africa financial services, debt advisory, non-performing loans, structured credit, DFI financing",
  ogImage = "/icon-512.png",
  ogType = "website",
  canonical,
  structuredData,
  noIndex = false,
}: SEOHeadProps) => {
  // Build clean canonical URL from window.location without query params or hash
  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}${window.location.pathname}`
    : '';
  const canonicalUrl = canonical || currentUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Libertas Africa" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content="English" />
      <meta name="geo.region" content="Africa" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Libertas Africa - Strategic Financial Advisory" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Libertas Africa" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Libertas Africa - Strategic Financial Advisory" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0B1E2D" />
      <meta name="msapplication-TileColor" content="#0B1E2D" />
      <meta name="application-name" content="Libertas Africa" />
      
      {/* Structured Data */}
      {structuredData && (
        <>
          {Array.isArray(structuredData) ? (
            structuredData.map((data, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          ) : (
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          )}
        </>
      )}
    </Helmet>
  );
};