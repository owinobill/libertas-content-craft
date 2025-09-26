import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout
      title="Page Not Found | Libertas Africa"
      description="The page you are looking for could not be found. Return to our homepage or explore our solutions and insights."
      keywords="404, page not found, Libertas Africa"
      canonical="https://libertasafrica.com/404"
      showBreadcrumb={false}
    >
      <main className="min-h-screen flex items-center justify-center py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 rounded-full">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full">
                <Link to="/insights-hub">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Browse Insights
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default NotFound;