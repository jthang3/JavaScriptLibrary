// variable fat arrow

let hi = () => {
    console.log("Hi");
}

//arrow function were introduce in ES6. They are basically a more concise way to write function expression NOT decalration This mean arrow functions do not get hoisted. 
//BLOCK BODY
let hi = () =>{
    console.log("hi");
    //lots of code goes here
}
//NOTE: block body arow functins should have a return (if you want to get back information) in the body of the function
//(return must be in between the curly braces)


//CONCISE BODY (don't need curly braces if we only do one thing.)
let hi = () => console.log.log("hi")
//NOTE: concise body arrow functions return by default; they automatically give back the information.

//example of block vs concise

//if we have multiple arguements then we need to have () for the argument.
let greetingOneArgument = name =>console.log("Hello "+name);
let greeting = (name,last) => {
    console.log("Greeting "+name+last);
}
greeting("John","Lyin");
greetingOneArgument("John");



