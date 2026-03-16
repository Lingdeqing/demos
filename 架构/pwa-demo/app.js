const statusElm = document.getElementById("status")

// 注册 Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => {
      console.log("Service Worker registered")
      statusElm.textContent = "Service Worker ready"
    })
    .catch(err => {
      console.error(err)
    })
}

// 模拟 API 请求
document.getElementById("btn").onclick = async () => {
  const res = await fetch("/data.json")
  const data = await res.json()
  statusElm.textContent = "Data: " + data.time
}