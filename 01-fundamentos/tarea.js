// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.co/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1
fetch("https://swapi.co/api/people/1/")
.then( resp => resp.json())
.then( resp => {
    console.log(resp.name);
    console.log(resp.gender);
    user = resp
})
.catch(error => {
    console.log(error);
})



// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.co/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/
function postData(user) {
    return fetch("https://reqres.in/api/users",{
        method: 'POST',
        body: JSON.stringify( {name:user.name,gender:user.gender} ),
        headers: {
            'Content-Type': "application/json"
        }
    })
}
fetch("https://swapi.co/api/people/1/")
.then( resp => resp.json())
.then( postData)
.then( resol => resol.json())
.then( console.log )
.catch( console.error )
.catch(error => {
    console.log(error);
})




// Resolución de la tarea #2





