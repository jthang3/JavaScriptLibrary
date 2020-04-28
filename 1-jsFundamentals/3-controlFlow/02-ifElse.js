let weather = 75;

if (weather < 70){
    console.log("Wear a jacket");
}else{
    console.log("No jacket necessary!")
}

let name = "John";
let myName = "John";
if(name === myName){
    console.log(myName);
}
else{
    console.log("Hello, what is your name?");
}
if(name === myName){
    console.log("Hi, my name is "+myName);
}
else{
    console.log("Hi, what is your name, "+name);
}

//another challenge
let name = "zAchARy";
if(name[0] == name.charAt(0).toUpperCase()){
    console.log(name);
}
else{
    console.log("Hey this is not written correctly");
}

if(name[0] == name[0].toUpperCase()){
    console.log(name[0]);
}
else{
    console.log(name.slice(1).toLowerCase());
}
if(name.charAt(0) == name.charAt(0).toUpperCase()){
    console.log(name+name.slice(1).toLowerCase());
}
else{
    let na = name.slice(1);
    console.log(name.charAt(0).toUpperCase()+na.toLowerCase());
}

//another challenge
let age = 22;
if(age >= 25){
    console.log("You can rent a car");
}
else if(age >= 21){
    console.log("You can drink!");
}

else if(age >= 18){
    console.log("You can vote");
}else
    {
        console.log("Sorry, you're too young to do anything");
    }



