// If we assign something to elem.className, it removes the entire list of classes and creates a new set of classes

let first = document.getElementById("first");
// first.className = "yellow"  // this will change the class from "red text-dark" to "yellow"


// But often we want to just add/remove a single class

first.classList.remove("red"); // this will remove the red class
first.classList.add("yellow"); // this will add yellow class

first.classList.toggle("red"); //adds the class if its not there otherwise removes it

console.log(first.classList.contains("text-dark")); // checks if the class list contains text-dark class and returns true or false