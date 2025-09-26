import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  priority?: boolean;
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, className, fallback, priority = false, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    // Generate WebP/AVIF sources if the image is from assets
    const generateModernSources = (originalSrc: string) => {
      if (originalSrc.startsWith('/') && !originalSrc.includes('lovable-uploads')) {
        const basePath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
        return {
          avif: `${basePath}.avif`,
          webp: `${basePath}.webp`
        };
      }
      return null;
    };

    const modernSources = generateModernSources(src);

    if (modernSources) {
      return (
        <picture className={cn('block', className)}>
          <source srcSet={modernSources.avif} type="image/avif" />
          <source srcSet={modernSources.webp} type="image/webp" />
          <img
            ref={ref}
            src={hasError ? fallback || src : src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'transition-opacity duration-300',
              isLoading ? 'opacity-0' : 'opacity-100',
              className
            )}
            {...props}
          />
        </picture>
      );
    }

    return (
      <img
        ref={ref}
        src={hasError ? fallback || src : src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';