import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
// Lazy load images to improve initial page load performance
const getImageSrc = (imageName: string) => {
  const images: Record<string, string> = {
    'debt-sales': '/src/assets/debt-sales-hero.jpg',
    'debt-sales-dynamics': '/src/assets/debt-sales-dynamics-hero.jpg',
    'npl-ecosystem': '/src/assets/npl-ecosystem-hero.jpg',
    'npl-ecosystem-part1': '/src/assets/npl-ecosystem-part1-hero.jpg'
  };
  return images[imageName] || '';
};

const InsightsHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Articles data - sorted by date (newest first)
  const articles = [
    {
      id: 4,
      title: "Part 1: Building a Collaborative NPL Ecosystem in African Countries",
      excerpt: "Why African countries must tackle NPLs head-on and what global and regional lessons reveal about the value of collaboration.",
      category: "npls",
      date: "September 25, 2025",
      image: getImageSrc('npl-ecosystem-part1'),
      readTime: "9 min read",
      slug: "npl-ecosystem-part-1"
    },
    {
      id: 3,
      title: "Part 2: Strategies for Building a Collaborative NPL Ecosystem in African Countries",
      excerpt: "Four strategic pillars — legal frameworks, market infrastructure, capital mobilization, and collaboration — to create a thriving African NPL ecosystem.",
      category: "npls",
      date: "September 25, 2025",
      image: getImageSrc('npl-ecosystem'),
      readTime: "10 min read",
      slug: "npl-ecosystem-part-2"
    },
    {
      id: 2,
      title: "Understanding the Dynamics of Debt Sales: A Guide for Lenders in East Africa",
      excerpt: "A practical guide for East African lenders on navigating debt sales. From regulatory frameworks and synthetic debt sales to valuation, pricing, and reputational risk management — here's how to turn NPL challenges into opportunity.",
      category: "npls",
      date: "June 30, 2025",
      image: getImageSrc('debt-sales-dynamics'),
      readTime: "12 min read",
      slug: "debt-sales-dynamics"
    },
    {
      id: 1,
      title: "How Lenders in East Africa Can Unlock the Benefits of Debt Sales and Debt Assignments for Non-Performing Loan Portfolios",
      excerpt: "Non-performing loans (NPLs) continue to weigh on East African banks, but debt sales and assignments offer a powerful alternative. By transferring portfolios to specialized investors, lenders can free up capital, reduce risk, and reallocate resources toward growth.",
      category: "npls",
      date: "May 24, 2025",
      image: getImageSrc('debt-sales'),
      readTime: "8 min read",
      slug: "debt-sales-assignments"
    }
  ];

  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: "NPL Investment Guide for Africa",
      description: "Comprehensive guide covering NPL investment strategies, regulatory frameworks, and market opportunities across Africa.",
      fileSize: "2.5 MB",
      category: "npls"
    },
    {
      id: 2,
      title: "Cross-Border Financing Regulatory Framework",
      description: "Detailed overview of regulatory requirements for cross-border financing in key African markets.",
      fileSize: "1.8 MB",
      category: "project-finance"
    },
    {
      id: 3,
      title: "Debt Market Analysis Q4 2024",
      description: "Quarterly market analysis report with key metrics, trends, and forecasts for African debt markets.",
      fileSize: "3.2 MB",
      category: "market-trends"
    },
    {
      id: 4,
      title: "Policy Brief: Banking Regulations Update",
      description: "Latest updates on banking and financial regulations affecting debt markets in East and West Africa.",
      fileSize: "1.2 MB",
      category: "policy-regulation"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "npls", label: "NPLs" },
    { value: "project-finance", label: "Project Finance" },
    { value: "policy-regulation", label: "Policy & Regulation" },
    { value: "market-trends", label: "Market Trends" },
    { value: "case-studies", label: "Case Studies" }
  ];

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.label : category;
  };

  return (
    <PageLayout
      title="Insights Hub | NPL Strategies & African Debt Market Analysis | Libertas Africa"
      description="Expert perspectives, resources, and updates on debt markets, NPL strategies, and cross-border financing in Africa and beyond."
      keywords="NPL strategies, debt market analysis, African finance, cross-border financing, debt recovery"
      canonical="https://libertasafrica.com/insights-hub"
    >
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient leading-tight">
                Insights Hub
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Explore our perspectives, resources, and updates on debt markets, NPL strategies, and cross-border financing in Africa and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[240px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
              <p className="text-muted-foreground text-lg">
                Stay informed with our latest analysis and perspectives on African debt markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer card-elevated">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={article.image} 
                        alt={`${article.title} - ${article.excerpt.substring(0, 100)}...`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {getCategoryLabel(article.category)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{article.readTime}</span>
                      {article.date && (
                        <>
                          <span>•</span>
                          <span>{article.date}</span>
                        </>
                      )}
                    </div>
                    <CardTitle className="text-lg sm:text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    {article.slug ? (
                      <Link to={`/insights-hub/${article.slug}`} aria-label={`Read full article: ${article.title}`}>
                        <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                          Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary" disabled>
                        Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Resources & Downloads</h2>
              <p className="text-muted-foreground text-lg">
                Access our comprehensive reports, guides, and research materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2">
                          <Badge variant="outline" className="text-xs">
                            {getCategoryLabel(resource.category)}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {resource.description}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          PDF • {resource.fileSize}
                        </span>
                      </div>
                      <Button size="sm" className="shrink-0">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Get the latest insights and updates delivered straight to your inbox.
              </p>
              <Button size="lg" className="text-lg px-8 py-4">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

    </PageLayout>
  );
};

export default InsightsHub;