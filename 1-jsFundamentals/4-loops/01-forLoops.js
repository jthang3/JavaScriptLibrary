let i = 7;

/*
1) Initial expression - run once before the loop starts
2) Condition - loop runs until the condition evaluates to false
3) increment expression - run once after each iteration of the loop.

*/
//....1......2......3
for(i = 0; i < 10; i+=2){
    console.log(i);
}
console.log(i);


//default the keyword is var. don't need to use the keyword
for (i = 0; i <= 20; i+=2){
    console.log(i);
}

for (x = 10; x >=0; x--){
    console.log(x);
}

//another challenge
for(let i = 0; i >= -24; i-=2){
    console.log(i);
}

//spicy challenge
let name = "John";
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//another challenge
let total = 0;
for(let i = 0; i <=50; i++){
    total = total += i;
}
console.log(total);