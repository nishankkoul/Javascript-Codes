// Syntax to create strings:-

let Name = "Nishank";
console.log(Name.length); // This will return the length of the string

// Strings can also be executed using single quotes

// We can also access the characters of the string 

console.log(Name[0]); //This should print N
console.log(Name[1]); //This should print i

// Template Literals - Template Literals use backticks instead of quotes to define a string

let boy1 = "Koul";
let boy2 = "Holla";

// We want to print using template literals -> Holla is a friend of Koul

console.log(`boy2 is a friend of boy1`); //This will not give the desired output and will print the string as it is.

let sentence = `${boy2} is a friend of ${boy1}`; // If we want to print variables inside backtics we enclose them within curly brackets along with a dollar sign

console.log(sentence);

// This means we can insert variables directly in template literals. This is called string interpretation

// Escape Sequences - these are used when we want to print some special characters and javascript might misinterpret it

// Suppose if we want to prin the name as it is -> Angela D` Mathews

// let example = `My name is Angela D` Mathews`; //This will throw error
// console.log(example);

let example = `My name is Angela D\` Mathews`; //This will print the example string exactly
console.log(example);



