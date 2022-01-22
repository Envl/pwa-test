self.addEventListener('fetch', (e) => {
	e.respondWith(
		(async function () {
			const response = await caches.match(e.request);
			return response || fetch(e.request);
		})()
	);
});
