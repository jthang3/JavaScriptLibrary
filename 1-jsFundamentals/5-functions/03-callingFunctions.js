//keyword    name   parameters
function hi(){
    //code goes here
    console.log('Hi');
}
hi();

//telling it is function
console.log(hi);

//need return value.
console.log(hi());

//first challenge

function num(){
    for(i = 0; i <=10; i++){
        console.log(i);
    }
}
num();

//one more challenge
 let arr = ['this','is','relly','cool'];
 function find(){
     for (i = 0; i < arr.length; i ++){
         console.log(arr[i])
     }
 }

 find();


 let arr1 = ['this','is','relly','cool'];
 function call(){
     for (let item of arr1){
        console.log(item);
     }
 }
 call();