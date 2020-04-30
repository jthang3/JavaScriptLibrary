let student = {
    name: "peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}
for (let item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby","british shorthair","burmese","maine coon", "rag doll"];

//this get the key of an index.

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}
let name = "Joseph"
let finalName;
for (let cap in name){
    (cap == 0)?finalName = name[cap].toUpperCase(): finalName += name[cap].toLowerCase();
}
console.log(finalName);

