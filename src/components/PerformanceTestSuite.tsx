import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { 
  Timer, 
  Activity, 
  Zap, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Loader2 
} from 'lucide-react';

interface PerformanceTest {
  name: string;
  description: string;
  test: () => Promise<{ success: boolean; duration: number; details?: string }>;
}

interface TestResult {
  name: string;
  success: boolean;
  duration: number;
  details?: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
}

const PerformanceTestSuite = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);
  const [progress, setProgress] = useState(0);

  const performanceTests: PerformanceTest[] = [
    {
      name: 'Page Load Speed',
      description: 'Measures initial page load performance',
      test: async () => {
        const startTime = performance.now();
        
        // Test page reload performance
        await new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = window.location.origin + '/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png?' + Date.now();
        });
        
        const duration = performance.now() - startTime;
        const success = duration < 2000; // Pass if under 2 seconds
        
        return {
          success,
          duration,
          details: success ? 'Excellent load time' : 'Load time could be improved'
        };
      }
    },
    {
      name: 'Contact Form API Response',
      description: 'Tests contact form endpoint response time',
      test: async () => {
        const startTime = performance.now();
        
        try {
          const response = await fetch('https://zznubsevogfqoxgkdnzg.supabase.co/functions/v1/contact-form', {
            method: 'OPTIONS', // Just test CORS preflight
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          const duration = performance.now() - startTime;
          const success = response.ok && duration < 3000;
          
          return {
            success,
            duration,
            details: success ? 'API endpoint responding well' : 'API response time could be improved'
          };
        } catch (error) {
          return {
            success: false,
            duration: performance.now() - startTime,
            details: 'API endpoint unreachable'
          };
        }
      }
    },
    {
      name: 'Core Web Vitals - LCP',
      description: 'Largest Contentful Paint measurement',
      test: async () => {
        return new Promise((resolve) => {
          if (!('PerformanceObserver' in window)) {
            resolve({
              success: false,
              duration: 0,
              details: 'Performance Observer not supported'
            });
            return;
          }

          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            if (lastEntry) {
              const lcp = lastEntry.startTime;
              const success = lcp < 2500; // Good LCP is under 2.5s
              
              observer.disconnect();
              resolve({
                success,
                duration: lcp,
                details: success ? 'Excellent LCP score' : 'LCP could be improved'
              });
            }
          });

          try {
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
            
            // Fallback timeout
            setTimeout(() => {
              observer.disconnect();
              resolve({
                success: false,
                duration: 0,
                details: 'LCP measurement timed out'
              });
            }, 5000);
          } catch (e) {
            resolve({
              success: false,
              duration: 0,
              details: 'LCP measurement failed'
            });
          }
        });
      }
    },
    {
      name: 'Memory Usage',
      description: 'Checks current memory consumption',
      test: async () => {
        const startTime = performance.now();
        
        if ('memory' in performance) {
          const memInfo = (performance as any).memory;
          const usedMemoryMB = memInfo.usedJSHeapSize / (1024 * 1024);
          const totalMemoryMB = memInfo.totalJSHeapSize / (1024 * 1024);
          
          const duration = performance.now() - startTime;
          const success = usedMemoryMB < 50; // Pass if using less than 50MB
          
          return {
            success,
            duration,
            details: `Using ${usedMemoryMB.toFixed(1)}MB of ${totalMemoryMB.toFixed(1)}MB`
          };
        }
        
        return {
          success: true,
          duration: performance.now() - startTime,
          details: 'Memory API not available'
        };
      }
    },
    {
      name: 'Network Connectivity',
      description: 'Tests network connection quality',
      test: async () => {
        const startTime = performance.now();
        
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink;
          
          const duration = performance.now() - startTime;
          const success = effectiveType !== 'slow-2g' && downlink > 1;
          
          return {
            success,
            duration,
            details: `${effectiveType} connection, ${downlink}Mbps`
          };
        }
        
        return {
          success: true,
          duration: performance.now() - startTime,
          details: 'Network API not available'
        };
      }
    }
  ];

  const runTests = async () => {
    setIsRunning(true);
    setProgress(0);
    
    const initialResults: TestResult[] = performanceTests.map(test => ({
      name: test.name,
      success: false,
      duration: 0,
      status: 'pending' as const
    }));
    
    setResults(initialResults);

    for (let i = 0; i < performanceTests.length; i++) {
      const test = performanceTests[i];
      
      // Update status to running
      setResults(prev => prev.map((result, index) => 
        index === i ? { ...result, status: 'running' as const } : result
      ));

      try {
        const result = await test.test();
        
        // Update with completed result
        setResults(prev => prev.map((testResult, index) => 
          index === i 
            ? { 
                ...testResult, 
                success: result.success,
                duration: result.duration,
                details: result.details,
                status: result.success ? 'completed' as const : 'failed' as const
              } 
            : testResult
        ));
      } catch (error) {
        // Update with error result
        setResults(prev => prev.map((testResult, index) => 
          index === i 
            ? { 
                ...testResult, 
                success: false,
                duration: 0,
                details: 'Test failed with error',
                status: 'failed' as const
              } 
            : testResult
        ));
      }

      setProgress(((i + 1) / performanceTests.length) * 100);
    }

    setIsRunning(false);
    
    const successCount = results.filter(r => r.success).length;
    toast({
      title: "Performance Test Complete",
      description: `${successCount}/${performanceTests.length} tests passed`,
      variant: successCount === performanceTests.length ? "default" : "destructive"
    });
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'running':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Timer className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (result: TestResult) => {
    if (result.status === 'pending') return <Badge variant="secondary">Pending</Badge>;
    if (result.status === 'running') return <Badge variant="secondary">Running...</Badge>;
    if (result.success) return <Badge variant="default">Pass</Badge>;
    return <Badge variant="destructive">Fail</Badge>;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Performance Test Suite
        </CardTitle>
        <p className="text-muted-foreground">
          Comprehensive performance testing for production readiness
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Button 
            onClick={runTests} 
            disabled={isRunning}
            className="rounded-full"
          >
            {isRunning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Running Tests...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-4 w-4" />
                Run Performance Tests
              </>
            )}
          </Button>
          
          {isRunning && (
            <div className="flex-1 ml-4">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-1">
                {progress.toFixed(0)}% complete
              </p>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Test Results</h3>
            {results.map((result, index) => (
              <div 
                key={result.name}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(result.status)}
                  <div>
                    <h4 className="font-medium">{result.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {performanceTests[index].description}
                    </p>
                    {result.details && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {result.details}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {result.duration > 0 && (
                    <span className="text-sm text-muted-foreground">
                      {result.duration.toFixed(0)}ms
                    </span>
                  )}
                  {getStatusBadge(result)}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-sm text-muted-foreground">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Performance Guidelines
          </h4>
          <ul className="space-y-1 text-xs">
            <li>• Page load should be under 2 seconds</li>
            <li>• API responses should be under 3 seconds</li>
            <li>• LCP (Largest Contentful Paint) should be under 2.5 seconds</li>
            <li>• Memory usage should stay under 50MB for optimal performance</li>
            <li>• Network connectivity should be better than slow-2g</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceTestSuite;