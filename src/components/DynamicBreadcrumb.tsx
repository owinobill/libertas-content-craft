import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Route mapping for breadcrumb labels
const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/solutions': 'Solutions',
  '/solutions/detailed': 'Solutions',
  '/insights-hub': 'Insights Hub',
  '/insights-hub/debt-sales-assignments': 'Debt Sales & Assignments',
  '/insights-hub/debt-sales-dynamics': 'NPL Sales Dynamics',
  '/insights-hub/npl-ecosystem-part-1': 'NPL Ecosystem Part 1',
  '/insights-hub/npl-ecosystem-part-2': 'NPL Ecosystem Part 2',
  '/privacy-policy': 'Privacy Policy',
  '/terms-of-use': 'Terms of Use',
};

interface DynamicBreadcrumbProps {
  className?: string;
  showHome?: boolean;
}

export const DynamicBreadcrumb = ({ className, showHome = true }: DynamicBreadcrumbProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbItems = [];
  
  // Add home if requested
  if (showHome) {
    breadcrumbItems.push({
      href: '/',
      label: 'Home',
      isHome: true
    });
  }

  // Build breadcrumb path
  let currentPath = '';
  pathnames.forEach((pathname, index) => {
    currentPath += `/${pathname}`;
    const isLast = index === pathnames.length - 1;
    const label = routeLabels[currentPath] || pathname.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    
    breadcrumbItems.push({
      href: currentPath,
      label,
      isLast,
      isHome: false
    });
  });

  return (
    <div className={className}>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {item.isLast ? (
                  <BreadcrumbPage className="flex items-center gap-2">
                    {item.isHome && <Home className="h-4 w-4" />}
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.href} className="flex items-center gap-2 hover:text-primary transition-colors">
                      {item.isHome && <Home className="h-4 w-4" />}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};