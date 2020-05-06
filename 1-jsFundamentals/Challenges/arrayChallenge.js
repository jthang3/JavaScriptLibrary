let arrayFunction = (colors,sufixes) =>{
    let newColors = new Array();
    //  for (let col in colors){
    //      newColors[col] = `${sufixes[col]} is ${colors[col]}`;
    //  }
    colors.forEach((element,i) =>{
        newColors[i] = `${sufixes[i]} is ${element}`;
    });
     return newColors;
}

let colors = ["red","orange","coral","yellow","green","teal","blue","indigo","violet","black"];
let suffixes = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"];

let result = arrayFunction(colors,suffixes);
console.log(result);


//teacher solution

let color = ["red","orange","coral","yellow","green","teal","blue","indigo","violet","black"];
let suffixe = ["st","nd","rd","th","th","th"];

function printOrder(colors,suffixes){
    for(let i = 0; i < colors.length; i++){
        console.log(`${color[i]} is ${i+1}${(i >= 3)? suffixes[3]: suffixes[i]}`);
    }
}
printOrder(color,suffixe);