import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { articles } from "@/data/articles";
import { createBreadcrumbSchema } from "@/utils/structuredData";

const InsightsHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Breadcrumb structured data for SEO
  const breadcrumbs = [
    { name: "Home", url: "https://libertasafrica.com" },
    { name: "Insights Hub", url: "https://libertasafrica.com/insights-hub" }
  ];
  const structuredData = [createBreadcrumbSchema(breadcrumbs)];

  // Articles data comes from centralized data file

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

  // Count articles per category
  const getCategoryCount = (category: string) => {
    if (category === "all") return articles.length;
    return articles.filter(article => article.category === category).length;
  };

  const categories = [
    { value: "all", label: "All Categories", count: articles.length },
    { value: "NPL", label: "NPL", count: getCategoryCount("NPL") },
    { value: "Thought Leadership", label: "Thought Leadership", count: getCategoryCount("Thought Leadership") },
    { value: "Case Studies", label: "Case Studies", count: getCategoryCount("Case Studies") },
    { value: "Market Insights", label: "Market Insights", count: getCategoryCount("Market Insights") }
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
      structuredData={structuredData}
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
              <select
                aria-label="Filter articles by category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-[240px] h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {`${category.label} (${category.count})`}
                  </option>
                ))}
              </select>
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
                <Card key={article.id} className="group hover-lift cursor-pointer card-elevated">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={article.image} 
                        alt={article.imageAlt}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
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
                      {article.description}
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
                <Card key={resource.id} className="group hover-lift">
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
                          {`PDF • ${resource.fileSize}`}
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