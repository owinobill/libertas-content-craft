const CACHE_NAME = 'libertas-africa-v2';
const STATIC_CACHE = 'libertas-static-v2';
const DYNAMIC_CACHE = 'libertas-dynamic-v2';
const ASSETS_CACHE = 'libertas-assets-v2';

// Static assets to cache immediately with longer TTL
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/lovable-uploads/6eeb5f85-9110-4fdb-bd6d-a88591d80ddd.png',
  '/libertas-logo.png'
];

// Cache configuration with different strategies and TTL
const CACHE_CONFIG = {
  // Long-term cache for static assets (1 year)
  ASSETS: {
    name: ASSETS_CACHE,
    ttl: 365 * 24 * 60 * 60 * 1000, // 1 year
    patterns: ['/assets/', '.js', '.css', '.woff2', '.png', '.jpg', '.jpeg', '.svg', '.webp', '.avif']
  },
  // Medium-term cache for dynamic content (1 hour)
  DYNAMIC: {
    name: DYNAMIC_CACHE,
    ttl: 60 * 60 * 1000, // 1 hour
    patterns: ['/insights-hub', '/solutions']
  }
};

// Network-first strategy for API calls
const NETWORK_FIRST = [
  '/api/'
];

// Cache-first strategy for static assets with aggressive caching
const CACHE_FIRST = [
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
              cacheName !== ASSETS_CACHE
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

  // Cache-first strategy for static assets with long TTL
  if (CACHE_FIRST.some(pattern => 
    url.pathname.includes(pattern) || url.pathname.endsWith(pattern)
  )) {
    event.respondWith(cacheFirstWithTTL(request));
    return;
  }

  // Stale-while-revalidate for pages
  event.respondWith(staleWhileRevalidate(request));
});

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      const responseToCache = networkResponse.clone();
      
      // Add cache headers for better browser caching
      const responseWithHeaders = new Response(responseToCache.body, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: {
          ...Object.fromEntries(responseToCache.headers),
          'sw-cache-timestamp': Date.now().toString()
        }
      });
      
      cache.put(request, responseWithHeaders);
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

async function cacheFirstWithTTL(request) {
  const cached = await getCachedWithTTL(request, CACHE_CONFIG.ASSETS);
  
  if (cached) {
    return cached;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(ASSETS_CACHE);
      const responseToCache = networkResponse.clone();
      
      // Add timestamp for TTL checking
      const responseWithTimestamp = new Response(responseToCache.body, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: {
          ...Object.fromEntries(responseToCache.headers),
          'sw-cache-timestamp': Date.now().toString(),
          'cache-control': 'public, max-age=31536000' // 1 year
        }
      });
      
      cache.put(request, responseWithTimestamp);
    }
    
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      const cache = caches.open(DYNAMIC_CACHE);
      cache.then(c => c.put(request, response.clone()));
    }
    return response;
  }).catch(() => cached);
  
  return cached || fetchPromise;
}

async function getCachedWithTTL(request, config) {
  const cached = await caches.match(request);
  
  if (!cached) return null;
  
  const timestamp = cached.headers.get('sw-cache-timestamp');
  if (!timestamp) return cached;
  
  const age = Date.now() - parseInt(timestamp);
  if (age > config.ttl) {
    // Cache expired, remove it
    const cache = await caches.open(config.name);
    cache.delete(request);
    return null;
  }
  
  return cached;
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