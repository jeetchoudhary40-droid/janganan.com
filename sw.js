/**
 * जनगणना (Janganana) - Service Worker for Offline Resilience & Speed
 */

const CACHE_NAME = 'janganana-v1.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './tutorials.html',
  './updates.html',
  './faqs.html',
  './downloads.html',
  './article.html',
  './css/style.css',
  './css/article.css',
  './css/accessibility.css',
  './js/articles-data.js',
  './js/app.js',
  './js/search.js',
  './js/article-renderer.js',
  './assets/images/ashoka-emblem.svg',
  './assets/images/self-enumeration-banner.svg',
  './assets/images/houselisting-banner.svg',
  './assets/images/cabinet-decision-banner.svg',
  './assets/images/helpline-banner.svg',
  './assets/images/enumerator-handbook.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Network first with cache fallback for fresh updates
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
