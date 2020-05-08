function callbackFunction(){
    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'Kickboxing'
    }
    return data;
}

function showGreeting(dataFromFunction){
    dataFromFunction = dataFromFunction();
    return `Hello ${dataFromFunction.name} I hear you're greatest?`;
}

let meetMe = showGreeting(callbackFunction);
console.log(meetMe);





//call back practice
let person = ()=>{
   const myInfo = {
    name: "John",
    age: 22,
    occupation: "student"
   } 
   return myInfo;
}
//one way
function introduction(callback){
    let person = callback();
    console.log(`Hi, ${person.name}`);
}

introduction(person);

function introduction2(callback){
    console.log(`Hi,${callback.name}`);
}
introduction2(person());