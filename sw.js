// Minimal Workbox service worker for FieldForge single-file PWA
// Import Workbox from CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js');

if (workbox) {
  console.log('Workbox loaded');

  // Precache the app shell
  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '2' },
    { url: '/index.html', revision: '2' }
  ]);

  // Navigation requests: NetworkFirst so app updates reach installed users,
  // falling back to the cached shell when offline (CacheFirst never refreshed it).
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
      networkTimeoutSeconds: 4,
      cacheName: 'fieldforge-shell',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200]
        })
      ]
    })
  );

  // Skip waiting and claim clients so updates apply quickly
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
} else {
  console.log('Workbox failed to load');
}
