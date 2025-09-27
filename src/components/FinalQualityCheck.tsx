import { useEffect } from 'react';
import { logger } from '@/utils/logger';

export const FinalQualityCheck = () => {
  useEffect(() => {
    const runFinalQualityCheck = () => {
      const issues: string[] = [];
      const warnings: string[] = [];
      const passed: string[] = [];

      // 1. Performance Checks
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
          
          if (loadTime > 3000) {
            issues.push(`Slow page load: ${Math.round(loadTime)}ms (should be < 3000ms)`);
          } else {
            passed.push(`✅ Page load time: ${Math.round(loadTime)}ms`);
          }
          
          if (domContentLoaded > 1500) {
            warnings.push(`DOM content loaded: ${Math.round(domContentLoaded)}ms (should be < 1500ms)`);
          } else {
            passed.push(`✅ DOM content loaded: ${Math.round(domContentLoaded)}ms`);
          }
          
          if (firstPaint > 1000) {
            warnings.push(`First paint: ${Math.round(firstPaint)}ms (should be < 1000ms)`);
          } else {
            passed.push(`✅ First paint: ${Math.round(firstPaint)}ms`);
          }
        }
      }

      // 2. SEO Checks
      const title = document.title;
      const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      const h1s = document.querySelectorAll('h1');
      const canonical = document.querySelector('link[rel="canonical"]');
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');

      if (!title || title.length < 30 || title.length > 60) {
        issues.push(`Title issues: ${title ? `length ${title.length}` : 'missing'} (should be 30-60 chars)`);
      } else {
        passed.push(`✅ Title: ${title.length} characters`);
      }

      if (!metaDesc || !metaDesc.content || metaDesc.content.length < 120 || metaDesc.content.length > 160) {
        issues.push(`Meta description issues: ${metaDesc?.content ? `length ${metaDesc.content.length}` : 'missing'} (should be 120-160 chars)`);
      } else {
        passed.push(`✅ Meta description: ${metaDesc.content.length} characters`);
      }

      if (h1s.length !== 1) {
        issues.push(`H1 count: ${h1s.length} (should be exactly 1)`);
      } else {
        passed.push(`✅ H1 heading: 1 found`);
      }

      if (!canonical) {
        warnings.push('Missing canonical URL');
      } else {
        passed.push(`✅ Canonical URL: ${canonical.getAttribute('href')}`);
      }

      if (structuredData.length === 0) {
        warnings.push('No structured data found');
      } else {
        passed.push(`✅ Structured data: ${structuredData.length} scripts`);
      }

      // 3. Accessibility Checks
      const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
      const skipLink = document.querySelector('a[href="#main-content"]');
      const mainLandmark = document.querySelector('main, [role="main"]');

      if (imagesWithoutAlt.length > 0) {
        issues.push(`Images without alt: ${imagesWithoutAlt.length}`);
      } else {
        passed.push(`✅ All images have alt attributes`);
      }

      if (!skipLink) {
        warnings.push('Skip link missing');
      } else {
        passed.push(`✅ Skip link present`);
      }

      if (!mainLandmark) {
        issues.push('Main landmark missing');
      } else {
        passed.push(`✅ Main landmark present`);
      }

      // 4. Security Checks
      const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      const xFrameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]');
      const mixedContent = document.querySelectorAll('[src^="http:"], [href^="http:"]');

      if (!csp) {
        warnings.push('Content Security Policy not found');
      } else {
        passed.push(`✅ Content Security Policy configured`);
      }

      if (!xFrameOptions) {
        warnings.push('X-Frame-Options not found');
      } else {
        passed.push(`✅ X-Frame-Options configured`);
      }

      if (location.protocol === 'https:' && mixedContent.length > 0) {
        warnings.push(`Mixed content: ${mixedContent.length} insecure resources`);
      } else {
        passed.push(`✅ No mixed content issues`);
      }

      // 5. PWA Checks
      const manifest = document.querySelector('link[rel="manifest"]');
      const themeColor = document.querySelector('meta[name="theme-color"]');
      const viewport = document.querySelector('meta[name="viewport"]');
      const serviceWorkerSupported = 'serviceWorker' in navigator;

      if (!manifest) {
        warnings.push('PWA manifest missing');
      } else {
        passed.push(`✅ PWA manifest present`);
      }

      if (!themeColor) {
        warnings.push('Theme color missing');
      } else {
        passed.push(`✅ Theme color configured`);
      }

      if (!viewport) {
        issues.push('Viewport meta tag missing');
      } else {
        passed.push(`✅ Viewport meta tag configured`);
      }

      if (!serviceWorkerSupported) {
        warnings.push('Service Worker not supported');
      } else {
        passed.push(`✅ Service Worker supported`);
      }

      // Calculate scores
      const totalChecks = issues.length + warnings.length + passed.length;
      const score = Math.round((passed.length / totalChecks) * 100);
      const criticalScore = Math.round(((totalChecks - issues.length) / totalChecks) * 100);

      // Generate report
      console.group('🎯 FINAL PRODUCTION QUALITY REPORT');
      
      console.log(`📊 Overall Score: ${score}% (${passed.length}/${totalChecks} checks passed)`);
      console.log(`🚨 Critical Score: ${criticalScore}% (${issues.length} critical issues)`);
      
      if (passed.length > 0) {
        console.group('✅ PASSED CHECKS:');
        passed.forEach(check => console.log(check));
        console.groupEnd();
      }
      
      if (warnings.length > 0) {
        console.group('⚠️ WARNINGS:');
        warnings.forEach(warning => console.warn(`- ${warning}`));
        console.groupEnd();
      }
      
      if (issues.length > 0) {
        console.group('🚨 CRITICAL ISSUES:');
        issues.forEach(issue => console.error(`- ${issue}`));
        console.groupEnd();
      }

      // Production readiness assessment
      if (issues.length === 0 && warnings.length <= 3) {
        console.log('🎉 PRODUCTION READY! All critical checks passed.');
      } else if (issues.length <= 2 && warnings.length <= 5) {
        console.log('⚡ MOSTLY READY - Address critical issues before production deployment.');
      } else {
        console.log('🔧 NEEDS WORK - Multiple issues need to be resolved before production.');
      }

      console.groupEnd();

      return {
        score,
        criticalScore,
        issues: issues.length,
        warnings: warnings.length,
        passed: passed.length,
        ready: issues.length === 0 && warnings.length <= 3
      };
    };

    // Run final check after everything is loaded
    setTimeout(runFinalQualityCheck, 3000);
  }, []);

  return null;
};