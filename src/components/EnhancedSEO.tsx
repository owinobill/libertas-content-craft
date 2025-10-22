import { Helmet } from "react-helmet-async";
import { createOrganizationSchema, createWebsiteSchema } from "@/utils/structuredData";

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object[];
  pageType?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

export const EnhancedSEO = ({
  title = "Libertas Africa | Strategic Financial Advisory & NPL Solutions",
  description = "Strategic consulting and advisory solutions in the financial sector - NPL portfolio sales, investment advisory, project finance, and policy & regulatory advisory across Africa.",
  keywords = "NPL portfolio sales, investment advisory, project finance, policy advisory, Africa financial services, debt advisory, non-performing loans, structured credit, DFI financing",
  ogImage = "/icon-512.png",
  canonical,
  structuredData = [],
  pageType = 'website',
  publishedTime,
  modifiedTime,
  author,
  section
}: EnhancedSEOProps) => {
  // Build clean canonical URL from window.location without query params or hash
  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}${window.location.pathname}`
    : '';
  const canonicalUrl = canonical || currentUrl;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `https://libertasafrica.com${ogImage}`;

  // Default structured data
  const defaultStructuredData = [
    createOrganizationSchema(),
    createWebsiteSchema(),
    ...structuredData
  ];

  return (
    <Helmet>
      {/* Enhanced Title */}
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* Enhanced Description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      {/* Keywords and Topics */}
      <meta name="keywords" content={keywords} />
      <meta name="topic" content="Financial Advisory, NPL Portfolio Sales, Investment Advisory" />
      
      {/* Author and Publication */}
      <meta name="author" content={author || "Libertas Africa"} />
      <meta name="publisher" content="Libertas Africa" />
      <meta name="copyright" content="© 2025 Libertas Africa. All rights reserved." />
      
      {/* Geographic and Language */}
      <meta name="geo.region" content="Africa" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-US" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Enhanced */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Libertas Africa" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Libertas Africa - Strategic Financial Advisory" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Article-specific Open Graph */}
      {pageType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          <meta property="article:publisher" content="https://libertasafrica.com" />
        </>
      )}
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@LibertasAfrica" />
      <meta name="twitter:creator" content="@LibertasAfrica" />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Libertas Africa - Strategic Financial Advisory" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Eaton Place, United Nations Crescent" />
      <meta name="business:contact_data:locality" content="Nairobi" />
      <meta name="business:contact_data:region" content="Kenya" />
      <meta name="business:contact_data:country_name" content="Kenya" />
      <meta name="business:contact_data:email" content="connect@libertasafrica.com" />
      <meta name="business:contact_data:phone_number" content="+254-20-5253963" />
      
      {/* PWA and Mobile */}
      <meta name="theme-color" content="#0B1E2D" />
      <meta name="msapplication-TileColor" content="#0B1E2D" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Libertas Africa" />
      
      {/* Search Engine Instructions */}
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      
      {/* Structured Data */}
      {defaultStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};