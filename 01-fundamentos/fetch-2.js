//https://reqres.in/api/user
fetch( "https://reqres.in/api/user " )
.then(resp => resp.json())
.then(respObj => {
    console.log(respObj);
    console.log(respObj.page);
    console.log(respObj.per_page);
});
//https://reqres.in/api/user
/*

fetch( "https://www.codigofacilito.com/articles.json" )
.then(resp => resp.text())
.then(respObj => {
    console.log(respObj);
    document.open();
    document.write(respObj);
    document.close();
});
 */