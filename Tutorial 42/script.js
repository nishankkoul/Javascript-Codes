// elem.getAttrribute(name) - method used to get the value of an attribute

console.log(document.getElementById("first").getAttribute("class"));  // will display the value of the class attribute i.e. hey

// eleme.hasAttribute(name) - method to check for existence of an attribute

console.log(document.querySelector(".hey").hasAttribute("id"));  // true
console.log(document.querySelector(".hey").hasAttribute("style")); // false

// elem.setAttribute(name, value) - method used to to set the value of an attribute 

let set_attribute = document.getElementById("first");
set_attribute.setAttribute("style" , "color : red"); // will change the color of the text to red and also set a style attribute 

// elem.removeAttribute(name) - removes the attribute of an element

console.log(document.getElementById("first").removeAttribute("style")); // this will remove the red color that was added through setAttribute

// elem.attributes - method to get a collection of all the attributes of an element

let attributes_only = document.querySelector(".hey");
console.log(attributes_only.attributes);  // will display an instance of NamedNodeMap and display all the attributes

// data-(name):value => data- is used when we want to create our custom attribute. They're available in a property named dataset. If an element has an attribute named "data-one", then its value can be accessed using element.dataset.one

console.log(attributes_only.dataset); // will diplay all the data attributes inside attributes_only variable
console.log(attributes_only.dataset.game);  // will print mario
console.log(attributes_only.dataset.player);  // will print nishank



