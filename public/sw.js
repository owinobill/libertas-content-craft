const CACHE_NAME = 'libertas-africa-v2';
const STATIC_CACHE = 'libertas-static-v2';
const DYNAMIC_CACHE = 'libertas-dynamic-v2';
const ASSETS_CACHE = 'libertas-assets-v2';

// Static assets to cache immediately with long TTL
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png',
  '/libertas-logo.png'
];

// Long-term cacheable assets (1 year TTL simulation)
const LONG_CACHE_PATTERNS = [
  '/assets/',
  '/lovable-uploads/',
  '.js',
  '.css',
  '.woff2',
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.webp',
  '.avif'
];

// Network-first strategy for API calls and dynamic content
const NETWORK_FIRST = [
  '/api/',
  '/insights-hub',
  '/solutions'
];

// Cache duration constants (in milliseconds)
const CACHE_DURATIONS = {
  STATIC_ASSETS: 365 * 24 * 60 * 60 * 1000, // 1 year
  DYNAMIC_CONTENT: 24 * 60 * 60 * 1000,     // 1 day
  API_RESPONSES: 5 * 60 * 1000              // 5 minutes
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== ASSETS_CACHE &&
              cacheName.startsWith('libertas-')
            )
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests
  if (url.origin !== location.origin) return;

  // Network-first strategy
  if (NETWORK_FIRST.some(path => url.pathname.startsWith(path))) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Long-term cache strategy for static assets
  if (LONG_CACHE_PATTERNS.some(pattern => 
    url.pathname.includes(pattern) || url.pathname.endsWith(pattern)
  )) {
    event.respondWith(longTermCacheFirst(request));
    return;
  }

  // Default: Network-first with fallback
  event.respondWith(networkFirst(request));
});

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/');
    }
    
    throw error;
  }
}

async function longTermCacheFirst(request) {
  const url = new URL(request.url);
  const cacheKey = `${request.url}?v=${Date.now()}`;
  
  // Check cache first with timestamp validation for long-term assets
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    const cachedDate = new Date(cachedResponse.headers.get('sw-cached-date') || 0);
    const now = new Date();
    const cacheAge = now.getTime() - cachedDate.getTime();
    
    // Use cached version if less than 1 year old
    if (cacheAge < CACHE_DURATIONS.STATIC_ASSETS) {
      return cachedResponse;
    }
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone and add cache metadata
      const responseToCache = new Response(networkResponse.body, {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers: new Headers({
          ...Object.fromEntries(networkResponse.headers.entries()),
          'sw-cached-date': new Date().toISOString(),
          'cache-control': 'public, max-age=31536000', // 1 year
        })
      });
      
      const cache = await caches.open(ASSETS_CACHE);
      cache.put(request, responseToCache.clone());
      
      return networkResponse;
    }
    
    return networkResponse;
  } catch (error) {
    // Return cached version as fallback
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Handle background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(handleContactFormSync());
  }
});

async function handleContactFormSync() {
  // Handle any queued contact form submissions when back online
  console.log('Syncing contact form submissions...');
}