import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, X } from 'lucide-react';
import { useServiceWorker } from '@/hooks/useServiceWorker';

export const UpdateNotification = () => {
  const { updateAvailable, updateApp } = useServiceWorker();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (updateAvailable) {
      setIsVisible(true);
    }
  }, [updateAvailable]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="border-primary/20 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">Update Available</h4>
              <p className="text-xs text-muted-foreground mb-3">
                A new version of the app is available. Update now for the latest features.
              </p>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  onClick={updateApp}
                  className="h-8 px-3 text-xs"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Update
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setIsVisible(false)}
                  className="h-8 px-3 text-xs"
                >
                  Later
                </Button>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};