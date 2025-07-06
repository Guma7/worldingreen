// Service Worker para cache de imagens e assets
const CACHE_NAME = 'world-in-green-v1';
const IMAGE_CACHE_NAME = 'world-in-green-images-v1';

// Assets críticos para cache imediato
const CRITICAL_ASSETS = [
  '/',
  '/images/forest-background.jpg',
  '/images/deforestation-hero.jpg',
  '/images/oceans-hero.jpg',
  '/images/agriculture-hero.jpg',
  '/images/solutions-hero.jpg',
  '/images/references-background.jpg'
];

// Instalar service worker e fazer cache dos assets críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Ativar service worker e limpar caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptar requests e implementar estratégia de cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache para imagens
  if (request.destination === 'image' || url.pathname.includes('/images/')) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            // Retorna do cache se disponível
            return response;
          }
          
          // Busca na rede e adiciona ao cache
          return fetch(request).then((networkResponse) => {
            // Só faz cache de respostas válidas
            if (networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Fallback para imagem padrão em caso de erro
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#f0f0f0"/><text x="200" y="150" text-anchor="middle" fill="#666" font-family="Arial" font-size="16">Imagem não disponível</text></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          });
        });
      })
    );
    return;
  }

  // Cache-first para assets críticos
  if (CRITICAL_ASSETS.some(asset => url.pathname === asset || url.pathname.endsWith(asset))) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request);
      })
    );
    return;
  }

  // Network-first para outros recursos
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});

// Pré-carregar imagens críticas em background
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRELOAD_IMAGES') {
    const imagesToPreload = event.data.images || [];
    
    caches.open(IMAGE_CACHE_NAME).then((cache) => {
      imagesToPreload.forEach((imageUrl) => {
        fetch(imageUrl).then((response) => {
          if (response.status === 200) {
            cache.put(imageUrl, response.clone());
          }
        }).catch((error) => {
          console.log('Erro ao pré-carregar imagem:', imageUrl, error);
        });
      });
    });
  }
});