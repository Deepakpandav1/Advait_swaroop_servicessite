// Service Worker for Advait Swaroop Services
const CACHE_NAME = "advait-swaroop-services-v" + Date.now();
const urlsToCache = [
  "/",
  "/src/styles.css",
  "/logo.png",
  "/icon.png",
  "/gline.png",
  "/manifest.json",
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Always try network first, then cache as fallback
        return response;
      })
      .catch(() => {
        // Only use cache if network fails
        return caches.match(event.request);
      })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
