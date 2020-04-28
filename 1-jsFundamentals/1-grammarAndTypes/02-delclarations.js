let a = 2;

let     b            = 1;
/*1      2           3  4
1-keyword
2- the name of the variable
3- assignment operator
4- value for the variable
*/
console.log(a + b);

/*
......notes on variables:
        - a variable must begin with a letter, underscore, or dollar sign. 
        - numbers may follow the above characters, but can not come first.
        -   javaScript is case sensitive - 'hello' and 'Hello' are different variable.
        -   no spaces are allowed in variable names. 
        -   camelCase is the best practie for naming variables
            camelCase, snake_case, PascalCase
*/

var c = 1;
let d = 2;
const e = 3; //value must remain constant

/*Declaration are the LEFT side of a variable
    it is simply: let x
    initializations are on the RIght side of a variable.
                    it sets the value of the variable
                    it incorporates the variable name, the assignment operator, and the value
*/

const x = 10;
console.log(x);

x = 10;
console.log(x);

x = 33;
console.log(x);

let today = "First day";
let mood = "Happy";
console.log(today, mood);
