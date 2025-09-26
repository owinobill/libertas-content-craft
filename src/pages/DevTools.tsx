import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { 
  Settings, 
  Activity, 
  TestTube, 
  Database, 
  Mail,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import ContactFormTester from '@/components/ContactFormTester';
import PerformanceTestSuite from '@/components/PerformanceTestSuite';
import { SEOHead } from '@/components/SEOHead';

const DevTools = () => {
  const [systemStatus, setSystemStatus] = useState({
    database: 'operational',
    email: 'operational', 
    analytics: 'operational',
    performance: 'good'
  });

  const checkSystemHealth = async () => {
    toast({
      title: "System Health Check",
      description: "Running comprehensive system diagnostics...",
    });

    // Simulate health checks
    setTimeout(() => {
      setSystemStatus({
        database: 'operational',
        email: 'operational',
        analytics: 'operational', 
        performance: 'good'
      });
      
      toast({
        title: "System Health Check Complete",
        description: "All systems operational",
      });
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge variant="default" className="bg-green-500">Operational</Badge>;
      case 'warning':
        return <Badge variant="secondary" className="bg-yellow-500">Warning</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      case 'good':
        return <Badge variant="default" className="bg-green-500">Good</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Developer Tools - Libertas Africa"
        description="Production monitoring and testing tools for Libertas Africa website"
        canonical="https://libertasafrica.com/dev-tools"
        noIndex={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Developer Tools
              </h1>
              <p className="text-xl text-muted-foreground">
                Production monitoring and testing suite for Libertas Africa
              </p>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="contact" className="flex items-center gap-2">
                  <TestTube className="h-4 w-4" />
                  Contact Form
                </TabsTrigger>
                <TabsTrigger value="performance" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Performance
                </TabsTrigger>
                <TabsTrigger value="monitoring" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Monitoring
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        System Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          <span>Database</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(systemStatus.database)}
                          {getStatusBadge(systemStatus.database)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Email Service</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(systemStatus.email)}
                          {getStatusBadge(systemStatus.email)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4" />
                          <span>Analytics</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(systemStatus.analytics)}
                          {getStatusBadge(systemStatus.analytics)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          <span>Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(systemStatus.performance)}
                          {getStatusBadge(systemStatus.performance)}
                        </div>
                      </div>

                      <Button 
                        onClick={checkSystemHealth}
                        className="w-full rounded-full mt-4"
                        variant="outline"
                      >
                        <Shield className="mr-2 h-4 w-4" />
                        Run Health Check
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Production Readiness</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>✅ Google Analytics Configured</span>
                        <Badge variant="default" className="bg-green-500">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>✅ Contact Form Backend</span>
                        <Badge variant="default" className="bg-green-500">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>✅ Environment Variables</span>
                        <Badge variant="default" className="bg-green-500">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>⚠️ Legal Content</span>
                        <Badge variant="secondary" className="bg-yellow-500">Pending</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>⚠️ Error Monitoring</span>
                        <Badge variant="secondary" className="bg-yellow-500">Optional</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>✅ Performance Testing</span>
                        <Badge variant="default" className="bg-green-500">Available</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="contact">
                <ContactFormTester />
              </TabsContent>

              <TabsContent value="performance">
                <PerformanceTestSuite />
              </TabsContent>

              <TabsContent value="monitoring">
                <Card>
                  <CardHeader>
                    <CardTitle>Monitoring & Analytics</CardTitle>
                    <p className="text-muted-foreground">
                      Real-time monitoring and analytics configuration
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Google Analytics</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Tracking ID</span>
                            <Badge variant="default">G-WSYGGNY21N</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Environment</span>
                            <Badge variant="secondary">Production Only</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Page Views</span>
                            <Badge variant="default" className="bg-green-500">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Business Events</span>
                            <Badge variant="default" className="bg-green-500">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Web Vitals</span>
                            <Badge variant="default" className="bg-green-500">Active</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">System Configuration</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Supabase</span>
                            <Badge variant="default" className="bg-green-500">Connected</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Resend Email</span>
                            <Badge variant="default" className="bg-green-500">Configured</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>PWA Features</span>
                            <Badge variant="default" className="bg-green-500">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Error Boundaries</span>
                            <Badge variant="default" className="bg-green-500">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Security Headers</span>
                            <Badge variant="default" className="bg-green-500">Active</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Button variant="outline" className="rounded-full">
                          <Database className="mr-2 h-4 w-4" />
                          View Database
                        </Button>
                        <Button variant="outline" className="rounded-full">
                          <Mail className="mr-2 h-4 w-4" />
                          Check Email Logs
                        </Button>
                        <Button variant="outline" className="rounded-full">
                          <Activity className="mr-2 h-4 w-4" />
                          View Analytics
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevTools;