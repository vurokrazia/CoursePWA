function sumLow(numero){
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            //resolve(numero + 1);
            reject("Fallo");
        },800);
    });
}

let sumarQuick = (numero) => {
    return new Promise((resolve,reject) => {
        setTimeout( () => resolve(numero + 1), 300);
    });
}

Promise.all([sumLow(5),sumarQuick(10)])
    .then
    (
        respuestas => 
        {
            console.log(respuestas);
        }
    )
    .catch(console.log)
