// Arrays are used to store different items

let a = [1,2,3,5]; // this is an array of numbers

// We can also create an array of different data types

let b = [false, null, "Nishank" , 34];
console.log(b);

// Accessing Array Values

let marks = [23,55,89,12,44];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

// Finding the length

console.log(marks.length);

// Changing the values;

marks[2] = 100;
console.log(marks[2]);
console.log(marks);

// Arrays are mutable and can be changed

// The typeof returns the type of an array as object

console.log(typeof marks);

// Print the values of an array using for loop

for(let i = 0; i < marks.length; i++)
{
    console.log(marks[i]);
}