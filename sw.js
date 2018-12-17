var CACHE_NAME = 'quiosque-cache';

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/galeria.html',
            '/img/artes.jpg',
            '/img/carro.png',
            '/img/cirandas.jpg',
            '/img/colaboradores.jpg',
            '/img/contato.png',
            '/img/danca.jpg',
            '/img/dj.jpg',
            '/img/facebook.png',
            '/img/galeria.jpg',
            '/img/mantenedores.jpg',
            '/img/musicando.jpg',
            '/img/prefeitura.jpeg',
            '/img/quiosque.jpg',
            '/img/recado.jpg',
            '/img/teatro.jpg',
            '/img/texto.jpg',
            '/img/violao.jpg',
            '/img/xadrez.jpg',
            '/css/galeria.css',
            '/css/menu.css',
            '/css/reset.css',
            '/css/style.css',
            '/js/galeria.js',
            '/js/jquery-3.3.1.js',
            '/js/script.js',
        ])
      })
    );
  });

  self.addEventListener('activate', function activator(event) {
    event.waitUntil(
      caches.keys().then(function (keys) {
        return Promise.all(keys
          .filter(function (key) {
            return key.indexOf(CACHE_NAME) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
        );
      })
    );
  });

  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (cachedResponse) {
        return cachedResponse || fetch(event.request);
      })
    );
  });