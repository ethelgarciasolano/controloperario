const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "../templates/index.html",
  "../css/style.css",
  "../js/app.js",
  "../img/cafe1.jpeg",
  "../img/cafe2.jpeg",
  "../img/cafe3.jpeg",
  "../img/cafe4.jpeg",
  "../img/cafe5.jpeg",
  "../img/cafe6.jpeg",
  "../img/cafe7.jpeg",
  "../img/cafe8.jpeg",
  "../img/cafe9.jpeg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })