import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { logger } from '@/utils/logger';

interface NavigationTestResult {
  from: string;
  to: string;
  expectedAnchor?: string;
  status: 'pass' | 'fail' | 'pending';
  error?: string;
}

export const NavigationTester = () => {
  const location = useLocation();
  const [testResults, setTestResults] = useState<NavigationTestResult[]>([]);
  
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    
    // Only run comprehensive tests on page load
    setTimeout(runNavigationTests, 3000);
  }, []);

  const runNavigationTests = () => {
    const tests: NavigationTestResult[] = [];
    
    // Test anchor elements exist
    const testAnchors = [
      'about', 'solutions', 'case-studies', 'contact',
      'npl-sales-advisory', 'npl-investment-advisory', 
      'project-finance', 'policy-advisory'
    ];
    
    testAnchors.forEach(anchor => {
      const element = document.getElementById(anchor);
      tests.push({
        from: location.pathname,
        to: `#${anchor}`,
        status: element ? 'pass' : 'fail',
        error: !element ? `Anchor #${anchor} not found` : undefined
      });
    });
    
    // Test external links
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="libertasafrica.com"])');
    externalLinks.forEach(link => {
      const hasNoopener = link.getAttribute('rel')?.includes('noopener');
      const hasNoreferrer = link.getAttribute('rel')?.includes('noreferrer');
      
      tests.push({
        from: location.pathname,
        to: link.getAttribute('href') || '',
        status: (hasNoopener && hasNoreferrer) ? 'pass' : 'fail',
        error: !(hasNoopener && hasNoreferrer) ? 'Missing rel="noopener noreferrer"' : undefined
      });
    });
    
    // Test internal navigation links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"]');
    internalLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        tests.push({
          from: location.pathname,
          to: href,
          status: 'pass' // Internal links are handled by React Router
        });
      }
    });
    
    // Test contact links
    const contactTests = [
      { selector: 'a[href^="mailto:connect@libertasafrica.com"]', expected: 'mailto:connect@libertasafrica.com' },
      { selector: 'a[href^="tel:+254205253963"]', expected: 'tel:+254205253963' },
    ];
    
    contactTests.forEach(test => {
      const element = document.querySelector(test.selector);
      tests.push({
        from: location.pathname,
        to: test.expected,
        status: element ? 'pass' : 'fail',
        error: !element ? `Contact link ${test.expected} not found` : undefined
      });
    });
    
    setTestResults(tests);
    
    // Log results
    const failedTests = tests.filter(t => t.status === 'fail');
    if (failedTests.length > 0) {
      logger.error('🚨 Navigation Test Failures:', {
        total: tests.length,
        failed: failedTests.length,
        failures: failedTests
      });
    } else {
      logger.info('✅ All Navigation Tests Passed:', {
        total: tests.length,
        page: location.pathname
      });
    }
  };
  
  return null;
};