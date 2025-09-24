import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InsightsHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "NPL Market Trends in East Africa: 2024 Analysis",
      excerpt: "An in-depth look at non-performing loan markets across East African countries, highlighting key opportunities and regulatory developments.",
      category: "npls",
      image: "/lovable-uploads/60b62344-cbae-4a0b-9e55-eb9a2f4862a6.png",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Cross-Border Financing: Navigating Regulatory Complexities",
      excerpt: "Understanding the regulatory landscape for cross-border transactions in emerging African markets and best practices for compliance.",
      category: "project-finance",
      image: "/lovable-uploads/d0894c83-3078-4a90-aa7b-a2370f4741e9.png",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Policy Changes Impacting Debt Recovery in West Africa",
      excerpt: "Recent policy developments and their implications for debt collection and NPL management strategies in the region.",
      category: "policy-regulation",
      image: "/lovable-uploads/60b62344-cbae-4a0b-9e55-eb9a2f4862a6.png",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Case Study: Successful NPL Portfolio Acquisition in Nigeria",
      excerpt: "A detailed analysis of a recent successful NPL portfolio transaction, highlighting key success factors and lessons learned.",
      category: "case-studies",
      image: "/lovable-uploads/d0894c83-3078-4a90-aa7b-a2370f4741e9.png",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Market Trends: African Debt Markets Q4 2024",
      excerpt: "Quarterly analysis of debt market performance across key African economies with forward-looking insights for 2025.",
      category: "market-trends",
      image: "/lovable-uploads/60b62344-cbae-4a0b-9e55-eb9a2f4862a6.png",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Digital Transformation in Debt Collection",
      excerpt: "How technology is revolutionizing debt collection processes and improving recovery rates across African markets.",
      category: "market-trends",
      image: "/lovable-uploads/d0894c83-3078-4a90-aa7b-a2370f4741e9.png",
      readTime: "5 min read"
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                Insights Hub
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
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
                <SelectTrigger className="w-[240px]">
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
                        alt={article.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {getCategoryLabel(article.category)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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

      <Footer />
    </div>
  );
};

export default InsightsHub;