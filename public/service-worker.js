// Force SW to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Activate immediately
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // Take control of all pages
});

// Handle push events
self.addEventListener('push', (event) => {
  const payload = event.data ? event.data.json() : {};

  const title = payload?.web?.notification?.title || 'New Notification';
  const body = payload?.web?.notification?.body || 'You have a new message';
  const url = payload?.web?.notification?.deep_link || '/';

  const options = {
    body,
    icon: '/icon-192x192.png', // optional
    data: { url },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
