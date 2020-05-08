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
let name = "joSeph"
for(let i in name){
    if(i== 0){
        name = name.replace(name[i],name[i].toUpperCase());
    }
    else{
        name = name.replace(name[i],name[i].toLowerCase());
    }
    
}
console.log(name);

