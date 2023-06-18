const dataCacheName = 'pwa-test-data';
const cacheName = 'pwa-test';
const filesToCache = [
  "/",
  "static/templates/index.html",
  "static/css/style.css",
  "static/js/app.js",
  "static/img/cafe1.jpeg",
  "static/img/cafe2.jpeg",
  "static/img/cafe3.jpeg",
  "static/img/cafe4.jpeg",
  "static/img/cafe5.jpeg",
  "static/img/cafe6.jpeg",
  "static/img/cafe7.jpeg",
  "static/img/cafe8.jpeg",
  "static/img/cafe9.jpeg",


]



  self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
    );
  });
  
  
  self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== cacheName && key !== dataCacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
  });
  
  
  self.addEventListener('fetch', function (e) {
    //console.log("fetch! ", e.request);
    e.respondWith(
      caches
        .match(e.request)
        .then((res) => {
          return res || fetch(e.request);
        })
        .catch(console.log)
    );
    //   e.waitUntil(response);
  });