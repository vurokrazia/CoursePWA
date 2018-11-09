function sumarUno( numero) {
    var prom = new Promise( function (resolve, reject) {  
        if (numero >= 7){
            reject("El numero es alto");
        }
        setTimeout(function() {
            resolve(numero + 1 );
        }, 800);
    });
    return prom;
}

sumarUno(5)
.then( sumarUno )
.then( sumarUno )
.then(nuevoNumero => {
    console.log(nuevoNumero);
}).catch (e => {
    console.log(e);
});