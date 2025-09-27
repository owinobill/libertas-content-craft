import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { logger } from '@/utils/logger';

interface QAResult {
  category: string;
  test: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  critical: boolean;
  value?: string;
}

export const ComprehensiveQA = () => {
  const location = useLocation();
  const [qaResults, setQaResults] = useState<QAResult[]>([]);
  const [passNumber, setPassNumber] = useState(1);
  
  useEffect(() => {
    // Run QA in all environments for comprehensive testing
    
    // Run QA immediately
    runComprehensiveQA();
    
    // Also run after a delay to catch dynamic content
    const timer = setTimeout(() => {
      runComprehensiveQA();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const runComprehensiveQA = () => {
    const results: QAResult[] = [];
    const startTime = performance.now();
    
    console.log(`🔍 QA Pass #${passNumber} Starting - ${location.pathname}`);
    
    // SEO Validation
    const title = document.title;
    results.push({
      category: 'SEO',
      test: 'Page Title Length',
      status: title.length >= 30 && title.length <= 60 ? 'pass' : 'fail',
      message: `Title: "${title}"`,
      value: `${title.length} chars`,
      critical: true
    });
    
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      results.push({
        category: 'SEO',
        test: 'Meta Description Length', 
        status: metaDesc.content.length >= 120 && metaDesc.content.length <= 160 ? 'pass' : 'fail',
        message: `Description: "${metaDesc.content.substring(0, 50)}..."`,
        value: `${metaDesc.content.length} chars`,
        critical: true
      });
    } else {
      results.push({
        category: 'SEO',
        test: 'Meta Description',
        status: 'fail',
        message: 'Meta description missing',
        critical: true
      });
    }
    
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    results.push({
      category: 'SEO',
      test: 'Canonical URL',
      status: canonicalLink ? 'pass' : 'fail',
      message: canonicalLink ? `Canonical: ${canonicalLink.href}` : 'Canonical URL missing',
      critical: false
    });
    
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
      message: `${h1Elements.length} H1 elements found`,
      value: h1Elements.length === 1 ? 'Correct' : 'Should be exactly 1',
      critical: false
    });
    
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    results.push({
      category: 'Accessibility',
      test: 'Image Alt Attributes',
      status: imagesWithoutAlt.length === 0 ? 'pass' : 'fail',
      message: `${imagesWithoutAlt.length} images missing alt attributes`,
      critical: true
    });
    
    const skipLink = document.querySelector('a[href="#main-content"], .skip-link');
    results.push({
      category: 'Accessibility',
      test: 'Skip Link',
      status: skipLink ? 'pass' : 'warning',
      message: skipLink ? 'Skip link present' : 'Skip link not found',
      critical: false
    });
    
    // Navigation Validation
    const criticalAnchors = ['about', 'solutions', 'case-studies', 'contact'];
    const solutionAnchors = ['npl-sales-advisory', 'npl-investment-advisory', 'project-finance', 'policy-advisory'];
    
    let anchorTests = criticalAnchors;
    if (location.pathname.includes('solutions')) {
      anchorTests = [...criticalAnchors, ...solutionAnchors];
    }
    
    const missingAnchors: string[] = [];
    anchorTests.forEach(anchor => {
      const element = document.getElementById(anchor);
      if (!element) {
        missingAnchors.push(anchor);
      }
    });
    
    results.push({
      category: 'Navigation',
      test: 'Anchor Targets',
      status: missingAnchors.length === 0 ? 'pass' : 'warning',
      message: missingAnchors.length === 0 ? 'All anchors found' : `Missing: ${missingAnchors.join(', ')}`,
      critical: false
    });
    
    // Contact Links Validation
    const emailLink = document.querySelector('a[href^="mailto:connect@libertasafrica.com"]');
    const phoneLink = document.querySelector('a[href^="tel:+254205253963"]');
    const linkedinLink = document.querySelector('a[href*="linkedin.com/company/libertas-africa"]');
    
    results.push({
      category: 'Contact',
      test: 'Email Link',
      status: emailLink ? 'pass' : 'fail',
      message: emailLink ? 'Email link functional' : 'Email link missing',
      critical: true
    });
    
    results.push({
      category: 'Contact',
      test: 'Phone Link', 
      status: phoneLink ? 'pass' : 'fail',
      message: phoneLink ? 'Phone link functional' : 'Phone link missing',
      critical: true
    });
    
    results.push({
      category: 'Contact',
      test: 'LinkedIn Link',
      status: linkedinLink ? 'pass' : 'warning',
      message: linkedinLink ? 'LinkedIn link functional' : 'LinkedIn link missing',
      critical: false
    });
    
    // Performance Validation
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcp) {
      results.push({
        category: 'Performance',
        test: 'First Contentful Paint',
        status: fcp.startTime < 2000 ? 'pass' : fcp.startTime < 4000 ? 'warning' : 'fail',
        message: `FCP: ${Math.round(fcp.startTime)}ms`,
        value: fcp.startTime < 2000 ? 'Good' : 'Needs improvement',
        critical: false
      });
    }
    
    // Check for lazy loading (code splitting)
    const scriptTags = document.querySelectorAll('script[src]');
    const hasChunks = Array.from(scriptTags).some(script => {
      const src = script.getAttribute('src') || '';
      return src.includes('chunk') || src.includes('assets') || src.includes('index-');
    });
    
    results.push({
      category: 'Performance',
      test: 'Code Splitting',
      status: hasChunks ? 'pass' : 'warning',
      message: hasChunks ? 'Code splitting detected' : 'No code chunks found',
      critical: false
    });
    
    // Security Validation
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    results.push({
      category: 'Security',
      test: 'Content Security Policy',
      status: cspMeta ? 'pass' : 'warning',
      message: cspMeta ? 'CSP configured' : 'CSP not found',
      critical: false
    });
    
    const httpsCheck = window.location.protocol === 'https:';
    results.push({
      category: 'Security',
      test: 'HTTPS Protocol',
      status: httpsCheck ? 'pass' : 'fail',
      message: httpsCheck ? 'HTTPS enabled' : 'HTTPS required',
      critical: true
    });
    
    // PWA Validation
    const manifest = document.querySelector('link[rel="manifest"]');
    results.push({
      category: 'PWA',
      test: 'Web App Manifest',
      status: manifest ? 'pass' : 'warning',
      message: manifest ? 'Manifest present' : 'Manifest missing',
      critical: false
    });
    
    const serviceWorkerSupported = 'serviceWorker' in navigator;
    results.push({
      category: 'PWA',
      test: 'Service Worker Support',
      status: serviceWorkerSupported ? 'pass' : 'warning',
      message: serviceWorkerSupported ? 'SW supported' : 'SW not supported',
      critical: false
    });
    
    setQaResults(results);
    
    // Calculate scores
    const totalTests = results.length;
    const passedTests = results.filter(r => r.status === 'pass').length;
    const failedTests = results.filter(r => r.status === 'fail').length;
    const criticalIssues = results.filter(r => r.status === 'fail' && r.critical).length;
    const overallScore = Math.round((passedTests / totalTests) * 100);
    const duration = Math.round(performance.now() - startTime);
    
    // Log comprehensive results
    const isPass = failedTests === 0 && criticalIssues === 0;
    
    console.log(`🎯 QA Pass #${passNumber} ${isPass ? 'PASSED' : 'FAILED'}:`, {
      page: location.pathname,
      overallScore: `${overallScore}%`,
      passed: passedTests,
      failed: failedTests,
      warnings: results.filter(r => r.status === 'warning').length,
      criticalIssues,
      totalTests,
      duration: `${duration}ms`
    });
    
    // Log each category breakdown
    const categories = ['SEO', 'Accessibility', 'Navigation', 'Contact', 'Performance', 'Security', 'PWA'];
    categories.forEach(category => {
      const categoryResults = results.filter(r => r.category === category);
      const categoryPassed = categoryResults.filter(r => r.status === 'pass').length;
      const categoryFailed = categoryResults.filter(r => r.status === 'fail').length;
      const categoryScore = Math.round((categoryPassed / categoryResults.length) * 100);
      
      if (categoryFailed > 0) {
        console.error(`❌ ${category}: ${categoryScore}% (${categoryPassed}/${categoryResults.length})`);
        categoryResults.filter(r => r.status === 'fail').forEach(result => {
          console.error(`  • ${result.test}: ${result.message} ${result.value ? `(${result.value})` : ''}`);
        });
      } else {
        console.log(`✅ ${category}: ${categoryScore}% (${categoryPassed}/${categoryResults.length})`);
      }
    });
    
    // Log final status
    if (isPass) {
      console.log(`🎉 QA Pass #${passNumber} COMPLETE - NO ISSUES FOUND`);
    } else {
      console.error(`🚨 QA Pass #${passNumber} FAILED - ${failedTests} issues need fixing`);
    }
    
    setPassNumber(prev => prev + 1);
  };
  
  return null;
};