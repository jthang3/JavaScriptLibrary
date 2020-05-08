var starWarsPeopleList = document.querySelector("ul");
console.log(starWarsPeopleList);

//in fetch get is defult
fetch("https://swapi.dev/api/people")
    .then((value)=>{
        return value.json();//this return another promise
    })
    .then((value)=>{
        let people = value.results;
        for(let p of people){
            let listItem = document.createElement("li");
            listItem.innerHTML = "<p>"+p.name+"</p>"
            starWarsPeopleList.appendChild(listItem);
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })

    const api = "https://swapi.dev/api/planets";
    let planets = document.getElementById("planet");
    //fetching using get
    fetch(api)
        .then((value)=>{
            return value.json();
        })
        .then((value)=>{
            let planet = value.results;
            for(let pla of planet){
                let listItem = document.createElement("li");
                listItem.innerText = pla.name;
                planets.appendChild(listItem);
            }
        })