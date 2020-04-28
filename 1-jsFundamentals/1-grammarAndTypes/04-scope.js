let x = 12;

function scope(){
    let x = 33;
    console.log(x);
}

scope();
console.log(x);


var z = 33;
function scope3(){
    var z = 90;
    console.log(z);
}

scope3();
console.log(z);

let y = 12;

function scope2(){
    y = 33;
    console.log(y);
}
scope2();
console.log(y);



