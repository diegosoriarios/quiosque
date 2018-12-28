# PWA

#### Como transformei esse site em PWA

Alguns detalhes:

  - Usei HTTPS.
  - Site responsivo
  - Adicionei uma cor para o tema
  - Adicionei um arquivo manifest.json
  - Crei um service worker

## Começando
Adicionei na tag head do arquivo index.html
```
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#fdcd3b"/>
```    

## Manifest
Criei um arquivo manifest.json para salvar os dados do meu site
```
{
    "lang": "pt",
    "name": "Quiosque",
    "short_name": "Quiosque",
    "icons": [
      {
        "src": "/quiosque.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/quiosque.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "#fff",
    "background_color": "#fff",
    "start_url": "/",
    "display": "standalone",
    "orientation": "natural"
}
```
Alguns detalhes para lembrar:

- O short_name não pode exceder 12 letras, pois é o nome que vai aparecer abaixo do ícone do app.
- O background_color é obrigatório.
- O array de icons precisa ter pelo menos um ícone de 512x512 para splashscreen e o de 192x192 para icone
- O ícone precisa ser em png.

Adicione no seu index.html

```
<link rel="manifest" href="/manifest.json">
```

## Service Worker
#### Registrando o service work
Adicionei o service work no meu arquivo index.html
```
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(function () {
            console.log('service worker registered');
          })
          .catch(function () {
            console.warn('service worker failed');
        });
    }
</script>
```
#### Criando o service worker
Criei um arquivo chamado sw.js na pasta root
>>>OBS: Se criarmos o service worker na pasta root significa que o escopo do service worker será completo, se adicionarmos dentro de uma pasta '/pasta' o escopo do service worker será só para endereços dentro dessa pasta '/pasta/site'
```
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
            '/js/jquery-3.3.1.min.js',
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

```
