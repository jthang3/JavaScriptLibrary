let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);
//conerting to string
console.log(long.toString())

let colors = ["blue","green","yellow","red","orange","purple"];
console.log(colors.length);

//console.log(long.toString());

(colors instanceof Array) ? console.log(colors.reverse()):console.log("Not an array");

if (colors instanceof Array){
    colors = colors.reverse();
}
colors.forEach((name) => console.log(name));


//using a forEach method, capitalize the first letter of each color and lowercase the rest.


let colors = ["blue","green","yellow","red","orange","purple"];

//concise body
colors.forEach(color => console.log(color[0].toUpperCase()+color.slice(1).toLowerCase()));

//block body
colors.forEach(color => {
    let finalColor = color[0].toUpperCase() + color.slice(1).toLowerCase();
    console.log(finalColor);
})

let colors = ["blue","green","yellow","red","orange","purple"];

colors.forEach(fullName);

function fullName (name){
    let finalName = "";
    for (let i in name){
        (i == 0) ? finalName += name[i].toUpperCase(): finalName += name[i].toLowerCase();
        }
    console.log(finalName);
}

