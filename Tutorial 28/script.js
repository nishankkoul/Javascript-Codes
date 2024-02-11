// Everything in JS falls under the window object including DOM, BOM and some core JS features

console.log(window);  // will print all the existing built in functions in js. Window object is a global object

// DOM - stands for Document Object Model. This is the HTML which is converted to js object and named as document

console.log(document);

console.log(document.body);

// We can also change style

document.body.style.color = "red";
document.body.style.backgroundColor = "yellow";

// BOM -stands for Browser Object Model. BOM represents additional objects provided by the browser (host environment) for working with anything except the document. The functions alert/confirm/prompt are also a part of BOM



