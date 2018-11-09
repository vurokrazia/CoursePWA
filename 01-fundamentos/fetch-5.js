fetch('https://reqres.in/api/users/1x')
.then( resp => {
    if(resp.ok){
        return resp.json();
    }
    else{
        throw new Error("Nope");
    }
})
.then( console.log ) 
.catch( error => {
    console.log(error);
})