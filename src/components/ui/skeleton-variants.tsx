import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export const ArticleSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("space-y-4", className)}>
    <Skeleton className="h-48 w-full rounded-lg" />
    <div className="space-y-2">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
    <div className="flex space-x-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
  </div>
);

export const CardSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("p-6 border rounded-lg space-y-4", className)}>
    <Skeleton className="h-8 w-3/4" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
    <Skeleton className="h-10 w-32" />
  </div>
);

export const NavSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("flex space-x-4", className)}>
    <Skeleton className="h-6 w-16" />
    <Skeleton className="h-6 w-20" />
    <Skeleton className="h-6 w-18" />    
    <Skeleton className="h-6 w-24" />
  </div>
);

export const StatsSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="text-center space-y-2">
        <Skeleton className="h-12 w-16 mx-auto" />
        <Skeleton className="h-6 w-24 mx-auto" />
        <Skeleton className="h-4 w-32 mx-auto" />
      </div>
    ))}
  </div>
);

export const FormSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("space-y-6", className)}>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-32 w-full" />
    </div>
    <Skeleton className="h-12 w-full" />
  </div>
);

export const HeaderSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("flex items-center justify-between p-4", className)}>
    <Skeleton className="h-8 w-32" />
    <NavSkeleton />
    <Skeleton className="h-10 w-24" />
  </div>
);

export const FooterSkeleton = ({ className }: SkeletonProps) => (
  <div className={cn("space-y-8 p-8", className)}>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-6 w-24" />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, j) => (
              <Skeleton key={j} className="h-4 w-20" />
            ))}
          </div>
        </div>
      ))}
    </div>
    <Skeleton className="h-px w-full" />
    <div className="flex justify-between">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-32" />
    </div>
  </div>
);