import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export const LinkedInCTA = () => {
  return (
    <div className="mt-16 p-6 bg-muted/30 rounded-lg border border-border/50 text-center">
      <p className="text-base text-muted-foreground mb-4">
        Follow us on LinkedIn for more insights.
      </p>
      <Button asChild variant="outline" size="default">
        <a 
          href="https://www.linkedin.com/company/libertas-africa/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Linkedin className="h-4 w-4" />
          Visit our LinkedIn page
        </a>
      </Button>
    </div>
  );
};
