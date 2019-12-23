var staticCacheName = 'myPwaApp-cache-v1573557681714'
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/mypwa/index.html',
        '/mypwa/register.html',
        '/mypwa/search.html',
        '/mypwa/css/bootstrap.min.css',
        '/mypwa/css/main.min.css',
        '/mypwa/js/main.js'
      ]);
      // return cache.addAll([
      //   '/index.html',
      //   '/default.js',
      //   '/style/app.css'
      // ]);
    })
  );
 });

 self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });

 self.addEventListener('activate', event => {
  // console.log('Activating new service worker...');

  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // console.log('deleting old cache: ', cacheName)
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});