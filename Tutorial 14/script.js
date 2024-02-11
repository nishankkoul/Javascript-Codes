let Name = "Nishank Koul";

console.log(Name.length); // This will print the length of the Name string - 12

console.log(Name.toUpperCase());  // This will print NISHANK KOUL

console.log(Name.toLowerCase());  // This will print nishank koul

console.log(Name.slice(2,7));  // This will print the characters of the string starting from index 2 to index 6

console.log(Name.slice(4));  // This will print the character from 4 till end

// console.log(Name.replace("Koul" , "Bhai"));  // This will replace Koul with Bhai

let newName = "Bob";

console.log(Name.concat(" is a friend of " , newName)); // We can also use + operator to concat

let newString = "   iunsin    idnnn   vvvv    ";
console.log(newString.trim()); // This will remove the left and right whitespaces from the string

// Strings are immutable, original string never changes

// Use a for loop to print a string

for(let i = 0; i < Name.length; i++)
{
    console.log(Name[i]);
}