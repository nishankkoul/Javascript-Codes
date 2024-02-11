// Syntax of a function

// function functionName(parameters)
// {
//     //block of code
// }

// Write a function to print the sum of 2 nos

let a = prompt("Enter the first no");
a = Number.parseInt(a);

let b = prompt("Enter the second no");
b = Number.parseInt(b);

function sum(a , b)
{
    return a+b;
}

console.log(sum(a,b));

// Arrow Function - Syntax

// var_type function_name = (parameters) => {
//     // code
// }

// Write an arrow function to multiply two nos

let num1;
let num2;

const prod = (num1, num2) => {
    return num1 * num2;
}

console.log(prod(4,5));

// Write an arrow function to print hello world

const hello = () => {
    console.log("Hello World");
}

hello();