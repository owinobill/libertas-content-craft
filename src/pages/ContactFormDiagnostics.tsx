import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, XCircle, Loader2, AlertTriangle, Mail, Database, Server } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

interface DiagnosticResult {
  name: string;
  status: 'pending' | 'running' | 'success' | 'error' | 'warning';
  message: string;
  details?: string;
  duration?: number;
}

const ContactFormDiagnostics = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<DiagnosticResult[]>([]);

  const updateResult = (name: string, updates: Partial<DiagnosticResult>) => {
    setResults(prev => {
      const existing = prev.find(r => r.name === name);
      if (existing) {
        return prev.map(r => r.name === name ? { ...r, ...updates } : r);
      }
      return [...prev, { name, status: 'pending', message: '', ...updates }];
    });
  };

  const runDiagnostics = async () => {
    setIsRunning(true);
    setResults([]);

    // Test 1: Check Edge Function Endpoint
    updateResult('endpoint', { status: 'running', message: 'Testing edge function endpoint...' });
    const startEndpoint = Date.now();
    try {
      const response = await fetch('https://zznubsevogfqoxgkdnzg.supabase.co/functions/v1/contact-form', {
        method: 'OPTIONS',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const duration = Date.now() - startEndpoint;
      if (response.ok || response.status === 204) {
        updateResult('endpoint', {
          status: 'success',
          message: 'Edge function endpoint is accessible',
          details: `Response time: ${duration}ms`,
          duration
        });
      } else {
        updateResult('endpoint', {
          status: 'error',
          message: 'Edge function returned unexpected status',
          details: `Status: ${response.status}`,
          duration
        });
      }
    } catch (error: any) {
      updateResult('endpoint', {
        status: 'error',
        message: 'Failed to reach edge function',
        details: error.message,
        duration: Date.now() - startEndpoint
      });
    }

    // Test 2: Submit Test Form Data
    updateResult('submission', { status: 'running', message: 'Submitting test form data...' });
    const startSubmission = Date.now();
    try {
      const testData = {
        name: 'Diagnostic Test User',
        email: 'test@libertasafrica.com',
        company: 'Libertas Africa',
        subject: 'Automated Diagnostic Test',
        message: `This is an automated diagnostic test submission.\nTimestamp: ${new Date().toISOString()}\nTest ID: ${Math.random().toString(36).substr(2, 9)}`
      };

      const response = await fetch('https://zznubsevogfqoxgkdnzg.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bnVic2V2b2dmcW94Z2tkbnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MDIxNjIsImV4cCI6MjA3NDQ3ODE2Mn0.wm79eU6XlH-gniv6YYpkFTR9WVtw2vmgQbbmLOm9HT8`,
        },
        body: JSON.stringify(testData),
      });

      const duration = Date.now() - startSubmission;
      
      if (response.ok) {
        const result = await response.json();
        updateResult('submission', {
          status: 'success',
          message: 'Test submission successful',
          details: `Contact ID: ${result.id}\nResponse time: ${duration}ms`,
          duration
        });

        // Check if email sending succeeded
        updateResult('email', { status: 'running', message: 'Checking email status...' });
        setTimeout(() => {
          updateResult('email', {
            status: 'warning',
            message: 'Email status unknown',
            details: 'Check edge function logs and Resend dashboard for email delivery status. If no emails received, verify domain in Resend.'
          });
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        updateResult('submission', {
          status: 'error',
          message: `Submission failed (${response.status})`,
          details: JSON.stringify(errorData, null, 2),
          duration
        });
        updateResult('email', {
          status: 'error',
          message: 'Email not sent (submission failed)',
          details: 'Fix submission issues first'
        });
      }
    } catch (error: any) {
      updateResult('submission', {
        status: 'error',
        message: 'Submission error',
        details: error.message,
        duration: Date.now() - startSubmission
      });
      updateResult('email', {
        status: 'error',
        message: 'Email not sent (submission failed)',
        details: error.message
      });
    }

    setIsRunning(false);
  };

  const getStatusIcon = (status: DiagnosticResult['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'running':
        return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />;
      default:
        return <div className="h-5 w-5 rounded-full bg-gray-300" />;
    }
  };

  const getTestIcon = (name: string) => {
    switch (name) {
      case 'endpoint':
        return <Server className="h-5 w-5" />;
      case 'submission':
        return <Database className="h-5 w-5" />;
      case 'email':
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <SEOHead 
        title="Contact Form Diagnostics - Libertas Africa"
        description="Diagnostic tools for the contact form system"
        noIndex={true}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>Contact Form Diagnostics</CardTitle>
            <CardDescription>
              Run comprehensive tests on the contact form submission and email delivery system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button 
              onClick={runDiagnostics}
              disabled={isRunning}
              className="w-full"
              size="lg"
            >
              {isRunning ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Running Diagnostics...
                </>
              ) : (
                'Run Full Diagnostic'
              )}
            </Button>

            {results.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Test Results</h3>
                {results.map((result) => (
                  <Card key={result.name} className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {getTestIcon(result.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium capitalize">{result.name}</h4>
                            {result.status !== 'pending' && (
                              <Badge variant={
                                result.status === 'success' ? 'default' :
                                result.status === 'error' ? 'destructive' :
                                result.status === 'warning' ? 'secondary' : 'outline'
                              }>
                                {result.status}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {result.message}
                          </p>
                          {result.details && (
                            <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
                              {result.details}
                            </pre>
                          )}
                          {result.duration && (
                            <p className="text-xs text-muted-foreground mt-2">
                              Duration: {result.duration}ms
                            </p>
                          )}
                        </div>
                        <div className="flex-shrink-0">
                          {getStatusIcon(result.status)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <Alert>
              <AlertDescription className="text-sm space-y-2">
                <p><strong>What this tests:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Edge function endpoint accessibility (CORS, connectivity)</li>
                  <li>Form data submission and database storage</li>
                  <li>Email delivery status (check logs for details)</li>
                </ul>
                <p className="mt-4"><strong>Common Issues:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Domain not verified in Resend (check DNS settings)</li>
                  <li>RESEND_API_KEY not set or invalid</li>
                  <li>Email blocked by spam filters</li>
                  <li>DKIM/SPF/DMARC misconfiguration</li>
                </ul>
                <p className="mt-4"><strong>Next Steps:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Check Supabase Edge Function logs for detailed error messages</li>
                  <li>Verify domain in Resend dashboard</li>
                  <li>Check Resend dashboard for email delivery status</li>
                  <li>Review DNS records (DKIM, SPF) for email domain</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactFormDiagnostics;
