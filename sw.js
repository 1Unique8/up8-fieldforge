// Minimal Workbox service worker for FieldForge single-file PWA
// Import Workbox from CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js');

if (workbox) {
  console.log('Workbox loaded');

  // Precache the app shell
  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' }
  ]);

  // Navigation requests: CacheFirst so the shell opens offline
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.CacheFirst({
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
