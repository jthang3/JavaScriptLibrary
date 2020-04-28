//boolean
let on = true;
console.log(on);

let off = false;


//Null - null is an empty value. THink of it as an empty container: Nothing is in there but it still a value.
//Basically a space to fill.

let empty = null;
console.log(empty);

//undefined - default value when a variable is not initialize

let undef = undefined;
let correct; //correct way to get undefined

console.log(undef, correct);

//Numbers
let degree = 90;
console.log(degree);

let precise = 999999999999999;
console.log(precise);

//at 16 character the number will start to round.
let rounded = 9999999999999999;
console.log(rounded);

//it round at a certain number. 
let notQuite = 0.2 + 0.1;
console.log(notQuite);

//Number class constructor..converting a string to number,
let aNumber = Number("123");
console.log(typeof(aNumber));

//strings - strings are dataypes used to represent text and are either wrapped in a single quotes(''), double quote(""), 
//or string interpalation(``);

let stringOne = 'single quotes';
let stringTwo = "Double quotes";
let stringThree = `backticks`;

console.log(stringOne,stringTwo,stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(typeof(first));
console.log(typeof(second));

let third = 1050 + "100";
console.log(third);
console.log(typeof(third));

//objects - objects are used to store many values instead of a singular value

let frodo = {
    race: "hobbit",
    rings: 1,
    cloack: true
}

console.log(frodo.race);

//different object
class frodo1{
    constructor(race,rings,cloack){
        this.race = race;
        this.rings = rings;
        this.cloack = cloack;
    }
}

var f = new frodo1("hobbit",1,true);
console.log(f.race);


//arrays - arrays are containers that hold lists of items
/*

            let list = ["item1","item2","item3"];

*/

let burritos = ["large",4,true];
console.log(burritos);
console.log(typeof(burritos));


let firstName = "John";
let lastName = "Lyin";
let houseNumber = 6951;
let aptNumber = null;
let street = "Arjay Dr";
let city = "Indianapolis";
let state = "Indiana";
let zipcode = "46217";

console.log(houseNumber+" "+street+" "+city+" "+state+" "+zipcode);
console.log(`${firstName} ${lastName}`);


//string property and method, square method need (), rectangle property. 
let myName = "John Lyin";
console.log(myName.length);

console.log(myName.toUpperCase());

let home = "My home is greenwood";
console.log(home.includes("greenwood"));

//challenge
//every index will be split by space.
let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));