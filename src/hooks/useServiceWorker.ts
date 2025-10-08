import { useEffect, useState } from 'react';

interface ServiceWorkerState {
  isSupported: boolean;
  isRegistered: boolean;
  updateAvailable: boolean;
  error: string | null;
}

export const useServiceWorker = () => {
  const [state, setState] = useState<ServiceWorkerState>({
    isSupported: false,
    isRegistered: false,
    updateAvailable: false,
    error: null
  });

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      setState(prev => ({ ...prev, isSupported: true }));

      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          
          setState(prev => ({ ...prev, isRegistered: true }));

          // Silently handle updates - no user notification
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Silently activate the new service worker
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                }
              });
            }
          });

          // Check for updates periodically (every 5 minutes)
          setInterval(() => {
            registration.update();
          }, 300000);

        } catch (error) {
          setState(prev => ({ 
            ...prev, 
            error: error instanceof Error ? error.message : 'Failed to register service worker'
          }));
        }
      };

      registerSW();
    }
  }, []);

  const updateApp = () => {
    // Silent updates - no manual update needed
  };

  return { ...state, updateApp };
};