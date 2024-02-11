// Sometimes, we don't want text or comment nodes. Some links only take element nodes into account

let b = document.body;

console.log("First child of b is " , b.firstChild);  // this wil return text node
console.log("First element child of b is " , b.firstElementChild); // this will return nav node/element

// More element related navigation

// a) document.previousElementSibling - returns previous sibling which is an element
// b) document.nextElementSibling - returns next sibling which is an element
// c) document.firstElementChild - returns first child which is an element

const changeBgColor = () =>{
    document.body.firstElementChild.style.background = "red";  //will change the background color of nav to red
}

changeBgColor();