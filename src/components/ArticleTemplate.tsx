import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { createBreadcrumbSchema, createArticleSchema } from "@/utils/structuredData";
import { Article, getRelatedArticles } from "@/data/articles";
import { LinkedInCTA } from "@/components/LinkedInCTA";

interface ArticleTemplateProps {
  article: Article;
  children: ReactNode;
}

export const ArticleTemplate = ({ article, children }: ArticleTemplateProps) => {
  const shareUrl = `https://libertasafrica.com/insights-hub/${article.slug}/`;
  const relatedArticles = getRelatedArticles(article.id);

  const breadcrumbs = [
    { name: "Home", url: "https://libertasafrica.com" },
    { name: "Insights Hub", url: "https://libertasafrica.com/insights-hub/" },
    { name: article.title, url: shareUrl }
  ];

  const structuredData = [
    createBreadcrumbSchema(breadcrumbs),
    createArticleSchema({
      title: article.title,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      image: article.image,
      url: shareUrl
    })
  ];

  const handleShare = (platform: string) => {
    const encodedTitle = encodeURIComponent(article.title);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`, '_blank');
        break;
    }
  };

  return (
    <PageLayout
      title={`${article.title} | Libertas Africa`}
      description={article.description}
      keywords={article.keywords}
      canonical={shareUrl}
      structuredData={structuredData}
    >
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Back Navigation */}
              <div className="mb-8">
                <Link to="/insights-hub">
                  <Button variant="ghost" className="p-0 h-auto font-medium hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Insights Hub
                  </Button>
                </Link>
              </div>

              {/* Article Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {article.title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Social Share Buttons */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Share:</span>
                  <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('email')}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="mb-12">
                <img 
                  src={article.image} 
                  alt={article.imageAlt}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {children}
              </article>

              {/* LinkedIn CTA */}
              <LinkedInCTA />

              {/* Social Share Buttons - Bottom */}
              <div className="flex items-center gap-3 py-8 border-t border-border/20 mt-8">
                <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('email')}>
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex flex-col">
                        <div className="w-full">
                          <img 
                            src={relatedArticle.image} 
                            alt={relatedArticle.imageAlt}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="mb-2">
                            <span className="text-sm text-muted-foreground">
                              {`${relatedArticle.date} • ${relatedArticle.readTime}`}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                            {relatedArticle.description}
                          </p>
                          <Link to={`/insights-hub/${relatedArticle.slug}`}>
                            <Button variant="outline" size="sm">
                              Read Article
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};
