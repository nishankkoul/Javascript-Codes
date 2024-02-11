// Direct as well as deeply nested elements of an element are called its children.

// Child nodes - Elements that are direct children. For eg - head and body are direct children oh hmtl
// Descendant nodes - All nested elements, children, their children and so on

// element.firstChild - returns first child node

console.log(document.body.firstChild); // make note that it will output a text node instead of div node. This is beacause space and new line is also considered as a text node

// element.lastChild - returns the last child

console.log(document.body.lastChild);  // will return script src element

// element.childNodes - returns all the child nodes

console.log(document.body.childNodes);  // returns text, div, text, script, text

// Following is always true

// a) element.childNodes[0] === element.firstChild
// b) element.childNodes[element.childNodes.length - 1] = element.lastChild

// There is another method element.hasChildNodes to check whether an element has child nodes or not

// Note - NodesList from childNodes might actually look like an array but its a collection. We can use Array.from(collection) to convert it into an array

let arr = Array.from(document.body.childNodes);
console.log(arr);