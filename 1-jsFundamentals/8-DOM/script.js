// let listTitle = document.getElementById("listTitle");
// console.log(listTitle);

// let listItem = document.querySelector('ul li');
// console.log(listItem);
// listTitle.style.textAlign = "center";
// listItem.style.color = "red";


// //target more than one items
// let grocery = document.getElementsByClassName('groceryItem');
// console.log(grocery);
// console.log(grocery.item(2));

// let listItems = document.getElementsByTagName("li");
// console.log(listItems);

// let unorderListItems = document.querySelectorAll("ul li");
// console.log(unorderListItems);

// console.log(document.body.childNodes); <- include white space
// console.log(document.body.children); <- does not include white space.

//already produce javaScript html use childNodes since no white space.

let listDiv = document.getElementById("list");
console.log(listDiv);
let x = (listDiv.firstChild);
console.log(x.nextElementSibling);
console.log(listDiv.nextElementSibling.nextElementSibling);


//challenge: Select the input box and assign it to a variable called toDoTitle
let toDoTitle = document.getElementById("lastInput");

// let unorderListItems = document.querySelectorAll("ul li");
// for(let tag of unorderListItems){
//     tag.style.textDecoration = "underline";
//     tag.style.fontSize = "10px";
// }
let listItems = document.getElementsByClassName("listItem").item(4);
listItems.innerHTML = "Visit Grindelwald";

let grocery = document.getElementsByClassName('groceryItem')[0];
grocery.innerText = "MoonDew Drops";

//event listener

document.getElementById("clickMe").addEventListener("click",e=>{
    e.target.style.backgroundColor = "lightblue";
})

document.getElementById("lastInput").addEventListener("keyup",e =>{
    console.log(e.target.value);
})


let newGroceryItem = document.createElement("li");
console.log(newGroceryItem);
// let textNode = document.createTextNode = "Apples";
// newGroceryItem.appendChild(textNode);
newGroceryItem.innerHTML = "Ginger ray";
let groceryList = document.getElementById("groceryList");
groceryList.appendChild(newGroceryItem);

let unorderListItems = document.querySelectorAll("ul li");
for(let tag of unorderListItems){
    tag.style.textDecoration = "underline";
    tag.style.fontSize = "10px";
}