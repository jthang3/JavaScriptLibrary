let hi =() =>{
    //1
    return 'hi';
}

//    2         3
let greeting = hi();

/*
1. the keyword that brings our data out of our function.
2. a new variable to hold the value of the return.
3. when called, the function becomes a value of the return. 
*/

console.log(greeting);

let greetMe = name => {
    return `hello, ${name}`;
}

let greetedName = greetMe("John");
console.log(greetedName);

//Concise
let name = firstName => `Hello ${firstName}`;
let gre = name("John");
console.log(gre);

function capName(self){
    return self[0].toUpperCase()+self.slice(1).toLowerCase();
}

let correctName = capName("jOsePh");
console.log(correctName);

let areaOfRectangle = (length,width) => {
    let a = length * width;
    return a;
}

let rec = areaOfRectangle(4,5);
console.log(rec);

//challenge
let tip = price => {
    let tips = price * 0.20;
    let totalPrice = price + tips;
    return totalPrice;
}
let taco = tip(50);
console.log(taco);