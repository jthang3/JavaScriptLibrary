// //introduced in ES8 writing promise based code. 

// //asyn function
// //async unlocked another keyword which is await. async return promise
async function myFn(){
    const response = await fetch("https://random.dog/woof.json");
    const jason = await response.json();
    return jason ;
}
myFn()
//     // .then((value)=>{
//     //     console.log(value);
//     // })

//     //or
//     .then(console.log)
//     .catch(console.log)
// // const myFn = async ()=>{

// // }



// //fetch is browser funciton. only exit in browser.

fetch('https://random.dog/woof.json')
    .then((value)=>{
        console.log(value);
        return value.json();
    })
    .then((value)=>{
        console.log(value);
    })
    .catch(console.log)


