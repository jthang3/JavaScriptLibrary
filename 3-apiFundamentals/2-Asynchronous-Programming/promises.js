//promise object represents the eventual completion or failure of 
//an asynchronous operation.

//promise
// Boolean declaration 
let amIgood = true;
let myPromise = new Promise((resolve,reject)=>{
    if(amIgood){
        let gift = {
            name: "car",
            type: "Toyata",
            year: 2018
        }
        return resolve(gift);
    }
    else{
        let message = "You're not getting a gift this Christmas :(";
        return reject(message);
    }
});

//secondPromise

function secondPromise(gift){
    return new Promise((resolve,reject)=>{
        let message = `Hey in this Christmas I got a ${gift.name} and I'm very happy!`;
        return resolve(message);
    });
}

//calling promise
let callMe = ()=>{
    myPromise
        .then((value)=>{
            return secondPromise(value);
        })
        .then((value)=>{
            console.log(value);
        })
        .catch((value)=>{
            console.log(value);
        })
}

callMe();