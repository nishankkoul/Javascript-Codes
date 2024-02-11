// Q2) Explore the includes, startsWith & endsWith functions of a string\

// includes

let sentence = "Welcome to JavaScript Course";
let word = "JavaScript";

if(sentence.includes(word))
{
    console.log("Yes");
}
else{
    console.log("No");
}

// startsWith

let str1 = "My name is Nishank";
console.log(str1.startsWith("My"));  // Output should return true
console.log(str1.startsWith("M"));  // This will also return true

// endsWith

let str2 = "She's a bad girl";
console.log(str2.endsWith("bad")); //should return false
console.log(str2.endsWith("rl")); //should return true


// Q3) Write a program to convert a given string to lowercase

const lowercase_function = (newString) => {
    console.log(newString.toLowerCase());
}

lowercase_function("INDIA");


// Q4) Extract the amount of the string -> "Please give Rs 1000"

let example = "Please give Rs 1000";
console.log(example.slice(15));