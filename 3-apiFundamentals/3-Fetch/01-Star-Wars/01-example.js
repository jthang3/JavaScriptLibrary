fetch('http://example.com/movies.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
    })

    //need to run the command below on my window to access some APIs without deploying an application(HTTP Server)

const api = "https://swapi.dev/api/";
fetch(api)
    .then((value)=>{
        console.log(value);
    })
