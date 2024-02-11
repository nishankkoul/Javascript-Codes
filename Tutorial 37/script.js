// There are 3 important methods to search the DOM

// element.matches() - to check if the element matches the given css selector

let id1 = document.getElementById("id1");
console.log(id1);

console.log(id1.matches(".box")); // will return true coz id1 has also a box class
console.log(id1.matches(".class")); // will return false coz id1 has no such class named as class

// element.closest() - 