if( navigator.serviceWorker )
{
    navigator.serviceWorker.register("/sw.js")
    .then( reg => {
        setTimeout(() => {
            reg.sync.register('posteo-gatitos');
            console.log("Fotos enviadas");
            
        }, 3000);
    });
}
/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(resp => resp.json())
  .then(console.log); */