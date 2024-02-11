// console.dir() - It shows an element as an object with its properties

console.log(document.getElementsByTagName("span")[0]); // span tag and its content will be displayed
console.dir(document.getElementsByTagName("span")[0]); // span as an object along with its properties will be displayed

// tagName/nodeName - used to read tagName of an element
// tagName - only exists for element nodes
// nodeName - defined for any node (text, comment, element)

console.log(document.body.firstChild.nodeName);  // text node
console.log(document.body.firstElementChild.tagName); // span

// innerHTML - allows to get the HTML inside an element as a string, valid only for element nodes, for other nodes we can use nodeValue or data
// innerText - this only returns the textual content inside an element

console.log(document.getElementById("first").innerText);  // will print I am Nishank    
console.log(document.getElementById("first").innerHTML);  // will print <b>I am Nishank</b>

// We can also set the innerHTML

document.getElementById("first").innerHTML = "I am Nishank KOUL";

// outerHTML - contains the fullHTML, innerHTML + the content itself

console.log(document.getElementById("first").outerHTML); // will print <span id="first"><b>I am Nishank</b></span>

// textContent - provides access to the text content only similar to innerText but if some property's style is set to hidden, it will also return the text value inside that element

console.log(document.body.textContent);  // will return all the text content inside the body