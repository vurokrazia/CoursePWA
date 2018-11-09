 //https://reqres.in/api/user POST
let usuario = {
    nombre:"Jesus",
    edad:24
}
fetch( 'https://reqres.in/api/user',{
    method: 'POST',
    body: JSON.stringify( usuario ),
    headers: {
        'Content-Type': "application/json"
    }
} )
.then( resp => resp.json())
.then( console.log )
.catch( console.error );