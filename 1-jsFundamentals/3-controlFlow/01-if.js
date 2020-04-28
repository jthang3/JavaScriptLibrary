/*
falsy values: 
1. false
2. 0
3. "",'',``,
4. null
5. undefined
6. NaN
*/

let isOn = false;
if(isOn){
    console.log("THe light is on");
}

if(!isOn){
    console.log("The light is off");
}

weather = 60;
if(weather < 70){
    console.log("Wear a jacket");
}
var weather;