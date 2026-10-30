// Service worker: guarda la app para que funcione sin internet.
// Ya no necesitas borrar datos del navegador: la app pide siempre la versión más nueva
// a internet (sin usar la caché del navegador) y solo usa lo guardado si no hay conexión.
const CACHE='genogramas-v3';
const ARCHIVOS=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARCHIVOS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 // Red primero (para recibir actualizaciones); si no hay internet, usa lo guardado.
 e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
