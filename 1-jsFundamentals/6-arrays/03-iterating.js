let food = ["Pecan pie","Shrimp","Quesadilla","Cheese Cake","hotdog"];

// for(let i = 0; i < food.length; i++){
//     console.log(food[i]);
// }

food.forEach(foodItem => console.log(foodItem));

let movies = ["UP","Bad cops","Horrible bosses1","The ring1","the ring 2"];
movies.forEach (moviesList => console.log(moviesList));
//adding new movie at the end of the array
movies.push("See no Evil");
//replacing new movie
movies.splice(2,1,"The lion king");
movies.forEach(names => console.log(names));






