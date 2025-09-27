import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, className, fallback, priority = false, sizes, srcSet, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    // Create responsive srcSet for logo images
    const generateResponsiveSrcSet = (originalSrc: string) => {
      if (originalSrc.includes('6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png')) {
        // This is the logo - create hypothetical responsive sizes
        // Since we can't generate actual resized versions, we'll use CSS to constrain size
        return originalSrc;
      }
      return srcSet || originalSrc;
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
    const responsiveSrcSet = generateResponsiveSrcSet(src);

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
        srcSet={responsiveSrcSet}
        sizes={sizes || (src.includes('6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png') ? '(max-width: 768px) 120px, 150px' : undefined)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          // Force appropriate sizing for logo to prevent oversized rendering
          src.includes('6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png') ? 'max-w-[150px] h-auto' : '',
          className
        )}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';