var request = new XMLHttpRequest();
request.open('GET',"https://reqres.in/api/users", true);
request.send(null);
request.onreadystatechange = function( state ){
    console.log(state);
    if(request.readyState === 4){
        var resp = JSON.parse(request.response);
        console.log(resp);
    }
}  
