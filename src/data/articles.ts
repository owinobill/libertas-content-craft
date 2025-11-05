import nplEcosystemPart1Hero from "@/assets/nairobi-skyline-hero.jpg";
import nplEcosystemHero from "@/assets/npl-ecosystem-hero.jpg";
import debtSalesHero from "@/assets/debt-sales-hero.jpg";
import debtSalesDynamicsHero from "@/assets/debt-sales-dynamics-hero.jpg";
import debtCollectionRegulationHero from "@/assets/debt-collection-regulation-hero.jpg";

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string;
  datePublished: string;
  dateModified: string;
}

export const articles: Article[] = [
  {
    id: "debt-collection-regulation",
    title: "Why Regulation Of Kenya's Debt Collection Industry Is Now A Market Imperative",
    slug: "debt-collection-regulation",
    description: "Kenya has built a modern financial system, but unregulated debt collection practices are damaging trust. It's time for comprehensive regulation to protect consumers and unlock capital.",
    date: "November 5, 2025",
    readTime: "14 min read",
    category: "Market Insights",
    image: debtCollectionRegulationHero,
    imageAlt: "Kenya's financial district highlighting regulatory oversight and debt collection governance",
    keywords: "debt collection regulation, Kenya, consumer protection, NPL investors, financial markets, ADRA Kenya, data protection, CBK",
    datePublished: "2025-11-05",
    dateModified: "2025-11-05",
  },
  {
    id: "npl-ecosystem-part-1",
    title: "Part 1: Building a Collaborative NPL Ecosystem in African Countries",
    slug: "npl-ecosystem-part-1",
    description: "Part 1: Why African countries must tackle NPLs head-on and what global and regional lessons reveal about the value of collaboration.",
    date: "September 25, 2025",
    readTime: "9 min read",
    category: "Market Insights",
    image: nplEcosystemPart1Hero,
    imageAlt: "Nairobi city skyline showing modern African financial district and banking infrastructure",
    keywords: "NPL ecosystem, African banking, non-performing loans, collaboration, financial recovery",
    datePublished: "2025-09-25",
    dateModified: "2025-09-25",
  },
  {
    id: "npl-ecosystem-part-2",
    title: "Part 2: A Practical Roadmap for NPL Ecosystem Development in Africa",
    slug: "npl-ecosystem-part-2",
    description: "Part 2: Strategic frameworks and actionable steps to establish a thriving NPL ecosystem across African markets.",
    date: "October 1, 2025",
    readTime: "10 min read",
    category: "Market Insights",
    image: nplEcosystemHero,
    imageAlt: "Strategic frameworks for NPL ecosystem development",
    keywords: "NPL resolution, African markets, financial ecosystem, regulatory framework",
    datePublished: "2025-10-01",
    dateModified: "2025-10-01",
  },
  {
    id: "debt-sales-assignments",
    title: "How Lenders in East Africa Can Unlock the Benefits of Debt Sales and Debt Assignments for Non-Performing Loan Portfolios",
    slug: "debt-sales-assignments",
    description: "Non-performing loans (NPLs) have been a challenge for banks in East Africa and across the world. Discover how debt sales and assignments can help manage distressed loan portfolios effectively.",
    date: "May 24, 2025",
    readTime: "8 min read",
    category: "Market Insights",
    image: debtSalesHero,
    imageAlt: "Debt sales and assignments for NPL management",
    keywords: "debt sales, debt assignments, NPL portfolios, East Africa, banking",
    datePublished: "2025-05-24",
    dateModified: "2025-05-24",
  },
  {
    id: "debt-sales-dynamics",
    title: "Dynamics of Debt Sales in Kenya: Opportunities for Banks and Investors",
    slug: "debt-sales-dynamics",
    description: "Explore the evolving landscape of debt sales in Kenya and how it presents opportunities for both financial institutions and investors in the NPL market.",
    date: "June 15, 2025",
    readTime: "7 min read",
    category: "Market Insights",
    image: debtSalesDynamicsHero,
    imageAlt: "Debt sales dynamics in Kenyan market",
    keywords: "debt sales, Kenya, NPL market, banking sector, investment opportunities",
    datePublished: "2025-06-15",
    dateModified: "2025-06-15",
  },
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
  return articles.filter(article => article.id !== currentId).slice(0, limit);
};
