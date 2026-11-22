// FieldForge intake service worker — Workbox is self-hosted in vendor/workbox/
importScripts('vendor/workbox/workbox-sw.js');

if (workbox) {
  workbox.setConfig({ modulePathPrefix: 'vendor/workbox/' });
  console.log('Workbox loaded');

  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '4' },
    { url: '/index.html', revision: '4' },
    { url: '/manifest.json', revision: '4' },
    { url: '/favicon.ico', revision: '4' },
    { url: '/assets/icon-192.png', revision: '4' },
    { url: '/assets/icon-512.png', revision: '4' },
    { url: '/assets/apple-touch-icon.png', revision: '4' }
  ]);

  // Navigation requests: NetworkFirst so app updates reach installed users,
  // falling back to the cached shell when offline.
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

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
} else {
  console.log('Workbox failed to load');
}
