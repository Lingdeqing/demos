const CACHE_NAME = "app-shell-v1"

const APP_SHELL = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js"
]

// 安装阶段：缓存 App Shell
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching app shell")
      return cache.addAll(APP_SHELL)
    })
  )
})

// 激活阶段
self.addEventListener("activate", event => {
  console.log("Service Worker activated")
})

// 拦截请求
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      if (res) {
        return res
      }

      return fetch(event.request)
    })
  )
})