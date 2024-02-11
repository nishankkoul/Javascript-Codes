// Siblings are the nodes that are children of the same parent. For eg - head and body are siblings and have the same parent, html.

// <body> is said to be the "next" or "right" sibling of <head> and <head> is said to be the "left" or "previous sibling of <body>"

// The next Sibling is in the nextSibling property and the previous sibling is in the previousSibling property

// The parent is available as parent node

let a = document.body.firstChild;
console.log(a.parentElement);
console.log(a.parentNode);

// In both the cases body will be printed

let b = document.documentElement; //here documentElement means html element/node
console.log(b.parentElement); //null
console.log(b.parentNode); //document

