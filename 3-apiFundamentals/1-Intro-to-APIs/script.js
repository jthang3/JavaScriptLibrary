//jason data where we will be getting our data from.
const baseURL= "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("table");

searchForm.addEventListener("submit",fetchSpace,false);
//when form submitted they automat refresh the page.
function fetchSpace(e){
    //stop from regular action
    e.preventDefault();
    

    //use fetch method//fetch return promises. 
    //promises are build in javaScript programming -> object representation of event completition or failure.
    //three option: pending, complete, failed
    fetch(baseURL) //return promise
        //place holder to jason -> return a promise which is raw data

        //since .then run only after the data are fetch we need call back function.
        .then(data => data.json())
        .then(jason => displayRockets(jason))

        //catch for if the data is not working. Any promises within fetch failed will also go to catch.
        .catch(err => console.log(err));
}

function displayRockets(rockets){
    console.log("result: ",rockets);
    let eachRocket = rockets.forEach(rock =>{
        console.log(rock);
        let rocket = document.createElement("tr");
        let rocketName = document.createElement("td");
        let rocketCost = document.createElement("td");
        rocketName.innerText = rock.name;
        rocketCost.innerText = rock.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    });
}