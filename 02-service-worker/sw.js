self.addEventListener('install', event => {
    console.log('Instalando SW');
    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("OK OK OK OK");
            self.skipWaiting();
            resolve();
        }, 1);
    });
    event.waitUntil(instalacion);
});
self.addEventListener('activate', event => {
    console.log("OK");
    
});
 self.addEventListener('fetch', event => {
                                           //Aplicar estrategias de cache
                                           /*    console.log("SW" + event.request.url );
    if (event.request.url.includes("https://jsonplaceholder.typicode.com/"))
    {
        const resp = new Response('{ "ok":false, "mensaje":"ggg" }');
        event.respondWith(resp);
    }*/
}) 
self.addEventListener("sync", event => {
    console.log("Conexion ok");
    console.log(event);
    console.log(event.tag);
} )