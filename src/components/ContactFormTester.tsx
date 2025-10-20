import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Send, 
  CheckCircle, 
  XCircle, 
  Loader2,
  TestTube,
  Mail,
  Database,
  Clock
} from 'lucide-react';

interface TestResult {
  test: string;
  success: boolean;
  duration: number;
  details: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
}

const ContactFormTester = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);

  const testContactForm = async () => {
    setIsRunning(true);
    setResults([]);

    const tests = [
      {
        name: 'API Endpoint Availability',
        test: async () => {
          const startTime = performance.now();
          try {
            const response = await fetch('https://zznubsevogfqoxgkdnzg.supabase.co/functions/v1/contact-form', {
              method: 'OPTIONS',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bnVic2V2b2dmcW94Z2tkbnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MDIxNjIsImV4cCI6MjA3NDQ3ODE2Mn0.wm79eU6XlH-gniv6YYpkFTR9WVtw2vmgQbbmLOm9HT8',
              },
            });
            
            const duration = performance.now() - startTime;
            return {
              success: response.ok,
              duration,
              details: response.ok ? 'Endpoint is available' : `HTTP ${response.status}: ${response.statusText}`
            };
          } catch (error) {
            return {
              success: false,
              duration: performance.now() - startTime,
              details: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
            };
          }
        }
      },
      {
        name: 'Form Validation Test',
        test: async () => {
          const startTime = performance.now();
          try {
            // Test with invalid data (empty fields)
            const response = await fetch('https://zznubsevogfqoxgkdnzg.supabase.co/functions/v1/contact-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bnVic2V2b2dmcW94Z2tkbnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MDIxNjIsImV4cCI6MjA3NDQ3ODE2Mn0.wm79eU6XlH-gniv6YYpkFTR9WVtw2vmgQbbmLOm9HT8',
              },
              body: JSON.stringify({
                name: '',
                email: '',
                subject: '',
                message: ''
              }),
            });

            const duration = performance.now() - startTime;
            const data = await response.json();
            
            // We expect this to fail due to validation
            return {
              success: !response.ok, // Success means it properly rejected invalid data
              duration,
              details: !response.ok ? 'Validation working correctly' : 'Validation may be missing'
            };
          } catch (error) {
            return {
              success: false,
              duration: performance.now() - startTime,
              details: `Validation test error: ${error instanceof Error ? error.message : 'Unknown error'}`
            };
          }
        }
      },
      {
        name: 'Test Email Submission',
        test: async () => {
          const startTime = performance.now();
          try {
            // Test with valid test data
            const testData = {
              name: 'Test User',
              email: 'test@example.com',
              company: 'Test Company',
              subject: 'Test Contact Form - Performance Testing',
              message: 'This is a test message to verify the contact form functionality. This message was generated automatically during performance testing. Please ignore.'
            };

            const response = await fetch('https://zznubsevogfqoxgkdnzg.supabase.co/functions/v1/contact-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bnVic2V2b2dmcW94Z2tkbnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MDIxNjIsImV4cCI6MjA3NDQ3ODE2Mn0.wm79eU6XlH-gniv6YYpkFTR9WVtw2vmgQbbmLOm9HT8',
              },
              body: JSON.stringify(testData),
            });

            const duration = performance.now() - startTime;
            const data = await response.json();
            
            return {
              success: response.ok,
              duration,
              details: response.ok 
                ? `Form submitted successfully (ID: ${data.id || 'N/A'})` 
                : `Submission failed: ${data.error || data.details || 'Unknown error'}`
            };
          } catch (error) {
            return {
              success: false,
              duration: performance.now() - startTime,
              details: `Submission error: ${error instanceof Error ? error.message : 'Unknown error'}`
            };
          }
        }
      }
    ];

    // Initialize results
    const initialResults: TestResult[] = tests.map(test => ({
      test: test.name,
      success: false,
      duration: 0,
      details: '',
      status: 'pending'
    }));
    setResults(initialResults);

    // Run tests sequentially
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      
      // Update status to running
      setResults(prev => prev.map((result, index) => 
        index === i ? { ...result, status: 'running' } : result
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
                status: result.success ? 'completed' : 'failed'
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
                details: 'Test execution failed',
                status: 'failed'
              } 
            : testResult
        ));
      }

      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setIsRunning(false);
    
    const successCount = results.filter(r => r.success).length;
    toast({
      title: "Contact Form Test Complete",
      description: `${successCount}/${tests.length} tests passed`,
      variant: successCount === tests.length ? "default" : "destructive"
    });
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'running':
        return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (result: TestResult) => {
    if (result.status === 'pending') return <Badge variant="secondary">Pending</Badge>;
    if (result.status === 'running') return <Badge variant="secondary">Running...</Badge>;
    if (result.success) return <Badge variant="default" className="bg-green-500">Pass</Badge>;
    return <Badge variant="destructive">Fail</Badge>;
  };

  const getTestIcon = (testName: string) => {
    if (testName.includes('API')) return <Send className="h-4 w-4" />;
    if (testName.includes('Validation')) return <TestTube className="h-4 w-4" />;
    if (testName.includes('Email')) return <Mail className="h-4 w-4" />;
    return <Database className="h-4 w-4" />;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TestTube className="h-5 w-5" />
          Contact Form Test Suite
        </CardTitle>
        <p className="text-muted-foreground">
          Test contact form functionality, validation, and email delivery
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <Button 
          onClick={testContactForm} 
          disabled={isRunning}
          className="rounded-full w-full"
        >
          {isRunning ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Running Tests...
            </>
          ) : (
            <>
              <TestTube className="mr-2 h-4 w-4" />
              Test Contact Form
            </>
          )}
        </Button>

        {results.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Test Results</h3>
            {results.map((result, index) => (
              <div 
                key={result.test}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(result.status)}
                  {getTestIcon(result.test)}
                  <div className="flex-1">
                    <h4 className="font-medium">{result.test}</h4>
                    {result.details && (
                      <p className="text-sm text-muted-foreground mt-1">
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

        <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Test Information</h4>
          <ul className="space-y-1 text-xs">
            <li>• <strong>API Endpoint:</strong> Tests if the contact form endpoint is reachable</li>
            <li>• <strong>Form Validation:</strong> Verifies that invalid data is properly rejected</li>
            <li>• <strong>Email Submission:</strong> Tests actual form submission with valid data</li>
            <li>• All tests use the production Supabase edge function endpoint</li>
            <li>• The test submission will create a real database entry and send emails</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactFormTester;