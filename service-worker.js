self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: '提醒', body: '該紀錄熱量囉！' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/2424/2424742.png'
        })
    );
});

// 為了讓 PWA 能離線運行，加入簡單的快取邏輯
self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});