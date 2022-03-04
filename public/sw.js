self.addEventListener('install', function(event){
       console.log('[Service Worker] Installing service worker...', event);
})

self.addEventListener('activate', function(event){
    console.log('[Activated Service Worker] Activated service worker...', event);
    return self.clients.claim();
})

self.addEventListener('fetch', function(event){
       console.log('[Service worker] Fetching something ....', event);
       event.respondWith(fetch(event.request));
})