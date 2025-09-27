import { useState, useEffect } from 'react';

interface ImageOptimizationOptions {
  src: string;
  fallback?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export const useImageOptimization = ({
  src,
  fallback = '/placeholder.svg',
  priority = false,
  quality = 75,
  sizes = '100vw'
}: ImageOptimizationOptions) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate WebP and AVIF variants for modern browsers
  const generateModernSources = (originalSrc: string) => {
    if (!originalSrc.startsWith('/') && !originalSrc.includes('lovable-uploads')) {
      return [];
    }

    const basePath = originalSrc.split('.').slice(0, -1).join('.');
    return [
      { srcSet: `${basePath}.avif`, type: 'image/avif' },
      { srcSet: `${basePath}.webp`, type: 'image/webp' }
    ];
  };

  const modernSources = generateModernSources(src);

  // Preload critical images
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, priority]);

  // Handle image loading
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };

    img.onerror = () => {
      setImageSrc(fallback);
      setIsLoading(false);
      setHasError(true);
    };

    img.src = src;
  }, [src, fallback]);

  return {
    imageSrc,
    isLoading,
    hasError,
    modernSources,
    loading: priority ? 'eager' : 'lazy'
  };
};