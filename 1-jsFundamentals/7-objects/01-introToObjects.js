let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "graphe",
    water: true,
    sun: true,
    size: 10
}

let keys = Object.keys(garden);
console.log(keys);
console.log(typeof keys[0]);

///dot notation
let zucchini = garden.vegetable;
console.log(zucchini);

//square 
let zucchini1 = garden["vegetable"];
console.log(zucchini);

let baking = {};
//bunch of code here

baking.zucchini = "Better make some bread!";
console.log(baking);

baking["flour"] = "Batter up!";
console.log(baking);


console.log(baking[garden["vegetable"]]);