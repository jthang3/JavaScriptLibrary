let food = ["Pecan pie","Shrimp","Quesadilla","Cheese Cake","hotdog"];
for (let foodItem of food){
    console.log(foodItem);
}

food.push("Pizza");

//delete 3 items start from 1 and put orange.
food.splice(1,3,"Orange");
console.log(food);
let removeFood = food.pop();
console.log(removeFood);
console.log(food.reverse());

(food.unshift("Burrito"));
console.log(food);