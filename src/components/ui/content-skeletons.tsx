import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export const HeroSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("min-h-screen flex items-center justify-center", className)}>
    <div className="container mx-auto px-6 text-center space-y-8">
      <Skeleton className="h-20 w-3/4 mx-auto" />
      <Skeleton className="h-12 w-full max-w-4xl mx-auto" />
      <Skeleton className="h-12 w-2/3 max-w-2xl mx-auto" />
      <div className="flex gap-4 justify-center pt-4">
        <Skeleton className="h-12 w-40 rounded-full" />
        <Skeleton className="h-12 w-48 rounded-full" />
      </div>
    </div>
  </div>
);

export const SolutionsGridSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="p-8 border rounded-2xl space-y-4">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="h-10 w-32 rounded-full" />
      </div>
    ))}
  </div>
);

export const InsightsGridSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="border rounded-2xl overflow-hidden space-y-4">
        <Skeleton className="h-56 w-full" />
        <div className="p-6 space-y-4">
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <Skeleton className="h-8 w-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

export const CaseStudiesSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="p-8 border rounded-2xl space-y-4">
        <Skeleton className="h-12 w-12 rounded-lg mx-auto" />
        <Skeleton className="h-8 w-3/4 mx-auto" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3 mx-auto" />
        </div>
        <div className="space-y-1 pt-4">
          <Skeleton className="h-3 w-32 mx-auto" />
          <Skeleton className="h-6 w-24 mx-auto" />
        </div>
      </div>
    ))}
  </div>
);

export const ContactSectionSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("max-w-4xl mx-auto space-y-8", className)}>
    <div className="text-center space-y-4">
      <Skeleton className="h-12 w-64 mx-auto" />
      <Skeleton className="h-6 w-3/4 mx-auto" />
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-12 w-full rounded-full" />
      </div>
    </div>
  </div>
);
