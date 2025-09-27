import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestResult {
  test: string;
  result: 'pass' | 'fail' | 'warning';
  value?: string | number;
  target?: string;
  message?: string;
}

interface PageMetrics {
  lcp?: number;
  fcp?: number;
  cls?: number;
  ttfb?: number;
  transferSize?: number;
  jsExecutionTime?: number;
}

export const QATestResults = () => {
  const [metrics, setMetrics] = useState<PageMetrics>({});
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  useEffect(() => {
    // Run QA tests after page load
    const runQATests = () => {
      const results: TestResult[] = [];
      
      // Performance observers for metrics
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcpValue = lastEntry.startTime;
        
        setMetrics(prev => ({ ...prev, lcp: lcpValue }));
        
        results.push({
          test: 'LCP (Largest Contentful Paint)',
          result: lcpValue < 2500 ? 'pass' : lcpValue < 4000 ? 'warning' : 'fail',
          value: `${Math.round(lcpValue)}ms`,
          target: '< 2.5s',
          message: lcpValue < 2500 ? 'Excellent LCP performance' : 'LCP needs optimization'
        });
        
        setTestResults([...results]);
      });

      // CLS monitoring
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as LayoutShift[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        
        results.push({
          test: 'CLS (Cumulative Layout Shift)',
          result: clsValue < 0.1 ? 'pass' : clsValue < 0.25 ? 'warning' : 'fail',
          value: clsValue.toFixed(3),
          target: '< 0.1',
          message: clsValue < 0.1 ? 'Excellent layout stability' : 'Layout shifts detected'
        });
        
        setTestResults([...results]);
      });

      // Navigation timing
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (nav) {
        const ttfb = nav.responseStart - nav.requestStart;
        
        setMetrics(prev => ({ ...prev, ttfb }));
        
        results.push({
          test: 'TTFB (Time to First Byte)',
          result: ttfb < 800 ? 'pass' : ttfb < 1800 ? 'warning' : 'fail',
          value: `${Math.round(ttfb)}ms`,
          target: '< 800ms',
          message: ttfb < 800 ? 'Fast server response' : 'Server response could be faster'
        });
      }

      // Resource timing
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const totalTransferSize = resources.reduce((sum, resource) => sum + (resource.transferSize || 0), 0);
      
      setMetrics(prev => ({ ...prev, transferSize: totalTransferSize }));
      
      results.push({
        test: 'Total Transfer Size',
        result: totalTransferSize < 1000000 ? 'pass' : totalTransferSize < 2000000 ? 'warning' : 'fail',
        value: `${Math.round(totalTransferSize / 1024)}KB`,
        target: '< 1MB',
        message: totalTransferSize < 1000000 ? 'Good resource optimization' : 'Consider optimizing resources'
      });

      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        
        // Auto-disconnect after 5 seconds
        setTimeout(() => {
          lcpObserver.disconnect();
          clsObserver.disconnect();
        }, 5000);
      } catch (error) {
        console.debug('Performance observers not supported');
      }

      setTestResults(results);
    };

    // Run tests after load
    if (document.readyState === 'complete') {
      setTimeout(runQATests, 1000);
    } else {
      window.addEventListener('load', () => setTimeout(runQATests, 1000));
    }
  }, []);

  if (testResults.length === 0) return null;

  const passCount = testResults.filter(r => r.result === 'pass').length;
  const totalCount = testResults.length;
  const score = Math.round((passCount / totalCount) * 100);

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Performance QA</CardTitle>
            <Badge variant={score >= 80 ? "default" : score >= 60 ? "secondary" : "destructive"}>
              {score}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {testResults.map((result, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="truncate mr-2">{result.test}</span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{result.value}</span>
                <Badge 
                  variant={result.result === 'pass' ? "default" : result.result === 'warning' ? "secondary" : "destructive"}
                  className="text-xs px-1.5 py-0.5"
                >
                  {result.result === 'pass' ? '✓' : result.result === 'warning' ? '⚠' : '✗'}
                </Badge>
              </div>
            </div>
          ))}
          <div className="text-xs text-muted-foreground pt-2 border-t">
            Page: {window.location.pathname}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};