// Structured Data utilities for JSON-LD

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Libertas Africa",
  "alternateName": "Libertas Advisory Ltd",
  "url": "https://libertasafrica.com",
  "logo": "https://libertasafrica.com/icon-512.png",
  "description": "Strategic consulting and advisory solutions in the financial sector across Africa",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "Libertas Africa Founders"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Kenya",
    "addressRegion": "Nairobi",
    "addressLocality": "Nairobi"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-20-5253963",
    "contactType": "customer service",
    "email": "connect@libertasafrica.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/libertas-africa/"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Africa"
  },
  "knowsAbout": [
    "NPL Portfolio Sales",
    "Investment Advisory",
    "Project Finance", 
    "Policy & Regulatory Advisory",
    "Debt Advisory",
    "Financial Services"
  ]
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Libertas Africa",
  "url": "https://libertasafrica.com",
  "description": "Strategic consulting and advisory solutions in the financial sector across Africa",
  "publisher": {
    "@type": "Organization",
    "name": "Libertas Africa"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://libertasafrica.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  serviceType: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "serviceType": service.serviceType,
  "provider": {
    "@type": "Organization",
    "name": "Libertas Africa"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Africa"
  }
});

export const createArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image || "/icon-512.png",
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": article.author || "Libertas Africa"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Libertas Africa",
    "logo": {
      "@type": "ImageObject",
      "url": "https://libertasafrica.com/icon-512.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{name: string; url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const createFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});