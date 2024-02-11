// for loop - loops through a block a given no of times
// for in loop - loops through the keys of an object
// for of loop - loops through the values of an array or a string

// Using for loop, print nos from 1 to 10

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// Write a program to print the sum of first n natural nos 

let sum = 0;
let num = prompt("Enter the number till where you want the sum: ");

for(let i = 1; i <= num ; i++)
{
    sum += i;
}
alert(sum);

// For in loop

let obj = {
    "Nishank" : 23,
    "Urvashi" : 224,
    "Holla" : 90
}

for (let key in obj) {
    console.log(key);
}

// For of loop -> mostly works in case of arrays and string, i.e. whenever there are iterables. It won't print the values of an object. DO NOT CONFUSE WITH THAT

for (const iterator of "Nishank") {
    console.log(iterator);
}

