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

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setState(prev => ({ ...prev, updateAvailable: true }));
                }
              });
            }
          });

          // Handle messages from service worker
          navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
              setState(prev => ({ ...prev, updateAvailable: true }));
            }
          });

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

  const updateApp = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        
        if (registration && registration.waiting) {
          // Send skip waiting message to waiting service worker
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          
          // Listen for controller change to reload
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
          });
        } else {
          // If no waiting worker, just reload
          window.location.reload();
        }
      }
    } catch (error) {
      console.error('Error updating app:', error);
      // Fallback: force reload
      window.location.reload();
    }
  };

  return { ...state, updateApp };
};