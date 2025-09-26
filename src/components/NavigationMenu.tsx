import { Link, useLocation } from "react-router-dom";
import { ChevronDown, FileText, TrendingUp, Users, Target } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NavigationMenuItemProps {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<{ className?: string }> }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
});
ListItem.displayName = "ListItem";

const solutionsItems: NavigationMenuItemProps[] = [
  {
    title: "NPL Sales Advisory",
    href: "/solutions/detailed#npl-sales-advisory",
    description: "For lenders looking to optimize NPL portfolios and maximize recovery",
    icon: TrendingUp,
  },
  {
    title: "NPL Investment Advisory",
    href: "/solutions/detailed#npl-investment-advisory", 
    description: "For investors seeking high-yield opportunities in distressed assets",
    icon: Target,
  },
  {
    title: "Project Finance",
    href: "/solutions/detailed#project-finance",
    description: "Cross-border credit solutions and bankable project structuring",
    icon: Users,
  },
  {
    title: "Policy & Regulatory",
    href: "/solutions/detailed#policy-advisory",
    description: "Framework design for NPL markets and credit infrastructure",
    icon: FileText,
  },
];

interface MainNavigationProps {
  onLinkClick?: (href: string) => void;
  className?: string;
}

export const MainNavigation = ({ onLinkClick, className }: MainNavigationProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleClick = (href: string) => {
    if (onLinkClick) {
      onLinkClick(href);
    }
  };

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link 
            to="/" 
            className={cn("nav-item", isActive("/") && "text-primary")}
            onClick={() => handleClick("/")}
          >
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn("nav-item", isActive("/solutions") && "text-primary")}>
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutionsItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                  onClick={() => handleClick(item.href)}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to="/insights-hub" 
            className={cn("nav-item", isActive("/insights-hub") && "text-primary")}
            onClick={() => handleClick("/insights-hub")}
          >
            Insights Hub
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};