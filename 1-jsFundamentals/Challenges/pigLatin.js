function consonant(word){
    const vowel = 'AEIOU';
    let correctWord = word.toUpperCase();
    let consoWord;
for(let words = 0; words < correctWord.length; words++){
    for(let check = 0; check < vowel.length; check++){
        if(correctWord[words] == vowel[check] && words == 0){
            word += "ay"
            check = vowel.length;
            words = correctWord.length;
        }
        else if(correctWord[words] == vowel[check] && words >= 1){
            consoWord = correctWord[words-1];
            word += consoWord;
            let len = word.length;
            let preWord = word.slice(0,words-1);
            correctWord = word.slice(words,len);
            word = preWord+correctWord+'ay';
            check = check = vowel.length;
            words = correctWord.length;
        }
    }
}
let returnValue = word;
return returnValue;
}
function moreWords (word){
let returnValue ="";
let emptyArray = new Array();
word = word.split(" ");
for(let i = 0; i < word.length; i++){
    returnValue += consonant(word[i])+" ";
}
return returnValue;
}
let x = moreWords("heelo your school");
console.log(x);



  ​
 

  ​

  ​

 




  ​


  // write a function adding to number, multiplaying it by 2
  function problem(a, b, c) {
    return (a + b) * c;
  }
  console.log(problem(2, 2, 2));
  ​
  // write a function multiplying two numbers, diving it by 2 and returning true if the remainder is 0, false if not
  function remainderProblem(a, b, c) {
    var returnProblem = (a * b) / c;
    if (returnProblem % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(remainderProblem(5, 1, 2));
  ​
  // write a function multiplying two numbers, dividing by 2 and returning if the answer is even or odd
  function isRemainderEvenOrOdd(a, b, c) {
    var returnRemainder = (a * b) / c;
    if (returnRemainder % 2 === 0) {
      return returnRemainder + " is even";
    } else {
      return returnRemainder + " is odd";
    }
  }
  // CONSOLE LOG ONE AT A TIME BELOW
  console.log(isRemainderEvenOrOdd(8, 2, 2)); //
  console.log(isRemainderEvenOrOdd(5, 1, 2)); //
  ​
  // once more without looking above
  function getAnswer(a, b, c) {
    let finalAnswer = (a * b) / 2;
    if (finalAnswer % 2 === 0) {
      return finalAnswer + " is even";
    } else {
      return finalAnswer + " is odd";
    }
  }
  console.log(getAnswer(3, 1, 2));
  ​
  // and one more time, don't look up.
  function answer(a, b, c) {
    let remainderAnswer = (a * b) / 2;
    if (remainderAnswer % 2 === 0) {
      return remainderAnswer + " is even";
    } else {
      return remainderAnswer + " is odd";
    }
  }
  console.log(answer(4, 2, 2));
  ​
  // write a function with the sum of "a + b", but include extra numbers in the console log function. what does it do?
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(3, 4, 5, 8));
  // what do you expect the outcome to be?
  // 7
  // why?
  // because the only parameters are a and b, so "5, 8" are ignored
  // console log it and check
  // answer is 7
  ​
  // write a for in loops that capitalizes first letter of a name, lowercaswe the rest
  ​
  let name = "hUSTIN";
  if (name[0].toLowerCase());
  console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
  ​
  // one more time, don't look above
  let name = "tHeReSA";
  if (name[0].toLowerCase());
  console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
  ​
  // last time
  let name = "EMMA";
  if (name[0].toLowerCase()) {
    console.log(name[0].toUpperCase());
  } else {
    console.log(name.toLowerCase());
  }
  ​
  // function area of a rectangle
  function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
  }
  let width = 25;
  let length = 25;
  ​
  let newArea = areaOfRectangle(length, width);
  console.log(newArea);
  ​
  // one more time, don't look above
  function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
  }
  let width = 10;
  let length = 10;
  ​
  let newArea = areaOfRectangle(length, width);
  console.log(newArea);
  ​
  // function - build a tip calculator
  function tipAmount(bill, twentyPercent) {
    let newTip = bill * twentyPercent;
    return newTip;
  }
  let bill = 100;
  let twentyPercent = 0.2;
  ​
  let totalTip = tipAmount(bill, twentyPercent);
  console.log("$" + totalTip);
  ​
  // one more time
  function salesTax(amount, tax) {
    let totalTax = amount * tax;
    return totalTax;
  }
  let amount = 100;
  let tax = 0.07;
  ​
  let newTax = salesTax(amount, tax);
  console.log("$" + newTax);
  ​
  // ternary practice
  let name = "hustin";
  name === name.toUpperCase()
    ? console.log("that's my name in lower case")
    : console.log("nope");
  ​
  // another practice
  let name = "hUsTiN";
  name === name[0].toUpperCase() ? console.log("right") : console.log("wrong");
  ​
  "Graphik", Helvetica, Arial, sans - serif;
  Collapse