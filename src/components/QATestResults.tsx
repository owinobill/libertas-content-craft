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
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Run QA tests after page load
    const runQATests = () => {
      const results: TestResult[] = [];
      let hasLoggedResults = false;
      
      // Performance observers for metrics
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcpValue = lastEntry.startTime;
        
        setMetrics(prev => ({ ...prev, lcp: lcpValue }));
        
        results.push({
          test: 'LCP',
          result: lcpValue < 2500 ? 'pass' : lcpValue < 4000 ? 'warning' : 'fail',
          value: `${Math.round(lcpValue)}ms`,
          target: '< 2.5s',
          message: lcpValue < 2500 ? 'Excellent LCP' : 'LCP needs optimization'
        });
        
        if (!hasLoggedResults) {
          console.log('🔍 LCP Performance:', Math.round(lcpValue) + 'ms');
          hasLoggedResults = true;
        }
        
        setTestResults([...results]);
      });

      // CLS monitoring with detailed logging
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as LayoutShift[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            
            // Log individual layout shifts for debugging
            if (entry.value > 0.01) {
              console.warn('⚠️ Layout Shift Detected:', {
                value: entry.value.toFixed(4),
                cumulativeScore: clsValue.toFixed(4),
                sources: entry.sources?.map(source => ({
                  node: (source.node as Element)?.tagName || 'unknown',
                  previousRect: source.previousRect,
                  currentRect: source.currentRect
                }))
              });
            }
          }
        }
        
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        
        const existingClsIndex = results.findIndex(r => r.test === 'CLS');
        const clsResult: TestResult = {
          test: 'CLS',
          result: (clsValue < 0.1 ? 'pass' : clsValue < 0.25 ? 'warning' : 'fail') as 'pass' | 'warning' | 'fail',
          value: clsValue.toFixed(3),
          target: '< 0.1',
          message: clsValue < 0.1 ? 'Excellent stability' : `${Math.round(clsValue * 1000)} layout shifts detected`
        };
        
        if (existingClsIndex >= 0) {
          results[existingClsIndex] = clsResult;
        } else {
          results.push(clsResult);
        }
        
        setTestResults([...results]);
      });

      // Navigation timing
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (nav) {
        const ttfb = nav.responseStart - nav.requestStart;
        const fcp = nav.domContentLoadedEventEnd - nav.fetchStart;
        
        setMetrics(prev => ({ ...prev, ttfb, fcp }));
        
        results.push(
          {
            test: 'TTFB',
            result: ttfb < 800 ? 'pass' : ttfb < 1800 ? 'warning' : 'fail',
            value: `${Math.round(ttfb)}ms`,
            target: '< 800ms',
            message: ttfb < 800 ? 'Fast server' : 'Server could be faster'
          },
          {
            test: 'FCP',
            result: fcp < 1800 ? 'pass' : fcp < 3000 ? 'warning' : 'fail',
            value: `${Math.round(fcp)}ms`,
            target: '< 1.8s',
            message: fcp < 1800 ? 'Fast paint' : 'First paint could be faster'
          }
        );
      }

      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        
        // Auto-disconnect after 10 seconds
        setTimeout(() => {
          lcpObserver.disconnect();
          clsObserver.disconnect();
        }, 10000);
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

  const clsResult = testResults.find(r => r.test === 'CLS');
  const clsScore = clsResult ? parseFloat(clsResult.value as string) : 0;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
        <CardHeader className="pb-3 cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Performance QA</CardTitle>
            <div className="flex items-center gap-2">
              {clsScore > 0.1 && (
                <Badge variant="destructive" className="text-xs">
                  CLS: {clsResult?.value}
                </Badge>
              )}
              <Badge variant={score >= 80 ? "default" : score >= 60 ? "secondary" : "destructive"}>
                {score}%
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        {!isCollapsed && (
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
        )}
      </Card>
    </div>
  );
};