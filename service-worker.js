const CACHE_NAME = "metal-pulse-v1";
const assets = ["./index.html", "https://cdn.tailwindcss.com"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(assets)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
