import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const BundleOptimizer = () => {
  useEffect(() => {
    // Bundle analysis and optimization
    const analyzeBundleSize = () => {
      const scripts = document.querySelectorAll('script[src]');
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      
      let totalScriptSize = 0;
      let totalStyleSize = 0;
      const issues: string[] = [];

      // Analyze script bundles
      scripts.forEach((script) => {
        const src = script.getAttribute('src');
        if (src && !src.includes('node_modules')) {
          // This is an approximation - in production you'd use actual bundle analyzer
          const estimatedSize = src.length * 100; // Rough estimate
          totalScriptSize += estimatedSize;
          
          if (estimatedSize > 500000) { // > 500KB
            issues.push(`Large script bundle detected: ${src.substring(0, 50)}...`);
          }
        }
      });

      // Analyze CSS bundles
      stylesheets.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !href.includes('fonts.googleapis.com')) {
          const estimatedSize = href.length * 50;
          totalStyleSize += estimatedSize;
          
          if (estimatedSize > 100000) { // > 100KB
            issues.push(`Large CSS bundle detected: ${href.substring(0, 50)}...`);
          }
        }
      });

      // Check for duplicate resources
      const srcList = Array.from(scripts).map(s => s.getAttribute('src')).filter(Boolean);
      const hrefList = Array.from(stylesheets).map(l => l.getAttribute('href')).filter(Boolean);
      
      const duplicateScripts = srcList.filter((src, index) => srcList.indexOf(src) !== index);
      const duplicateStyles = hrefList.filter((href, index) => hrefList.indexOf(href) !== index);
      
      if (duplicateScripts.length > 0) {
        issues.push(`Duplicate scripts found: ${duplicateScripts.join(', ')}`);
      }
      
      if (duplicateStyles.length > 0) {
        issues.push(`Duplicate stylesheets found: ${duplicateStyles.join(', ')}`);
      }

      // Check for unused preloads
      const preloads = document.querySelectorAll('link[rel="preload"]');
      preloads.forEach((preload) => {
        const href = preload.getAttribute('href');
        const as = preload.getAttribute('as');
        
        if (as === 'script') {
          const correspondingScript = document.querySelector(`script[src="${href}"]`);
          if (!correspondingScript) {
            issues.push(`Unused script preload: ${href}`);
          }
        } else if (as === 'style') {
          const correspondingStyle = document.querySelector(`link[rel="stylesheet"][href="${href}"]`);
          if (!correspondingStyle) {
            issues.push(`Unused style preload: ${href}`);
          }
        }
      });

      // Report findings
      if (issues.length > 0) {
        logger.warn('📦 Bundle optimization issues:');
        issues.forEach(issue => logger.warn(`- ${issue}`));
      } else {
        logger.debug('📦 Bundle optimization: No issues detected');
      }

      // Report sizes in development
      if (process.env.NODE_ENV !== 'production') {
        logger.debug(`📦 Estimated bundle sizes - Scripts: ${Math.round(totalScriptSize/1024)}KB, Styles: ${Math.round(totalStyleSize/1024)}KB`);
      }
    };

    // Tree shaking analysis
    const analyzeTreeShaking = () => {
      // Check for commonly unused imports that should be tree-shaken
      const potentiallyUnusedLibraries = [
        'lodash', 'moment', 'antd', 'material-ui'
      ];

      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach((script) => {
        const src = script.getAttribute('src') || '';
        potentiallyUnusedLibraries.forEach((lib) => {
          if (src.includes(lib)) {
            logger.warn(`📦 Potentially large library detected: ${lib} - ensure tree shaking is working`);
          }
        });
      });
    };

    // Code splitting analysis
    const analyzeCodeSplitting = () => {
      const chunks = document.querySelectorAll('script[src*="chunk"], script[src*="assets"], script[src*="index-"]');
      
      // Also check performance entries for JS resources
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsChunks = resources.filter(r => 
        r.name.includes('.js') && 
        (r.name.includes('chunk') || r.name.includes('assets') || r.name.includes('index-'))
      );
      
      const totalChunks = Math.max(chunks.length, jsChunks.length);
      
      if (totalChunks === 0) {
        logger.warn('📦 No code chunks detected - consider implementing code splitting');
      } else {
        logger.info(`📦 Code splitting detected: ${totalChunks} chunks found`);
      }
    };

    // Run analysis after page load
    if (document.readyState === 'complete') {
      setTimeout(() => {
        analyzeBundleSize();
        analyzeTreeShaking();
        analyzeCodeSplitting();
      }, 2000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          analyzeBundleSize();
          analyzeTreeShaking();
          analyzeCodeSplitting();
        }, 2000);
      });
    }
  }, []);

  return null;
};