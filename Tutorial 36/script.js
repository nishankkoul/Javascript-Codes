// DOM Navigation properties are helpful when they're close to each other. If they're not close, we have some more methods to search the DOM

// Change the first card title to red

let card_title = document.getElementsByClassName("card-title")[0]; // this will select the first element with the class "card-title"
card_title.style.color = "red"; // this will change its color to red

// Change the background color of navbar to yellow 

let nav_bg = document.getElementById("navbar-only");
nav_bg.style.backgroundColor = "yellow";

// Print all the card titles on the console

let ctitles = document.querySelectorAll(".card-title");
console.log(ctitles);
ctitles[1].style.fontSize = "1.9rem";

// Print all the anchor tags in the console

console.log(document.getElementsByTagName("a"));

// Print all the anchor tags in the console only in the card class

console.log(document.querySelector(".card").getElementsByTagName("a"));