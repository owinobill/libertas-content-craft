import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { logger } from '@/utils/logger';

interface ValidationResult {
  category: string;
  test: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  critical: boolean;
}

export const ProductionReadinessValidator = () => {
  const location = useLocation();
  const [validationResults, setValidationResults] = useState<ValidationResult[]>([]);
  
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    
    // Run validation after page loads
    setTimeout(runProductionValidation, 2000);
  }, [location.pathname]);

  const runProductionValidation = () => {
    const results: ValidationResult[] = [];
    
    // SEO Validation
    const title = document.title;
    results.push({
      category: 'SEO',
      test: 'Page Title Length',
      status: title.length >= 30 && title.length <= 60 ? 'pass' : 'fail',
      message: `Title length: ${title.length} chars (should be 30-60)`,
      critical: true
    });
    
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      results.push({
        category: 'SEO',
        test: 'Meta Description Length', 
        status: metaDesc.content.length >= 120 && metaDesc.content.length <= 160 ? 'pass' : 'fail',
        message: `Meta description length: ${metaDesc.content.length} chars (should be 120-160)`,
        critical: true
      });
    }
    
    // Accessibility Validation
    const mainLandmark = document.querySelector('main, [role="main"]');
    results.push({
      category: 'Accessibility',
      test: 'Main Landmark',
      status: mainLandmark ? 'pass' : 'fail',
      message: mainLandmark ? 'Main landmark found' : 'Main landmark missing',
      critical: true
    });
    
    const h1Elements = document.querySelectorAll('h1');
    results.push({
      category: 'Accessibility',
      test: 'H1 Count',
      status: h1Elements.length === 1 ? 'pass' : 'fail',
      message: `${h1Elements.length} H1 elements found (should be exactly 1)`,
      critical: false
    });
    
    // Navigation Validation
    const anchorTests = [
      'about', 'solutions', 'case-studies', 'contact',
      'npl-sales-advisory', 'npl-investment-advisory', 
      'project-finance', 'policy-advisory'
    ];
    
    anchorTests.forEach(anchor => {
      const element = document.getElementById(anchor);
      if (location.pathname === '/' || location.pathname.includes('solutions')) {
        results.push({
          category: 'Navigation',
          test: `Anchor #${anchor}`,
          status: element ? 'pass' : 'warning',
          message: element ? `Anchor #${anchor} exists` : `Anchor #${anchor} not found on current page`,
          critical: false
        });
      }
    });
    
    // Performance Validation
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcp) {
      results.push({
        category: 'Performance',
        test: 'First Contentful Paint',
        status: fcp.startTime < 1000 ? 'pass' : fcp.startTime < 2500 ? 'warning' : 'fail',
        message: `FCP: ${Math.round(fcp.startTime)}ms (should be < 1000ms)`,
        critical: false
      });
    }
    
    // Security Validation
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    results.push({
      category: 'Security',
      test: 'Content Security Policy',
      status: cspMeta ? 'pass' : 'warning',
      message: cspMeta ? 'CSP header found' : 'CSP header not found',
      critical: false
    });
    
    // Contact Links Validation
    const emailLink = document.querySelector('a[href^="mailto:connect@libertasafrica.com"]');
    const phoneLink = document.querySelector('a[href^="tel:+254205253963"]');
    
    results.push({
      category: 'Contact',
      test: 'Email Link',
      status: emailLink ? 'pass' : 'fail',
      message: emailLink ? 'Email link found' : 'Email link missing',
      critical: true
    });
    
    results.push({
      category: 'Contact',
      test: 'Phone Link', 
      status: phoneLink ? 'pass' : 'fail',
      message: phoneLink ? 'Phone link found' : 'Phone link missing',
      critical: true
    });
    
    setValidationResults(results);
    
    // Calculate scores
    const totalTests = results.length;
    const passedTests = results.filter(r => r.status === 'pass').length;
    const criticalIssues = results.filter(r => r.status === 'fail' && r.critical).length;
    const overallScore = Math.round((passedTests / totalTests) * 100);
    
    // Log results
    if (criticalIssues > 0 || overallScore < 90) {
      logger.error('🚨 Production Readiness Issues Found:', {
        overallScore: `${overallScore}%`,
        criticalIssues,
        totalTests,
        passedTests,
        page: location.pathname
      });
      
      // Log specific failures
      results.filter(r => r.status === 'fail').forEach(result => {
        logger.error(`❌ ${result.category}: ${result.test} - ${result.message}`);
      });
    } else {
      logger.info('✅ Production Readiness Validation Passed:', {
        overallScore: `${overallScore}%`,
        totalTests,
        passedTests,
        page: location.pathname
      });
    }
  };
  
  return null;
};