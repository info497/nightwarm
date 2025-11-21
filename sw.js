self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("nightwarm-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./result.html",
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
