// We looked at some ways to insert elements in the DOM. 

let a = document.getElementsByTagName("div")[1];
a.innerHTML += "<h1>Hello World</h1>";

// Here are some other ways to insert elements

let div = document.createElement("div"); // first we create a div element through createElement function
div.innerHTML = "<h2>Hello World 2</h2>"; // then we add innerHTML to the created div
a.append(div); // then we append it to an already existing element (will append at the end of a)
// a.prepend(div); // then we append it to an already existing element (will append at the start of a)
// a.before(div); // will append before a 
// a.after(div);  // will append after a
// a.replaceWith(div); // will replace the entire div node by newly created div node at line 8